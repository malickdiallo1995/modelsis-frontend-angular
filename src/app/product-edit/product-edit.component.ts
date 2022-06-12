import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Type} from '../shared/models/Type';
import {ProductTypeService} from '../shared/services/product-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {


  editProductFrom : FormGroup;
  loading : Boolean = false;
  loadingInit : Boolean = false;
  types : Type[];
  product : Product;
  constructor(private activatedRoute : ActivatedRoute,private formBuilder : FormBuilder, private productTypeService : ProductTypeService, private router : Router, private productService : ProductService ) { }

  ngOnInit(): void {
    this.loadingInit = true;

    const productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) ;
    this.productService.findProductById(productId).subscribe(
      response =>{
        console.log('response from findProductById : ',response);
        this.product = response;
        this.editProductFrom = this.formBuilder.group(
          {
            'name' :  [this.product.name,Validators.required],
            'type' : ['',Validators.required]
          }
        )
      }
    )

    this.productTypeService.getAllType().subscribe(
      response =>{
        this.types = response;
        console.log('****** type getting : ',this.types);
      }
    );

    this.loadingInit = false;
  }

  onAddProduct() {
    this.loading = true;
    let name = this.editProductFrom.get('name').value;
    console.log('name : ',name);
    const product : Product = new Product();
    product.name = name;
    console.log('product : ',product);
    console.log('id type : ',this.editProductFrom.get('type').value);
    this.productService.save(product, this.editProductFrom.get('type').value).subscribe(
      (response)=>{
        this.editProductFrom.reset();
        this.loading = false;
        alert('Sauvegarde reussi !')
        this.router.navigate(['']);
      },
      (response)=>{
        // Re-enable the form
        this.editProductFrom.reset();

        console.log('Response error : ',response)
        alert('Erreur sauvegarde : ')
      }
    )
    /*  this.productTypeService.saveType(type,1).subscribe(
        (response)=>{
          this.editProductFrom.reset();
          this.loading = false;
          alert('Sauvegarde reussi !')
          this.router.navigate(['']);
        },
        (response)=>{
          // Re-enable the form
          this.editProductFrom.reset();

          console.log('Response error : ',response)
          alert('Erreur sauvegarde : ')

        }
      )*/
  }

  onCancel() {
    this.router.navigate(['']);
  }

  onEditProduct(product: Product) {
    this.loading = true;
    product.name = this.editProductFrom.get('name').value;
    product.type = this.editProductFrom.get('type').value;
    this.productService.update(product,product.type.id).subscribe(
      (response)=>{
        this.editProductFrom.reset();
        this.loading = false;
        alert('Sauvegarde reussi !')
        this.router.navigate(['']);
      },
      (response)=>{
        // Re-enable the form
        this.editProductFrom.reset();
        console.log('Response error : ',response)
        alert('Erreur sauvegarde : ')
      }
    )
  }
}
