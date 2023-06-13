import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
})
export class NavSideBarComponent {
  public channels: Array<{ id: string, name: string, countNotification: number }> = [
    { id: '1094407116946685992', name: 'Code Helpers', countNotification: 12 },
    { id: '1094407116946685000', name: 'Familia do Negrel', countNotification: 99 },
    { id: '1094407116946686000', name: 'Open AI', countNotification: 123  },
    { id: '1094407116946687000', name: 'Geração Tecnologias', countNotification: 1 },
    { id: '1094407116946688000', name: 'The Girls', countNotification: 0 },
  ]

  constructor(private router: Router) { }

  public getCurrentRoute(routeName: string): boolean {
    return (this.router.url === routeName)
  }

  public openServer(id: string): void {
    this.router.navigate(['/channels', id])
  }

  public getCountNotificationFormatte(count: number): number | string {
    return count > 99 ? '99+' : count
  }
}
