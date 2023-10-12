import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
})
export class MessagingComponent implements OnInit {
  activePage: string = 'messaging';

  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
