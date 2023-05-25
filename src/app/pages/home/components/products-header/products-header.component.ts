import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.components.html",
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = "desc";
  itemsCount = 12;
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onItemsUpdated(newCount: number): void {
    this.itemsCount = newCount;
  }
  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChange.emit(colsNumber);
  }
}
