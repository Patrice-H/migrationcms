import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-cms',
  templateUrl: './select-cms.component.html',
  styleUrls: ['./select-cms.component.scss'],
})
export class SelectCmsComponent implements OnInit {
  cmsLogo!: string;

  @Input() cms!: string;
  @Output() userChoice = new EventEmitter<string>();

  ngOnInit(): void {
    this.cmsLogo = '../../../assets/' + this.cms + '-mini.png';
  }

  select() {
    this.userChoice.emit(this.cms);
  }
}
