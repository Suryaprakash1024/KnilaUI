import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UI';
  loading: boolean = false;

  constructor(private router: Router, private loader : LoadingService) {}
  ngOnInit() {
    this.loader.loading$.subscribe(x => {
      this.loading = x;
    })
  }


  onAddClicked() {
    this.router.navigate(['/']);
  }
  
  onUserClicked() {
    this.router.navigate(['/users']);
  }
}
