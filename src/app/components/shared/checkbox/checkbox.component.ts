import { Component, OnInit, Renderer2, ElementRef, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { GoogleFont } from '../../../models/googleFonts.model';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Output() checkedValueChanged = new EventEmitter<boolean>();

  private _checkedValue: boolean = false;
  @Input() get checkedValue() {
    console.log('checkbox getter: ' + this._checkedValue);
    return this._checkedValue;
  }
  set checkedValue(newVal) {
    console.log('checkbox setter: ' + this._checkedValue);
    this._checkedValue = newVal;

    // emit our checkValueChanged event to outside listeners
    this.checkedValueChanged.emit(this._checkedValue);
  }

  static idCounter: number = 0;
  controlID: string;
  checked: boolean;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

    this.controlID = "myCheckbox" + CheckboxComponent.idCounter++;
  }

  // Inputs are available now
  ngOnInit(): void {
  }

  onChange($event: Event) {
    console.log('checkbox change event: ' + $event);
    //this.checked = event.target.checked;
  }
  onNgModelChange($newValue) {
    console.log('checkbox model changed to new value: ' + $newValue);
  }

}
