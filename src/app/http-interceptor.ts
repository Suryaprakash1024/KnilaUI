import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requests: number = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests++;

    // Show the loading spinner
    this.loadingService.show();

    return next.handle(req).pipe(
      tap(
        () => {
          // Decrement the loading counter
          this.requests--;

          if (this.requests === 0) {
            // Hide the loading spinner
            this.loadingService.hide();
          }
        },
        () => {
          // Decrement the loading counter
          this.requests--;

          // Hide the loading spinner
          this.loadingService.hide();
        }
      )
    );
  }
}
