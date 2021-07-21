import { PartOneService } from './../../../shared/services/part-one/part-one.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-one',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponentOne implements OnInit {

  constructor(public partOneService: PartOneService) { }

  ngOnInit(): void {
  }


}
