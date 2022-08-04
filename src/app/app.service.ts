import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
providedIn:'root'
})

export class AppService {
    constructor (private httpClient:HttpClient){

    }

    changePeople(apiUrl: string){
        return this.httpClient.get(apiUrl);
    }



}