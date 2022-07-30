import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lipah',
  templateUrl: './lipah.component.html',
  styleUrls: ['./lipah.component.scss'],
})
export class LipahComponent implements OnInit {

  public lipahotel: any=[
    {hname: 'HOTEL 1925', style: 'Suite Twin', loc: 'Lipa City, Batangas', rm: 1},
    {hname: 'HOTEL 1925', style: 'Suite King', loc: 'Lipa City, Batangas', rm: 2},
    {hname: 'HOTEL 1925', style: 'Balcony Suite Double', loc: 'Lipa City, Batangas', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
