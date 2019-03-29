import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  search="something";
  constructor() { }

  ngOnInit() {
  }
  
  onSearch(username : string){
    console.log(`Searching for ${username}`)
    //API
    const url =environment.apiUrl+'/users/'+username+'/repo?access_token='+environment.access_token; 
    //http.get(url)


  }


}
