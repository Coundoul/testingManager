import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppConfig } from '../showcase/domain/appconfig';
import { ConfigappService } from '../showcase/service/configapp.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit, OnDestroy{

  data: any;

  dataTest : any;

  chartOptions: any;

  subscription!: Subscription;

  config!: AppConfig;

  constructor(private configService: ConfigappService) {}
    
  ngOnInit(): void {
    this.data = {
        labels: ['Tickets Couvert','OK','KO', 'Non testés', 'Abandonnés', 'Hors Périmètre'],
        datasets: [
            {
                data: [300, 50, 100, 210, 15, 125],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#7E57C2",
                    "#66BB6A",
                    "#26C6DA"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#7E57C2",
                    "#66BB6A",
                    "#26C6DA"
                ]
            }
        ]
    };

    this.dataTest = {
        labels: ['Cas de Test lié à un ticket','OK','KO', 'A executer', 'Abandonnés'],
        datasets: [
            {
                data: [300, 100, 210, 15, 125],
                backgroundColor: [
                    "#FF00FF",
                    "#000080",
                    "#00FF00",
                    "#800000",
                    "#FF0000"
                ],
                hoverBackgroundColor: [
                    "#FF00FF",
                    "#000080",
                    "#00FF00",
                    "#800000",
                    "#FF0000"
                ]
            }
        ]
    };

        this.config = this.configService.config;
        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
  }

    updateChartOptions() {
        this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
    }

    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}