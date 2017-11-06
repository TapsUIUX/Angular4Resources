import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  // property
  clients: any[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
    this.clients = clients;
      this.getTotalOwed();
    }
    )
  }


  getTotalOwed() {
    this.totalOwed = this.clients.reduce((acc, el, id, arr) => {    //console.log(el.balance, acc)
      return acc = acc + Number(el.balance)
    }, 0);
    // console.log(this.totalOwed)
  }


}
