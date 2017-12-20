import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Notes } from '../model/notes';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {

  constructor(private http: Http) { }

    public getNotes(): Observable<Notes[]> {
        return this.http.get('http://localhost:8080/notes')
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any, cought: Observable<any>): any {
        let message = "";
        if(error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message = `${error.status} - ${error.statusText || ''} ${errorData}`
        } else {
            message = error.message ? error.message : error.toString();
        }
        return Observable.throw(message);
    }
}
