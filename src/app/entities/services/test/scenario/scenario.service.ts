import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  constructor(private http: HttpClient) { }

  postScenario(data : any){
    return this.http.post<any>("http://localhost:9092/scenarioManager", data);
  }

  getAllScenario(){
    return this.http.get<any>("http://localhost:9092/scenarioManager");
  }

  getAllScenarioForCasTest(id: number){
    return this.http.get<any>("http://localhost:9092/scenarioManager/casTest/"+id);
  }

  putScenario(data : any, id : number){
    return this.http.put<any>("http://localhost:9092/scenarioManager/"+id, data);
  }

  deleteScenario(id : number){
    return this.http.delete<any>("http://localhost:9092/scenarioManager/"+id);
  }
  
}
