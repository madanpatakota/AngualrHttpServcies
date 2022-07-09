import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  // it will intercept to the each http call

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Madan');
    let httpheaders = new HttpHeaders({
      Role: 'SuperAdmin',
      EmailID: 'madan@gmail.com',
    });

    let httpparams = new HttpParams().set('Location', 'Bangolore');

    const updateRequest = request.clone({
      headers: httpheaders,
      params: httpparams,
    });

    return next.handle(updateRequest);
  }
}
