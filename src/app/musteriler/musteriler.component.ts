import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musteriler',
  templateUrl: './musteriler.component.html',
  styleUrls: ['./musteriler.component.css']
})
export class MusterilerComponent implements OnInit {
  yeniId = 0
  yeniIsim = ""
  yeniTel =""
  data = [
    {id:1,name : 'Utku', gsm : '5545734846',},
    {id:2,name : 'Uğur', gsm : '5545734845',},
    {id:3,name : 'Nesli', gsm : '5545734836',},
    {id:4,name : 'Defne', gsm : '5545734746',},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ekle() {
    this.data.push({
      id : this.yeniId,
      name : this.yeniIsim,
      gsm  : this.yeniTel
    })
    this.yeniId = 0
    this.yeniTel = ""
    this.yeniIsim = ""
  }
}
