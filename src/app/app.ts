import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="app-size">
      <h1>{{title}}</h1>

      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {
  protected title = 'Trivia Game';
}
