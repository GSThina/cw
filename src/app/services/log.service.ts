import { Injectable      } from '@angular/core';
import { UtilService     } from './util.service';
import { ConfService   } from './conf.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private level:string = this.conf.defaultLogLevel;

  constructor(
    public util: UtilService,
    public conf: ConfService
  ) { }

  info(message){
    (this.level=="INFO")?console.log(this.util.getTimeStamp() + " INFO " + message.toString()):null;
  }

  warn(message){
    (this.level=="WARN")?console.log(this.util.getTimeStamp() + " WARN " + message.toString()):null;
  }

  error(message){
    (this.level=="ERROR")?console.log(this.util.getTimeStamp() + " ERROR " + message.toString()):null;
  }

  fatal(message){
    (this.level=="FATAL")?console.log(this.util.getTimeStamp() + " FATAL " + message.toString()):null;
  }

  debug(message){
    (this.level=="DEBUG")?console.log(this.util.getTimeStamp() + " DEBUG " + message.toString()):null;
  }

}
