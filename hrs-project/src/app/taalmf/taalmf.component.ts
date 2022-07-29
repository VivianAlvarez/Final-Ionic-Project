import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taalmf',
  templateUrl: './taalmf.component.html',
  styleUrls: ['./taalmf.component.scss'],
})
export class TaalmfComponent implements OnInit {
 
  public taalhotel: any=[
    {hname: 'Taal Maranans Farmville Inc by Cocotel', style: 'Deluxe Queen Room', loc: 'Taal, Batangas', rm: 1},
    {hname: 'Taal Maranans Farmville Inc by Cocotel', style: 'Deluxe Studio', loc: 'Taal, Batangas', rm: 2},
    {hname: 'Taal Maranans Farmville Inc by Cocotel', style: 'Quadruple Room', loc: 'Taal, Batangas', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
