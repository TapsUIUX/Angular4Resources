import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  @Input()
  clients:any[];

  constructor() {

   }

  ngOnInit() {

  }

}
