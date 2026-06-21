import { Injectable } from '@angular/core';
import { VACCINE_RECORDS } from '../data/vaccine-record.mock';

@Injectable({
  providedIn: 'root'
})
export class VaccineRecordService {

  getByChildId(childId: number) {
    return VACCINE_RECORDS.filter(
      record => record.childId === childId
    );
  }

}