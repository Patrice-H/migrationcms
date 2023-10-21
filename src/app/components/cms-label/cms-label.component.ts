import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cms-label',
  templateUrl: './cms-label.component.html',
  styleUrls: ['./cms-label.component.scss'],
})
export class CmsLabelComponent {
  @Input() cms!: string;
}
