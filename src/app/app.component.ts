import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InterPolationBindingComponent} from "./inter-polation-binding/inter-polation-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterPolationBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
