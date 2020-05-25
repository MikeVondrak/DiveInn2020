import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServerTestService } from '../../services/server-test/server-test.service';
import { ServerTestData } from '../../services/server-test/server-test.model';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

let a = { prop: "a" };

@Component({
  selector: 'app-server-test',
  templateUrl: './server-test.component.html',
  styleUrls: ['./server-test.component.scss']
})
export class ServerTestComponent implements OnInit, OnDestroy {

  public serverResponse$: Observable<ServerTestData>;

  constructor(public serverTestService: ServerTestService) {
  }

  ngOnInit(): void {
    //this.serverResponse$ = this.serverTestService.getServerTestData$();
  }
  ngOnDestroy(): void {
  }

  getAnswer() {
    console.log('**** component getAnswer()');
    this.serverResponse$ = this.serverTestService.getServerTestData$();
    //this.serverTestService.getServerTestData$();
  }
}
