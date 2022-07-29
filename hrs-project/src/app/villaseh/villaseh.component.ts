import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villaseh',
  templateUrl: './villaseh.component.html',
  styleUrls: ['./villaseh.component.scss'],
})
export class VillasehComponent implements OnInit {

  public villashotel: any=[
    {hname: 'Villas by Eco Hotel', style: 'Standard Room', loc: 'Mataas na Kahoy, Batangas', rm: 1},
    {hname: 'Villas by Eco Hotel', style: 'Deluxe Triple Room', loc: 'Mataas na Kahoy, Batangas', rm: 2},
    {hname: 'Villas by Eco Hotel', style: 'Deluxe Room', loc: 'Mataas na Kahoy, Batangas', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
