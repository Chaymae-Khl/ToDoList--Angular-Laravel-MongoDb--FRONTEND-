import { Component } from '@angular/core';
import { ListDataService } from '../Services/ListData/list-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { List } from '../Entities/list';

@Component({
  selector: 'app-list-componenent',
  templateUrl: './list-componenent.component.html',
  styleUrls: ['./list-componenent.component.css']
})
export class ListComponenentComponent {

  constructor(private listDataService:ListDataService,private http:HttpClient,private router: Router){}
  // lists:any;
  lists: List[] = []; // Assuming your data comes in an array
  title: any;
  titleup:any;
  id:any;
  ngOnInit(): void{
    this.getUserlist();
  }
  getUserlist(){
    // console.log('liste');
    this.listDataService.getData().subscribe((res:any) =>{
      // console.log(res);
      this.lists= res;
    })
  }
  logout() {
   
    localStorage.removeItem('sessionId');
    this.router.navigate(['/signIn-signUp']);

  }
  addList(){
    const title = {
      id:this.id,
      title: this.title
    };
    this.listDataService.addData(title).subscribe( (response: any)=> {
      // Refresh the list after successfully saving the data
      this.getUserlist();
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

  startEditing(list:any){
    list.editing = true;
  }

  
  saveList(list:any){
    this.listDataService.UpdateData(list.id, list).subscribe(
      (updatedList: any) => {
        // Update the list in your local array
        const index = this.lists.findIndex(item => item.id === updatedList.id);
        if (index !== -1) {
          this.lists[index] = updatedList;
          this.cancelEditing(updatedList); // Exit editing mode
        }
      },
      (error) => {
        console.error('Error updating list:', error);
      }
    );
  }
  


  cancelEditing(list:any){
    list.editing = false;
  }
}