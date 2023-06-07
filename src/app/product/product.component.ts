import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { UserserviseService } from '../userservise.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor( private http:UserserviseService){

  }

  loginform=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    company:new  FormControl('',[Validators.required,Validators.maxLength(6)]),
    salary:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
 
  alldata:any=[];
  ngOnInit(): void {
      this.http.getdata().subscribe(res =>{
        this.alldata=res;
      })
  }
  deletuser(id:any){
    this.http.deletdata(id).subscribe(res =>{
      this.ngOnInit();

    })
  }

  adddatadetail(){
    this.http.adddata(this.loginform.value).subscribe(res =>{
      console.log(res);
      this.loginform.reset();
      

    })
  }

uid:any;
  onClick(id:any,index:any){
    this.loginform.controls['user'].setValue(this.alldata[index].user),
    this.loginform.controls['company'].setValue(this.alldata[index].company),
    this.loginform.controls['salary'].setValue(this.alldata[index].salary)
    this.uid=id;
  }

  updatedetail(){
    this.http.updatedata(this.uid,this.loginform.value).subscribe(res =>{

    })
  }

}
