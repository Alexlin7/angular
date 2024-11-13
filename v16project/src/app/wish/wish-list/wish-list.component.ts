import { WishItem } from '../../../shared/models/wishItem';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes : WishItem[] = [];
}
