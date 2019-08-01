import { Component, OnInit } from '@angular/core';
import { MyserviceService, Department } from '../myservice.service';


@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css'],

})
export class FirstCompComponent implements OnInit {
  serviceobj:MyserviceService;

  constructor(serviceobj:MyserviceService) {
    this.serviceobj=serviceobj;
    
   }

   deptobj: Department[]=[];
   
   delete(dptId:number){
     this.serviceobj.delete(dptId);
     this.deptobj = this.serviceobj.getDetails();
   }
   column:string="dptId"; 
  order:boolean=true;
  sort(column:string){
    if(this.column==column )
    {
      this.order=!this.order;
    }else{
      this.order=true;
      this.column=column;
    }
  }

  ngOnInit() {
    this.serviceobj.fetchDetails();
    this.deptobj = this.serviceobj.getDetails();
  }
  }


