import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  activePage: string = 'services';

  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
