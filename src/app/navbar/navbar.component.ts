import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  secili = ""

  tuslar = [
    {name: "Anasayfa", class: 'btn btn-secondary',link: 'anasayfa'},
    {name: "Müşteriler", class: 'btn btn-success', link:  'musteriler'},
    {name: "Satışlar", class: 'btn btn-outline-danger', link:  'satislar'},
  ]

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }


  sec(a: any) {
    console.log(a)
    this.router.navigateByUrl(a.link)
  }

  ekle() {
    this.tuslar.push({name: this.secili, class: 'btn btn-secondary',link:''})
    this.secili = ""
  }
}
