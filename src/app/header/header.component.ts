import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent{
    @Output() featureSelection: EventEmitter<string> = new EventEmitter();

    onSelect(selected: string){
        this.featureSelection.emit(selected);
    }

}