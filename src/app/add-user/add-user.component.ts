
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.pattern('^[0-9]*$')),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required)
  });;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.contactForm.value);
    const formData = this.contactForm.value;
    const url = "https://localhost:7295/api/User/AddUser";
    const data:User = {
      firstName: formData["firstName"],
      address: formData["address"],
      city: formData["city"],
      country:formData["country"],
      email:formData["email"],
      lastName:formData["lastName"],
      phoneNumber:formData["phoneNumber"],
      postalCode:formData["postalCode"],
      state:formData["state"]
    }
    this.appService.postData(data, url).subscribe(data => {

    })
  }

}
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}