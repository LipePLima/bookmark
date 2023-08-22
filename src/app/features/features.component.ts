import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss', './featuresMQ.component.scss']
})
export class FeaturesComponent {
  public isClickedList: boolean[] = [true, false, false];
  public currentItemIndex: number = 0;
  public isAnimationActive: boolean = false;
  public contentList = [
    {
      img: "../../assets/images/illustration-features-tab-1.svg",
      title: "Bookmark em um clique",
      text: "Organize seu marcador como quiser. Nossa interface simples de arrastar e soltar oferece controle total sobre como você gerencia seus sites favoritos."
    },
    {
      img: "../../assets/images/illustration-features-tab-2.svg",
      title: "Pesquisa Inteligente",
      text: "Nosso poderoso recurso de pesquisa irá ajudá-lo a encontrar sites salvos em pouco tempo. Não há necessidade de vasculhar todos os seus bookmaks."
    },
    {
      img: "../../assets/images/illustration-features-tab-3.svg",
      title: "Compartilhe seus favoritos",
      text: "Compartilhe facilmente seus favoritos e coleções com outras pessoas. Crie um link compartilhável que você pode enviar com o clique de um botão."
    },
  ]

  public _img: string   = this.contentList[0].img;
  public _title: string = this.contentList[0].title;
  public _text: string  = this.contentList[0].text;

  public menuActive(index: number) {
    this.currentItemIndex = index;
    this.isClickedList.fill(false);

    this.isClickedList[index] = true;
    this._img   = this.contentList[index].img;
    this._title = this.contentList[index].title;
    this._text  = this.contentList[index].text;

    this.isAnimationActive = true;

    setTimeout(() => {
      this.isAnimationActive = false;
    }, 500);
  }
}
