import { Injectable } from '@angular/core';
import { CHILDREN } from '../data/children.mock';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  getChildren() {
    return CHILDREN;
  }

}