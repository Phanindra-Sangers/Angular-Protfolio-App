import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { UserStoreService } from '../services/user-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent {

  public users:any = [];

  public fullName : string = "";

  public role : string = "";

  constructor(private titleService: Title,  private auth: AuthService , private api : ApiService , private userStore: UserStoreService) {
  
    this.titleService.setTitle('Phani - Dashboard')
  
  }
  ngOnInit(){
    this.api.getUsers()
    .subscribe(res=>{
      this.users = res;
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
    })

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken
    })
  }

  logout(){
    this.auth.signOut();
  }

}
