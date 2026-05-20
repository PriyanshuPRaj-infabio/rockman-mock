document.addEventListener("DOMContentLoaded", function() {
  // 1. Intercept Contact Form 7 submissions
  document.addEventListener("submit", function(e) {
    var target = e.target;
    if (target && target.classList.contains("wpcf7-form")) {
      e.preventDefault();
      
      // Try to find the response container to show a success message in style
      var responseDiv = target.querySelector(".wpcf7-response-output");
      if (responseDiv) {
        responseDiv.style.display = "block";
        responseDiv.style.border = "2px solid #46b450";
        responseDiv.style.backgroundColor = "#f7faf7";
        responseDiv.style.color = "#46b450";
        responseDiv.style.padding = "10px";
        responseDiv.style.marginTop = "15px";
        responseDiv.style.borderRadius = "4px";
        responseDiv.textContent = "Thank you for your enquiry. We will get back to you soon!";
      } else {
        alert("Thank you for your enquiry. We will get back to you soon!");
      }
      
      // Reset form fields
      target.reset();
      
      // Remove any wpcf7-submitting or loader classes
      var submitButton = target.querySelector("input[type='submit']");
      if (submitButton) {
        submitButton.removeAttribute("disabled");
      }
      var spinner = target.querySelector(".ajax-loader");
      if (spinner) {
        spinner.classList.remove("is-active");
      }
    }
    
    // 2. Intercept Comment form submissions
    if (target && target.id === "commentform") {
      e.preventDefault();
      alert("Comments are disabled in the offline version.");
    }
  });

  // 3. Smooth scrolling for internal anchor links (with header offset)
  document.addEventListener("click", function(e) {
    var anchor = e.target.closest("a");
    if (!anchor) return;
    
    var href = anchor.getAttribute("href");
    if (!href) return;
    
    try {
      // Resolve native absolute URL
      var anchorUrl = new URL(anchor.href, window.location.href);
      var currentUrl = new URL(window.location.href);
      
      // Strip trailing slashes for comparison
      var anchorPath = anchorUrl.pathname.replace(/\/$/, "");
      var currentPath = currentUrl.pathname.replace(/\/$/, "");
      
      if (anchorUrl.origin === currentUrl.origin && anchorPath === currentPath) {
        var hash = anchorUrl.hash;
        if (hash && hash !== "#") {
          var target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            
            // Update URL hash using history.pushState to prevent default abrupt jump
            history.pushState(null, null, hash);
            
            // Calculate height of the sticky header
            var header = document.querySelector("#header-outer");
            var headerHeight = header ? header.offsetHeight : 0;
            
            // Calculate top position with offset
            var elementPosition = target.getBoundingClientRect().top + window.scrollY;
            var offsetPosition = elementPosition - headerHeight - 20; // 20px padding
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      }
    } catch (err) {
      console.warn("Smooth scroll click intercept error:", err);
    }
  });
});

// 4. Smooth scroll on initial load if hash is present
window.addEventListener("load", function() {
  if (window.location.hash) {
    // Small delay to ensure images/layout have rendered and heights are correct
    setTimeout(function() {
      try {
        var target = document.querySelector(window.location.hash);
        if (target) {
          var header = document.querySelector("#header-outer");
          var headerHeight = header ? header.offsetHeight : 0;
          
          var elementPosition = target.getBoundingClientRect().top + window.scrollY;
          var offsetPosition = elementPosition - headerHeight - 20; // 20px padding
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } catch (err) {
        console.warn("Smooth scroll load handler error:", err);
      }
    }, 200);
  }
});
