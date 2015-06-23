import {Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector: 'my-component'
})
@View({
	template: '<h3>{{message}}<h3>'
})
class MyComponent{
	message: string;
	constructor(){
		this.message = "Welcome!" 
	}
}

export {MyComponent}