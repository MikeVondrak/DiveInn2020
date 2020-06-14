import { Component, OnInit, Input } from '@angular/core';
import { UiFont } from '../../../models/ui-font.model';

@Component({
  selector: 'app-font-list-display',
  templateUrl: './font-list-display.component.html',
  styleUrls: ['./font-list-display.component.scss']
})
export class FontListDisplayComponent implements OnInit {

  @Input() fontGroup: UiFont[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
