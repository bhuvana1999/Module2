import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  http:HttpClient;
  deptobj: Department[]=[];
  
  constructor( http:HttpClient) {
    this.http=http;
   }
   fetched:boolean=false;
   fetchDetails()
   {
     this.http.get('./assets/Department.json')
     .subscribe(data=>
      {if(!this.fetched)
        {
          this.convert(data);
          this.fetched=true;
        }
      });
   }
   getDetails(): Department[]
   {
     return this.deptobj;
   }
   convert(data: any) {
    for (let o of data) {
      let e = new Department(o.dptId,o.dptName)
      this.deptobj.push(e);}
   }
   

   delete(dptId: number) {
    let foundIndex:number=-1;
    for(let i=0;i<this.deptobj.length;i++)
    {
      let d=this.deptobj[i];
      if(dptId==d.dptId)
      {
        foundIndex=i;
        break;
      }
    }
    this.deptobj.splice(foundIndex,1);
  }
}
export class Department
{
  dptId:number;
  dptName:string;
  constructor(dptId:number,dptName:string)
  {
    this.dptId=dptId;
    this.dptName=dptName;
  }
}
