import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features-itens',
  templateUrl: './features-itens.component.html',
  styleUrls: ['./features-itens.component.scss', './features-itensMQ.componente.scss']
})
export class FeaturesItensComponent {
  @Input() itemInfo: {
    imageSrc: string;
    itemTitle: string;
    itemText: string;
  } | undefined;
}
