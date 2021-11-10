import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-baner',
  templateUrl: './pizza-baner.component.html',
  styleUrls: ['./pizza-baner.component.scss'],
})
export class PizzaBanerComponent implements OnInit {
  imagePath = '/assets/img/27595339-.jpg';
  title = 'Pizza advertising banner';

  constructor() {}

  ngOnInit(): void {}
}
