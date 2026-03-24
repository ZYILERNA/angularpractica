import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background-color: #2E7D32; color: white; padding: 20px; text-align: center; margin-top: 40px;">
      <p>&copy; {{ year }} FitVida Wellness Studio. Todos los derechos reservados.</p>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
