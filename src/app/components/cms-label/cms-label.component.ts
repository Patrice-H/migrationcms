import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cms-label',
  templateUrl: './cms-label.component.html',
  styleUrls: ['./cms-label.component.scss'],
})
export class CmsLabelComponent implements OnInit {
  cmsLogo!: string;

  @Input() cms!: string;

  ngOnInit(): void {
    this.cmsLogo = '../../../assets/' + this.cms + '-mini.png';
  }
}
