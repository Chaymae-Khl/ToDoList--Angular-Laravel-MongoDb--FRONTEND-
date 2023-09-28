import { Component } from '@angular/core';
import { ListDataService } from '../Services/ListData/list-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { List } from '../Entities/list';
import {OnInit, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-list-componenent',
  templateUrl: './list-componenent.component.html',
  styleUrls: ['./list-componenent.component.css']
})
export class ListComponenentComponent {

  constructor(private listDataService:ListDataService,private http:HttpClient,private router: Router, private cdRef: ChangeDetectorRef){}
  
  lists: any = []; // Assuming your data comes in an array
  title: any;
  titleup:any;
  user:any;
  ngOnInit(): void{
    this.getUserlist();
    this.getAuthUser();
  }
  getUserlist(){
    // console.log('liste');
    this.listDataService.getData().subscribe((res:any) =>{
      // console.log(res);
      console.log(res);
      this.lists= res;
    })
  }
  
  logout() {
   
    localStorage.removeItem('sessionId');
    this.router.navigate(['/signIn-signUp']);

  }

  getAuthUser(){
    // console.log('liste');
    this.listDataService.authUser().subscribe((res:any) =>{
      console.log(res);
      this.user= res;
    })

  }
  addList(){
    const title = {
      title: this.title
    };
    this.listDataService.addData(title).subscribe( (response: any)=> {
      // Refresh the list after successfully saving the data
      this.lists = [];
      this.title="";
      // Fetch the updated list from the server
      this.getUserlist();
  
      // Trigger change detection
      this.cdRef.detectChanges();
    });
 
  }

  deleteList(id:any){
    this.listDataService.deleteData(id).subscribe(
      response => {
        // Handle the response if needed
        this.getUserlist();
        console.log('Data deleted successfully.');
      },
      error => {
        // Handle the error if there's any
        console.error('Error while deleting data:', error);
      }
    );
  }
  
  selectedList: any = null; // Initialize as null when no item is selected for editing
  editList(list: any) {
    this.selectedList = list; // Select the list item for editing
  }


  
  updateList(list: any) {
    if (list._id) {
      // Update existing list
      console.log(list);
      this.listDataService.UpdateData(list._id,list)
        .subscribe((response) => {
          // Update the local list with the updated data from the response if needed
          this.selectedList = null; // Clear the selected item after updating
        });
    }
  }

  
}