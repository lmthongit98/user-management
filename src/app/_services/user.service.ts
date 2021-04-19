import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { MatSnackBar } from '@angular/material/snack-bar';




const baseUrl = `http://localhost:3000/api/users`;

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  private usersUrl = 'http://localhost:3000/users';  // URL to web api


  getAll() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }





  //notification of angular material
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['background-green'] // success
      // panelClass: ['background-red'] // error
    });
  }


  notify(message: string, action: string) {
    this.openSnackBar(message, action);
  }
}
