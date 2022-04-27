import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { userInterface } from 'user.interface';

@Component({
  selector: 'app-loginorsignup',
  templateUrl: './loginorsignup.component.html',
  styleUrls: ['./loginorsignup.component.css']
})
export class LoginorsignupComponent implements OnInit {

  public user!: userInterface;
  public usernameInp!: string;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // this.userNameVerify();
  }

  getUser(): void{
    this.loginService.findUser(this.usernameInp).subscribe(user => this.user = user);
    console.log(this.user);
    
  }

  isValidUser():void{

  }
}
