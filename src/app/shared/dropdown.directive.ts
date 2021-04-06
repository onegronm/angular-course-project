import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // add a css class (open) once the element is clicked
    // remove the class when it's clicked again

    // Use HostBinding to bind to a property on the element the directive sits on    
    @HostBinding('class.open') isOpen = false;

    // use HostListener to listen to an event in the element the directive sits on
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        // dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.)
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}