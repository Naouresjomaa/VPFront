import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { ProductsDetailsComponent } from "./components/pages/products-details/products-details.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { LoginRegisterComponent } from "./components/pages/login-register/login-register.component";
import { TermsConditionComponent } from "./components/pages/terms-condition/terms-condition.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { ListingComponent } from "./components/pages/listing/listing.component";
import { ModeComponent } from "./components/Categories/mode/mode.component";
import { MaisonComponent } from "./components/Categories/maison/maison.component";
import { EnfantComponent } from "./components/Categories/enfant/enfant.component";
import { BeauteComponent } from "./components/Categories/beaute/beaute.component";
import { VoyageComponent } from "./components/Categories/voyage/voyage.component";
import { GastronomieComponent } from "./components/Categories/gastronomie/gastronomie.component";
import { LoisirComponent } from "./components/Categories/loisir/loisir.component";
import { SportComponent } from "./components/Categories/sport/sport.component";
import { CompteComponent } from "./components/pages/compte/compte.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ConfirmDeactivateGuard } from "./components/common/confirm-deactivate.guard";
import { ShopBrandComponent } from "./components/pages/shop-brand/shop-brand.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { ShopPanierComponent } from "./components/pages/shop-panier/shop-panier.component";
import { ChaussureComponent } from "./components/Categories/chaussure/chaussure.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: "", component: HomeComponent },
 
    { path: "Mode", component: ModeComponent  },
    { path: "Chaussure", component: ChaussureComponent,   },
    { path: "Maison", component: MaisonComponent ,  },
    { path: "Enfant", component: EnfantComponent   },
    { path: "Beaute", component: BeauteComponent , },
    { path: "Voyage", component: VoyageComponent ,  },
    
    { path: "Gastronomie", component: GastronomieComponent,   },
    { path: "Loisir", component: LoisirComponent ,  },
    { path: "Sport", component: SportComponent ,  },
    { path: "Compte", component: CompteComponent  },
    { path: "Brand/:id", component: ListingComponent ,  canActivate: [AuthGuard]},
    { path: "pricing", component: PricingComponent , canActivate: [AuthGuard] },
    { path: "Panier", component: CartComponent ,  canActivate: [AuthGuard]},
    { path: "shop-panier", component: ShopPanierComponent , canActivate: [AuthGuard] },
    { path: "shopBrand/:id", component: ShopBrandComponent ,  },
  
    { path: "products-details/:id", component: ProductsDetailsComponent,   },
    { path: "error", component: ErrorComponent },
    { path: "login", component: LoginRegisterComponent },
    { path: "parrainage", component: TermsConditionComponent ,  },
    { path: "success", component: PrivacyPolicyComponent },
    { path: "coming-soon", component: ComingSoonComponent },
    { path: "**", component: ErrorComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    ],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
