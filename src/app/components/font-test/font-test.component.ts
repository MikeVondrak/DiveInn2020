import { Component, OnInit } from '@angular/core';
import {
  UiFont,
  fonts,
  headerFonts,
  textFonts,
} from '../../models/ui-font.model';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';
import { FontApiService } from '../../services/api/font/font.service';
import { GoogleFontsApiService } from '../../services/external/google/google-fonts-api.service';
import { Observable } from 'rxjs';
import { GoogleFontsApiSort, GoogleFontsApi } from '../../services/external/google/google-fonts-api.model';
import { take } from 'rxjs/operators';

enum ControlsEnum {
  'header',
  'text',
}

@Component({
  selector: 'app-font-test',
  templateUrl: './font-test.component.html',
  styleUrls: ['./font-test.component.scss'],
})
export class FontTestComponent implements OnInit {

  // fonts available in dropdowns
  public readonly fontOptions: UiFont[] = Object.assign([], fonts);

  // make enum values available in template
  public readonly controlsEnum = ControlsEnum;
  // ngStyles
  public headerStyle: object = {};
  public textStyle: object = {}; // { 'font-family': 'PT Sans' };
  // ngModels
  public headerFont: UiFont = headerFonts[0];
  public textFont: UiFont = this.fontOptions.find(
    (font) => font.uiText === 'PT Sans Bold'
  );
  // controls for adding new fonts
  public fontNameToAdd: string;
  public fontHrefToAdd: string;

  public hFonts = headerFonts;
  public tFonts = textFonts;

  public fontList$: Observable<UiFont[]>;
  public googleFontList: GoogleFontsApi[];

  // public boldCheckbox : boolean;

  constructor(private fontService: FontApiService, private fontsApiService: GoogleFontsApiService) {}

  ngOnInit(): void {
    this.onModelChange(ControlsEnum.header);
    this.onModelChange(ControlsEnum.text);

    this.fontList$ = this.fontService.getFonts$();

    //console.time('font-test getFonts$');
    this.fontsApiService.getFonts$('popularity')
      .pipe(take(1))
      .subscribe(f => {
        this.googleFontList = f;
        // for (let i = 0; i < 1; i++) {
        //   console.log(JSON.stringify(this.googleFontList[i], null, 4));
        //   console.timeEnd('font-test getFonts$');
        // }
      });

    // this.fontsApiService.getFonts$('trending')
    //   .pipe(take(1))
    //   .subscribe(fonts => {
    //     this.googleFontList = fonts;
    //     for (let i=0; i<1; i++) {
    //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
    //     }
    //   });

    // this.fontsApiService.getFonts$('trending')
    //   .pipe(take(1))
    //   .subscribe(fonts => {
    //     this.googleFontList = fonts;
    //     for (let i=0; i<1; i++) {
    //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
    //     }
    //   });
    // this.fontsApiService.getFonts$('popularity')
    //   .pipe(take(1))
    //   .subscribe(fonts => {
    //     this.googleFontList = fonts;
    //     for (let i=0; i<1; i++) {
    //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
    //     }
    //   });
  }

  /**
   * Callback for Angular event when dropdown selection is changed and model has updated
   * Set the associated ngStyle object when dropdown changes
   * @param controlId Enum value to distinguish initiating control
   * @param $newVal New font selected
   */
  public onModelChange(controlId: ControlsEnum, $newVal?: UiFont) {
    if ($newVal) {
      switch (controlId) {
        case ControlsEnum.header:
          //this.headerStyle = { 'font-family': this.headerFont.family };
          this.headerStyle = this.buildStyleObject(
            this.headerStyle,
            $newVal.family
          );
          break;
        case ControlsEnum.text:
          //this.textStyle = { 'font-family': this.textFont.family };
          this.textStyle = this.buildStyleObject(
            this.textStyle,
            $newVal.family
          );
          break;
      }
    }
  }

  /**
   * Standard dropdown change event, fires after ngModelChange
   * @param $event DOM event
   */
  // public onChange($event: Event) {
  //   console.log('font-test - customCheckboxChanged DOM event: ' + $event);
  // }

  // public customCheckboxChanged(newVal: boolean) {
  //   console.log('customCheckboxChanged: ' + newVal);
  //   this.textFont.properties.bold = newVal;
  // [(ngModel)]="textFont.properties.bold"
  // (ngModelChange)="$event ? textFont.properties.weight = 700 : textFont.properties.weight = 400"
  // [checked]="textFont.properties.weight === 700"
  //}

  private _checkedValue: boolean = false;

  get checkedValue() {
    return this._checkedValue;
  }

  set checkedValue(newVal) {
    setTimeout(() => {
      this._checkedValue = newVal;
      newVal
        ? (this.textFont.properties.weight = 700)
        : (this.textFont.properties.weight = 400);
      this.textFont.properties.bold = newVal;

      this.textStyle = this.buildStyleObject(
        this.textStyle,
        undefined,
        this.textFont.properties.weight
      );
    });
  }

  /**
   * Create a style object to pass into ngStyle binding
   * @TODO refactor to pass in any number and type of properties for styles
   */
  private buildStyleObject(
    styleObject: object,
    fontFamily?: string,
    fontWeight?: number
  ): object {
    const newStyle = {
      'font-family': fontFamily ? fontFamily : styleObject['font-family'],
      'font-weight': fontWeight ? fontWeight : styleObject['font-weight'],
    };
    return newStyle;
  }

}
