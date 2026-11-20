import './style.css';

// Sélection des filtres

const filtreTshirts = document.getElementById('filtre-tshirts');
const filtreHoodies = document.getElementById('filtre-hoodies');
const filtrePantalons = document.getElementById('filtre-pantalons');

// Sélection des groupes de produits

const groupeTshirts = document.getElementById('groupe-tshirts');
const groupeHoodies = document.getElementById('groupe-hoodies');
const groupePantalons = document.getElementById('groupe-pantalons');

// Filtre des t-shirts

filtreTshirts.addEventListener('input', () => {

    if (filtreTshirts.checked) {
        groupeTshirts.style.display = 'flex';
    } else {
        groupeTshirts.style.display = 'none';
    }

});

// Filtre des chandails à capuchon

filtreHoodies.addEventListener('input', () => {

    if (filtreHoodies.checked) {
        groupeHoodies.style.display = 'flex';
    } else {
        groupeHoodies.style.display = 'none';
    }

});

// Filtre des pantalons

filtrePantalons.addEventListener('input', () => {

    if (filtrePantalons.checked) {
        groupePantalons.style.display = 'flex';
    } else {
        groupePantalons.style.display = 'none';
    }

});