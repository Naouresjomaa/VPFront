import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClientService } from 'src/app/services/client.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ClientModel } from 'src/app/services/model/Client.model';
import { CommandeModel } from 'src/app/services/model/Commande.model';
import { PanierService } from 'src/app/services/panier.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-shop-panier',
  templateUrl: './shop-panier.component.html',
  styleUrls: ['./shop-panier.component.scss',
  '../shop-brand/css/bootstrap.min.css',"../shop-brand/css/font-awesome.min.css","../shop-brand/css/elegant-icons.css"
  ,"../shop-brand/css/magnific-popup.css","../shop-brand/css//nice-select.css","../shop-brand/css/owl.carousel.min.css","../shop-brand/css/slicknav.min.css","../shop-brand/css/style.css"]
})
export class ShopPanierComponent implements OnInit {
  payment =false;
  Date = new Date()
  paypal=false;
  selectedGouvernorat: string = '';
  gouvernorats = [
    { name: 'Ariana', value: 'ariana' },
    { name: 'Béja', value: 'beja' },
    { name: 'Ben Arous', value: 'benarous' },
    { name: 'Bizerte', value: 'bizerte' },
    { name: 'Gabès', value: 'gabes' },
    { name: 'Gafsa', value: 'gafsa' },
    { name: 'Jendouba', value: 'jendouba' },
    { name: 'Kairouan', value: 'kairouan' },
    { name: 'Kasserine', value: 'kasserine' },
    { name: 'Kébili', value: 'kebili' },
    { name: 'Kef', value: 'kef' },
    { name: 'Mahdia', value: 'mahdia' },
    { name: 'Manouba', value: 'manouba' },
    { name: 'Médenine', value: 'medenine' },
    { name: 'Monastir', value: 'monastir' },
    { name: 'Nabeul', value: 'nabeul' },
    { name: 'Sfax', value: 'sfax' },
    { name: 'Sidi Bouzid', value: 'sidibouzid' },
    { name: 'Siliana', value: 'siliana' },
    { name: 'Sousse', value: 'sousse' },
    { name: 'Tataouine', value: 'tataouine' },
    { name: 'Tozeur', value: 'tozeur' },
    { name: 'Tunis', value: 'tunis' },
    { name: 'Zaghouan', value: 'zaghouan' },
  ];
  gouvernoratForm: FormGroup;
  commande : CommandeModel = {
 
    RefCommande:'',
    UserName: '',
    Email: '',
    Date: this.Date,
    NomClient: '',
    Adresse: '',
    Gouvernerat:  '',
    Order: '',
    PrixTotal: '',
    PrixLivraison: '',
    Couppons: '',
    NetaPayer: '',
    Telephone:'',
    Message:'',
    CodePostal:'',
    TypePaiement:'',
    Statut:'',
}
client : ClientModel={
     id: '',
    NomComplet: '',
    UserName: '',
    Genre: '',
    Email: '',
    Telephone: '',
    Password: '',
    Ville: '',
    Adresse: '',
    DateNaissance: '', 
}
  Email: any;
  Username: any;
  adresse :any;
  product:any=[]
  paniers: any;
  nbrpanier: any;
  prixTotale: number;
  checked(opt:string){
    if(opt=='payment'){
        this.payment= !this.payment;
       
      this.paypal=false  } 
    if(opt == 'paypal'){
      this.paypal=!this.paypal;
      this.payment=false
      
    }
  }
  constructor(private jwtHelper: JwtHelperService, private panierservice: PanierService,private commandeService : CommandeService,
    private userService : ClientService,private router: Router,private storageService :StorageService,private fb: FormBuilder,private cdr: ChangeDetectorRef) { 
      this.gouvernoratForm = this.fb.group({
        selectedGouvernorat: ''
      });
    }
  decodeToken() {
    const token = localStorage.getItem('isLoggedin');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.commande.Email=decodedToken.Email
    this.Email=decodedToken.Email
    this.Username=decodedToken.UserName
    this.commande.UserName=decodedToken.UserName
    this.commande.NomClient=decodedToken.UserName
    console.log(decodedToken);
  }
  commandeType(){
    if(this.payment){
      this.commande.TypePaiement='Paiement à la livraison'
    }
 else if(this.paypal){
  this.commande.TypePaiement='Paiement en ligne' 
    }
    else{
      this.commande.TypePaiement=''  
    }
  }
  ngOnInit(): void {
    this.decodeToken()
    this.getPanier()
    this.genererChaineAleatoire()
  }
  getPanier(){
    console.log(this.Email,this.Username)
    this.panierservice.Getpanier(this.Email,this.Username).subscribe((res:any)=>
   {
    this.paniers=res;
    console.log('this.paniers',this.paniers)
     this.getTotal(this.paniers);
    
    this.nbrpanier=this.paniers.length
   } )
    
}
getTotal(pan) {
  this.prixTotale = 0;
  for(let x of pan) {
      console.log(x.PrixUnitaire)
   this.prixTotale +=x.PrixTotale
   this.product.push(x.ProdDetails)
  }

  this.prixTotale +=8;
  console.log(this.prixTotale)
}
 genererChaineAleatoire(longueur: number = 5) {
  const caracteres = '0123456789';
  let resultat = '';
  for (let i = 0; i < longueur; i++) {
    const indexAleatoire = Math.floor(Math.random() * caracteres.length);
    resultat += caracteres.charAt(indexAleatoire);
  }
  this.commande.RefCommande=resultat+'-2023'
}
onGouvernoratSelectionChange() {
  this.cdr.detectChanges();
  console.log('Selected Gouvernorat:', this.gouvernoratForm.value.selectedGouvernorat);
}
async Order(c: CommandeModel) {
  
  console.log('this.paniers2222222222222222222222',c.Gouvernerat)
  this.commandeType()
  console.log(this.commande.TypePaiement)
  c.Statut = "Encours";
  c.paiement_status = "Encours"
  c.Order=this.paniers
  c.PrixTotal=this.prixTotale
  if (
      !c.NomClient ||
      !c.Adresse ||
      !c.Email ||
      !c.Telephone ||
      !c.Gouvernerat ||
      !c.CodePostal
  )
 
  {
      Swal.fire({
          position: "center",
          title: "Les champs notés par * Sont Obligatoire !",
          text: "",
          showConfirmButton: false,
          timer: 3000,
          icon: "error",
      });
  }  else if(!(this.commande.TypePaiement)){
    Swal.fire({
      position: "center",
      title: "SVP choisir la méthode de paiement",
      text: "",
      showConfirmButton: false,
      timer: 3000,
      icon: "error",
  });
  }
  else{
    if(this.commande.TypePaiement=='Paiement à la livraison'){
      await this.paiementLivraison(c)

    }
    else if(this.commande.TypePaiement=='Paiement en ligne'){
          this.paiementenligne(c)
    }

  }
} 
   paiementenligne(c :CommandeModel) {
    this.commandeService.paiementenligne(c).subscribe(async (res:any)=>{
      console.log(res)
    let link = res.data.result.link
    console.log(link)
    const createCommandeResponse2: any  = await this.panierservice.RemoveAllpanier(this.Email, this.Username).toPromise();

  if(createCommandeResponse2){
    this.storageService.setPanier(0)
    window.open(link, '_blank');
  }
    
    }  )}

async paiementLivraison(c: CommandeModel) {
  console.log('ccccccccccccc',c)
  try {
    
    const createCommandeResponse: any = await this.commandeService.CreateCommande(c).toPromise();
    if (createCommandeResponse) {
      const createCommandeResponse2: any  = await this.panierservice.RemoveAllpanier(this.Email, this.Username).toPromise();
     if(createCommandeResponse2){
      console.log('send Mail Test ')
      this.storageService.setPanier(0);
     this.commandeService.sendOrderEmail(c).subscribe(res=>console.log(res))
      this.router.navigate(['/success']);
     }
    }
  } catch (error) {
    console.error("Une erreur s'est produite: ", error);
    // Gérer l'erreur selon les besoins de votre application.
  }
}
}
