import React from 'react';
import '../styles/MenuMobile.scss';

function MenuMobile() {
return (
  <div class="mobile-menu">
    <ul>
      <li><a href="/">CATEGORIES</a></li>
      <li><a href="/">All</a></li>
      <li><a href="/">Clothes</a></li>
      <li><a href="/">Electronics</a></li>
      <li><a href="/">Furnitures</a></li>
      <li><a href="/">Toys</a></li>
      <li><a href="/">Others</a></li>
    </ul>
    <ul>
      <li><a href="/" class="title-menu">My order</a></li>
      <li><a href="/" class="">My account</a></li>
    </ul>
    <ul>
      <li><a href="/" class="email-menu">Anderson@Platzi.com</a></li>
      <li><a href="/" class="sign-out">Sign out</a></li>
    </ul>
  </div>
)
}

export default MenuMobile;