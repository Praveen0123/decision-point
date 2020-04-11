import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  id: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let res = this.http.get("https://jsonplaceholder.typicode.com/users");
    res.subscribe((data)=>this.users =data);
  }
  userdata(id) {
   
    localStorage.setItem("id", id);
    console.log(id,"id")
  }

}





