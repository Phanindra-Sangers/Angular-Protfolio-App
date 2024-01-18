import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import ValidateForm from '../helpers/validateform';
import { Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private titleService: Title, private fb : FormBuilder, private auth : AuthService, private router: Router){

      this.titleService.setTitle('Phani - Sign Up')
  }
  
  


  ngOnInit(): void {
    this.signUpForm= this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      userName: ['',Validators.required],
      email:  ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  hideShowPass(){ 

    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye=slash";
    this.isText ? this.type = "text" : this.type = "password" ;
  }

  onSignup(){
    if(this.signUpForm.valid){
      //perform logic for signup 
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next: (res=>{
          alert(res?.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);

        })
        ,error:(err=>{
          
          alert(err?.error.message)
        })
      })
    }else{

      ValidateForm.ValidateAllFormFields(this.signUpForm)
      //logic for throwing error 
    }
    

  }

}