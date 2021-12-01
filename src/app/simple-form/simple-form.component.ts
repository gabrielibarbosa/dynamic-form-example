import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
  user: Array<any> = [];

  userForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
    address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
    number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
    email: ['', Validators.required]
  });

  constructor(
    public formBuilder: FormBuilder,
    public poNotification: PoNotificationService) { }
}
