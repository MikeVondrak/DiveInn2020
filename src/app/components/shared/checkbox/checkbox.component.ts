import { Component, OnInit, Renderer2, ElementRef, forwardRef, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { UiFont } from '../../../models/ui-fonts.model';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {

  @Input() uiLabel: string = '';

  @Output() checkedValueChange = new EventEmitter<boolean>();
  @Input() get checkedValue() {
    console.log('checkbox getter: ' + this._checkedValue);
    return this._checkedValue;
  }
  set checkedValue(newVal) {
    console.log('checkbox setter: ' + this._checkedValue + ' -> ' + newVal);
    this._checkedValue = newVal;

    // emit our checkValueChanged event to outside listeners
    this.checkedValueChange.emit(this._checkedValue);
    this.cdr.detectChanges();
  }

  static idCounter: number = 0;
  controlID: string;
  checked: boolean;
  private _checkedValue: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {

    this.controlID = "myCheckbox" + CheckboxComponent.idCounter++;
    console.log('constructor: ' + this._checkedValue);
  }

  // Inputs are available now
  ngOnInit(): void {
    console.log('onInit: ' + this._checkedValue);
  }

  onChange($event: Event) {
    console.log('checkbox change event: ' + $event);
    //this.checked = event.target.checked;
  }
  onNgModelChange($newValue) {
    console.log('checkbox model changed to new value: ' + $newValue);
  }

}
