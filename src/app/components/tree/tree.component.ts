import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  data!: string[];

  constructor(private provider: DataProviderService) {}

  ngOnInit(): void {
    this.data = this.provider.dataTreeFiles;
  }

  isArray(element: string | string[]): boolean {
    return Array.isArray(element);
  }

  countFolder(): number {
    let counter: number = 0;
    this.data.forEach((line) => {
      if (this.isArray(line)) {
        counter++;
      }
    });

    return counter;
  }
}
