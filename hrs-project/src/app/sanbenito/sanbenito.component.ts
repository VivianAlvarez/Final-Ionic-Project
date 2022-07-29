import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanbenito',
  templateUrl: './sanbenito.component.html',
  styleUrls: ['./sanbenito.component.scss'],
})
export class SanbenitoComponent implements OnInit {

  public ybhotel: any=[
    {hname: 'The Farm At San Benito', style: 'Palmera suite', loc: 'Lipa, Batangas City', rm: 1},
    {hname: 'The Farm At San Benito', style: 'Executive Suite', loc: 'Lipa, Batangas City', rm: 2},
    {hname: 'The Farm At San Benito', style: 'Narra Pool Villa', loc: 'Lipa, Batangas City', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
