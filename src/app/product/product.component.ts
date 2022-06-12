import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
 import {MatPaginator} from '@angular/material/paginator';
import {Product} from '../shared/models/Product';
import {ProductService} from '../shared/services/product.service';
import {Router} from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'dateCreated','type' , 'action'];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  clickedRows   = new Set<Product>();
  ELEMENT_DATA : Product[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loading : boolean = false;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.loading = true;
     this.productService.getAllProducts().subscribe(
      respons=>{
        //this.ELEMENT_DATA =respons;
        this.dataSource.data = respons;
        this.loading = false;
        console.log('***** element data : ',this.ELEMENT_DATA)
      }
    );
    //console.log('***** ELEMENT DATA : ',ELEMENT_DATA);
  }

  edit(element : Product) {
    console.log('Element to update : ',element);
    this.router.navigate(['/products/'+element.id]);
  }

  add() {
    this.router.navigate(['/product']);
  }

  addType() {
    this.router.navigate(['/addType']);
  }

}

const ELEMENT_DATA: Product[] = [];


