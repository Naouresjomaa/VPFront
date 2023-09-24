import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { CategoryComponent } from "./components/pages/category/category.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { ProductsDetailsComponent } from "./components/pages/products-details/products-details.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { LoginRegisterComponent } from "./components/pages/login-register/login-register.component";
import { TermsConditionComponent } from "./components/pages/terms-condition/terms-condition.component";
import { PrivacyPolicyComponent } from "./components/pages/privacy-policy/privacy-policy.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";
import { ListingComponent } from "./components/pages/listing/listing.component";
import { ListingDetailsComponent } from "./components/pages/listing-details/listing-details.component";
import { BlogComponent } from "./components/pages/blog/blog.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ModeComponent } from "./components/Categories/mode/mode.component";
import { MaisonComponent } from "./components/Categories/maison/maison.component";
import { EnfantComponent } from "./components/Categories/enfant/enfant.component";
import { BeauteComponent } from "./components/Categories/beaute/beaute.component";
import { VoyageComponent } from "./components/Categories/voyage/voyage.component";
import { GastronomieComponent } from "./components/Categories/gastronomie/gastronomie.component";
import { LoisirComponent } from "./components/Categories/loisir/loisir.component";
import { SportComponent } from "./components/Categories/sport/sport.component";
import { CompteComponent } from "./components/pages/compte/compte.component";
import { CommandeComponent } from "./components/pages/commande/commande.component";
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
 
    { path: "Mode", component: ModeComponent, canActivate: [AuthGuard] },
    { path: "Chaussure", component: ChaussureComponent, canActivate: [AuthGuard] },
    { path: "Maison", component: MaisonComponent , canActivate: [AuthGuard]},
    { path: "Enfant", component: EnfantComponent , canActivate: [AuthGuard]},
    { path: "Beaute", component: BeauteComponent , canActivate: [AuthGuard]},
    { path: "Voyage", component: VoyageComponent , canActivate: [AuthGuard]},
    
    { path: "Gastronomie", component: GastronomieComponent, canActivate: [AuthGuard] },
    { path: "Loisir", component: LoisirComponent , canActivate: [AuthGuard]},
    { path: "Sport", component: SportComponent , canActivate: [AuthGuard]},
    { path: "Compte", component: CompteComponent , canActivate: [AuthGuard]},
    { path: "Commande", component: CommandeComponent , canActivate: [AuthGuard]},
    { path: "Brand/:id", component: ListingComponent , canActivate: [AuthGuard]},
    { path: "about", component: AboutComponent , canActivate: [AuthGuard]},
    { path: "pricing", component: PricingComponent , canActivate: [AuthGuard]},
    { path: "category", component: CategoryComponent , canActivate: [AuthGuard]},
    { path: "Panier", component: CartComponent , canActivate: [AuthGuard]},
    { path: "shop-panier", component: ShopPanierComponent , canActivate: [AuthGuard]},
    { path: "shopBrand/:id", component: ShopBrandComponent , canActivate: [AuthGuard]},
    {
        path: "checkout/:id",
        component: CheckoutComponent,
        canDeactivate: [ConfirmDeactivateGuard],
    },
    { path: "products-details/:id", component: ProductsDetailsComponent, canActivate: [AuthGuard] },
    { path: "faq", component: FaqComponent },
    { path: "error", component: ErrorComponent },
    { path: "login-register", component: LoginRegisterComponent },
    { path: "parrainage", component: TermsConditionComponent , canActivate: [AuthGuard]},
    { path: "privacy-policy", component: PrivacyPolicyComponent },
    { path: "coming-soon", component: ComingSoonComponent },
    { path: "listing-details", component: ListingDetailsComponent },
    { path: "blog", component: BlogComponent },
    { path: "blog-details", component: BlogDetailsComponent },
    { path: "contact", component: ContactComponent },
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
