import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FontManagerService } from '../../services/font-manager/font-manager.service';
import { UiFont } from '../../models/ui-font.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration.page.component.html',
  styleUrls: ['./configuration.page.component.scss', '../pages-shared.scss']
})
export class ConfigurationPageComponent implements OnInit {

  public selectableFonts$: Subject<UiFont[]> = this.fontManagerService.selectableFonts$;
  public blacklistedFonts$: Subject<UiFont[]> = this.fontManagerService.blacklistedFonts$;
  public availableFonts$: Subject<UiFont[]> = this.fontManagerService.availableFonts$;
  public top100Fonts$: Observable<UiFont[]> = this.availableFonts$.pipe(map(f => f.slice(0, 100)));

  constructor(private fontManagerService: FontManagerService) { }

  ngOnInit(): void {
  }

}
