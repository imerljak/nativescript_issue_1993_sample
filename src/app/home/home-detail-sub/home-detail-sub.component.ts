import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ns-home-detail-sub",
    templateUrl: "./home-detail-sub.component.html",
    styleUrls: ["./home-detail-sub.component.css"]
})
export class HomeDetailSubComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
        //
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
