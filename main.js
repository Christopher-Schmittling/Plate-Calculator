
function confirmNumber(number) {
    if (number <= 0) {
        number = "000"
    } else if (number < 10){
        number = "00" + String(number);
    } else if (number < 100){
        number = "0" + String(number);
    } else {
        number = number;
    }
    return number;
}
function calculatePlates(number) {
    var plates = {
        fourfive:  0,
        threefive: 0,
        twofive: 0,
        ten: 0,
        five: 0,
        twohalf: 0
    }
    number = number - 45;
    while (number >= 90) {
        plates.fourfive += 2;
        number -= 90
    }
    while (number >= 70) {
        plates.threefive += 2;
        number -=70;
    }
    while (number >= 50) {
        plates.twofive += 2;
        number -= 50;
    }
    while (number >= 20) {
        plates.ten += 2;
        number -= 20;
    }
    while (number >= 10) {
        plates.five += 2;
        number -= 10;
    }
    while (number >= 5) {
        plates.twohalf += 2;
        number -= 5;
    }
    return plates;
}

function updateAmounts(plates) {
    $('.fourfive').val(plates.fourfive)
    $('.threefive').val(plates.threefive)
    $('.twofive').val(plates.twofive)
    $('.ten').val(plates.ten)
    $('.five').val(plates.five)
    $('.twohalf').val(plates.twohalf)
}

$(document).ready(function() {
    $('.hun-up').click(function() {
        var number = parseInt($('.number').text());
        number += 100;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
    $('.hun-down').click(function() {
        var number = parseInt($('.number').text());
        number -= 100;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
    $('.ten-up').click(function() {
        var number = parseInt($('.number').text());
        number += 10;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
    $('.ten-down').click(function() {
        var number = parseInt($('.number').text());
        number -= 10;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
    $('.five-up').click(function() {
        var number = parseInt($('.number').text());
        number += 5;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
    $('.five-down').click(function() {
        var number = parseInt($('.number').text());
        number -= 5;
        number = confirmNumber(number);
        $('.number').text(number);
        plates = calculatePlates(number);
        updateAmounts(plates)
    })
})