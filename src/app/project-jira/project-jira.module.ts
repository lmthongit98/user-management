import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectJiraRoutingModule } from './project-jira-routing.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { JiraDashboardComponent } from './_components/jira-dashboard/jira-dashboard.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';


@NgModule({
  declarations: [
    CreateProjectComponent,
    JiraDashboardComponent,
    ProjectManagementComponent
  ],
  imports: [
    CommonModule,
    ProjectJiraRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectJiraModule { }
