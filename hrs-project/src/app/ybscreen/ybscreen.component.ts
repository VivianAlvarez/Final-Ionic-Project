import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ybscreen',
  templateUrl: './ybscreen.component.html',
  styleUrls: ['./ybscreen.component.scss'],
})
export class YbscreenComponent implements OnInit {

  public ybhotel: any=[
    {hname: 'Yellowbell Hotel', style: 'Standard Double Room', loc: 'Pallocan West, Batangas City', rm: 1},
    {hname: 'Yellowbell Hotel', style: 'Superior Twin Room', loc: 'Pallocan West, Batangas City', rm: 2},
    {hname: 'Yellowbell Hotel', style: 'Deluxe Double Room', loc: 'Pallocan West, Batangas City', rm: 3}
  ]

  constructor() { }

  ngOnInit() {}

}
