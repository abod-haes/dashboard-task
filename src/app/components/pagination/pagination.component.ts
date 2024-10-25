import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconButtonDirective } from '../icon-button.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [IconButtonDirective, MatIconModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() totalItems: number = 0; // Total number of items
  @Input() itemsPerPage: number = 10; // Items per page
  @Input() currentPage: number = 1; // Current page
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
