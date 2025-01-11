import { Injectable } from "@angular/core";
import { css_color_pallets } from "../data/web-design.data";

@Injectable({providedIn: 'root'})

export class WebDesignService {
    constructor() {}

    get cssColorPallets() {
        return css_color_pallets;
    }
}