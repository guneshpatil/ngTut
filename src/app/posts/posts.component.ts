import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;

  constructor(private postsData: DataService) { }

  ngOnInit() {
    this.postsData.getPosts().subscribe(
      postsData => this.posts$ = postsData
    )
  }

}
