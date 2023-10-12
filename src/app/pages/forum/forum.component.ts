import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  activePage: string = 'forum';

  constructor(private page: PageService) {}

  ngOnInit() {
    this.page.initPage();
  }
}
