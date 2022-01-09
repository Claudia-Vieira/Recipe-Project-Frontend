import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public imageOneUrl="./assets/leite-creme.jpg";
  public imageTwoUrl="./assets/bolo-chocolate.jpg";
  public imageThreeUrl='./assets/baba-camelo.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
