import { Component } from '@angular/core'

@Component({
  selector: 'rt-home',
  template: `
    <div class="container">
      <h1>Welcome to Rock Together</h1>
      <rt-session></rt-session>
    </div>
  `
})
export class HomeComponent {
}

