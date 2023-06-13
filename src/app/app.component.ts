import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public channels: Array<{ name: string, countNotification: number }> = [
    { name: 'Code Helpers', countNotification: 12 },
    { name: 'Familia do Negrel', countNotification: 99 },
    { name: 'Open AI', countNotification: 123  },
    { name: 'Geração Tecnologias', countNotification: 1 },
    { name: 'The Girls', countNotification: 0 },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentRoute(routeName: string): boolean {
    return (this.router.url === routeName)
  }
}
