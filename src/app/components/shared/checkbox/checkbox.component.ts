import { Component, OnInit, Renderer2, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

// import { CheckboxItem } from '../../../models/checkboxItem.model';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ControlValueAccessor {

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
static idCounter: Number = 0;
controlID: String;
checked: Boolean;

constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  // this.controlID = "myCheckbox" + CheckboxComponent.idCounter++;

  this.controlID = "myCheckbox1";
}

propagateChange = (_: any) => { };
onTouchedCallback: () => {};

writeValue(value: any) {
  if ((value !== undefined) && (value !== null)) {
    this.checked = value;
  }
}

registerOnChange(fn: any) {
  this.propagateChange = fn;
}

registerOnTouched(fn: any) {
  this.onTouchedCallback = fn;
};

onChange(event) {
  this.checked = event.target.checked;

}

}
