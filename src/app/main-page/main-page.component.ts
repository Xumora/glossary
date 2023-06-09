import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { enWords, ruWords, Word } from './main-page.words';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  words: Word[] = [];
  searchWord = '';
  lang!: string;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.lang = JSON.parse(savedLang);
      this.service.langValue.next(savedLang);
    } else {
      localStorage.setItem('lang', JSON.stringify('en'));
      this.lang = 'en';
      this.service.langValue.next('en');
    }

    this.setWords();
  }

  setWords(): void {
    if (this.lang === 'en') {
      this.words = enWords;
    } else if (this.lang === 'ru') {
      this.words = ruWords;
    }
  }

  hideMainPage(): void {
    const page = document.querySelector('.enter-page');
    page?.classList.remove('hide');
  }

  setSearchWord(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.searchWord = input.value;
  }

  search(): void {
    if (this.lang === 'en') {
      this.words = enWords.filter((word) =>
        word.title
          .toLocaleLowerCase()
          .includes(this.searchWord.toLocaleLowerCase())
      );
    } else if (this.lang === 'ru') {
      this.words = ruWords.filter((word) =>
        word.title
          .toLocaleLowerCase()
          .includes(this.searchWord.toLocaleLowerCase())
      );
    }
  }

  cancelSearch(): void {
    this.setWords();
    this.searchWord = '';
  }

  setLang(lang: string): void {
    this.lang = lang;
    localStorage.setItem('lang', JSON.stringify(lang));
    this.service.langValue.next(lang);
    this.setWords();
  }
}
