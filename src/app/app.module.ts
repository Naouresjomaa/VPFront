import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ListingComponent } from './components/pages/listing/listing.component';
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
import { ShopBrandComponent } from './components/pages/shop-brand/shop-brand.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ShopPanierComponent } from './components/pages/shop-panier/shop-panier.component';
import { ChaussureComponent } from './components/Categories/chaussure/chaussure.component';
import { MatButtonModule } from '@angular/material/button';
 import { MatDialogModule } from '@angular/material/dialog';
 import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { PopupComponent } from './components/pages/popup/popup.component';
import { NavbarHomeComponent } from './components/common/navbar-home/navbar-home.component';
 export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterStyleTwoComponent,
    PricingComponent,
    ErrorComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    ComingSoonComponent,
    CartComponent,
    ProductsDetailsComponent,
    ListingComponent,
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
    ShopBrandComponent,
    HomeComponent,
    NavbarComponent,
    ShopPanierComponent,
    ChaussureComponent,
    LoginComponent,
    RegisterComponent,
    PopupComponent,
    NavbarHomeComponent
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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
