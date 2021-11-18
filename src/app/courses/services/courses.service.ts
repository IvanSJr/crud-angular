import { Injectable } from '@angular/core';
import { Course } from "../model/course";
import {HttpClient} from "@angular/common/http";
import {delay, first, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/acourses.json';

  constructor(private httpClient: HttpClient) { }

  // Retorna uma lista de cursos
  public findAll() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(3000),
        tap(courses => console.log(courses))
      );
  }

}
