import {Component, View, ElementRef, EventEmitter, onAllChangesDone} from "angular2/angular2";
import {Inject} from "angular2/di";

@Component({
	selector: "ig-caption",
	properties: ["avatar", "caption"]
})
@View({
	template:
	`
<div class="card-panel grey lighten-5 z-depth-1">
  <div class="row valign-wrapper">
    <div class="col s2">
      <img [src]="avatar" alt="" class="circle responsive-img">
    </div>
    <div class="col s10">
      <span class="black-text">
        {{ caption }}
      </span>
    </div>
  </div>
</div>
	` 
})
class IGCaption {
	avatar: string;
	caption: string;
}

export{IGCaption}