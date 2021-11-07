import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss'],
  providers: [DataService, LogService]
})
export class ChildCompComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }
}
