import {Component, View, ElementRef, EventEmitter, onAllChangesDone} from "angular2/angular2";
import {Inject} from "angular2/di";

@Component({
	selector: "ig-hyperlapse-stream",
	events: ["onplay"],
	lifecycle: [onAllChangesDone]
})
@View({
	template:	
`
<video height="100%" width="100%" autoplay muted>
	<source src="" type="video/mp4">
	<p>Not supported video tag</p>
</video>
`
})
class IGStream {
	videos: Array<any>;
	videoEl: HTMLVideoElement;
	videoIndex: number = 0;
	nextUrl: string;
	
	onplay: EventEmitter; 
	
	constructor(@Inject(ElementRef) elementRef: ElementRef) {
		this.videos = [];
		this.onplay = new EventEmitter();
		
		var el = elementRef.nativeElement;
		this.videoEl = <HTMLVideoElement>$(el).children('video')[0];
		this.videoEl.addEventListener("ended", () => {
			console.log("Video ended")
			this.playNextVideo();
		});
		
		this.fetchVideos();
	}
	fetchVideos () {
		let url = this.nextUrl || "https://api.instagram.com/v1/tags/hyperlapse/media/recent?client_id=425a6039c8274956bc10387bba3597e8";
		$.ajax({
			url: url,
			dataType: "jsonp",
			type: "GET",
			data: {
				count: 20
			}
		})
		.done((result) => {
			let returnedObjects = result.data;
			for (let i: number = 0; i < returnedObjects.length; i++) {
				if (returnedObjects[i].type == "video") {
					this.videos.push(returnedObjects[i]);
				}
			}
			if(this.videoIndex == 0) {
				this.initializeContent();	
			}
			this.nextUrl = result.pagination.next_url;
		})
		.fail((error) => {
			console.log("failure!");
			console.log(error);
		});
	}
	
	initializeContent() {
		this.playVideo(0);
	}
	
	playVideo(index: number) {
		let videoObj =  this.videos[index];
		this.videoEl.src = videoObj.videos.standard_resolution.url;
		this.videoEl.load();
		
		// send play event
		this.onplay.next(videoObj);
	}
	
	playNextVideo() {
		if(this.videoIndex == this.videos.length - 1) return;
		this.videoIndex++;
		this.playVideo(this.videoIndex);
		
		// fetch more videos if we are near the end
		if(this.videoIndex == this.videos.length - 2) {
			this.fetchVideos();
		}
	}
	
	onAllChangesDone() {
  	}
}

export {IGStream}