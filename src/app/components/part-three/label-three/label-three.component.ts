import { Component, OnInit } from '@angular/core';
import { PartThreeService } from 'src/app/shared/services/part-three/part-three.service';

@Component({
  selector: 'app-label-three',
  templateUrl: './label-three.component.html',
  styleUrls: ['./label-three.component.css']
})
export class LabelThreeComponent implements OnInit {

  constructor(public serviceThree: PartThreeService) { }

  ngOnInit(): void {
  }

}
