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
var IGCaption = (function () {
    function IGCaption() {
    }
    IGCaption = __decorate([
        angular2_1.Component({
            selector: "ig-caption",
            properties: ["avatar", "caption"]
        }),
        angular2_1.View({
            template: "\n<div class=\"card-panel grey lighten-5 z-depth-1\">\n  <div class=\"row valign-wrapper\">\n    <div class=\"col s2\">\n      <img [src]=\"avatar\" alt=\"\" class=\"circle responsive-img\">\n    </div>\n    <div class=\"col s10\">\n      <span class=\"black-text\">\n        {{ caption }}\n      </span>\n    </div>\n  </div>\n</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], IGCaption);
    return IGCaption;
})();
exports.IGCaption = IGCaption;
//# sourceMappingURL=ig-caption.js.map