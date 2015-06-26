if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require("angular2/angular2");
var di_1 = require("angular2/di");
var IGStream = (function () {
    function IGStream(elementRef) {
        var _this = this;
        this.videoIndex = 0;
        this.videos = [];
        this.onplay = new angular2_1.EventEmitter();
        var el = elementRef.nativeElement;
        this.videoEl = $(el).children('video')[0];
        this.videoEl.addEventListener("ended", function () {
            console.log("Video ended");
            _this.playNextVideo();
        });
        this.fetchVideos();
    }
    IGStream.prototype.fetchVideos = function () {
        var _this = this;
        var url = this.nextUrl || "https://api.instagram.com/v1/tags/hyperlapse/media/recent?client_id=425a6039c8274956bc10387bba3597e8";
        $.ajax({
            url: url,
            dataType: "jsonp",
            type: "GET",
            data: {
                count: 20
            }
        })
            .done(function (result) {
            var returnedObjects = result.data;
            for (var i = 0; i < returnedObjects.length; i++) {
                if (returnedObjects[i].type == "video") {
                    _this.videos.push(returnedObjects[i]);
                }
            }
            if (_this.videoIndex == 0) {
                _this.initializeContent();
            }
            _this.nextUrl = result.pagination.next_url;
        })
            .fail(function (error) {
            console.log("failure!");
            console.log(error);
        });
    };
    IGStream.prototype.initializeContent = function () {
        this.playVideo(0);
    };
    IGStream.prototype.playVideo = function (index) {
        var videoObj = this.videos[index];
        this.videoEl.src = videoObj.videos.standard_resolution.url;
        this.videoEl.load();
        // send play event
        this.onplay.next(videoObj);
    };
    IGStream.prototype.playNextVideo = function () {
        if (this.videoIndex == this.videos.length - 1)
            return;
        this.videoIndex++;
        this.playVideo(this.videoIndex);
        // fetch more videos if we are near the end
        if (this.videoIndex == this.videos.length - 2) {
            this.fetchVideos();
        }
    };
    IGStream.prototype.onAllChangesDone = function () {
    };
    IGStream = __decorate([
        angular2_1.Component({
            selector: "ig-hyperlapse-stream",
            events: ["onplay"],
            lifecycle: [angular2_1.onAllChangesDone]
        }),
        angular2_1.View({
            template: "\n<video height=\"100%\" width=\"100%\" autoplay muted>\n\t<source src=\"\" type=\"video/mp4\">\n\t<p>Not supported video tag</p>\n</video>\n"
        }),
        __param(0, di_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [(typeof ElementRef !== 'undefined' && ElementRef) || Object])
    ], IGStream);
    return IGStream;
})();
exports.IGStream = IGStream;
//# sourceMappingURL=ig-stream.js.map