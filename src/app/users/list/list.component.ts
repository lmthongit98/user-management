import { Component, OnInit, Inject } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { NotifierService } from 'src/app/_services/notifier.service';
import { Alert, Notification } from 'src/app/_models/notification';
import { ConfirmComponent } from '../confirm/confirm.component';



@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users!: User[];
  loading!: Boolean;

  constructor(private userService: UserService, public dialog: MatDialog, private notifier: NotifierService) { }

  ngOnInit() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    this.loading = true;
    const user = this.users.find(x => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => {
        setTimeout(() => {
          this.users = this.users.filter(x => x.id !== id)
          this.userService.notify("Deleted user successfully!", "DELETE")
        }, 500)
      })
      .add(() => setTimeout(() => {
        this.loading = false;
      }, 500));
  }

  openDialog(id: any, action: any = 'add-edit'): void {
    if(action === 'delete'){
      const dialogRef = this.dialog.open(ConfirmComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteUser(id);
        }
      });
    }else{
      const dialogRef = this.dialog.open(AddEditComponent, { data: id });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const { isAddMode, id, user } = result;
          if (isAddMode) {
            this.createUser(user);
          } else {
            this.updateUser(id, user);
          }

        }
      });
    }

  }


  private createUser(user: any) {
    this.loading = true;
    this.userService.create(user)
      .pipe(first())
      .subscribe(() => {
        setTimeout(() => {
          this.userService.getAll()
            .pipe(first())
            .subscribe(users => {
              this.users = users;
              this.userService.notify("Added user successfully!", "ADD")
            });
        }, 500)
      })
      .add(() => setTimeout(() => {
        this.loading = false;
      }, 500));
  }


  private updateUser(id: any, user: any) {
    this.loading = true;
    this.userService.update(id, user)
      .pipe(first())
      .subscribe(() => {
        setTimeout(() => {
          this.userService.getAll()
            .pipe(first())
            .subscribe(users => {
              this.users = users;
              // this.userService.notify("Updated user successfully!", "UPDATE")
              this.notifier.show(new Notification(Alert.SUCCESS, 'Updated Successfully!', 2000));
            });
        }, 500)
      }, error => {
        this.notifier.show(new Notification(Alert.ERROR, error.message, 2000));
      })
      .add(() => setTimeout(() => {
        this.loading = false;
      }, 500));

  }


}
