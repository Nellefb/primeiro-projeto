import { Component, Input } from '@angular/core';
import { CompartilharInputComponent } from '../compartilhar-input/compartilhar-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decorador-input',
  standalone: true,
  imports: [CompartilharInputComponent, CommonModule],
  templateUrl: './decorador-input.component.html',
  styleUrl: './decorador-input.component.css'
})

export class DecoradorInputComponent {
  nome:string = "Ellen"
  frutas = ["Maçã", "Banana", "Abacaxi"]

  cadastro = [
    {nome: "Antonio", idade:30, email: "email"},
    {nome: "Maria", idade:25, email: "email"},
    {nome: "André", idade:50, email: "email"},

  ]


}
