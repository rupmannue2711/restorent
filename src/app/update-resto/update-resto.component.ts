import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
  });
  result: any;
  constructor(private router: ActivatedRoute, private resto: RestoService) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.resto
      .getCurrentResto(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        console.warn(result);
        this.editResto = new FormGroup({
          name: new FormControl(result.name),
          email: new FormControl(result.email),
          username: new FormControl(result.username),
        });
        // const editResto = {
        //   name: result.name,
        //   email: result.email,
        //   username: result.username,
        // };
        // this.editResto.setValue(editResto);
      });
  }
  collection() {
    console.warn('item', this.editResto.value);
    this.resto
      .updateResto(this.router.snapshot.params['id'], this.editResto.value)
      .subscribe((result) => {
        console.warn('result', result);
        this.alert = true;
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
