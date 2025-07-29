/*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/

  const form = document.querySelector(".contact__form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.innerHTML = "<p class='success-message'>تم إرسال رسالتك بنجاح! سأرد عليك قريبًا 🌟</p>";
    } else {
      form.innerHTML = "<p class='error-message'>حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا ⚠️</p>";
    }
  });
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400,
  reset: true, // يجعل الأنيميشن يحدث مرة واحدة فقط
}).reveal('.home__content, .home__img, .project-card, .section-title', {
  interval: 200
});




function openModal(img) {
  document.getElementById("modal-img").src = img.src;
  document.getElementById("modal-caption").innerText = img.alt;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


 document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".MySkill__card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // تأخير بين كل بطاقة واللي بعدها
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

