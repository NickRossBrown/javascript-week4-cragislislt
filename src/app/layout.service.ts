import { Injectable } from '@angular/core';
import { Layout } from "./layout.model";
import { LAYOUTS } from './mock-layouts';

@Injectable()
export class LayoutService {

    constructor() { }

    getLayouts() {
        return LAYOUTS;
    }

    getLayoutBySection(section) {
        let array = []
        for (var i = 0; i <= LAYOUTS.length - 1; i++) {
            if (LAYOUTS[i].section == section) {
                array.push(LAYOUTS[i]);
            }
        }
        return array;
    }

    getPostById(postId: number) {
        for (var i = 0; i <= LAYOUTS.length - 1; i++) {
            if (LAYOUTS[i].id === postId) {
                return LAYOUTS[i];
            }
        }
    }


}