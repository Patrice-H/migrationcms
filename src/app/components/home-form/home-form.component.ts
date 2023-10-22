import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent implements OnInit {
  panelHidden!: boolean;
  panelType!: string;
  activeSource!: string;
  activeTarget!: string;
  activeLabel!: string;

  ngOnInit(): void {
    this.panelHidden = true;
    this.activeSource = 'prestashop';
    this.activeTarget = 'drupal';
  }

  openPanel(origin: string) {
    this.activeLabel =
      origin === 'source' ? this.activeSource : this.activeTarget;
    this.panelType = origin;
    this.panelHidden = false;
    this.setActiveLabel();
  }
  close() {
    this.panelHidden = true;
  }
  setActiveLabel() {
    const id = this.activeLabel + '-label';
    const button = document.getElementById(id);
    button?.classList.add('active-cms');
  }

  update(label: string) {
    if (this.panelType === 'source') {
      this.activeSource = label;
    } else {
      this.activeTarget = label;
    }
    this.activeLabel = label;
    this.panelHidden = true;
    console.log(this.activeSource, this.activeTarget);
  }

  disabled(): string | null {
    const state = this.activeSource === this.activeTarget ? 'disabled' : null;

    return state;
  }
}
