import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingDataService } from '../shopping-data.service';

@Component({
  selector: 'app-shopping-contact',
  templateUrl: './shopping-contact.component.html',
  styleUrls: ['./shopping-contact.component.scss']
})
export class ShoppingContactComponent {
  form!: FormGroup;
  mensaje = false;
  error = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private ShoppingDataService: ShoppingDataService) 
    {
    this.buildForm();
  }
  
  ngOnInit(){
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['',[Validators.required]],
    });
    
  }
  enviar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.ShoppingDataService.add(this.form);
      this.form.reset();
    }else{
      this.mensaje = false;
      this.error = true;
    }
    
  } 
  showMsg(){
      this.mensaje = true;
      setTimeout(() => {
        this.mensaje = false;
      }, 10000);
  }
  
}