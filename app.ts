import {Component, View, NgFor, bootstrap} from "angular2/angular2";
import {MyComponent} from "my-component";
import {IGStream} from "ig-stream";
import {IGCaption} from "ig-caption";

@Component({
	selector: "app"
})
@View({
	templateUrl: 'app.html',
	directives: [MyComponent, IGStream, IGCaption, NgFor]
})
class App {
	playlist: Array<any>;
	constructor() {
		this.playlist = [];
	}
	
	update(videoObj) {
		console.log(videoObj);
		this.playlist.unshift(videoObj);
	}
}

bootstrap(App);