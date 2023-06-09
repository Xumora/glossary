import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-box',
  templateUrl: './word-box.component.html',
  styleUrls: ['./word-box.component.scss'],
})
export class WordBoxComponent {
  @Input() title!: string;
  @Input() description!: string;
  utternance!: SpeechSynthesisUtterance;

  textToSpeech(): void {
    let voices = speechSynthesis.getVoices();
    this.utternance = new SpeechSynthesisUtterance(this.title);
    const lang = localStorage.getItem('lang');
    if (lang && JSON.parse(lang) === 'en') {
      this.utternance.voice = voices[4];
    } else if (lang && JSON.parse(lang) === 'ru') {
      this.utternance.voice = voices[0];
    }
    speechSynthesis.speak(this.utternance);
  }

  showDescription(e: Event): void {
    const des = (e.target as HTMLElement).parentElement?.nextElementSibling;
    if (des?.classList.contains('show')) {
      des.classList.remove('show');
    } else {
      des?.classList.add('show');
    }
  }
}
