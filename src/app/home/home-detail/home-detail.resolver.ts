import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class HomeDetailResolver implements Resolve<number> {

    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<number> | number {
        return of(Math.random())
            .pipe(delay(300));
    }
}
