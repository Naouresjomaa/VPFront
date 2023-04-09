import { Component, OnInit } from "@angular/core";
import { BrandService } from "src/app/services/brand.service";

@Component({
    selector: "app-maison",
    templateUrl: "./maison.component.html",
    styleUrls: ["./maison.component.scss"],
})
export class MaisonComponent implements OnInit {
    brand: any;
    brandam: any;
    brandm: any;
    brandj: any;
    brandb: any;
    brandmo: any;
    brandde: any;
    brandlim: any;
    brandelectro: any;
    brandlit: any;
    brandart: any;
    brandhighttech: any;
    constructor(private branservice: BrandService) {}

    ngOnInit(): void {
        this.GetBrands();
    }

    GetBrands() {
        this.branservice.GetBrandMaison().subscribe((res) => {
            this.brand = res;
            this.brandm = 0;
            this.brandj = 0;
            this.brandb = 0;
            this.brandmo = 0;
            this.brandde = 0;
            this.brandlim = 0;
            this.brandelectro = 0;
            this.brandlit = 0;
            this.brandart = 0;
            this.brandhighttech = 0;
            for (var i = 0; i < this.brand.length; i++) {
                if (this.brand[i].SousCategorie == "MAISON") {
                    this.brandm+=1;
                }
                else if(this.brand[i].SousCategorie == "LE JARDIN"){
                    this.brandj+=1;
                }
                else if(this.brand[i].SousCategorie == "LE MOBILIER"){
                    this.brandmo+=1;
                }
                else if(this.brand[i].SousCategorie == "LE BRICOLAGE"){
                    this.brandb+=1;
                }
                else if(this.brand[i].SousCategorie == "LA DÉCORATION"){
                    this.brandde+=1;
                }
                else if(this.brand[i].SousCategorie == "LE LINGE DE MAISON"){
                    this.brandlim+=1;
                }
                else if(this.brand[i].SousCategorie == "ÉLECTROMÉNAGER"){
                    this.brandelectro+=1;
                }
                else if(this.brand[i].SousCategorie == "LA LITERIE"){
                    this.brandlit+=1;
                }
                else if(this.brand[i].SousCategorie == "ART DE LA TABLE"){
                    this.brandart+=1;
                }
                else if(this.brand[i].SousCategorie == "HIGH TECH"){
                    this.brandhighttech+=1;
                }
            }
        });
    }
}
