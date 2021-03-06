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
var angular2_1 = require("angular2/angular2");
var my_component_1 = require("my-component");
var ig_stream_1 = require("ig-stream");
var ig_caption_1 = require("ig-caption");
var App = (function () {
    function App() {
        this.playlist = [];
    }
    App.prototype.update = function (videoObj) {
        console.log(videoObj);
        this.playlist.unshift(videoObj);
    };
    App = __decorate([
        angular2_1.Component({
            selector: "app"
        }),
        angular2_1.View({
            templateUrl: 'app.html',
            directives: [my_component_1.MyComponent, ig_stream_1.IGStream, ig_caption_1.IGCaption, angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
//# sourceMappingURL=app.js.map