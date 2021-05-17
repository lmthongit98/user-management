import { Alert, Notification } from './../../../_models/notification';
import { NotifierService } from './../../../_services/notifier.service';
import { User } from './../../../_models/user';
import { AuthenticationService } from 'src/app/_services/auth.service';
import { Project } from './../../models/project';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup } from "@angular/forms";

import { Validators, Editor, Toolbar } from "ngx-editor";


import { toHTML } from 'ngx-editor';
import { toDoc } from 'ngx-editor';
import { ProjectRESTService } from "../../services/project-rest.service";


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  currentUser!: User;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectRESTService,
    private authService: AuthenticationService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.currentUser = this.authService.currentUserValue;
  }


  editor!: Editor;
  // toolbar: Toolbar = [
  //   ["bold", "italic"],
  //   ["underline", "strike"],
  //   ["code", "blockquote"],
  //   ["ordered_list", "bullet_list"],
  //   [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
  //   ["link", "image"],
  //   ["text_color", "background_color"],
  //   ["align_left", "align_center", "align_right", "align_justify"]
  // ];


  form = this.formBuilder.group({
    projectName: ['', [Validators.required]],
    description: ['', [Validators.required]],
    categoryId: ['', [Validators.required]]
  })

  onSubmit() {
    this.projectService.create({ ...this.form.value, creator: this.currentUser, members: [] } as Project)
    .subscribe(result => {
      this.notifier.show(new Notification(Alert.SUCCESS, 'Add Project Successfully!', 2000));
    },
      err => {
        this.notifier.show(new Notification(Alert.ERROR, 'Add Failed Project: ' + err.message, 2000));
      }
    )

  }



  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
