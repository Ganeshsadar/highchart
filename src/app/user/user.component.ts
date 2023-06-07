import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginform=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    company:new  FormControl('',[Validators.required,Validators.maxLength(6)]),
    salary:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  login(){
    console.log(this.loginform.value);
    

  }

}
