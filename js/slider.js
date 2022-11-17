const sliderRow = document.querySelector('.slider_row');
const sliderItems = document.querySelectorAll('.slider_item');

sliderRow.addEventListener('click', (event) => {
    let array = Array.from(sliderRow.children);

    if (event.target.classList.contains('slider_row_item')) {
        array.map(item => item.classList.remove('active'));
        Array.from(sliderItems).map(item => item.classList.remove('active'));
        sliderItems[array.indexOf(event.target)].classList.add('active');
        event.target.classList.add('active');
    }
});
