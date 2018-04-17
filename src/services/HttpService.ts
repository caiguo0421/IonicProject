import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {CompanyInfo} from "../CompanyInfo";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class HttpService {
  private companyUrl = 'api/companyInfoes';  // URL to web api

  constructor(public http: HttpClient) {

  }

  /** GET heroes from the server */
  getCompanyInfo (): Observable<CompanyInfo[]> {
    return this.http.get<CompanyInfo[]>(this.companyUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
