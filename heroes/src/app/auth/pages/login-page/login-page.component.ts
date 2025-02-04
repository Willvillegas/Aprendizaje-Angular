import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-page',
  imports: 
  [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  constructor(private formb :FormBuilder) {
    this.create();
  }

  loginForm!: FormGroup ;

  private create(){
    this.loginForm = this.formb.group({
      email: ['', Validators.required,Validators.email],
      password: ['']
    });
  }


  // public loginForm = new FormGroup ({
  //   email: new FormControl<string>(''),
  //   password: new FormControl('')
  // });
  login() {
    if (this.loginForm.invalid) {
      return;
    }


    console.log(this.loginForm);
    console.log(this.loginForm.value.email)
  }
}
