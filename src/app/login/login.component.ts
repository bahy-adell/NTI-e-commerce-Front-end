import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  constructor(private authService:AuthService,private _Router:Router){}
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]) ,
    password: new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
  })
  errorMsg='';
  login(formData:FormGroup){
    this.authService.login(formData.value).subscribe(
      (res)=>{
        if (res.token) {
          localStorage.setItem('user', res.token)
          this.authService.saveCurrentUser()
        }
        this._Router.navigate(['/home'])
      },(err)=>{
        this.errorMsg =err.error.message;
        
      }
    )
  }
 
}