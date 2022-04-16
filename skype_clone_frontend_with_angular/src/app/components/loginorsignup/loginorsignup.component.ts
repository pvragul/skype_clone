import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { userInterface } from 'user.interface';

@Component({
  selector: 'app-loginorsignup',
  templateUrl: './loginorsignup.component.html',
  styleUrls: ['./loginorsignup.component.css']
})
export class LoginorsignupComponent implements OnInit {

  @Input() user: userInterface | undefined;
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.userIntro();
  }

  userIntro(): void{
    this.loginService.findUser('ragul_pv').subscribe(user => this.user = user);
    
  }

}
