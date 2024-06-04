import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/layouts/post-card/post-card.component';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [CommonModule,PostCardComponent],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit {

  postsArray!: Array<object>;
  categoryObj: any;

  constructor(private route: ActivatedRoute, private postService: CategoriesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(val => {
      console.log(val);
      this.categoryObj = val;

      this.postService.loadCategoryPosts(val['id']).subscribe((post: any) => {
        this.postsArray = post;
      })
    })

  }

}
