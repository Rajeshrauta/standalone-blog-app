import { Routes } from '@angular/router';
import { Route } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';

//export const routes: Routes = [];
export const routes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'category/:category/:id', component: SingleCategoryComponent },
    { path: 'post/:id', component: SinglePostComponent },

    { path: 'about', component: AboutUsComponent },
    { path: 'term-conditions', component: TermsAndConditionComponent },
    { path: 'contact', component: ContactUsComponent }
];