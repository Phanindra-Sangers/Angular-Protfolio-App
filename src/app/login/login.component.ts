import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormBuilder , FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import ValidateForm from '../helpers/validateform';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private titleService: Title, private fb:FormBuilder, private auth: AuthService, private router:Router, private userStore: UserStoreService) {
    this.titleService.setTitle('Phani - Login')

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  hideShowPass(){ 

    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye=slash";
    this.isText ? this.type = "text" : this.type = "password" ;
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send obj to db
      this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          alert(res.message);
           this.loginForm.reset();
           this.auth.storeToken(res.token);
           const tokenPayload = this.auth.decodedToken();
           this.userStore.setFullNameForStore(tokenPayload.unique_name);
           this.userStore.setRoleForStore(tokenPayload.role);
           this.router.navigate(['dashboard'])
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
    }
    else{
      //throw the error using toaster and with required fields 

      ValidateForm.ValidateAllFormFields(this.loginForm);
    }
  }

  
}
