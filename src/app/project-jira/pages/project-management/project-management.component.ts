import { NotifierService } from './../../../_services/notifier.service';
import { AuthenticationService } from './../../../_services/auth.service';
import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectRESTService } from '../../services/project-rest.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {

  loading = false;

  projects!: Project[];

  constructor(
    private projectService: ProjectRESTService,
    private authService: AuthenticationService,
    private notifier: NotifierService) { }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(projects => {
      console.log(this.authService.currentUserValue)
      this.projects = projects;
    })
    // this.projectService.getAll().pipe(
    //   map(x => x),
    //   switchMap(x => x)
    // ).subscribe(x => {
    //   console.log(x)
    // })
  }

}
