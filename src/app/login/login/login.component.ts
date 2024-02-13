import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  signupForm!: FormGroup;
  currentTab: any = 'login';

  getErrorMessage() {

    return 'Not a valid email';
  }
  getErrorMessagePass() {

    return 'Minimum Length should be 6 digits';
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.signupForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onTab(tabs: string) {

    this.currentTab = tabs;
  }
  onSubmit() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    if (email === 'abc' && password === '123') {
      this.router.navigate(['/home']);
    }
  }

}
