import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";
import { BrandService } from "src/app/services/brand.service";

@Component({
    selector: "app-loisir",
    templateUrl: "./loisir.component.html",
    styleUrls: ["./loisir.component.scss",'../../pages/home/home.component.scss'],
})
export class LoisirComponent implements OnInit ,  AfterViewInit{
    brands :any;
  nbrpanier: any;
  filteredBrand: any;
  term: any;
  affichage: boolean =true;
      constructor(private service : BrandService,private el: ElementRef, private renderer: Renderer2) { }
      ngOnInit() {
        this.getAllBrand()
        this.decodeToken()
        this.getPanier()
      }
      getPanier(){
        const storedPanier = localStorage.getItem('panier');
        this.nbrpanier =  storedPanier ? JSON.parse(storedPanier) : 0;
      }
      logout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('panier');
        window.location.reload()
      }
      decodeToken() {
        const token = localStorage.getItem('isLoggedin');
       if(token && token.length > 0){
        this.affichage = false
       }
      }
    getAllBrand(){
    this.service.GetBrands().subscribe(res=>{
      console.log('resssssssssssssssssss',res)
      this.brands=res;
      this.filteredBrand=[...this.brands]
      })
      }
    
      filtrerDonnees(): void {
        this.filteredBrand = this.brands.filter((brand: any) => 
        brand.BrandName.toLowerCase().includes(this.term.toLowerCase()) 
      
        );
      }
      private slideIndex: number = 1;
      @HostListener('window:scroll', ['$event'])
      handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
    
        // Obtenez la référence à votre conteneur
        const navContainer = this.el.nativeElement.querySelector('.headertop'); // Remplacez '.your-nav-class' par le sélecteur CSS de votre conteneur
        const scrollThreshold = 10;
        if (navContainer) {
             // Get the current scroll position
        const scrollY = window.scrollY || window.pageYOffset;
        let aaa = navContainer.getElementsByTagName("a");
        let button = navContainer.getElementsByClassName("button");
        let humbergerText = navContainer.getElementsByClassName("humberger-text");
        let navp = navContainer.getElementsByClassName("navp");
        let images = navContainer.getElementsByTagName("img");
        let butterfly = navContainer.querySelector("#butterfly");
        let bar = navContainer.getElementsByClassName("bar");
        let navbar = navContainer.getElementsByClassName("navbar");
        let titels = navContainer.getElementsByClassName("titels");
        let titleunderline = navContainer.getElementsByClassName("titleunderline")[0];
        let tooltipImages = navContainer.querySelectorAll(".tooltip-item img");
        let searchContainerHidden = navContainer.getElementsByClassName(
          "search-container-hidden"
        );
        // Check if the scroll position is below the threshold
        if (scrollY > scrollThreshold) {
          // If scrolled past the threshold, change the background color
          navContainer.style.backgroundColor = "white"; // Change to your desired color
      
          for (const iterator of bar) {
            iterator.style.backgroundColor = "#333";
          }
          for (const iterator of button) {
            iterator.style.color = "#ec008c";
            iterator.style.borderColor = "#ec008c";
          }
      
          for (const iterator of aaa) {
            iterator.style.color = "#333";
            iterator.addEventListener("mouseover", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.color = "#ec008c"; // Change to your desired border color and thickness
            });
      
            // Add a mouseout event listener to reset the style when the mouse leaves the element
            iterator.addEventListener("mouseleave", function () {
              // Reset the borderBottom property to its original state
              iterator.style.color = "#333"; // Or any other initial borderBottom value you had
            });
          }
          for (const iterator of titels) {
            iterator.addEventListener("mouseover", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.borderBottom = "2px solid #ec008c"; // Change to your desired border color and thickness
            });
      
            // Add a mouseout event listener to reset the style when the mouse leaves the element
            iterator.addEventListener("mouseout", function () {
              // Reset the borderBottom property to its original state
              iterator.style.borderBottom = "none"; // Or any other initial borderBottom value you had
            });
          }
      
          for (const iterator of images) {
            iterator.style.filter =
              "brightness(0) saturate(100%) invert(13%) sepia(3%) saturate(25%) hue-rotate(353deg) brightness(87%) contrast(77%)";
          }
          navbar[0].style.borderTop = "1px solid #ccc";
          humbergerText[0].style.color = "#333";
          navp[0].style.color = "#333";
          navContainer.style.color = "#000";
          butterfly.src = "assets/img/vp/midlelogo.jpg";
          butterfly.style.filter = "none";
          // searchContainerHidden[0].style.display = "flex";
          titleunderline.style.color = "#ec008c";
          titleunderline.style.borderBottom = "3px solid #ec008c";
        } else {
          // If not scrolled past the threshold, keep the initial background color
          navContainer.style.backgroundColor = "transparent"; // Change to your initial color
          for (const iterator of bar) {
            iterator.style.backgroundColor = "white";
          }
          for (const iterator of button) {
            iterator.style.color = "white";
            iterator.style.borderColor = "white";
          }
      
          for (const iterator of aaa) {
            iterator.style.color = "white";
            iterator.addEventListener("mouseover", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.color = "white"; // Change to your desired border color and thickness
            });
            iterator.addEventListener("mouseleave", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.color = "white"; // Change to your desired border color and thickness
            });
          }
          for (const iterator of titels) {
            iterator.addEventListener("mouseover", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.borderBottom = "2px solid white"; // Change to your desired border color and thickness
            });
      
            // Add a mouseout event listener to reset the style when the mouse leaves the element
            iterator.addEventListener("mouseout", function () {
              // Reset the borderBottom property to its original state
              iterator.style.borderBottom = "none"; // Or any other initial borderBottom value you had
            });
          }
          for (const iterator of images) {
            iterator.style.filter =
              " brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7492%) hue-rotate(278deg) brightness(101%) contrast(101%)";
          }
      
          for (const iterator of tooltipImages) {
            iterator.style.filter =
              "brightness(0) saturate(100%) invert(37%) sepia(0%) saturate(1780%)hue-rotate(241deg) brightness(100%) contrast(78%)";
      
            iterator.addEventListener("mouseover", function () {
              // Change the borderBottom property of the element's style when hovering
              iterator.style.filter =
                "brightness(0) saturate(100%) invert(9%) sepia(66%) saturate(7040%) hue-rotate(315deg) brightness(130%) contrast(118%)"; // Change to your desired border color and thickness
            });
      
            // Add a mouseout event listener to reset the style when the mouse leaves the element
            iterator.addEventListener("mouseout", function () {
              // Reset the borderBottom property to its original state
              iterator.style.filter =
                "brightness(0) saturate(100%) invert(37%) sepia(0%) saturate(1780%)hue-rotate(241deg) brightness(100%) contrast(78%)";
              // Or any other initial borderBottom value you had
            });
          }
          navbar[0].style.borderTop = "none";
      
          humbergerText[0].style.color = "white";
          navp[0].style.color = "white";
          butterfly.src = "assets/img/vp/logovente.jpg";
          butterfly.style.filter = "none";
          navContainer.style.color = "white";
          // searchContainerHidden[0].style.display = "none";
          titleunderline.style.color = "white";
          titleunderline.style.borderBottom = "3px solid white";
        }
        }
      }
      ngAfterViewInit() {
        this.showSlides(this.slideIndex);
    
        // Carousel Timer
        setInterval(() => {
          this.plusSlides(1);
        }, 3000);
    
        // Tooltip animations
        const hamburger = this.el.nativeElement.querySelector('.hamburger');
        const tooltiptext = this.el.nativeElement.querySelector('.tooltiptext');
        const navbar = this.el.nativeElement.querySelector('.tooltip');
    
        this.renderer.listen(hamburger, 'mouseenter', () => {
          this.renderer.addClass(navbar, 'opened');
        });
        this.renderer.listen(hamburger, 'mouseleave', () => {
          this.renderer.removeClass(navbar, 'opened');
        });
        this.renderer.listen(tooltiptext, 'mouseenter', () => {
          this.renderer.addClass(navbar, 'opened');
        });
        this.renderer.listen(tooltiptext, 'mouseleave', () => {
          this.renderer.removeClass(navbar, 'opened');
        });
      }
    
      private plusSlides(n: number) {
        this.showSlides(this.slideIndex += n);
      }
    
      private currentSlide(n: number) {
        this.showSlides(this.slideIndex = n);
      }
    
      private showSlides(n: number) {
        const slides = this.el.nativeElement.getElementsByClassName('mySlides');
        const dots = this.el.nativeElement.getElementsByClassName('dot');
        
        if (n > slides.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = slides.length;
        }
    
        Array.from(slides).forEach((slide, i) => {
          this.renderer.setStyle(slide, 'display', 'none');
        });
        
        Array.from(dots).forEach((dot, i) => {
          this.renderer.removeClass(dot, 'active');
        });
    
        this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
        this.renderer.addClass(dots[this.slideIndex - 1], 'active');
      }
    
    }