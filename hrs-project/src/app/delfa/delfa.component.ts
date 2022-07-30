import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delfa',
  templateUrl: './delfa.component.html',
  styleUrls: ['./delfa.component.scss'],
})
export class DelfaComponent implements OnInit {

  public delhotel: any=[
    {hname: 'Villa Del Faro', style: 'Deluxe Room', loc: 'Bagong Silang Calatagan, Batangas City', rm: 1},
    {hname: 'Villa Del Faro', style: 'Family Room', loc: 'Bagong Silang Calatagan, Batangas City', rm: 2},
    {hname: 'Villa Del Faro', style: 'Suite', loc: 'Bagong Silang Calatagan, Batangas City', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}