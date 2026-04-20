// 1. Yilni avtomatik yangilash
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Profil rasmini almashtirish (faqat brauzerda ko'rinadi, serverga yuklanmaydi)
const profileUpload = document.getElementById('profile-upload');
const profileImg = document.getElementById('profile-pic');

profileUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            profileImg.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// 3. Kontakt formani yuborish (demo rejim)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value.trim();
    if(phone.length >= 9) {
        alert(`✅ Rahmat! Raqamingiz qabul qilindi: ${phone}\nTez orada siz bilan bog'lanamiz.`);
        this.reset();
    } else {
        alert("⚠️ Iltimos, to'g'ri telefon raqam kiriting.");
    }
});

// 4. Silliq skrolllash (smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});