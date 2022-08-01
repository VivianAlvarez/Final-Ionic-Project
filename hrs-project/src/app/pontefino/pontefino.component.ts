import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pontefino',
  templateUrl: './pontefino.component.html',
  styleUrls: ['./pontefino.component.scss'],
})
export class PontefinoComponent implements OnInit {

  public pontehotel: any=[
    {hname: 'Pontefino Hotel', style: 'Garden Suite', loc: 'Batangas City', rm: 1},
    {hname: 'Pontefino Hotel', style: 'Executive Suite', loc: 'Batangas City', rm: 2},
    {hname: 'Pontefino Hotel', style: 'Deluxe Room', loc: 'Batangas City', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}

