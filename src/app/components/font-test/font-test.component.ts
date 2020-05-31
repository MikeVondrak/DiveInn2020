import { Component, OnInit } from '@angular/core';
import { GoogleFont, fonts, headerFonts, textFonts } from '../../models/googleFonts.model';
import { FormsModule } from '@angular/forms'
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';

enum ControlsEnum {
  'header',
  'text'
}

@Component({
  selector: 'app-font-test',
  templateUrl: './font-test.component.html',
  styleUrls: ['./font-test.component.scss']
})
export class FontTestComponent implements OnInit {
  // fonts available in dropdowns
  public readonly fontOptions: GoogleFont[] = Object.assign([], fonts);
  // make enum values available in template
  public readonly controlsEnum = ControlsEnum;
  // ngStyles
  public headerStyle: object = {};
  public textStyle: object = {}; // { 'font-family': 'PT Sans' };
  // ngModels
  public headerFont: GoogleFont = headerFonts[0];//this.fontOptions[0];
  public textFont: GoogleFont = this.fontOptions.find(font => font.uiText === 'PT Sans Bold');
  // controls for adding new fonts
  public fontNameToAdd: string;
  public fontHrefToAdd: string;

  public hFonts = headerFonts;
  public tFonts = textFonts;

  // public boldCheckbox : boolean;

  constructor() { }

  ngOnInit(): void {
    this.onModelChange(ControlsEnum.header);
    this.onModelChange(ControlsEnum.text);
  }

  /**
   * Callback for Angular event when dropdown selection is changed and model has updated
   * Set the associated ngStyle object when dropdown changes
   * @param controlId Enum value to distinguish initiating control
   * @param $newVal New font selected
   */
  public onModelChange(controlId: ControlsEnum, $newVal?: GoogleFont) {
    switch (controlId) {
      case ControlsEnum.header:
        this.headerStyle = { 'font-family': this.headerFont.family };
        break;
      case ControlsEnum.text:
        this.textStyle = { 'font-family': this.textFont.family };
        break;
    }
  }

  /**
   * Standard dropdown change event, fires after ngModelChange
   * @param $event DOM event
   */
  public onChange($event: Event) {
    console.log('font-test - customCheckboxChanged DOM event: ' + $event);
  }

  public customCheckboxChanged(newVal: boolean) {
    console.log('customCheckboxChanged: ' + newVal);
    this.textFont.properties.bold = newVal;

    // [(ngModel)]="textFont.properties.bold"
    // (ngModelChange)="$event ? textFont.properties.weight = 700 : textFont.properties.weight = 400"
    // [checked]="textFont.properties.weight === 700"

  }
}
