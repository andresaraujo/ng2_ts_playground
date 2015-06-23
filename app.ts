import {Component, View, bootstrap} from "angular2/angular2";
import {MyComponent} from "my-component";

@Component({
	selector: "app"
})
@View({
	templateUrl: 'app.html',
	directives: [MyComponent]
})
class App {
	constructor() {
	}
}

bootstrap(App);