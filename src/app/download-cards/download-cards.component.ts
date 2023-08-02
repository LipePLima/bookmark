import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-cards',
  templateUrl: './download-cards.component.html',
  styleUrls: ['./download-cards.component.scss']
})
export class DownloadCardsComponent {
  @Input() cardInfo: {
    imageSrc: string;
    cardTitle: string;
    cardText: string;
    buttonText: string;
  } | undefined;
}
