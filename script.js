var countDownDate = new Date("November 30, 2026 9:50:20").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));


    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";    

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);




const sendButton = document.querySelector('.btn2.btngrab');
sendButton.addEventListener('click', function() {
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const email = document.getElementById('email');
    const comments = document.getElementById('comments');

    alert('Message sent  successfully !');

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    comments.value = '';
});

const sendButton2 = document.querySelector('.btn.btngrab2');
sendButton2.addEventListener('click', function() {
    
    alert('Deal Availed Successfully !!!');

});





window.alert = function(message) {
    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';
    

    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert-box';

    alertBox.innerHTML = `
    <div class="custom-alert-header">Notification</div>
    <div class="custom-alert-body">${message}</div>
    <button class="custom-alert-btn">OK</div>
    `;

    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);

    alertBox.querySelector('.custom-alert-btn').addEventListener('click', function () {
        overlay.remove();
    });
};


let currentTestimonial = 0;
function moveTestimonial(direction) {
    const track = document.getElementById('testiTrack');
    const cards = track.querySelectorAll('.testi-card');

    const visisbleCards = window.innerWidth <= 600 ? 1 : 2;
    
    const maxIndex = Math.max(0, cards.length - visisbleCards);

    currentTestimonial += direction * visisbleCards;
    
    currentTestimonial = Math.max(0, Math.min(currentTestimonial, maxIndex));

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap);

    track.style.transform = `translateX(-${currentTestimonial * (cardWidth + gap)}px)`; 
}






function openJoinPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("joinPage").style.display = "flex";

    window.scrollTo(0, 0);

}


function closeJoinPage() {
    document.getElementById("joinPage").style.display = "none";


    
    document.getElementById("homePage").style.display = "block";

    window.scrollTo(0, 0);
}


document.getElementById("joinForm").addEventListener("submit", function (event) {

    event.preventDefault();

    
    document.getElementById("joinPage").style.display = "none";
    document.getElementById("successPage").style.display = "flex";

    window.scrollTo(0,0);
});



function proceedFurther() {
    alert("Your next step will be available on your email !")
}