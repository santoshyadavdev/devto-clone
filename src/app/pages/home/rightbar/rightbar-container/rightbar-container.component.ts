import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbar-container',
  templateUrl: './rightbar-container.component.html',
  styleUrls: ['./rightbar-container.component.scss'],
})
export class RightbarContainerComponent implements OnInit {
  asideTags = ['news', 'help', 'discuss', 'challenge', 'meta'];
  constructor() {}

  ngOnInit(): void {}
}
