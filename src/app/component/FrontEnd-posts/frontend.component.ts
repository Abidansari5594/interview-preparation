import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-populars-posts',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontEndComponent implements OnInit {

  frontEndPostArray: Array<any> = [];
  loading: boolean = false;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.loading = true;

    this.postService.loadFrontEndPost().subscribe(
      data => {
        this.frontEndPostArray = data;
      },
      error => {
        console.error('Error loading front end posts:', error);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
