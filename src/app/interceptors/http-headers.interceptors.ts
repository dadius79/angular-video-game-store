import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key' : '458d90740cmsh548bf6edc2b600cp19cc78jsnc12b5c767494',
                'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'f597c54c9a4c4f2b9cd2c48e2b18d37f',
            }
        });
        return next.handle(req);
    }
}