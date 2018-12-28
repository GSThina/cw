import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getTimeStamp(){
    var currentDate = new Date();

    var ms     = currentDate.getMilliseconds();
    var second = currentDate.getSeconds();
    var minute = currentDate.getMinutes();
    var hour   = currentDate.getHours();
    var date   = currentDate.getDate();
    var month  = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year   = currentDate.getFullYear();

    return year + "-" +(month + 1) + "-" + date + " " + hour + ":" + minute + ":" + second + "," + ms;
  }

  isExist(item, list){
    if ((list.indexOf(item) >= 0)&&(list[list.indexOf(item)]===item)) {
      return true;
    } else{
      return false;
    }
  }
}
