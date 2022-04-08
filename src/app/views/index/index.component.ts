import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import 'jquery';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit, AfterViewInit {
  // sign = 'arrow-down';
  toggle:boolean = true;

  constructor(@Inject(DOCUMENT) document) {
    /*let question = document.querySelectorAll(".accordion-item");

    question.forEach(question => {
      question.addEventListener("click", e => {
        const active = document.querySelector(".accordion-button");
        if(active && active !== question ) {
          active.classList.toggle("ion-md-arrow-down");
          // active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if(question.classList.contains("active")){
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = 0;
        }
      })
    })*/
  }

  ngOnInit(): void { }
  ngAfterViewInit() {
    // this.handleUI();
  }

  toggleFieldTextType() {
    /*console.log('clicked');
    if (this.sign == 'arrow-down') {
      this.sign = 'remove';
    } else {
      this.sign = 'remove';
    }*/
    this.toggle = !this.toggle;
  }
}
