import { Component, OnInit } from "@angular/core";
import { BrandService } from "src/app/services/brand.service";

@Component({
    selector: "app-loisir",
    templateUrl: "./loisir.component.html",
    styleUrls: ["./loisir.component.scss"],
})
export class LoisirComponent implements OnInit {
    brand: any;
    brandf: any;
    brando: any;
    brands: any;
    constructor(private branservice: BrandService) {}

    ngOnInit(): void {
        this.Getbrand();
    }

    Getbrand() {
        this.branservice.GetBrandLoisir().subscribe((res) => {
            this.brand = res;
            this.brandf = 0;
            this.brando = 0;
            this.brands = 0;
            for (var i = 0; i < this.brand.length; i++) {
                if (this.brand[i].SousCategorie == "ACTIVITÉS & SORTIES") {
                    this.brandf += 1;
                } else if (this.brand[i].SousCategorie == "JEUX & LOISIRS") {
                    this.brando += 1;
                } else if (this.brand[i].SousCategorie == "ESCAPADES") {
                    this.brands += 1;
                }
            }
        });
    }
}
