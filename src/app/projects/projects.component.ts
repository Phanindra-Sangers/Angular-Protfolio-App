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

  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Phani - projects')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
