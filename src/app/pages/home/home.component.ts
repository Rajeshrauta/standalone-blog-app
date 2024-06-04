import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from 'src/app/layouts/post-card/post-card.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredPostsArray!: Array<object>;
  latestPostsArray!: Array<object>;

  constructor(private postService: CategoriesService) {
  }

  ngOnInit(): void {

    this.postService.loadFeatured().subscribe((val: any) => {
      this.featuredPostsArray = val;
      console.log(this.featuredPostsArray);
    });

    this.postService.loadLatest().subscribe((val: any) => {
      this.latestPostsArray = val;
    })


  }

}
