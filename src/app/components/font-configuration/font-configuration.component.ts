import { Component, OnInit } from '@angular/core';
import { FontManagerService } from '../../services/font-manager/font-manager.service';

@Component({
  selector: 'app-font-configuration',
  templateUrl: './font-configuration.component.html',
  styleUrls: ['./font-configuration.component.scss']
})
export class FontConfigurationComponent implements OnInit {

  constructor(private fontManagerService: FontManagerService) { }

  ngOnInit(): void {
    // this.fontManagerService.init();
  }

}
