// creating a custom reusable header
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
        <header>
        <nav class="nav_menu">
          <img src="/images/logo.png" alt="..." id="logo" />
          <ul id="nav-links">
            <li class="nav-item nav-item1"><a href="/index.html">Home</a></li>
            <li class="nav-item"><a href="/pages/about.html">About</a></li>
         
            <div id="dropdown1" class="dropdown">
              <button class="dropbtn"><a  href="/pages/products/products.html"> Products </a> <i class="fa-solid fa-chevron-down"></i></button>
              <div class="dropdown-content">
                <a href="/pages/products/xyz-product 1.html">Xyz Product 1</a>
                <a href="/pages/products/xyz-product 2.html">Xyz Product 2</a>
                <a href="/pages/products/xyz-product 3.html">Xyz Product 3</a>
              </div>
            </div>
       
          <li class="nav-item"><a href="/pages/services.html">Services</a></li>
            <li class="nav-item"><a href="/pages/contact.html">Contact</a></li>
          </ul>
          <button  id="toggle-icon"><i onclick="changeIcon(this)" class="fas fa-bars"></i></button>
        </nav>
      </header>`
  }
}
// declaring it as an element
customElements.define("my-header", myHeader)




// creating a custom reusable footer
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <div>
          <p id="copyright">
            All rights Reserved Apparelly © 2022 | Dev by
            <a href="https://www.facebook.com/aryanbismillah">Bismillah Kakar Aryan</a>
          </p>
        </div>
        <div class="icons">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"> </i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </footer>`
  }
};
// declaring it as an element
customElements.define("my-footer", myFooter);


// // form validation *contact-page
// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.elements.name.value = '';
//     e.target.elements.email.value = '';
//     e.target.elements.message.value = '';
// });
