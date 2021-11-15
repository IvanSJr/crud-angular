import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'},
    {_id: '2', name: 'Java 11', category: 'back-end'},
    {_id: '3', name: 'Spring Boot', category: 'back-end'},
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = [];
  }

  ngOnInit(): void {

  }
}
