import { Component, OnInit, ViewChild, AfterViewInit,  Directive } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  elements = [];

  @ViewChild('input_menssage') input; 

  constructor() { }

  ngOnInit() {
    this.initial_elements()
  }

  ngAfterViewInit() {
  }

  initial_elements() {
    this.elements.push("Adicione aqui os seus itens");
  }

  add_item() {
    
    if(this.elements[0].match(/Adicione aqui os seus itens/)) {
      this.elements.pop()
    }
    const text = this.input.nativeElement.value;

    if(text != "") {
      this.elements.push(text);
      this.input.nativeElement.value = "";
    } else {
      if(this.elements.length == 0) { this.initial_elements() }
      alert("o campo deve ser preenchido")
    }
  }

  check_return(event: KeyboardEvent) : void {
    if(event.keyCode == 13) {
      this.add_item();
    }
  }

  reset() {
    this.elements = [];
    this.initial_elements();
  }

  show_status() {
    $.get("http://localhost:3000/api/status").done(function(){
      alert("Status da API: Online");
    }).fail(function(){
      alert("Status da API: Offline");
    });
  }


}
