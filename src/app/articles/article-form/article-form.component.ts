import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Article } from 'src/app/shared/models/article';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-form',
  standalone: true,
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleFormComponent {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required],
  });

  @Output() submitArticle = new EventEmitter<Article>();
  @Output() close = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.form.valid) this.submitArticle.emit(this.form.value);
  }

  onClose(): void {
    this.close.emit();
  }
}
