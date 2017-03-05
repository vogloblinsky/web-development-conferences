import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const MODULES = [
    CommonModule,
    FormsModule,
    HttpModule
];

const COMPONENTS = [];

@NgModule({
    imports: [
        ...MODULES
    ],
    exports: [
        ...MODULES,
        ...COMPONENTS
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class SharedModule { }
