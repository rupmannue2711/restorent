import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  loginResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private login: RestoService) {}

  ngOnInit(): void {}
  loginCollection() {
    console.warn(this.loginResto.value);
    this.login.loginResto(this.loginResto.value).subscribe((result) => {
      console.warn(result);
      this.alert = true;
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
