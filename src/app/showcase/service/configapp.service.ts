import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../domain/appconfig';



@Injectable({
  providedIn: 'root'
})
export class ConfigappService {

  config: AppConfig = {
    theme: 'lara-light-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
};

constructor() { }

private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
    }

    getConfig() {
        return this.config;
    }



}