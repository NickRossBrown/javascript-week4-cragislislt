import { Injectable } from '@angular/core';
import { Layout } from "./layout.model";
import { LAYOUTS } from './mock-layouts';

@Injectable()
export class LayoutService {

    constructor() { }

    getLayouts() {
        return LAYOUTS;
    }

    getLayoutById(layoutId: number) {
        for (var i = 0; i <= LAYOUTS.length - 1; i++) {
            if (LAYOUTS[i].id === layoutId) {
                return LAYOUTS[i];
            }
        }
    }

}