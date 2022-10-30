import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'clientes', url: '/clientes', icon: 'people' },
    { title: 'usuarios', url: '/usuarios', icon: 'people' },
    { title: 'lugares', url: '/lugares', icon: 'airplane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
