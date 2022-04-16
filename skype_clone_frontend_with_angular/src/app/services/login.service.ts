import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userInterface } from 'user.interface';
import { Users } from 'users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  findUser(username: string): Observable<userInterface> {
    const user = Users.find(user => user.username === username)!;
    
    return of(user)
  }
}
