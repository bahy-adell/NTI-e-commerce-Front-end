import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestsellerComponent } from '../bestseller/bestseller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet ,BestsellerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
