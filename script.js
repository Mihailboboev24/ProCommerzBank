function toggleMenu() {
    const menuPanel = document.querySelector('.menu-panel');
    menuPanel.style.display = menuPanel.style.display === 'block' ? 'none' : 'block';
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const selectedCurrency = document.getElementById('currency').value;

    if (!amount) {
        alert('Пожалуйста, введите сумму');
        return;
    }

    $.get('https://www.cbr-xml-daily.ru/daily_json.js', function(data) {
        const rates = JSON.parse(data);
        const aedRate = rates.Valute.AED.Value;

        let result;
        if (selectedCurrency === 'RUB') {
            result = amount / aedRate;
            document.getElementById('result').innerHTML = `
                <p>${amount} RUB = ${result.toFixed(2)} Дирхам ОАЭ (AED)</p>`;
        } else if (selectedCurrency === 'AED') {
            result = amount * aedRate;
            document.getElementById('result').innerHTML = `
                <p>${amount} AED = ${result.toFixed(2)} Российский рубль (RUB)</p>`;
        }
    });
}


function showFullNews(id) {
    document.getElementById(id).style.display = 'block';
}

function hideFullNews(id) {
    document.getElementById(id).style.display = 'none';
}

