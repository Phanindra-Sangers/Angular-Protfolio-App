import { Component , OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ResetPassword } from '../_models/reset-password.model';
import { ConfirmPasswordValidator } from '../helpers/confirm-password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import ValidateForm from '../helpers/validateform';
import { ResetPasswordService } from '../services/reset-password.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent  {

  
  resetPasswordForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword();
  
  constructor( private router: Router, private fb: FormBuilder, private activatedRoute : ActivatedRoute, private resetService: ResetPasswordService ) {}

  ngOnInit(): void {
   this.resetPasswordForm = this.fb.group({
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required]
   }
  //  ,{
  //   validator: ConfirmPasswordValidator("password","confirmPassword")
  //  }
   );
   this.activatedRoute.queryParams.subscribe(val=>{
    this.emailToReset = val['email'];
    let uriToken = val['code'];
    this.emailToken = uriToken.replace(" ",'+');
    this.emailToken = val['code'];
    console.log(this.emailToken);
    console.log(this.emailToReset)
   })
   
  }
  reset(){
    if(this.resetPasswordForm.valid){

      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
      this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.confirmPassword;
      this.resetPasswordObj.emailToken = this.emailToken;
      
      this.resetService.resetPassword(this.resetPasswordObj)
      .subscribe({
        next:(res)=>{
          
          alert("Password Reset Successfully")
          this.router.navigate(['/login'])
        },
          error:(err)=>{
          alert("some thing went wrong")
        }
      })

    }else{
      ValidateForm.ValidateAllFormFields(this.resetPasswordForm);
    }
  }
}
