import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mso } from './mso';

@Injectable()
export class MsoService {


    constructor(private http: HttpClient) { }

    getMSO() {
        return this.http.get<any>('../assets/mso.json')
        .toPromise()
        .then(res => <Mso[]>res.data)
        .then(data => { return data; });
    }


}
