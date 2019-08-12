let modal = null;

const openModal = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target; // on lui affecte la boite modal ouverte
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

// fermer la boite modal
const closeModal = (e) => {
    if(modal === null) return
    e.preventDefault();
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null;
}

const stopPropagation = (e) => {
    e.stopPropagation();
}

//cibler tous les classe 'js-modal' et ecouter l'évenement au clic de l'élément qui est cibler.
document.querySelectorAll('.js-modal').forEach(elem => {
    elem.addEventListener('click', openModal);
})


//fermer en appuyant sur la touche echap
