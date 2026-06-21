import { Injectable } from '@angular/core';
import { VACCINES } from '../data/vaccine.mock';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  getVaccines() {
    return VACCINES;
  }

}