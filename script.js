function showMenu(menuId) {
  document.querySelectorAll('.menu-section').forEach(section => section.style.display = 'none');
  document.getElementById(menuId).style.display = 'block';
}

function openLightbox(image) {
  document.getElementById('lightbox-img').src = image.src;
  document.getElementById('lightbox').style.display = 'flex';
}

window.onscroll = () => {
  document.getElementById("backToTop").style.display =
    window.scrollY > 100 ? "block" : "none";
};
document.getElementById("backToTop").onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function validateEnquiryForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let guests = document.getElementById("guests").value.trim();

  if (!name || !email || !guests) {
    alert("Please fill in all fields before submitting.");
    return false;
  }
  alert("Thank you! We'll contact you soon about your enquiry.");
  return true;
}

function checkCafeStatus() {
  const now = new Date();
  const hour = now.getHours();
  const openHour = 7; // opens at 7 AM
  const closeHour = 18; // closes at 6 PM

  const status = document.getElementById("status");
  if (hour >= openHour && hour < closeHour) {
    status.textContent = "☕ We’re Open! Come visit us!";
    status.style.color = "green";
  } else {
    status.textContent = "🌙 Closed — See you tomorrow!";
    status.style.color = "red";
  }
}
checkCafeStatus();

const specials = [
  "Monday: 2-for-1 Croissants",
  "Tuesday: Free Muffin with Latte",
  "Wednesday: 10% off All Teas",
  "Thursday: Free Refill Hour 3–4PM",
  "Friday: Iced Coffee Happy Hour!",
  "Saturday: Buy 1 Get 1 Cappuccino",
  "Sunday: Brownie & Coffee Combo Deal!"
];
document.getElementById("dailySpecial").innerText =
  specials[new Date().getDay()];

  if (!localStorage.getItem("visited")) {
  alert("Welcome to Brown Bean Café! Enjoy your visit ☕");
  localStorage.setItem("visited", "true");
}

let cart = [];
function addToCart(item) {
  cart.push(item);
  document.getElementById("cart").innerHTML = cart.join(", ");
  alert(item + " added to cart!");
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

