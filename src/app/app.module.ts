import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginRegisterComponent } from './components/pages/login-register/login-register.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ListingComponent } from './components/pages/listing/listing.component';
import { ListingDetailsComponent } from './components/pages/listing-details/listing-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ModeComponent } from './components/Categories/mode/mode.component';
import { MaisonComponent } from './components/Categories/maison/maison.component';
import { VoyageComponent } from './components/Categories/voyage/voyage.component';
import { BeauteComponent } from './components/Categories/beaute/beaute.component';
import { GastronomieComponent } from './components/Categories/gastronomie/gastronomie.component';
import { EnfantComponent } from './components/Categories/enfant/enfant.component';
import { LoisirComponent } from './components/Categories/loisir/loisir.component';
import { SportComponent } from './components/Categories/sport/sport.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompteComponent } from './components/pages/compte/compte.component';
import { CommandeComponent } from './components/pages/commande/commande.component';
import { ShopBrandComponent } from './components/pages/shop-brand/shop-brand.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ShopPanierComponent } from './components/pages/shop-panier/shop-panier.component';
import { ChaussureComponent } from './components/Categories/chaussure/chaussure.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeThreeComponent,
    NavbarStyleOneComponent,
    FooterStyleTwoComponent,
    AboutComponent,
    PricingComponent,
    CategoryComponent,
    FaqComponent,
    ErrorComponent,
    LoginRegisterComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    ComingSoonComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    ListingComponent,
    ListingDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    ModeComponent,
    MaisonComponent,
    VoyageComponent,
    BeauteComponent,
    GastronomieComponent,
    EnfantComponent,
    LoisirComponent,
    GastronomieComponent,
    SportComponent,
    CompteComponent,
    CommandeComponent,
    ShopBrandComponent,
    HomeComponent,
    NavbarComponent,
    ShopPanierComponent,
    ChaussureComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
