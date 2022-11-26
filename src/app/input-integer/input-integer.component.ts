import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

@Input()
cantidad!: number;

@Input()
max!:number;

@Output()
cantidadChange: EventEmitter<number> = new EventEmitter<number>();

@Output()
maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  
  upCantidad():void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad); //se emite el evento
    }else
      this.maxReached.emit("se alcanzo cantidad");
    }
  
  downCantidad():void{
    if(this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }
  changeQuantity(event:any): void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);

  }
}

