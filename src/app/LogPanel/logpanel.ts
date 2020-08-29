import {Component, Input, Output, EventEmitter} from '@angular/core'
import {Account} from '../Models/account'

@Component({
  selector: 'app-logpanel',
  templateUrl: './logpanel.html',
  styleUrls: ['./logpanel.css']
})
export class LogPanel {
  actLogin: string;
  actPassword: string;
  actLogMode: boolean = false;
  prevLogMode: boolean;
  actExistMode: boolean = false;
  prevExistMode: boolean;
  alertActive: boolean = false;
  
  @Input() accounts: Array<Account>;
  @Output() setActive = new EventEmitter<boolean>();
  
  toRegPanel(){
    this.setActive.emit(true);
  }
  
  isLogged(){
    this.accounts.map(account => {
      if(this.actPassword === account.password && (this.actLogin === account.login || this.actLogin === account.email)){
        this.actLogMode = true;
      }
    });
    
    if(this.actLogMode === false){
      this.accounts.map(account => {
        if(this.actLogin === account.login || this.actLogin === account.email){
          this.actExistMode = true;
        }
      });
    }
    
    this.alertActive = true;
    this.prevLogMode = this.actLogMode;
    this.prevExistMode = this.actExistMode;
    
    console.log(this.actLogMode);
    console.log(this.actExistMode);
    //console.log(this.actPassword);
  }
}