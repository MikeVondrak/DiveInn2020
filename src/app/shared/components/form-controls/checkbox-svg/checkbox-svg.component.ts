import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-svg',
  templateUrl: './checkbox-svg.component.html',
  styleUrls: ['./checkbox-svg.component.scss']
})
export class CheckboxSvgComponent implements OnInit {

  @Input() htmlId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
