import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cms-panel',
  templateUrl: './cms-panel.component.html',
  styleUrls: ['./cms-panel.component.scss'],
})
export class CmsPanelComponent implements OnInit {
  cmsList: string[] = ['drupal', 'prestashop', 'wordpress'];
  isHidden: boolean = false;

  @Input() activeLabel!: string;
  @Output() closeOptions = new EventEmitter<boolean>();
  @Output() activeEvent = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.activeLabel);
    this.setActiveLabel(this.activeLabel);
  }

  setCms(name: string): string {
    return name;
  }

  cancel() {
    this.isHidden = true;
    this.closeOptions.emit(true);
  }

  setActiveLabel(label: string) {
    const id = label + '-label';
    const elements = Array.from(document.getElementsByClassName('active-cms'));
    elements.forEach((element) => {
      element.classList.remove('active-cms');
    });
    const button = document.getElementById(id);
    button?.classList.add('active-cms');
    this.activeEvent.emit(label);
  }

  getClass(label: string): string {
    if (label === this.activeLabel) {
      return 'active-cms';
    }

    return '';
  }
}
