import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  console = console;
  recipes:Recipe[] = [
new Recipe('A test recipe','This is a test','https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg')
  ];

  ngOnInit(): void {
  }

}
