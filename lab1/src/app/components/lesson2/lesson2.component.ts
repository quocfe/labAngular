import { Component, OnInit } from '@angular/core';

interface Inventor {
  id: number;
  first: string;
  last: string;
  year: number;
  passed: number;
}

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css'],
})
export class Lesson2Component implements OnInit {
  inventors!: Inventor[];
  constructor() {}

  ngOnInit() {
    this.inventors = [
      { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      {
        id: 6,
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543,
      },
    ];
  }
}
