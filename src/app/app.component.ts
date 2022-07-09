import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngualrHttpServcies';

  constructor(public httpServcie: HttpClient) {}

  //Loading event // Initlization

  Customers: any = [];
  ngOnInit(): void {
    this.httpServcie
      .get('https://jsonplaceholder.typicode.com/posts') // fake api  anohter website no authterzaiion
      .subscribe((response) => {
        console.log(response);
      });

    this.httpServcie
      .get('https://api.firstamedu.com/api/api/class/AllStates', {
        headers: {
          authority: 'api.firstamedu.com',
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIxZDZmYjhmMC1lMTFkLTQ1YzEtYjcyOS01NjUxYzVkMjZlMTciLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODhjNDE5ZDctZjI1Ni00MDk5LTg0MmQtMzQ3ZGZhMWEwYmRmL3YyLjAiLCJpYXQiOjE2NTczNDg0NTIsIm5iZiI6MTY1NzM0ODQ1MiwiZXhwIjoxNjU3MzUyMzUyLCJhaW8iOiJFMlpnWUhBSnV5cTlsbEVuWVl0eCtrbzFsbFlMQUE9PSIsImF6cCI6IjgyYzQ4OTU3LTc3ZDEtNGQxZi04OGRkLWQ4Mjc4YjQyODc1NSIsImF6cGFjciI6IjEiLCJvaWQiOiJkNmU0YjM0Yy0xZTMyLTQ1ZmItOTIzYy04MmVhYTFlYjI0ZGQiLCJyaCI6IjAuQVJZQTF4bkVpRmJ5bVVDRUxUUjktaG9MM19DNGJ4MGQ0Y0ZGdHlsV1VjWFNiaGNXQUFBLiIsInN1YiI6ImQ2ZTRiMzRjLTFlMzItNDVmYi05MjNjLTgyZWFhMWViMjRkZCIsInRpZCI6Ijg4YzQxOWQ3LWYyNTYtNDA5OS04NDJkLTM0N2RmYTFhMGJkZiIsInV0aSI6Il93T3ZOQTdTcjBPZTBuYk9zWndSQUEiLCJ2ZXIiOiIyLjAifQ.TU3bJYwYXQerOWdc_ykC4VokTtd7tbIDehXMHCaOR2BxA3SvNO2lkwc6roBApGaPZxjhGFAcdvdOHlFyrNIu-wm71OAb3xHB7Lnof8HYSuktQyWfPOiE1ZW4uIfxBm7Zr2M5TdACfh8AEeEMpSw3B_3gC5Ihqq2EMpxprgJTcKK3EfYSvzS92CSZ6FW5U_LfnOsoTbcovyOrF0n1f_tkbybhtY-MM3bziwk_m4UavPz57p3lWLsuuww1D129LU2xdIwaQjXU_JvCymGIMU63-TKhZ4GSK_5KS_WB3s0A8701ttWimSm2WvUmZgZVydyA7kStzxsAavBgdsWwFBl63Q',
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          cookie:
            'EDUackCCPA=accepted; igre.expiryTime=1657350549859; prod_auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIxZDZmYjhmMC1lMTFkLTQ1YzEtYjcyOS01NjUxYzVkMjZlMTciLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vODhjNDE5ZDctZjI1Ni00MDk5LTg0MmQtMzQ3ZGZhMWEwYmRmL3YyLjAiLCJpYXQiOjE2NTczNDg0NTIsIm5iZiI6MTY1NzM0ODQ1MiwiZXhwIjoxNjU3MzUyMzUyLCJhaW8iOiJFMlpnWUZnVG9DZjNyK2V1T0hzRTA1eVhiMEtuQXdBPSIsImF6cCI6IjgyYzQ4OTU3LTc3ZDEtNGQxZi04OGRkLWQ4Mjc4YjQyODc1NSIsImF6cGFjciI6IjEiLCJvaWQiOiJkNmU0YjM0Yy0xZTMyLTQ1ZmItOTIzYy04MmVhYTFlYjI0ZGQiLCJyaCI6IjAuQVJZQTF4bkVpRmJ5bVVDRUxUUjktaG9MM19DNGJ4MGQ0Y0ZGdHlsV1VjWFNiaGNXQUFBLiIsInN1YiI6ImQ2ZTRiMzRjLTFlMzItNDVmYi05MjNjLTgyZWFhMWViMjRkZCIsInRpZCI6Ijg4YzQxOWQ3LWYyNTYtNDA5OS04NDJkLTM0N2RmYTFhMGJkZiIsInV0aSI6ImZiQVRLRHVpWjB5Mzd5NEJZelFTQUEiLCJ2ZXIiOiIyLjAifQ.ZetZ3wAfMsZdQqLK6a4rEOUNh91o19C7PBEz1Pv5Csz29VSPZAnEsolSKiGO3gD0wiuYOp8yddBJxofLLINtkUXQK4H2W4XOnsYjg3nvNpEhAESnCEYN5ZuzIHyzYWPeTLUg6N6u2bgIODxu-cIxrKvXpFgJhFN3Lon2pa2bPyc433AgEX0mwO_keQW96zW9rv_uQTEJBlnEeEilADxcNJtjc47OTK0SpsMX6nTmht9k3VfAcCl0ssieWnfFaNMkWjVcii_C7Q7GtlIpD6FsDb4zPT8WwUU3CuqbZWN11UAWDDHYuIuDi7YYYlPyF55B9oiBnsbZQmqFZP_DTnTA8Q',
        },
      }) // cost api anoterh webbsite autherization
      .subscribe((response) => {
        console.log(response);
      });

    let userEmailID = 'madan.patakota@gmail.com';
   

    this.httpServcie
      .get('http://localhost:3000/Customers') // My api from my laptop from my machine no autherzation.
      .subscribe((response) => {
        this.Customers = response;
      });

    // that intention you are passing the data...
  }

  // i am creating the new record...
  evtSubmit() {
    this.httpServcie
      .post('http://localhost:3000/Customers', {
        CustomerID: Math.floor(2),
        CompanyName: 'Globallogic',
        ContactName: Math.random() + 'Name',
        Address: 'Marthalli',
        ContactTitle: 'develper',
      }) // My api from my laptop from my machine no autherzation.
      .subscribe((response) => {
        this.Customers = response;
      });
  }

  //i am updating existing record based on the id
  //put  == update == edit
  userUpdate(record: any) {
    if (record)
      this.httpServcie
        .put('http://localhost:3000/Customers/' + record.id, {
          CustomerID: record.CustomerID,
          CompanyName: record.CompanyName + 'updated',
          ContactName: record.ContactName + 'updated',
          Address: record.Address + 'updated',
          ContactTitle: record.ContactTitle + 'updated',
        }) // My api from my laptop from my machine no autherzation.
        .subscribe((response) => {
          this.httpServcie
            .get('http://localhost:3000/Customers') // My api from my laptop from my machine no autherzation.
            .subscribe((response) => {
              this.Customers = response;
            });
        });
  }

  userDelete(record: any) {
    this.httpServcie
      .delete('http://localhost:3000/Customers/' + record.id)
      .subscribe((resposne) => {
        this.httpServcie
          .get('http://localhost:3000/Customers') // My api from my laptop from my machine no autherzation.
          .subscribe((response) => {
            this.Customers = response;
          });
      });
  }
}

//crud
//post
//get
//put
//delete

// i am designging server(json server) in my local machine

//website : jsonplaceholder.typicode.com
//Api :

//concept : first i have to connect to this api after that
//so then i can receive the data...

//https://api.firstamedu.com/api/api/class/AllStates
//.net core

//API

//https://api.firstamedu.com
//url

// google.com
// techmahindra.com
// globallogic.com/
//https://api.firstamedu.com/api/api/class/AllStates
//1. firstam server(firstamedu.com) // it hosted in US

// i will take my localmachine then i will take the json server.
