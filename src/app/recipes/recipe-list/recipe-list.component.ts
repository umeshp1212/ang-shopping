import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Alexa Single-Seater Sofa','Teak Veneer in Clear Stained High Gloss Lamination','http://erpwebservice.della.in:81/dellastore/ProductImages/HOME52603_107.jpg'),
    new Recipe('Leora Single-Seater Sofa','Decorated with Golden Rectangular Buttons. Body covered in plush fabric in Kamilla Snow colour. Legs in Lion Carving Finished in Gold Gilding','http://erpwebservice.della.in:81/dellastore/ProductImages/HOME52620_172.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
