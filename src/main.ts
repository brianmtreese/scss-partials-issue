import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-test-component></app-test-component>
  `,
  imports: [TestComponentComponent]
})
export class App {
}

bootstrapApplication(App); 
