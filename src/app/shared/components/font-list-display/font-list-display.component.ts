import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { FontManagerService } from '../../../services/font-manager/font-manager.service';
import { Observable } from 'rxjs';

export type DisplayType = 'family-only' | 'variant-details';

@Component({
  selector: 'app-font-list-display',
  templateUrl: './font-list-display.component.html',
  styleUrls: ['./font-list-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontListDisplayComponent implements OnInit {

  @Input() displayType: DisplayType = 'variant-details';

  @Output() fontListChange = new EventEmitter<UiFont[]>();
  @Input() fontList: UiFont[] = [];

  //@Input() fontList$: Observable<UiFont[]>;

  constructor(private cdr: ChangeDetectorRef, private fontMgr: FontManagerService) { }

  ngOnInit(): void { }

  public onClickRemove(font: UiFont) {
    console.log('@@@@@ remove font: ' + font.uiText);
    const idx = this.fontList.indexOf(font);
    this.fontList.splice(idx, 1);
    this.fontListChange.emit(this.fontList);
  }
}
