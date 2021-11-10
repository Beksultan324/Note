import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tacos-baner',
  templateUrl: './tacos-baner.component.html',
  styleUrls: ['./tacos-baner.component.scss']
})
export class TacosBanerComponent implements OnInit {
  imagePath = '/assets/img/7fea83388861d299c0c7be382f86869f.jpg';
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
