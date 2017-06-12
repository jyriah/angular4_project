import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kLUYSpW-Z3PnKWIHEo-Oep2dUzbh-XnRuJ3WFR-EPrvEVDsvLA')

  ];

  constructor() { }

  ngOnInit() {
  }

}
