import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-your-plan',
  templateUrl: './choose-your-plan.component.html',
  styleUrls: ['./choose-your-plan.component.css']
})
export class ChooseYourPlanComponent implements OnInit{
  ngOnInit() {
    const firstButton = document.querySelectorAll('button')[1] as HTMLButtonElement;
    const secondButton = document.querySelectorAll('button')[2] as HTMLButtonElement;
    const thirdButton = document.querySelectorAll('button')[3] as HTMLButtonElement;
    const TDS = document.querySelectorAll('.first');
    const TDS2 = document.querySelectorAll('.second');
    const TDS3 = document.querySelectorAll('.third');

    firstButton.onfocus = () => {
      for (let index = 0; index < TDS.length; index++) {
        TDS[index].classList.add('checkedtd');
      }
      firstButton.style.opacity = '1';
    };
    firstButton.onblur = () => {
      for (let index = 0; index < TDS.length; index++) {
        TDS[index].classList.remove('checkedtd');
      }
      firstButton.style.opacity = '0.7';
    };
    secondButton.onfocus = () => {
      for (let index = 0; index < TDS2.length; index++) {
        TDS2[index].classList.add('checkedtd');
      }
      secondButton.style.opacity = '1';
    };
    secondButton.onblur = () => {
      for (let index = 0; index < TDS2.length; index++) {
        TDS2[index].classList.remove('checkedtd');
      }
      secondButton.style.opacity = '0.7';
    };
    thirdButton.onfocus = () => {
      for (let index = 0; index < TDS3.length; index++) {
        TDS3[index].classList.add('checkedtd');
      }
      thirdButton.style.opacity = '1';
    };
    thirdButton.onblur = () => {
      for (let index = 0; index < TDS3.length; index++) {
        TDS3[index].classList.remove('checkedtd');
      }
      thirdButton.style.opacity = '0.7';
    };
  }


}
