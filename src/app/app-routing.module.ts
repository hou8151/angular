import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "produits",component : ProduitsComponent},
  {path : "add-produit",component : AddProduitComponent},
  {path : "home",component : HomeComponent},
  {path : "", redirectTo: "home" , pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
