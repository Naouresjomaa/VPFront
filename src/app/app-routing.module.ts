import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { PricingComponent } from "./components/pages/pricing/pricing.component";
import { CategoryComponent } from "./components/pages/category/category.component";
import { ShopComponent } from "./components/pages/shop/shop.component";
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

const routes: Routes = [
    { path: "", component: HomeThreeComponent },
    { path: "Mode", component: ModeComponent },
    { path: "Maison", component: MaisonComponent },
    { path: "Enfant", component: EnfantComponent },
    { path: "Beaute", component: BeauteComponent },
    { path: "Voyage", component: VoyageComponent },
    { path: "Gastronomie", component: GastronomieComponent },
    { path: "Loisir", component: LoisirComponent },
    { path: "Sport", component: SportComponent },
    { path: "Compte", component: CompteComponent },
    { path: "Commande", component: CommandeComponent },
    { path: "Brand/:id", component: ListingComponent },
    { path: "about", component: AboutComponent },
    { path: "pricing", component: PricingComponent },
    { path: "category", component: CategoryComponent },
    { path: "Panier", component: CartComponent },
    {
        path: "checkout/:id",
        component: CheckoutComponent,
        canDeactivate: [ConfirmDeactivateGuard],
    },
    { path: "products-details/:id", component: ProductsDetailsComponent },
    { path: "faq", component: FaqComponent },
    { path: "error", component: ErrorComponent },
    { path: "login-register", component: LoginRegisterComponent },
    { path: "terms-condition", component: TermsConditionComponent },
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
