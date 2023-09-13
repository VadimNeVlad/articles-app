import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/article';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>([]);

  constructor(private tostr: ToastrService) {}

  getArticles(): Observable<Article[]> {
    const articles = JSON.parse(localStorage.getItem('articles')!);
    this.articles$.next(articles);
    return this.articles$.asObservable();
  }

  getArticle(id: string): Article {
    const article = this.articles$
      .getValue()
      .find((article) => article.id === id);

    return article!;
  }

  createArticle(article: Article): void {
    const newArticle: Article = {
      id: Math.random().toString(16),
      ...article,
    };

    const updatedArticle: Article[] = [
      ...this.articles$.getValue(),
      newArticle,
    ];

    this.articles = updatedArticle;
    this.tostr.success('Article added successfully');
  }

  set articles(articles: Article[]) {
    this.articles$.next(articles);
    localStorage.setItem('articles', JSON.stringify(articles));
  }
}
