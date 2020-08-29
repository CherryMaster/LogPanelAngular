import { Component } from '@angular/core';
import {Account} from './Models/account'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regPanelActive = false;
  accounts: Array<Account> = [{
    email: "test1@gmail.com",
    login: "test1",
    password: "tEsT1"
  },{
    email: "test2@gmail.com",
    login: "test2",
    password: "TeSt2"
  }];
  
  backToPanel(setStatus){
    this.regPanelActive = setStatus;
  }
  
  addNewAccount(account){
    this.accounts.push(account);
    console.log(this.accounts);
  }
}
