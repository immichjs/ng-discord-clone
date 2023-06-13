import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-tooltip',
  templateUrl: './generic-tooltip.component.html',
})
export class GenericTooltipComponent {
  @Input() public message: string | undefined
}
