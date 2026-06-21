import { VaccineRecord } from '../models/vaccine-record';

export const VACCINE_RECORDS: VaccineRecord[] = [
  {
    id: 1,
    childId: 1,
    vaccineName: 'BCG',
    dueDate: '15/03/2021',
    applicationDate: '15/03/2021',
    status: 'APLICADA'
  },
  {
    id: 2,
    childId: 1,
    vaccineName: 'Poliomielite',
    dueDate: '15/05/2021',
    applicationDate: null,
    status: 'PENDENTE'
  },
  {
    id: 3,
    childId: 2,
    vaccineName: 'Influenza',
    dueDate: '01/04/2025',
    applicationDate: null,
    status: 'ATRASADA'
  },
  {
    id: 3,
    childId: 3,
    vaccineName: 'Influenza',
    dueDate: '01/04/2025',
    applicationDate: null,
    status: 'ATRASADA'
  }
];