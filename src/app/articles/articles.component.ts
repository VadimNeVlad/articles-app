import { Component, OnInit } from '@angular/core';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../shared/services/article.service';
import { Article } from '../shared/models/article';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { Observable } from 'rxjs';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  imports: [
    CommonModule,
    ArticleFormComponent,
    MatButtonModule,
    ArticlesListComponent,
    ArticleComponent,
  ],
})
export class ArticlesComponent implements OnInit {
  articles$ = new Observable<Article[]>();

  open = false;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  toggleOpenStatus(): void {
    this.open = !this.open;
  }

  createArticle(article: Article): void {
    this.articleService.createArticle(article);
    this.open = false;
  }

  getArticle(id: string): void {
    this.articleService.getArticle(id);
  }
}
