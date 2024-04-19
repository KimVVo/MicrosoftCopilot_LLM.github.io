// Example: Add functionality to toggle product details on click
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
    const button = card.querySelector('.buy-button');
    const details = card.querySelector('.product-details');

    button.addEventListener('click', () => {
        details.classList.toggle('show');
    });
});
