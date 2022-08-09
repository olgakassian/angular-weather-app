import { Component, OnInit } from '@angular/core';
import { Office, OFFICES } from '../offices.model';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
officesValtech = OFFICES;
selectedOffice?: Office;

  constructor() { }

  ngOnInit(): void {}

  onSelect(office: Office): void { 
  this.selectedOffice = office;
  }

}
