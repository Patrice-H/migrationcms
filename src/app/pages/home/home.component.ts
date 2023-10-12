import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activePage: string = 'home';

  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
