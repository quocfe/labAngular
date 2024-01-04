import { Component, OnInit } from '@angular/core';
interface Student {
  hoten: string;
  gioitinh: string;
  ngaysinh: string;
  anh: string;
  diemTB: number;
}

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css'],
})
export class Lesson1Component implements OnInit {
  title!: string;
  student!: Student;
  constructor() {}

  ngOnInit() {
    this.title = 'FPT POLYTECHNIC';
    this.student = {
      hoten: 'Le Van Teo',
      gioitinh: 'Nam',
      ngaysinh: '04/06/1998',
      anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5XV6rQXFBWwmQQz3SEcR_ncq2RfW7xIhFfzYifk4Wg&s',
      diemTB: 8.9,
    };
  }
}
