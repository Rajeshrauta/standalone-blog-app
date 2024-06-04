import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray!: Array<object>;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {

    this.categoryService.loadData().subscribe((val: any) => {
      this.categoryArray = val;
    })

  }
}
