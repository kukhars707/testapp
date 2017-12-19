import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Groups } from '../model/groups';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  public getGroups(): Observable<Groups[]>{
    return this.http.get('http://localhost:8080/groups')
        .map(this.extractGroups)
        .catch(this.handleError);
  }

  private extractGroups(response: Response){
    const res = response.json();
    const groups: Groups[] = [];
    for (let i = 0; i < res.length; i++){
      groups.push(new Groups(res[i].group_id, res[i].group_name));
    }
    return groups;
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
