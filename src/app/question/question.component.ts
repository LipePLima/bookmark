import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  public questions = [
    {
      title: "O que é Bookmark?",
      answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta corrupti, adipisci, voluptatum doloremque harum possimus ex perferendis voluptas aliquam repudiandae dolor nam dolorem architecto odio commodi deserunt. Modi, totam exercitationem!"
    },
    {
      title: "Como eu posso solicitar um novo Browser?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur esse pariatur omnis doloremque libero soluta perferendis dolor, id assumenda repudiandae distinctio, accusamus illo quia mollitia. Officia earum explicabo quas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid aspernatur illo, facilis inventore unde minus rerum illum delectus nam fugit quis? Laudantium fugiat necessitatibus maxime expedita explicabo minima nisi vel!"
    },
    {
      title: "Existe uma versão aplicativo?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in iusto sequi nostrum ullam voluptatem mollitia magnam voluptatum officiis repudiandae. Sed sunt sequi deleniti eum nisi iure. Architecto, harum dignissimos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, tempora sequi expedita similique quasi reiciendis non magnam qui itaque quidem accusantium ut tenetur porro unde praesentium fuga. Quibusdam, soluta excepturi."
    },
    {
      title: "E quanto a outros navegadores Chromium?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, ea eum incidunt totam perferendis labore unde quos sit deleniti, laboriosam nisi ratione perspiciatis ex quaerat, omnis nostrum sunt similique fugiat."
    }
  ]
}
