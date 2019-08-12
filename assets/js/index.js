const openModal = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = null;
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
}

document.querySelectorAll('.js-modal').forEach(elem => {
    elem.addEventListener('click', openModal);
})