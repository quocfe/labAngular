import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Blog } from 'src/app/entities/blog';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css'],
})
export class ProductListComponent implements OnInit {
  blog!: Blog;
  blogEdit!: Blog;
  listBlog!: Blog[];
  url = 'http://localhost:3000/v1/api/blog';
  isEdit = false;
  idEdit!: string;

  constructor(private rest: RestApiService) {
    this.blog = new Blog();
  }

  ngOnInit() {
    this.loadCotent();
  }

  async loadCotent() {
    const response = await this.rest.get(this.url);
    this.listBlog = (response as { data: Blog[] }).data;
  }

  async addorupdate(isUpdate: boolean) {
    try {
      if (isUpdate) {
        const newBlog = {
          title: this.blog.title,
          content: this.blog.content,
        };

        await this.rest.put(`${this.url}/update`, this.idEdit, newBlog);
        this.reset();
      } else {
        await this.rest.post(`${this.url}/add`, this.blog);
        this.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onDelete(id: string) {
    await this.rest.delete(this.url, id);
    this.loadCotent();
  }

  async onEdit(params: Blog) {
    console.log('params', params);
    this.isEdit = true;
    this.idEdit = params._id;
    this.blog = { ...params };
  }

  onCancel() {
    this.reset();
  }

  reset() {
    this.loadCotent();
    this.blog = new Blog();
    this.isEdit = false;
  }
}
