import { Component } from '@angular/core';
import { Example2Component } from '../../shared/components/example-2/example-2.component';

@Component({
  selector: 'app-page-b-b-b',
  standalone: true,
  imports: [
    Example2Component
  ],
  templateUrl: './page-b-b-b.component.html',
  styleUrl: './page-b-b-b.component.css'
})
export class PageBBBComponent {

}
