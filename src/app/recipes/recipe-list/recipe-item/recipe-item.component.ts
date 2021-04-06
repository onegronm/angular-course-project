import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeElement') recipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit(): void {
  }
}

