export interface Child {
  id: number;
  name: string;
  age: number;
  birthDate: string;
  status: 'EM_DIA' | 'PENDENTE' | 'ATRASADA';
}