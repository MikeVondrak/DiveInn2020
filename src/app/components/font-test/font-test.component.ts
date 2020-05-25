import { Component, OnInit } from '@angular/core';
import { GoogleFont, fonts } from '../../models/googleFonts.model';

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

  public controlsEnum = ControlsEnum; // make enum values available in template

  public headerStyle: object = {};
  public textStyle: object = { 'font-family': 'Anton' };
  public readonly fontOptions: GoogleFont[] = Object.assign([], fonts);
  public headerFont: GoogleFont = this.fontOptions[0];
  public textFont: GoogleFont = this.fontOptions[0];

  public fontNameToAdd: string;

  constructor() { }

  ngOnInit(): void {
    this.onModelChange(ControlsEnum.header);
    this.onModelChange(ControlsEnum.text);
  }

  /**
   * Standard dropdown change event, fires after ngModelChange
   * @param $event DOM event
   */
  public onChange($event: Event) {
    //debugger;
  }

  /**
   * Callback for Angular event when dropdown selection is changed and model has updated
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
}
