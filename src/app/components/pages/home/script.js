function initializeCarousel() {
    var slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
  
    function currentSlide(n) {
      showSlides((slideIndex = n));
    }
  
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  
    // Ajoutez cette ligne pour déclencher le changement de diapositive toutes les 5 secondes
    setInterval(function () {
      plusSlides(1);
    }, 3000); // 5000 millisecondes équivalent à 5 secondes
  }
  
  // Appelez la fonction pour initialiser la carrousel au chargement de la page
  window.addEventListener("load", initializeCarousel);
  
  //toottip annimation
  
  const hamburger = document.querySelector(".hamburger");
  const tooltiptext = document.querySelector(".tooltiptext");
  const navbar = document.querySelector(".tooltip");
  
  hamburger.addEventListener("mouseenter", () => {
    navbar.classList.add("opened");
  });
  
  hamburger.addEventListener("mouseleave", () => {
    navbar.classList.remove("opened");
  });
  
  tooltiptext.addEventListener("mouseenter", () => {
    navbar.classList.add("opened");
  });
  
  tooltiptext.addEventListener("mouseleave", () => {
    navbar.classList.remove("opened");
  });
  
  
  // Navbar background color on scroll
  
  // Get a reference to the navbar element
  const navContainer = document.getElementById("headertop");
  
  // Set the scroll threshold at which the background color changes
  const scrollThreshold = 10; // Change this value as needed
  
  // Function to handle scroll event
  function handleScroll() {
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
      navContainer.style.backgroundColor = "red"; // Change to your desired color
  
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
  
  // ;
  
  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
  
  // Call the handleScroll function on page load (in case the page is initially scrolled)
  handleScroll();
  
  // dropdown flags
  var countries = [
    { text: "Afghanistan", value: "AF" },
    { text: "Åland Islands", value: "AX" },
    { text: "Albania", value: "AL" },
    { text: "Algeria", value: "DZ" },
    { text: "American Samoa", value: "AS" },
    { text: "Andorra", value: "AD" },
    { text: "Angola", value: "AO" },
    { text: "Anguilla", value: "AI" },
    { text: "Antarctica", value: "AQ" },
    { text: "Antigua and Barbuda", value: "AG" },
    { text: "Argentina", value: "AR" },
    { text: "Armenia", value: "AM" },
    { text: "Aruba", value: "AW" },
    { text: "Australia", value: "AU" },
    { text: "Austria", value: "AT" },
    { text: "Azerbaijan", value: "AZ" },
    { text: "Bahamas", value: "BS" },
    { text: "Bahrain", value: "BH" },
    { text: "Bangladesh", value: "BD" },
    { text: "Barbados", value: "BB" },
    { text: "Belarus", value: "BY" },
    { text: "Belgium", value: "BE" },
    { text: "Belize", value: "BZ" },
    { text: "Benin", value: "BJ" },
    { text: "Bermuda", value: "BM" },
    { text: "Bhutan", value: "BT" },
    { text: "Bolivia", value: "BO" },
    { text: "Bosnia and Herzegovina", value: "BA" },
    { text: "Botswana", value: "BW" },
    { text: "Bouvet Island", value: "BV" },
    { text: "Brazil", value: "BR" },
    { text: "British Indian Ocean Territory", value: "IO" },
    { text: "Brunei Darussalam", value: "BN" },
    { text: "Bulgaria", value: "BG" },
    { text: "Burkina Faso", value: "BF" },
    { text: "Burundi", value: "BI" },
    { text: "Cambodia", value: "KH" },
    { text: "Cameroon", value: "CM" },
    { text: "Canada", value: "CA" },
    { text: "Cape Verde", value: "CV" },
    { text: "Cayman Islands", value: "KY" },
    { text: "Central African Republic", value: "CF" },
    { text: "Chad", value: "TD" },
    { text: "Chile", value: "CL" },
    { text: "China", value: "CN" },
    { text: "Christmas Island", value: "CX" },
    { text: "Cocos (Keeling) Islands", value: "CC" },
    { text: "Colombia", value: "CO" },
    { text: "Comoros", value: "KM" },
    { text: "Congo", value: "CG" },
    { text: "Congo, The Democratic Republic of the", value: "CD" },
    { text: "Cook Islands", value: "CK" },
    { text: "Costa Rica", value: "CR" },
    { text: "Cote D'Ivoire", value: "CI" },
    { text: "Croatia", value: "HR" },
    { text: "Cuba", value: "CU" },
    { text: "Cyprus", value: "CY" },
    { text: "Czech Republic", value: "CZ" },
    { text: "Denmark", value: "DK" },
    { text: "Djibouti", value: "DJ" },
    { text: "Dominica", value: "DM" },
    { text: "Dominican Republic", value: "DO" },
    { text: "Ecuador", value: "EC" },
    { text: "Egypt", value: "EG" },
    { text: "El Salvador", value: "SV" },
    { text: "Equatorial Guinea", value: "GQ" },
    { text: "Eritrea", value: "ER" },
    { text: "Estonia", value: "EE" },
    { text: "Ethiopia", value: "ET" },
    { text: "Falkland Islands (Malvinas)", value: "FK" },
    { text: "Faroe Islands", value: "FO" },
    { text: "Fiji", value: "FJ" },
    { text: "Finland", value: "FI" },
    { text: "France", value: "FR" },
    { text: "French Guiana", value: "GF" },
    { text: "French Polynesia", value: "PF" },
    { text: "French Southern Territories", value: "TF" },
    { text: "Gabon", value: "GA" },
    { text: "Gambia", value: "GM" },
    { text: "Georgia", value: "GE" },
    { text: "Germany", value: "DE" },
    { text: "Ghana", value: "GH" },
    { text: "Gibraltar", value: "GI" },
    { text: "Greece", value: "GR" },
    { text: "Greenland", value: "GL" },
    { text: "Grenada", value: "GD" },
    { text: "Guadeloupe", value: "GP" },
    { text: "Guam", value: "GU" },
    { text: "Guatemala", value: "GT" },
    { text: "Guernsey", value: "GG" },
    { text: "Guinea", value: "GN" },
    { text: "Guinea-Bissau", value: "GW" },
    { text: "Guyana", value: "GY" },
    { text: "Haiti", value: "HT" },
    { text: "Heard Island and Mcdonald Islands", value: "HM" },
    { text: "Holy See (Vatican City State)", value: "VA" },
    { text: "Honduras", value: "HN" },
    { text: "Hong Kong", value: "HK" },
    { text: "Hungary", value: "HU" },
    { text: "Iceland", value: "IS" },
    { text: "India", value: "IN" },
    { text: "Indonesia", value: "ID" },
    { text: "Iran, Islamic Republic Of", value: "IR" },
    { text: "Iraq", value: "IQ" },
    { text: "Ireland", value: "IE" },
    { text: "Isle of Man", value: "IM" },
    { text: "Israel", value: "IL" },
    { text: "Italy", value: "IT" },
    { text: "Jamaica", value: "JM" },
    { text: "Japan", value: "JP" },
    { text: "Jersey", value: "JE" },
    { text: "Jordan", value: "JO" },
    { text: "Kazakhstan", value: "KZ" },
    { text: "Kenya", value: "KE" },
    { text: "Kiribati", value: "KI" },
    { text: "Korea, Democratic People'S Republic of", value: "KP" },
    { text: "Korea, Republic of", value: "KR" },
    { text: "Kuwait", value: "KW" },
    { text: "Kyrgyzstan", value: "KG" },
    { text: "Lao People'S Democratic Republic", value: "LA" },
    { text: "Latvia", value: "LV" },
    { text: "Lebanon", value: "LB" },
    { text: "Lesotho", value: "LS" },
    { text: "Liberia", value: "LR" },
    { text: "Libyan Arab Jamahiriya", value: "LY" },
    { text: "Liechtenstein", value: "LI" },
    { text: "Lithuania", value: "LT" },
    { text: "Luxembourg", value: "LU" },
    { text: "Macao", value: "MO" },
    { text: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
    { text: "Madagascar", value: "MG" },
    { text: "Malawi", value: "MW" },
    { text: "Malaysia", value: "MY" },
    { text: "Maldives", value: "MV" },
    { text: "Mali", value: "ML" },
    { text: "Malta", value: "MT" },
    { text: "Marshall Islands", value: "MH" },
    { text: "Martinique", value: "MQ" },
    { text: "Mauritania", value: "MR" },
    { text: "Mauritius", value: "MU" },
    { text: "Mayotte", value: "YT" },
    { text: "Mexico", value: "MX" },
    { text: "Micronesia, Federated States of", value: "FM" },
    { text: "Moldova, Republic of", value: "MD" },
    { text: "Monaco", value: "MC" },
    { text: "Mongolia", value: "MN" },
    { text: "Montserrat", value: "MS" },
    { text: "Morocco", value: "MA" },
    { text: "Mozambique", value: "MZ" },
    { text: "Myanmar", value: "MM" },
    { text: "Namibia", value: "NA" },
    { text: "Nauru", value: "NR" },
    { text: "Nepal", value: "NP" },
    { text: "Netherlands", value: "NL" },
    { text: "Netherlands Antilles", value: "AN" },
    { text: "New Caledonia", value: "NC" },
    { text: "New Zealand", value: "NZ" },
    { text: "Nicaragua", value: "NI" },
    { text: "Niger", value: "NE" },
    { text: "Nigeria", value: "NG" },
    { text: "Niue", value: "NU" },
    { text: "Norfolk Island", value: "NF" },
    { text: "Northern Mariana Islands", value: "MP" },
    { text: "Norway", value: "NO" },
    { text: "Oman", value: "OM" },
    { text: "Pakistan", value: "PK" },
    { text: "Palau", value: "PW" },
    { text: "Palestinian Territory, Occupied", value: "PS" },
    { text: "Panama", value: "PA" },
    { text: "Papua New Guinea", value: "PG" },
    { text: "Paraguay", value: "PY" },
    { text: "Peru", value: "PE" },
    { text: "Philippines", value: "PH" },
    { text: "Pitcairn", value: "PN" },
    { text: "Poland", value: "PL" },
    { text: "Portugal", value: "PT" },
    { text: "Puerto Rico", value: "PR" },
    { text: "Qatar", value: "QA" },
    { text: "Reunion", value: "RE" },
    { text: "Romania", value: "RO" },
    { text: "Russian Federation", value: "RU" },
    { text: "RWANDA", value: "RW" },
    { text: "Saint Helena", value: "SH" },
    { text: "Saint Kitts and Nevis", value: "KN" },
    { text: "Saint Lucia", value: "LC" },
    { text: "Saint Pierre and Miquelon", value: "PM" },
    { text: "Saint Vincent and the Grenadines", value: "VC" },
    { text: "Samoa", value: "WS" },
    { text: "San Marino", value: "SM" },
    { text: "Sao Tome and Principe", value: "ST" },
    { text: "Saudi Arabia", value: "SA" },
    { text: "Senegal", value: "SN" },
    { text: "Serbia and Montenegro", value: "CS" },
    { text: "Seychelles", value: "SC" },
    { text: "Sierra Leone", value: "SL" },
    { text: "Singapore", value: "SG" },
    { text: "Slovakia", value: "SK" },
    { text: "Slovenia", value: "SI" },
    { text: "Solomon Islands", value: "SB" },
    { text: "Somalia", value: "SO" },
    { text: "South Africa", value: "ZA" },
    { text: "South Georgia and the South Sandwich Islands", value: "GS" },
    { text: "Spain", value: "ES" },
    { text: "Sri Lanka", value: "LK" },
    { text: "Sudan", value: "SD" },
    { text: "Suriname", value: "SR" },
    { text: "Svalbard and Jan Mayen", value: "SJ" },
    { text: "Swaziland", value: "SZ" },
    { text: "Sweden", value: "SE" },
    { text: "Switzerland", value: "CH" },
    { text: "Syrian Arab Republic", value: "SY" },
    { text: "Taiwan, Province of China", value: "TW" },
    { text: "Tajikistan", value: "TJ" },
    { text: "Tanzania, United Republic of", value: "TZ" },
    { text: "Thailand", value: "TH" },
    { text: "Timor-Leste", value: "TL" },
    { text: "Togo", value: "TG" },
    { text: "Tokelau", value: "TK" },
    { text: "Tonga", value: "TO" },
    { text: "Trinidad and Tobago", value: "TT" },
    { text: "Tunisia", value: "TN" },
    { text: "Turkey", value: "TR" },
    { text: "Turkmenistan", value: "TM" },
    { text: "Turks and Caicos Islands", value: "TC" },
    { text: "Tuvalu", value: "TV" },
    { text: "Uganda", value: "UG" },
    { text: "Ukraine", value: "UA" },
    { text: "United Arab Emirates", value: "AE" },
    { text: "United Kingdom", value: "GB" },
    {
      text: "United States",
      value: "US",
      synonym: ["USA", "United States of America"],
    },
    { text: "United States Minor Outlying Islands", value: "UM" },
    { text: "Uruguay", value: "UY" },
    { text: "Uzbekistan", value: "UZ" },
    { text: "Vanuatu", value: "VU" },
    { text: "Venezuela", value: "VE" },
    { text: "Viet Nam", value: "VN" },
    { text: "Virgin Islands, British", value: "VG" },
    { text: "Virgin Islands, U.S.", value: "VI" },
    { text: "Wallis and Futuna", value: "WF" },
    { text: "Western Sahara", value: "EH" },
    { text: "Yemen", value: "YE" },
    { text: "Zambia", value: "ZM" },
    { text: "Zimbabwe", value: "ZW" },
  ];
  
  for (var i = 0; i < countries.length; i++) {
    countries[i].image =
      "https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/" +
      countries[i].value.toLowerCase() +
      ".svg";
  }
  
  // Trouver l'option correspondant à la France dans le tableau
  var franceOption = countries.find(function (country) {
    return country.value === "FR";
  });
  
  // Définir la France comme option par défaut
  var dropdown = jSuites.dropdown(document.getElementById("dropdown"), {
    data: countries,
    autocomplete: true,
    multiple: true,
    width: "180px",
    value: ["FR"],
    // Définit la France comme option par défaut,
  });
  
  // Sélectionner visuellement la France avec son drapeau
  dropdown.display[0].innerHTML =
    '<img src="' +
    franceOption.image +
    '" alt="FR" style="width: 16px; height: 11px; margin-right: 5px;">' +
    franceOption.text;