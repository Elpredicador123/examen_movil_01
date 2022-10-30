import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'register', url: '/register', icon: 'log-in' },
    { title: 'usuarios', url: '/usuarios', icon: 'people' },
  ];
  constructor() {}
}
