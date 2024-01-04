import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';

const routes: Routes = [
  { path: 'lesson1', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
