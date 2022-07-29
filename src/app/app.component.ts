import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'this is title';
  apidata:any=[];
  async ngOnInit(): Promise<void> {
    try{
      const response = await fetch("https://inshorts.deta.dev/news?category=", {
        "method": "GET",
        "headers": {}
      });
    
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        this.apidata = result.data;
      }
    } catch (err) {
      console.error(err);
    }

    console.log(this.apidata);
    
  }

  
}
