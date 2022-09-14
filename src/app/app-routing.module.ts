import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnaSayfaComponent} from "./ana-sayfa/ana-sayfa.component";
import {SatislarComponent} from "./satislar/satislar.component";
import {MusterilerComponent} from "./musteriler/musteriler.component";

const routes: Routes = [
  {path:'anasayfa',component: AnaSayfaComponent},
  {path:'satislar',component: SatislarComponent},
  {path:'musteriler',component: MusterilerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
