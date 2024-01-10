import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-block',
  templateUrl: './tree-block.component.html',
  styleUrls: ['./tree-block.component.scss'],
})
export class TreeBlockComponent implements OnInit {
  isClosed: boolean = true;
  @Input() control!: number;
  @Input() data!: any;
  @Input() indentation!: number;
  @Input() kinship!: string;
  cumulIndex!: string;
  id!: string;

  ngOnInit(): void {
    this.cumulIndex = this.kinship + '.' + this.control.toString();
    console.log(this.indentation + '-' + this.control, this.data);
  }
  getClass():string {
    return 'block_' + this.indentation;
  }
  getId(index: number):string {
    return 'block_' + this.indentation + index;
  }
  setId():string {
    this.id = this.kinship  
    return 'line_' + this.cumulIndex
  }
  toggleFolder(): void {
    const folders = Array.from(document.getElementsByClassName(this.getClass()));
    folders.forEach((folder) => {
      folder?.classList.contains('hidden')
      ? folder.classList.remove('hidden')
      : folder?.classList.add('hidden');
    })
  }
  isArray(line: string | string[]): boolean {
    return Array.isArray(line);
  }
  containsBlock(line: string | string[], pos: number): boolean {
    if (Array.isArray(line) || pos === 0) {
      return true;
    }
    return false;
  }
}
