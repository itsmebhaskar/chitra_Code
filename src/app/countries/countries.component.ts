import { Component, OnInit, OnDestroy} from '@angular/core';
import { CountryModel } from 'src/app/models/CountryModel';
import { CovidService } from 'src/app/services/covid.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit,OnDestroy {
  //countries:any=[];
  covidSummary:any=[];
  covidSub:Subscription;

///////////////
countries=[{
  "Country": "United Kingdom",
  "CountryCode": "GB",
  "Slug": "united-kingdom",
  "NewConfirmed": 4815,
  "TotalConfirmed": 183500,
  "NewDeaths": 622,
  "TotalDeaths": 28205,
  "NewRecovered": 4,
  "TotalRecovered": 896,
  "Date": "2020-05-03T12:03:46Z"
},
{
  "Country": "United States of America",
  "CountryCode": "US",
  "Slug": "united-states",
  "NewConfirmed": 28810,
  "TotalConfirmed": 1130621,
  "NewDeaths": 1426,
  "TotalDeaths": 66325,
  "NewRecovered": 11367,
  "TotalRecovered": 175382,
  "Date": "2020-05-03T12:03:46Z"
},
{
  "Country": "Uruguay",
  "CountryCode": "UY",
  "Slug": "uruguay",
  "NewConfirmed": 4,
  "TotalConfirmed": 652,
  "NewDeaths": 0,
  "TotalDeaths": 17,
  "NewRecovered": 5,
  "TotalRecovered": 440,
  "Date": "2020-05-03T12:03:46Z"
},
{
  "Country": "Uzbekistan",
  "CountryCode": "UZ",
  "Slug": "uzbekistan",
  "NewConfirmed": 32,
  "TotalConfirmed": 2118,
  "NewDeaths": 0,
  "TotalDeaths": 9,
  "NewRecovered": 59,
  "TotalRecovered": 1271,
  "Date": "2020-05-03T12:03:46Z"
},
{
  "Country": "Vanuatu",
  "CountryCode": "VU",
  "Slug": "vanuatu",
  "NewConfirmed": 0,
  "TotalConfirmed": 0,
  "NewDeaths": 0,
  "TotalDeaths": 0,
  "NewRecovered": 0,
  "TotalRecovered": 0,
  "Date": "2020-05-03T12:03:46Z"
}]



///////////



  constructor(private covidService:CovidService) { }

  ngOnInit(): void {
    this.covidSub=  this.covidService.getCovidSummary().subscribe(
      res=>{
      this.covidSummary=res; 
      this.countries = this.covidSummary.Countries;
           
      res},err=>{console.log(err)});

    //this.countries = this.covidSummary.Countries;
    console.log(this.countries);     
  }
  
  
  ngOnDestroy()
   {
     this.covidSub.unsubscribe();
   }

}
