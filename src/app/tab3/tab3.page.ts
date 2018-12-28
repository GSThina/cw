import { Component, ViewChild, ElementRef } from '@angular/core';
import { UtilService } from '../services/util.service';
import { ConfService } from '../services/conf.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public countryName:string = "";
  public archievedCountryList:any = [];
  public archievedCountryList1:any = [];
  public archievedCountryList2:any = [];
  public archievedCountryList3:any = [];
  public highLightNumber:number = -1;
  public countryExists:boolean = true;

  constructor(
    public util: UtilService,
    public conf: ConfService
  ){
    for (let index = 0; index < this.conf.countryMasterList.length; index++) {
      this.conf.countryMasterList[index] = this.conf.countryMasterList[index].toUpperCase();
    }
  }

  onKeyUp(){
    this.highLightNumber = -1;
    this.countryExists = true;
    this.countryName = this.countryName.toUpperCase();
  }

  archieveCountry(country){
    if(this.util.isExist(country, this.conf.countryMasterList)){
      if(!this.util.isExist(country, this.archievedCountryList)){
        this.archievedCountryList.push(country);
        this.countryName = "";
      }else{
        this.highLightNumber = this.archievedCountryList.indexOf(country);
      }
    }else{
      this.countryExists = false;
    }
  }

}
