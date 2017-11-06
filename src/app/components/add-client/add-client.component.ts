import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/Client';
//import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disableBalanceOnAdd:boolean = true ;

  constructor( private _router:Router , private _clientService : ClientService) { }

  ngOnInit(){
  }

  onSubmit(formdata){
    if(this.disableBalanceOnAdd){
      formdata.value.balance=0;
    }
    if(formdata.valid){
        console.log("inserted");
        this._clientService.insertClient(formdata.value);
        this._router.navigate(['/']);
    }else{
      console.log("Invalid Form Data")
    }
  }

}
