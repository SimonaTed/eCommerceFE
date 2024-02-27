import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  siglaValue: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.siglaValue.trim() !== '') {
      const url = '/elenco-risultati/' + encodeURIComponent(this.siglaValue);
      this.router.navigateByUrl(url);
    }
  }

  queries: string[] = ['Query al Database', 'Query al Database',
  'Query al Database', 'Query al Database'];

// Esempio di gestione del ridimensionamento della finestra
@HostListener('window:resize', ['$event'])
onResize() {
// Puoi inserire qui la logica per gestire il ridimensionamento della finestra se necessario
}
}
