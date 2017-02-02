import { Component, ViewChild, ElementRef } from '@angular/core';
import * as d3 from "d3";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private containerWidth: number;
    private svg: any;
    title = 'app works!';

    @ViewChild("container")
    container: ElementRef;

    constructor() {

    }

    ngAfterViewInit(): void {
        this.initializeSvg(500);
    }

    initializeSvg(height: number, width: number = null): void {
        let bounds = this.container.nativeElement.getBoundingClientRect();
        this.containerWidth = width ? width : Math.floor(bounds.width);

        this.svg = d3.select(this.container.nativeElement)
            .append("svg")
            .attr("width", this.containerWidth)
            .attr("height", height)
            .append("g");
    }
}