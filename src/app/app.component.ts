import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //   ngOnInit(): void {
  //   }
  //  array = Array.from({ length: 1000 }, (_, i) => `item - ${i+1}`);
  constructor(private fb: FormBuilder,private cd :ChangeDetectorRef) { }
  form!: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({});

    // Dynamically create form controls
    this.config.forEach((field) => {
      this.form.addControl(field.name, new FormControl(''));
    });
  }


  config = [
    { label: 'Name', type: 'text', name: 'name', required: true },

    { label: 'Email', type: 'email', name: 'email', required: true },

    { label: 'Age', type: 'number', name: 'age' },

    { label: 'Subscribe', type: 'checkbox', name: 'subscribe' },

    {
      label: 'Dropdown',
      type: 'select',
      name: 'dropdown',
      required: true,
      options: ['A', 'B', 'C'],
    },
  ];
  // name = 'Angular app';
  name = signal('Angular app')
  update() {
    this.name.set('Table data');
    this.cd.detectChanges();
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
