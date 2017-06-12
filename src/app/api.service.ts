import { OpaqueToken, Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TickerData } from './models/ticker-data.model';

const GET_TICKER_URL: string = 'https://api.cryptonator.com/api/ticker/';

@Injectable()
export class ApiService {
    private headers: Headers;

    constructor(private http: Http) {

    }

    getTickerData(base: string, target: string): Observable<{ ticker: TickerData, success: boolean }> {
        return this.get<{ ticker: TickerData, success: boolean }>(`${GET_TICKER_URL}${base}-${target}`);
    }

    private get<TReturnType>(url: string): Observable<TReturnType> {
        return this.http.get(url, new RequestOptions({ headers: this.headers, body: '' }))
            .map(res => <TReturnType>res.json())
            .catch(x => Observable.throw(x));
    }
}