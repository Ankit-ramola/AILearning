import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit, Signal, SimpleChanges, computed, signal  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError, delay, of } from 'rxjs';
type Products = {
  id: string;
  title: string;
  price: number
}

type Rate = {
  value: number;
  tariff: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient,private cd : ChangeDetectorRef, private dm : DomSanitizer) { }
  products: Products[] = []
  isLoading = false;
  isError = false;
  errorMessage = '';
  @Input() name !: Signal<string>;
  userName : any = new FormControl('');
  rate = signal<Rate>({ value: 100, tariff: 10 })
  onSubmit(){
    console.log(this.userName.value);
  }

  finalRate = computed(() => {
    const r = this.rate();
    return r.value + r.tariff
  })
  arr : any = this.dm.bypassSecurityTrustScript('<script>alert(1)</script>');
  ngOnInit() {
    // this.arr = this.dm.bypassSecurityTrustHtml(this.arr)
    // this.isLoading = true;
    this.http.get<Products[]>("https://fakestoreapi.com/products")
      .pipe(
        // delay(2000),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          this.isError = true;
          this.errorMessage = err.message;
          return of([]);
        })
      )
      .subscribe((res: Products[]) => {
        // this.isLoading = false;
        this.products = res.filter((r: Products) => r.price > 50);
        this.cd.detectChanges();
        console.log(this.products);

      })
  }
  // ngOnChanges(change: SimpleChanges){
  //   console.log(change);
  //   this.cd.detectChanges();
  // }
  onRowSelect(event: MatCheckboxChange, products: Products) {
    if (event.checked) {
      console.log(event, products);
    }
  }
}
