import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Account} from '../Models/account'

@Component({
  selector: 'app-regpanel',
  templateUrl: './regpanel.html',
  styleUrls: ['./regpanel.css']
})
export class RegPanel {
  newEmail: string;
  newLogin: string;
  newPassword: string;
  repeated: string;
  
  emailRegex: RegExp = /^[\w]+@[^@]+\.[^@]+$/i;
  passwordRegex: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  
  @Input() accounts: Array<Account>;
  
  @Output() setInactive = new EventEmitter<boolean>();
  @Output() createdAccount = new EventEmitter<Account>();
  
  newAccount(){
    if(this.newPassword === this.repeated
    && this.newEmail.match(this.emailRegex)
    && this.newPassword.match(this.passwordRegex)){
          const account: Account = {
            email: this.newEmail,
            login: this.newLogin,
            password: this.newPassword
          }
          this.setInactive.emit(false)
          this.createdAccount.emit(account)
          console.log(account);
      }
    }
  }
