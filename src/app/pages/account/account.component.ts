import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

/**
 * @class
 * @description Account Page
 * @implements OnInit
 */
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  activePage: string = 'account';

  constructor(private page: PageService) {}

  /**
   * @function
   * @description Init page
   */
  ngOnInit() {
    this.page.initPage();
  }
}
