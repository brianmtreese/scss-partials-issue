import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  standalone: true
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}