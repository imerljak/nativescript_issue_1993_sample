import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ns-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"]
})
export class HomeDetailComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  goBack() {
        this.routerExtensions.backToPreviousPage();
    }

  goFurther() {
        this.routerExtensions.navigate(["sub"], {
            relativeTo: this.activatedRoute
        });
    }
}
