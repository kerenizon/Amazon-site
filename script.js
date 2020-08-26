console.log('it-work');


const handleAddToCart = () => {
    document.querySelector('.cart-count').innerHTML = parseInt(document.querySelector('.cart-count').innerHTML) + 1;
}
document.querySelector('.add-cart-button').addEventListener('click', handleAddToCart);