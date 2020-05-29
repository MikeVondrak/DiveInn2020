import { Component, OnInit, Renderer2, ElementRef, forwardRef, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { GoogleFont } from '../../../models/googleFonts.model';

// import { CheckboxItem } from '../../../models/checkboxItem.model';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit { //ControlValueAccessor {

  @Output() checkedValueChanged = new EventEmitter<boolean>();

  @Input() get checkedValue() {
    console.log('checkbox getter: ' + this._checkedValue);
    return this._checkedValue;
  }
  set checkedValue(newVal) {
    console.log('checkbox setter: ' + this._checkedValue + ' -> ' + newVal);
    this._checkedValue = newVal;

    // emit our checkValueChanged event to outside listeners
    this.checkedValueChanged.emit(this._checkedValue);
    this.cdr.detectChanges();
  }

  private _checkedValue: boolean = false;

  // checkBox: CheckboxItem;
  //  = {
  //   label = 'label',
  //   value = 'off',
  //   checked = false,
  // };
  // isChecked: boolean = true;

  // this.checkBox.value = ''
  // setValue() {
  //   this.checkBox.value = 'on';
  // }

  static idCounter: number = 0;
  controlID: string;
  checked: boolean;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cdr: ChangeDetectorRef) {

    this.controlID = "myCheckbox" + CheckboxComponent.idCounter++;
    console.log('constructor: ' + this._checkedValue);
  }

  // Inputs are available now
  ngOnInit(): void {
    console.log('onInit: ' + this._checkedValue);
  }

  // propagateChange = (_: any) => { };
  // onTouchedCallback: () => {};

  // writeValue(value: any) {
  //   if ((value !== undefined) && (value !== null)) {
  //     this.checked = value;
  //   }
  // }

  // registerOnChange(fn: any) {
  //   this.propagateChange = fn;
  // }

  // registerOnTouched(fn: any) {
  //   this.onTouchedCallback = fn;
  // };

  onChange($event: Event) {
    console.log('checkbox change event: ' + $event);
    //this.checked = event.target.checked;
  }
  onNgModelChange($newValue) {
    console.log('checkbox model changed to new value: ' + $newValue);
  }

}
