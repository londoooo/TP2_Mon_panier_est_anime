import './style.css';
import { gsap } from 'gsap';

// Animation du titre

gsap.from('.hero h1', {
    opacity: 0,
    y: 30,
    duration: 1
});

// Animation du texte

gsap.from('.hero p', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3
});

// Animation du bouton

gsap.from('.hero a', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6
});

// Animation de l'image

gsap.from('.hero-image', {
    opacity: 0,
    duration: 1.5,
    delay: 0.3
});