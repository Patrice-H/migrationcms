import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-term-of-use',
  templateUrl: './term-of-use.component.html',
  styleUrls: ['./term-of-use.component.scss'],
})
export class TermOfUseComponent implements OnInit {
  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
