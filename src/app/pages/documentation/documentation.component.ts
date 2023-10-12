import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  activePage: string = 'docs';
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
