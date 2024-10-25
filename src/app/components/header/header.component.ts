import { Component } from '@angular/core';
import { InputDirective } from '../input.directive';
import { MatIconModule } from '@angular/material/icon';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputDirective, MatIconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchService.setSearchTerm(inputElement.value);
  }
}
