import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductTypeService} from '../shared/services/product-type.service';
import {Router} from '@angular/router';
import {Type} from '../shared/models/Type';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductFrom : FormGroup;
  loading : Boolean = false;
  types : Type[];
  constructor(private formBuilder : FormBuilder, private productTypeService : ProductTypeService, private router : Router, private productService : ProductService ) { }

  ngOnInit(): void {
    this.addProductFrom = this.formBuilder.group(
      {
        'name' :  ['',Validators.required],
        'type' : ['',Validators.required]
      }
    )

    this.productTypeService.getAllType().subscribe(
      response =>{
        this.types = response;
        console.log('****** type getting : ',this.types);
      }
    )
  }

  onAddProduct() {
    this.loading = true;
    let name = this.addProductFrom.get('name').value;
    console.log('name : ',name);
    const product : Product = new Product();
    product.name = name;
    console.log('product : ',product);
    console.log('id type : ',this.addProductFrom.get('type').value);
    this.productService.save(product, this.addProductFrom.get('type').value).subscribe(
      (response)=>{
        this.addProductFrom.reset();
        this.loading = false;
        alert('Sauvegarde reussi !')
        this.router.navigate(['']);
      },
      (response)=>{
        // Re-enable the form
        this.addProductFrom.reset();

        console.log('Response error : ',response)
        alert('Erreur sauvegarde : ')
      }
    )
  /*  this.productTypeService.saveType(type,1).subscribe(
      (response)=>{
        this.addProductFrom.reset();
        this.loading = false;
        alert('Sauvegarde reussi !')
        this.router.navigate(['']);
      },
      (response)=>{
        // Re-enable the form
        this.addProductFrom.reset();

        console.log('Response error : ',response)
        alert('Erreur sauvegarde : ')

      }
    )*/
  }

  onCancel() {

  }


}
