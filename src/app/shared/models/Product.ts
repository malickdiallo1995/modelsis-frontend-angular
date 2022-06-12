import {Type} from './Type';

export class Product{
  id!: number;
  name!: string;
  dateCreated!: Date;
  type : Type;
  constructor() {
  }
}
