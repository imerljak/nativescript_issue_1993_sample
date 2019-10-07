import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { HomeDetailComponent } from "~/app/home/home-detail/home-detail.component";
import { HomeDetailSubComponent } from "~/app/home/home-detail-sub/home-detail-sub.component";
import { HomeDetailResolver } from "~/app/home/home-detail/home-detail.resolver";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: ":id", component: HomeDetailComponent,
        resolve: {
            random: HomeDetailResolver
        }
    },
    {
        path: ":id/sub", component: HomeDetailSubComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
