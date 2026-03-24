import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, HeroComponent, ServicesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fitvida-app';
}
