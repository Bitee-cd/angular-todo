import { Component } from "@angular/core";
const ROW_HEIGT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: `./home.component.html`,
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROW_HEIGT[this.cols];
  category: string | undefined = "shoes";
  onColsChange(cols: number): void {
    this.cols = cols;
    this.rowHeight = ROW_HEIGT[this.cols];
  }
  onCategoryChange(newCategory: string): void {
    this.category = newCategory;
  }
}
