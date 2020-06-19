import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UiFont, IUiFont } from '../../../models/ui-font.model';
import { FontManagerService } from '../../../services/font-manager/font-manager.service';

@Component({
  selector: 'app-font-list-display',
  templateUrl: './font-list-display.component.html',
  styleUrls: ['./font-list-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontListDisplayComponent implements OnInit {

  @Input() fontList: UiFont[] = [];

  constructor(private cdr: ChangeDetectorRef, private fontMgr: FontManagerService) { }

  ngOnInit(): void { }

}
