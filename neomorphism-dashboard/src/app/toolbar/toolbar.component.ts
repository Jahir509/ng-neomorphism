import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  status:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
    this.status = !this.status
    // const btns = document.querySelectorAll("p");
    // console.log(btns)
    // btns.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     btn.classList.toggle("active");
    //   });
    // });
  }

}
