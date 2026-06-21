export interface VaccineRecord {
  id: number;
  childId: number;
  vaccineName: string;
  dueDate: string;
  applicationDate?: string|  null;
  status: 'APLICADA' | 'PENDENTE' | 'ATRASADA';
}