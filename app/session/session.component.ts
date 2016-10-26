import { Component } from '@angular/core'

@Component({
  selector: 'rt-session',
  template: `
    <h1>Welcome to a new session of Rock Together</h1>
    <div>
      <rt-search-box></rt-search-box>
    </div>
    <div>
      <rt-top-list></rt-top-list>
    </div>
  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class SessionComponent {
}
