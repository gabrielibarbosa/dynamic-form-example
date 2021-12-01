import { Component } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-dynamic-form-po-ui',
  templateUrl: './dynamic-form-po-ui.component.html',
  styleUrls: ['./dynamic-form-po-ui.component.css']
})
export class DynamicFormPoUiComponent {
  user = {};

  fields: Array<PoDynamicFormField> = [
    { property: 'name', required: true, minLength: 5, maxLength: 30, gridColumns: 6},
    { property: 'email', gridColumns: 6, icon: 'po-icon-mail', required: true},
    { property: 'address', gridColumns: 9, icon: 'po-icon-pin'},
    { property: 'number', label: 'Number', type: 'number', gridColumns: 3, maxValue: 10000},
  ];

  constructor(public poNotification: PoNotificationService) { }

}
