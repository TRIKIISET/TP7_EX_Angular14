import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private lesEmployes: Employe[] = [];
  getEmployes() {

  }

  addNewEmploye(emp: Employe) {   
  }
  constructor() { }
}
