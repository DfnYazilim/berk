import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  secili = ""

  tuslar = [
    {name: "Anasayfa", class: 'btn btn-secondary'},
    {name: "Müşteriler", class: 'btn btn-success'},
    {name: "Satışlar", class: 'btn btn-outline-danger'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }


  sec(a: any) {
    this.secili = a.name
  }

  ekle() {
    this.tuslar.push({name: this.secili, class: 'btn btn-secondary'})
    this.secili = ""
  }
}
