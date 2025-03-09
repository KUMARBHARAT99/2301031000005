document.addEventListener("DOMContentLoaded", function () { 
    // Handle 'Submit' Button (index.html and First 3 Files)
    const submitBtns = document.querySelectorAll(".btn");
    if (submitBtns.length > 0) {
        submitBtns.forEach(submitBtn => {
            submitBtn.addEventListener("click", function (event) {
                event.preventDefault();
                goToNextPage();
            });
        });
    }

    // Handle 'Dashboard' in index3.html
    const dashboardBtn = document.querySelector(".dashboard-btn");
    if (dashboardBtn) {
        dashboardBtn.addEventListener("click", function () {
            window.location.href = "index4.html"; // Redirect to Dashboard
        });
    }

    // Handle 'Next' Button in index4.html
    const nextBtn = document.querySelector(".detail-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            window.location.href = "index5.html"; // Redirect to next page
        });
    }
});

// Function to go to the next page
function goToNextPage() {
    const pages = ["index.html", "index1.html", "index2.html", "index3.html", "index7.html","index8.html","index9.html","index10.html","index11.html","index12.html"];
    
    const currentPage = window.location.pathname.split("/").pop();
    const currentIndex = pages.indexOf(currentPage);

    if (currentIndex !== -1 && currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
}

// Function to navigate to a specific page
function navigateTo(page) {
    window.location.href = page;
}
document.addEventListener("DOMContentLoaded", function () {
    // Submit Button Event Listener
    document.querySelector(".submit").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent Default Behavior

        // Current Page Filename
        let currentPage = window.location.pathname.split("/").pop(); 
        
        // Page Mapping (index7.html -> index13.html, index8.html -> index14.html, ...)
        let pageMapping = {
            "index7.html": "index13.html",
            "index8.html": "index14.html",
            "index9.html": "index15.html",
            "index10.html": "index16.html",
            "index11.html": "index17.html",
            "index12.html": "index18.html"
        };

        //  Redirect to the next page
        if (pageMapping[currentPage]) {
            window.location.href = pageMapping[currentPage];
        } else {
            alert("Page mapping not found!");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Submit Button Event Listener
    const continueBtn = document.querySelector(".continue");
    const backBtn = document.querySelector(".back");

    // Current Page 
    let currentPage = window.location.pathname.split("/").pop();

    // Continue Button Mapping (index13.html -> index19.html, ...)
    let continueMapping = {
        "index13.html": "index19.html",
        "index14.html": "index20.html",
        "index15.html": "index21.html",
        "index16.html": "index22.html",
        "index17.html": "index23.html",
        "index18.html": "index24.html"
    };

    // Back Button 
    let backTarget = "index6.html";

    
    if (continueBtn && continueMapping[currentPage]) {
        continueBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Default Behavior 
            window.location.href = continueMapping[currentPage]; // Redirect
        });
    }

    
    if (backBtn) {
        backBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Default Behavior 
            window.location.href = backTarget; // index6.html  Redirect
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.querySelector(".next");

    
    let currentPage = window.location.pathname.split("/").pop();

    // Next Button Mapping (index19 - index24 → index25.html)
    let nextMapping = {
        "index19.html": "index25.html",
        "index20.html": "index25.html",
        "index21.html": "index25.html",
        "index22.html": "index25.html",
        "index23.html": "index25.html",
        "index24.html": "index25.html"
    };

    
    if (nextBtn && nextMapping[currentPage]) {
        nextBtn.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = nextMapping[currentPage];
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    
    const feedbackBtn = document.querySelector(".feedback");
    const homeBtn = document.querySelector(".home");
    const newSkillBtn = document.querySelector(".new-skill");

    
    if (feedbackBtn) {
        feedbackBtn.addEventListener("click", function () {
            window.location.href = "index27.html";
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            window.location.href = "index3.html";
        });
    }

    if (newSkillBtn) {
        newSkillBtn.addEventListener("click", function () {
            window.location.href = "index26.html";
        });
    }
});





