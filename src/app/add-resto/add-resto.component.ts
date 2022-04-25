import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
  });
  constructor(private resto: RestoService) {}

  ngOnInit(): void {}
  collectResto() {
    // console.warn(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert = true;
      // console.warn("result is here", result);
    });
    this.addResto.reset({});
  }
  closeAlert() {
    this.alert = false;
  }
}
