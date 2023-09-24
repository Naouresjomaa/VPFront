import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

 
 

  ngOnInit(): void {
    
     
  
     let navContainer = this.el.nativeElement.querySelector('.headertop'); // Remplacez '.your-nav-class' par le sélecteur CSS de votre conteneur
     
      if (navContainer) {
      
     
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
      if (true) {
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
      } 
    
      }
  }

}
