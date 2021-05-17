import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

const baseUrl = `http://localhost:3000/api/projects`;

@Injectable({
  providedIn: 'root'
})



export class ProjectRESTService {


  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Project[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Project>(`${baseUrl}/${id}`);
  }

  create(params: Project) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: Project) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
