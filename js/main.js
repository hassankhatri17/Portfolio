// main.js
import { Navbar, mountNavbar } from './components/navbar.js';
import { Hero } from './components/hero.js';
import { Projects } from './components/projects.js';
import { About } from './components/about.js';
import { Contact } from './components/contact.js';

function render() {
  const app = document.getElementById('app');
  app.innerHTML = [
    Navbar(),
    Hero(),
    Projects(),
    About(),
    Contact(),
  ].join('');

  mountNavbar();
}

document.addEventListener('DOMContentLoaded', render);
