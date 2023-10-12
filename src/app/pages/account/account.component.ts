import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  activePage: string = 'account';

  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
