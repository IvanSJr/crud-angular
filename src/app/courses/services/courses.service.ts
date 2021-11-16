import { Injectable } from '@angular/core';
import { Course } from "../model/course";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  // Retorna uma lista de cursos
  public findAll(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Java 11', category: 'back-end'},
      {_id: '3', name: 'Spring Boot', category: 'back-end'},
    ];
  }

}
