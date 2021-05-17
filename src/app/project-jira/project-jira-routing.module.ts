import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { JiraDashboardComponent } from './_components/jira-dashboard/jira-dashboard.component';

const routes: Routes = [
  {
    path: '', component: JiraDashboardComponent,
    children: [
      {
        path: 'createProject', component: CreateProjectComponent
      },
      {
        path: 'manageProject', component: ProjectManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectJiraRoutingModule { }
