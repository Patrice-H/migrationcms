import { Injectable } from '@angular/core';
import { data } from 'src/data/ps_tree';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  dataTreeFiles: string[] = data;
}
