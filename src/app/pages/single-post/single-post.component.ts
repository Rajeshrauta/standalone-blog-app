import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommentFormComponent, CommentListComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostArray!: Array<object>;

  constructor(private route: ActivatedRoute, private postService: CategoriesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(val => {

      this.postService.countViews(val['id']);

      this.postService.loadOnePost(val['id']).subscribe((post: any) => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    })
  }

  loadSimilarPost(catId: any) {
    this.postService.loadSimilar(catId).subscribe((val: any) => {
      this.similarPostArray = val;
    })
  }
}
