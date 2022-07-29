import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanbenito',
  templateUrl: './sanbenito.component.html',
  styleUrls: ['./sanbenito.component.scss'],
})
export class SanbenitoComponent implements OnInit {

  public farmhotel: any=[
    {hname: 'The Farm At San Benito', style: 'Palmera suite', loc: 'Lipa City, Batangas', rm: 1},
    {hname: 'The Farm At San Benito', style: 'Executive Suite', loc: 'Lipa City, Batangas', rm: 2},
    {hname: 'The Farm At San Benito', style: 'Narra Pool Villa', loc: 'Lipa City, Batangas', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
