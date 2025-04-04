document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Create popup message
        const popup = document.createElement("div");
        popup.textContent = "Submitted successfully!";
        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.right = "20px";
        popup.style.backgroundColor = "#4CAF50";
        popup.style.color = "white";
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "5px";
        popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        popup.style.zIndex = "1000";
        
        document.body.appendChild(popup);

        // Remove popup after 3 seconds
        setTimeout(() => {
            popup.remove();
        }, 3000);

        // Clear the form fields
        form.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging message to confirm script is working

    // Select all "Add to Cart" buttons
    let cartButtons = document.querySelectorAll(".add-to-cart");

    if (cartButtons.length === 0) {
        console.error("No 'Add to Cart' buttons found! Check your HTML.");
        return;
    }

    // Create popup element
    let popup = document.createElement("div");
    popup.id = "cart-popup";
    popup.innerText = "Item added to cart!";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";
    popup.style.backgroundColor = "black";
    popup.style.color = "white";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.display = "none";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // Add event listeners to all buttons
    cartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            showPopup();
        });
    });

    function showPopup() {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 2000); // Hide after 2 seconds
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".testimonial-slide");
    let dots = document.querySelectorAll(".testimonial-dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
            dots[i].classList.toggle("active", i === index);
        });
    }

    // Show first slide initially
    showSlide(currentIndex);

    // Add click event to dots for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Auto-slide every 5 seconds (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});
//Newsletter subscription form
function subscribe() {
    let email = document.getElementById("email").value;
    if (email) {
        alert("Subscribed successfully!");
    } else {
        alert("Please enter a valid email address.");
    }
}