import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project-card';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  terraform: boolean = false;
  kubernetes: boolean = false;
  angular: boolean = false;
  aws: boolean = false;
  container: boolean = false;
  devops: boolean = false;
  docker: boolean = false;
  filtering: boolean = false;

  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Phani - projects')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {

    let filterTags: Tag[] = [];
    if ( this.terraform) { 
      filterTags.push(Tag.TERRAFORM);
    }
    if ( this.kubernetes) { 
      filterTags.push(Tag.KUBERNETES);
    }
    if ( this.angular) { 
      filterTags.push(Tag.ANGULAR)
    }
    if ( this.container) { 
      filterTags.push(Tag.CONTAINERS)
    }
    if(this.devops) {
      filterTags.push(Tag.DEVOPS)
    }
    if(this.aws || this.container || this.devops || this.kubernetes || this.terraform || this.angular) {

      this.filtering = true; 
    }
    else{ 
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() { 
    this.terraform = false;
    this.kubernetes = false;
    this.angular = false;
    this.devops = false;
    this.container = false;
    this.aws = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
         
  }
}