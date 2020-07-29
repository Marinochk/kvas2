let busket = document.querySelector('.busket');
let buys = document.querySelectorAll('.buy');
let hide = document.querySelector('.hide');

for (let buy of buys) {
    buy.addEventListener('click', function() {
        // console.log('there was a click');
        busket.classList.remove('hide');
    });
}
