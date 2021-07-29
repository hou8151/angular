import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits =[
    {idProduit : 1, nomProduit : "PC Asus",prixProduit : 5000.600 , dateCreation :"13/01/2019"},
    {idProduit : 2, nomProduit : "Imprimante Espon",prixProduit : 550 , dateCreation :"14/07/2020"},
    {idProduit : 3, nomProduit : "tablette sumsung",prixProduit : 400 , dateCreation :"15/01/2021"},
    {idProduit : 4, nomProduit : "cable",prixProduit : 50 , dateCreation :"13/01/2019"},
    {idProduit : 5, nomProduit : "camera",prixProduit : 600 , dateCreation :"14/07/2020"},
    {idProduit : 6, nomProduit : "telephone",prixProduit : 1000 , dateCreation :"15/01/2021"}
    
  ]
  // produits : Produit[];
  constructor() {
 
   }

  ngOnInit(): void {
  }

}
