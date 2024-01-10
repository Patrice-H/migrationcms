import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.scss'],
})
export class TreeElementComponent implements OnInit {
  spaces!: any[];
  branchs!: any[];
  pathType!: string;
  cumulIndex!: string;
  @Input() index!: number;
  @Input() blockLength!: number;
  @Input() data!: string;
  @Input() indentation!: number;
  @Input() kinship!: string;

  ngOnInit(): void {
    this.branchs = this.getBranchs();
    this.spaces = new Array(this.indentation);
    this.pathType = this.getPathType();
    this.cumulIndex = this.kinship + '.' + this.index.toString();
  }
  getClass():string {
    return 'block_' + this.kinship;
  }
  toggleFolder(): void {
    console.log('class : ' + this.getClass(), 'id : ' + this.getId())
    /*
    const col = this.indentation + 1;
    const folders = Array.from(document.getElementsByClassName('block_' + col));
    folders.forEach((folder) => {
      folder?.classList.contains('hidden')
      ? folder.classList.remove('hidden')
      : folder?.classList.add('hidden');
    })*/
  }
  isArray(line: string | string[]): boolean {
    if (line === '/') {
      return true;
    }

    return Array.isArray(line);
  }
  getLabel(): string | string[]{
    let label: string | string[];
    label = Array.isArray(this.data) ? this.data[0] : this.data;

    return label;
  }
  getBranchs(): any[] {
    if (this.indentation <= 0) {
      return new Array();
    }

      return new Array(this.indentation - 1);
  }
  getPathType() {
    if (this.index <= 0 && this.indentation <= 0) {
      return 'root';
    }
    if (this.index < this.blockLength - 1) {
      return 'double';
    }

    return 'simple';
  }
  getId():string {
    return 'line_' + this.cumulIndex;
  }
}
