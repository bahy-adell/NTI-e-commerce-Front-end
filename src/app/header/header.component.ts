import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {  }
  logout() {
    this._AuthService.logout();
    this._Router.navigate(['/login'])
  }
  ngOnInit(): void {
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue() !== null) { this.isLogin = true }
      else { this.isLogin = false }
    })
  }
}
