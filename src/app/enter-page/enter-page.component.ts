import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: ['./enter-page.component.scss'],
})
export class EnterPageComponent implements OnInit {
  title!: string;
  btn!: string;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && JSON.parse(savedLang) === 'en') {
      this.title = 'Glossary for machine learning';
      this.btn = 'Start';
    } else if (savedLang && JSON.parse(savedLang) === 'ru') {
      this.title = 'Глоссарий для машинного обучения';
      this.btn = 'Начать';
    }

    this.service.langValue.subscribe((lang) => {
      if (lang === 'en') {
        this.title = 'Glossary for machine learning';
        this.btn = 'Start';
      } else if (lang === 'ru') {
        this.title = 'Глоссарий для машинного обучения';
        this.btn = 'Начать';
      }
    });
  }

  hideEnterPage(): void {
    const page = document.querySelector('.enter-page');
    page?.classList.add('hide');
  }
}
