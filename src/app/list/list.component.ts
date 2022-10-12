import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewQuotes().subscribe(
      (data)=>{
        this.quoteData=data
      }
    )
  }

  quoteData:any={}

  ngOnInit(): void {
  }

}
