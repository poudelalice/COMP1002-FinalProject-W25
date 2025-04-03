// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Select the contact form element
    const form = document.querySelector(".contact-form");

    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission to allow custom handling

        // Create a success popup message after form submission
        const popup = document.createElement("div");
        popup.textContent = "Submitted successfully!";
        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.right = "20px";
        popup.style.backgroundColor = "#4CAF50"; // Green background for success
        popup.style.color = "white"; // White text color
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "5px"; // Rounded corners
        popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // Shadow for 3D effect
        popup.style.zIndex = "1000"; // Ensure it's on top of other elements
        
        // Append the popup to the body
        document.body.appendChild(popup);

        // Remove the popup after 3 seconds
        setTimeout(() => {
            popup.remove();
        }, 3000);

        // Clear all form fields after submission
        form.reset();
    });
});

// Second script for handling 'Add to Cart' button functionality
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging message to confirm the script is running

    // Select all "Add to Cart" buttons
    let cartButtons = document.querySelectorAll(".add-to-cart");

    // If no buttons are found, log an error
    if (cartButtons.length === 0) {
        console.error("No 'Add to Cart' buttons found! Check your HTML.");
        return;
    }

    // Create a popup element that appears when an item is added to the cart
    let popup = document.createElement("div");
    popup.id = "cart-popup";
    popup.innerText = "Item added to cart!";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)"; // Center the popup horizontally
    popup.style.backgroundColor = "black";
    popup.style.color = "white";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.display = "none"; // Initially hide the popup
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // Add event listeners to all "Add to Cart" buttons
    cartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action of the button
            showPopup(); // Show the popup
        });
    });

    // Function to show the popup and hide it after 2 seconds
    function showPopup() {
        popup.style.display = "block"; // Display the popup
        setTimeout(() => {
            popup.style.display = "none"; // Hide the popup after 2 seconds
        }, 2000);
    }
});

// Third script for handling the testimonial slider functionality
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".testimonial-slide"); // Select all testimonial slides
    let dots = document.querySelectorAll(".testimonial-dot"); // Select all navigation dots
    let currentIndex = 0; // Start with the first slide

    // Function to show the slide at the given index and update the active dot
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none"; // Display the current slide
            dots[i].classList.toggle("active", i === index); // Mark the current dot as active
        });
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Add click event to dots to navigate to the corresponding slide
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Automatically move to the next slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        showSlide(currentIndex);
    }, 5000); // Change slide every 5 seconds
});

// Newsletter subscription form functionality
function subscribe() {
    let email = document.getElementById("email").value; // Get the email entered in the input field
    if (email) {
        alert("Subscribed successfully!"); // Show success message if email is entered
    } else {
        alert("Please enter a valid email address."); // Show error message if email is empty
    }
}

