import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  //Properties
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  inputValue: string = '';

  constructor(private courseservice: CoursesService) {}

  ngOnInit() {
    this.courseservice.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  //Metod för filtrering
  filterCourses(): void {
    this.filteredCourses = this.courses.filter(
      (course) =>
        course.coursename
          .toLowerCase()
          .includes(this.inputValue.toLowerCase()) ||
        course.code.toLowerCase().includes(this.inputValue.toLowerCase())
    );
  }

  //Metod för att sortera efter kurskod
  sortByCode(): void {
    this.filteredCourses.sort((a, b) => {
      if (a.code < b.code) return -1;
      if (a.code > b.code) return 1;
      return 0;
    });
  }

  //Metod för att sortera efter kursnamn
  sortByName(): void {
    this.filteredCourses.sort((a, b) => {
      if (a.coursename < b.coursename) return -1;
      if (a.coursename > b.coursename) return 1;
      return 0;
    });
  }

  //Metod för att sortera efter progression
  sortByProgression(): void {
    this.filteredCourses.sort((a, b) => {
      if (a.progression < b.progression) return -1;
      if (a.progression > b.progression) return 1;
      return 0;
    });
  }
}
