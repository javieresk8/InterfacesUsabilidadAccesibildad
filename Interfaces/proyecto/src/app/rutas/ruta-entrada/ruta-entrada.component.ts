import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-ruta-entrada',
  templateUrl: './ruta-entrada.component.html',
  styleUrls: ['./ruta-entrada.component.scss']
})
export class RutaEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  checked = false;

  requisitosDenuncias: string[] = [
    'Apellidos y Nombres',
    'Número de cédula',
    'Correo electrónicos',
    'Número de teléfono (celular o convencional)',
    'Fecha exacta de ingreso y salida del trabajo'
  ];

  datosEmpleador: string[] = [
    'Nombre de la empresa denunciada/ Apellidos y Nombres (persona natural)',
    'Nombre del representante legal (empresa)',
    'Número de Ruc si es empresa o Número de cédula si es personal natural',
    'Dirección exacta con referencia y nomenclatura (Ej.: Clemente Ponce E20-53 y Piedrahita, atrás de las     Asamblea Nacional)',
    'En caso de no haber nomenclatura actual adjuntar fotografía del lugar.',
    'Croquis en una hoja del lugar de notificación.'
  ]

}
