import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/loginApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onTab(tabs: string) {
    this.currentTab = tabs;
  }
  onSubmit() {
    let email = this.loginForm.value.email;
    let pass = this.loginForm.value.password;

    this.apiService.getUSer(email).subscribe({
      next: (response: any) => {
        if (response) {
          if (response.pass == pass) this.router.navigate(['/home']);
          else alert('Email or Password does not match.');
        }
        alert("User does not exist.\nSign up first.")
        this.loginForm.reset();
        this.onTab('signup');
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  onSubmitSignup() {
    let email = this.signupForm.value.email;
    let pass = this.signupForm.value.password;


    const postData = { email: email, pass: pass };
    this.apiService.addUser(postData).subscribe({
      next: (response: string) => {
        console.log('Response from server:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
    alert('Sign up successfull!');
    this.signupForm.reset();
    this.onTab('login');
  }
}
