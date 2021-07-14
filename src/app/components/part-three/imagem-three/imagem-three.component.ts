import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PartThreeService } from 'src/app/shared/services/part-three/part-three.service';

@Component({
  selector: 'app-imagem-three',
  templateUrl: './imagem-three.component.html',
  styleUrls: ['./imagem-three.component.css']
})
export class ImagemThreeComponent implements OnInit {

  constructor(public service: PartThreeService) { }

  ngOnInit(): void {
  }

  @Output() submit = new EventEmitter();

  funSubmit(){
    this.submit.emit();
  }

}
