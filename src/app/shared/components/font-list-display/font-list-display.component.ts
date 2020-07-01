import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { FontManagerService } from '../../../services/font-manager/font-manager.service';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export type DisplayType = 'family-only' | 'variant-details';

@Component({
  selector: 'app-font-list-display',
  templateUrl: './font-list-display.component.html',
  styleUrls: ['./font-list-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontListDisplayComponent implements OnInit {

  @Input() displayType: DisplayType = 'variant-details';
  @Input() fontList$: Subject<UiFont[]>;

  constructor(private cdr: ChangeDetectorRef, private fontMgr: FontManagerService) { }

  ngOnInit(): void { }

  public onClickRemove(font: UiFont) {
    console.log('@@@@@ remove font: ' + font.uiText);
    this.fontList$
      .pipe(take(1))
      .subscribe((fontList) => {
        const idx = fontList.indexOf(font);
        fontList.splice(idx, 1);
        this.fontList$.next(fontList);
      });
  }
}
