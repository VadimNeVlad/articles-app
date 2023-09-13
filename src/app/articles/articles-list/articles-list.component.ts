import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/shared/models/article';
import { ArticlesItemComponent } from '../articles-item/articles-item.component';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, ArticlesItemComponent],
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesListComponent {
  @Input() articles: Article[] = [];
  @Output() selectedArticle = new EventEmitter<string>();

  constructor() {}

  trackById(idx: number, article: Article): string {
    return article.id!;
  }

  onSelectArticle(id: string): void {
    this.selectedArticle.emit(id);
  }
}
