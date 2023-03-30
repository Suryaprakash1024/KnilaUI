import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  playerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private readonly appService: AppService) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      teamMatch: ['', Validators.required],
      amount: ['', Validators.required],
      ratio: ['', Validators.required],
      paymentStatus: [false],
      winAmount: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.playerForm.value;
    this.appService.postMongoDB('Booking',formData).subscribe(data => {
      console.log(data)
    })
    console.log(formData);
  }
}
