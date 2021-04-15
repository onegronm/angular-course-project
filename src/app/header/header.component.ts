import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header', // prefix components with the 'app' key so we don't conflict with HTML elements
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    onNavigated(feature){
        
    }

}