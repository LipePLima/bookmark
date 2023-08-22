import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './headerMQ.component.scss']
})

export class HeaderComponent {
  public logo: string    = "../../assets/images/logo-bookmark.svg";
  public menu: string    = "../../assets/images/icon-hamburger.svg";
  public isOpen: boolean = false;

  constructor() {
    this.updateIsOpenBasedOnScreenWidth();
    window.addEventListener('resize', this.updateIsOpenBasedOnScreenWidth.bind(this));
  }

  public updateIsOpenBasedOnScreenWidth() {
    const newIsOpen = window.innerWidth >= 768;

    if (this.isOpen !== newIsOpen) {
      this.isOpen = newIsOpen;
    }
  }

  public openMenu() {
    this.isOpen = !this.isOpen;
    this.updateLogoAndMenu();
  }

  private updateLogoAndMenu() {
    this.menu = this.isOpen
      ? "../../assets/images/icon-close.svg"
      : "../../assets/images/icon-hamburger.svg";

    this.logo = this.isOpen
      ? "../../assets/images/logo-bookmark-menu.svg"
      : "../../assets/images/logo-bookmark.svg";
  }
}

