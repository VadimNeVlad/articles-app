import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-articles-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesItemComponent {
  @Input() article!: Article;
  @Output() selectedArticle = new EventEmitter<string>();

  constructor() {}

  onSelectArticle(id: string): void {
    this.selectedArticle.emit(id);
  }
}
