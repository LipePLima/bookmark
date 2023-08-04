import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public logo: string    = "../../assets/images/logo-bookmark.svg";
  public menu: string    = "../../assets/images/icon-hamburger.svg"
  public isOpen: boolean = false;

  public openMenu() {
    this.isOpen = !this.isOpen;

    this.menu = (this.menu === "../../assets/images/icon-hamburger.svg")
      ? "../../assets/images/icon-close.svg"
      : "../../assets/images/icon-hamburger.svg";

    this.logo = (this.logo === "../../assets/images/logo-bookmark.svg")
      ? "../../assets/images/logo-bookmark-menu.svg"
      : "../../assets/images/logo-bookmark.svg";
  }
}
