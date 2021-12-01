# DynamicFormExample

Exemplo de utilização do componente Dynamic Form, da Biblioteca de componentes PO UI, utilizado na apresentação do TDC Future 2021.

## Criando o projeto angular

Criar projeto angular utilizando o asso a passo getting started po ui https://po-ui.io/guides/getting-started;

## Criando os componentes

``` $ ng generate component simple-form ```
``` $ ng generate component dynamic-form-po-ui ```

## Imports necessários

Adicionar os imports FormsModule e ReactiveFormsModule no arquivo app.module.ts: 
```
imports: [
    FormsModule,
    ReactiveFormsModule
]
```
  
## Simple Form

simple-form.component.html
```
<div class="po-row">
  <po-divider class="po-md-12" p-label="Simple Form"></po-divider>
  <p> {{ userForm.value | json }}</p>
</div>
<form [formGroup]="userForm">
    <div class="po-row">
      <po-input class="po-lg-6" name="name" p-label="Nome" formControlName="name"></po-input>
      <po-email  class="po-lg-6" p-label="Email" formControlName="email" p-clean> </po-email>
    </div>
    <div class="po-row">
      <po-input class="po-lg-9" formControlName="address" p-clean p-icon="po-icon-pin" p-label="Address"> </po-input>
      <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
    </div>
    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" (p-click)="poNotification.success('Formulário salvo!')"> </po-button>
    </div>
</form>
```
simple-form.component.ts

``` 
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

```

## Dynamic Form

dynamic-form-po-ui.component.html
```
<<div class="po-row">
  <po-divider class="po-md-12" p-label="Dynamic Form"></po-divider>
  <p> {{ dynamicForm.value | json }}</p>
</div>
  <po-dynamic-form #dynamicForm p-auto-focus="name" [p-fields]="fields" [p-value]="user">
  </po-dynamic-form>
<div class="po-row">
  <po-button class="po-md-3" p-label="Save" (p-click)="poNotification.success('Formulário salvo!')">
  </po-button>
</div>
```
dynamic-form-po-ui.component.ts

``` 
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

```
## Agora é só rodar o projeto :D
``` $ ng serve```
