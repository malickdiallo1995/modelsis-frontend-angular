import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductTypeService} from '../shared/services/product-type.service';
import {Type} from '../shared/models/Type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  typeForm : FormGroup;
  loading : Boolean = false;

  constructor(private formBuilder : FormBuilder, private productTypeService : ProductTypeService, private router : Router ) { }

  ngOnInit(): void {
    this.typeForm = this.formBuilder.group(
      {
        'name' :  ['',Validators.required],
      }
    )
  }

  onAddType() {
    this.loading = true;
    let name = this.typeForm.get('name').value;
    console.log('name : ',name);
    const type : Type = new Type();
    type.name = name;
    console.log('type : ',type);
    this.productTypeService.saveType(type).subscribe(
      (response)=>{
        this.typeForm.reset();
        this.loading = false;
        alert('Sauvegarde reussi !')
        this.router.navigate(['']);
      },
      (response)=>{
        // Re-enable the form
        this.typeForm.reset();

        console.log('Response error : ',response)
        alert('Erreur sauvegarde : ')

      }
    )
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
