import { Component, OnInit, Input } from '@angular/core';
import { UiFont } from '../../../models/ui-font.model';
import { FontManagerService } from '../../../services/font-manager/font-manager.service';

@Component({
  selector: 'app-font-list-display',
  templateUrl: './font-list-display.component.html',
  styleUrls: ['./font-list-display.component.scss']
})
export class FontListDisplayComponent implements OnInit {

  @Input() fontGroup: string;
  public selectableFonts: UiFont[] = [];

  constructor(private fontManagerService: FontManagerService) { }

  ngOnInit(): void {
    }

  showSelectableFonts() {
    for(let i=0;i<10;i++) {
      this.selectableFonts.push(this.fontManagerService.allFonts[i]);
    }
  }

}
