import { Component, OnInit } from '@angular/core';
import { Piatto } from '../@models/menu';
import { MenuService } from '../@services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  filterText: string = '';

  piatti: Piatto[] = [];
  filteredPiatti: Piatto[] = [];
  categories: string[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    const getMenuObservable = this.menuService.getMenu();

    getMenuObservable.subscribe({
      next: (piatti) => {
        this.categories = [...new Set(piatti.map(x => x.category))];
        this.piatti = piatti;
        this.applyFilter();
      },
    });
  }

  getSectionData(category: string) {
    return this.filteredPiatti.filter(x => x.category === category);
  }

  applyFilter() {
    this.filteredPiatti = this.piatti.filter((x) =>
      x.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
      x.description.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

}