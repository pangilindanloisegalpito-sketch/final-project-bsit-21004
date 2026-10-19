document.addEventListener("DOMContentLoaded", () => {

  // 1. Welcome Message based on time of day
  const welcomeMsg = document.getElementById("welcome-msg");
  const currentHour = new Date().getHours();
  
  if (currentHour < 12) {
    welcomeMsg.textContent = "🌅 Good Morning! Welcome to my site.";
  } else if (currentHour < 18) {
    welcomeMsg.textContent = "☀️ Good Afternoon! Welcome to my site.";
  } else {
    welcomeMsg.textContent = "🌙 Good Evening! Welcome to my site.";
  }

  // 2. Dark / Light Mode Switch
  const themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "☀️ Light Mode";
    } else {
      themeToggleBtn.textContent = "🌙 Dark Mode";
    }
  });

  // 3. Alert on Click
  const alertBtn = document.getElementById("alert-btn");
  alertBtn.addEventListener("click", () => {
    alert("Welcome! Thanks for exploring my ITE 1 project portfolio.");
  });

  // 4. Show / Hide Information (Read More)
  const toggleInfoBtn = document.getElementById("toggle-info-btn");
  const extraInfo = document.getElementById("extra-info");

  toggleInfoBtn.addEventListener("click", () => {
    if (extraInfo.classList.contains("content-hidden")) {
      extraInfo.classList.remove("content-hidden");
      toggleInfoBtn.textContent = "Show Less";
    } else {
      extraInfo.classList.add("content-hidden");
      toggleInfoBtn.textContent = "Read More About My Journey";
    }
  });

  // 5. Dynamic Date and Time Clock
  const datetimeDisplay = document.getElementById("current-datetime");
  function updateClock() {
    const now = new Date();
    const options = { 
      weekday: 'short', year: 'numeric', month: 'short', 
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    datetimeDisplay.textContent = "📅 " + now.toLocaleDateString('en-US', options);
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});