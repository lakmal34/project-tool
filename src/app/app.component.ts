import { Component } from '@angular/core';
import { Inject, Injectable} from '@angular/core';
import { DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dark: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document){}
  switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme')as HTMLLinkElement;
    if (themeLink) {
        themeLink.href = theme + 'css';
    }
  }
  
}
