import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('form') myForm: NgForm;
  constructor() { }
  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  userDetails = {
    userName: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  };

  ngOnInit() {
  }
  // onSubmitted(form: ElementRef) {
  //   console.log(form);
  // }
  onSubmitted() {
   // console.log(this.myForm);
   this.userDetails.userName = this.myForm.value.userData.userName;
   this.userDetails.email = this.myForm.value.userData.email;
   this.userDetails.secretQuestion = this.myForm.value.secret;
   this.userDetails.secretAnswer = this.myForm.value.answer;
   this.userDetails.gender = this.myForm.value.gender;
   this.myForm.reset();
  }
  suggestUserName() {
    this.myForm.form.patchValue ({
      userData : {
        name: 'Superman'
      }
    });
       // this.myForm.setValue({
    //   userData: {
    //     email: '',
    //     name: 'SuperMan'
    //   },
    //   answer: 'tommy',
    //   gender: 'male',
    //   secret: 'pet',
    // });
  }
}
