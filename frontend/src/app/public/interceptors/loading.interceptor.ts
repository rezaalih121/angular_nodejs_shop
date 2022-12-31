import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

var pendingRequest = 0;

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }

  // interceptor is on object that can observe any requests to the server and act at that time 
  // to activate it we must import it in app.modules at import { HttpClientModule , HTTP_INTERCEPTORS} 
  // and add this class as a provider in providers list located at the end of app.modules 
  //like this { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor , multi: true}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loadingService.showLoading();
    pendingRequest = pendingRequest + 1;
    return next.handle(request).pipe(

      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }

      })
    );
  }
  handleHideLoading() {

    pendingRequest = pendingRequest - 1;
    if (pendingRequest === 0) {
      this.loadingService.hideLoading();
    }
  }


}

