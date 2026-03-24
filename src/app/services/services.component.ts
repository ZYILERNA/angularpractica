import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HeroCardComponent } from '../hero-card/hero-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, HeroCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { title: 'Yoga', description: 'Encuentra tu centro y mejora tu flexibilidad.', price: '€40/mes' },
    { title: 'Pilates', description: 'Fortalece tu core y mejora tu postura.', price: '€45/mes' },
    { title: 'CrossFit', description: 'Entrenamiento de alta intensidad.', price: '€55/mes' }
  ];
}
