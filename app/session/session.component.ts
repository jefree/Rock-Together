import { Component } from '@angular/core'

@Component({
  selector: 'rt-session',
  template: `
    <h1>Welcome to a new session of Rock Together</h1>
    <rt-search-box></rt-search-box>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class SessionComponent {
}
