import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campresort',
  templateUrl: './campresort.component.html',
  styleUrls: ['./campresort.component.scss'],
})
export class CampresortComponent implements OnInit {


  public camphotel: any=[
    {hname: 'Camp Netanya Resort and Spa', style: 'Deluxe Twin Room', loc: 'Anilao, Batangas', rm: 1},
    {hname: 'Camp Netanya Resort and Spa', style: 'Villa', loc: 'Anilao, Batangas', rm: 2},
  ]

  constructor() { }

  ngOnInit() {}

}