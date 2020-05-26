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
  // fonts available in dropdowns
  public readonly fontOptions: GoogleFont[] = Object.assign([], fonts); 
  // make enum values available in template
  public readonly controlsEnum = ControlsEnum;  
  // ngStyles
  public headerStyle: object = {};
  public textStyle: object = {}; // { 'font-family': 'PT Sans' };
  // ngModels
  public headerFont: GoogleFont = this.fontOptions[0];
  public textFont: GoogleFont = this.fontOptions.find(font => font.uiText === 'PT Sans Bold');
  // controls for adding new fonts
  public fontNameToAdd: string;
  public fontHrefToAdd: string;

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
    //debugger;
  }
}
