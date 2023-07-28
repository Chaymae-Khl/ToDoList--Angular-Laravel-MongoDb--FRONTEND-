import { Component } from '@angular/core';
import { ListDataService } from '../Services/ListData/list-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-componenent',
  templateUrl: './list-componenent.component.html',
  styleUrls: ['./list-componenent.component.css']
})
export class ListComponenentComponent {

  constructor(private listDataService:ListDataService,private http:HttpClient,private router: Router){}
  lists:any;
  title: any;
  ngOnInit(): void{
    this.getUserlist();
  }
  getUserlist(){
    // console.log('liste');
    this.listDataService.getData().subscribe((res:any) =>{
      console.log(res);
      this.lists= res;
    })
  }
  logout() {
   
    localStorage.removeItem('sessionId');
    this.router.navigate(['/signIn-signUp']);

  }
  addList(){
    const title = {
      
      title: this.title,
      
    };
    this.listDataService.addData(title).subscribe(() => {
      // Refresh the list after successfully saving the data
      this.title = '';
      this.getUserlist();
    });
   
  }
}
