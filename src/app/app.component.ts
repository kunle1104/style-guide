import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  btnDisabledStyle = false;
  btnEnabledStyle = false;
  inputDisabledStyle = false;
  inputEnabledStyle = false;
  radioDisabledStyle = false;
  radioEnabledStyle = false;
  cardStyle = false;

  btnDisabled(){
     this.btnDisabledStyle = !this.btnDisabledStyle;
     this.btnEnabledStyle = false;
     this.inputDisabledStyle = false;
     this.inputEnabledStyle = false;
     this.radioDisabledStyle = false;
     this.radioEnabledStyle = false;
     this.cardStyle = false;
  }
  btnEnabled(){
     this.btnEnabledStyle = !this.btnEnabledStyle;
     this.btnDisabledStyle = false;
     this.inputDisabledStyle = false;
     this.inputEnabledStyle = false;
     this.radioDisabledStyle = false;
     this.radioEnabledStyle = false;
     this.cardStyle = false;
  }
  inputDisabled(){
     this.inputDisabledStyle = !this.inputDisabledStyle;
     this.btnDisabledStyle = false;
     this.btnEnabledStyle = false;
     this.inputEnabledStyle = false;
     this.radioDisabledStyle = false;
     this.radioEnabledStyle = false;
     this.cardStyle = false;
  }
  inputEnabled(){
     this.inputEnabledStyle = !this.inputEnabledStyle;
     this.btnDisabledStyle = false;
     this.btnEnabledStyle = false;
     this.inputDisabledStyle = false;
     this.radioDisabledStyle = false;
     this.radioEnabledStyle = false;
     this.cardStyle = false;
  }
  radioDisabled(){
     this.radioDisabledStyle = !this.radioDisabledStyle;
     this.inputEnabledStyle = false;
     this.btnDisabledStyle = false;
     this.btnEnabledStyle = false;
     this.inputDisabledStyle = false;
     this.radioEnabledStyle = false;
     this.cardStyle = false;
  }
  radioEnabled(){
    this.radioEnabledStyle = !this.radioEnabledStyle;
    this.inputEnabledStyle = false;
    this.btnDisabledStyle = false;
    this.btnEnabledStyle = false;
    this.inputDisabledStyle = false;
    this.radioDisabledStyle = false;
    this.cardStyle = false;
  }
  card(){
     this.cardStyle = !this.cardStyle;
     this.radioEnabledStyle = false;
     this.inputEnabledStyle = false;
     this.btnDisabledStyle = false;
     this.btnEnabledStyle = false;
     this.inputDisabledStyle = false;
     this.radioDisabledStyle = false;
  }
}
