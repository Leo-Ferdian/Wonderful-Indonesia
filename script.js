// Seacrh Bar
// Fungsi untuk menampilkan modal pencarian
function openSearchModal() {
    document.getElementById("searchModal").style.display = "block";
}

// Fungsi untuk menutup modal pencarian
function closeSearchModal() {
    document.getElementById("searchModal").style.display = "none";
}

// Fungsi untuk menangani pencarian
function handleSearch() {
    // Lakukan operasi pencarian di sini
    // Misalnya, ambil nilai dari input
    var searchValue = document.getElementById("searchInput").value;

    // Lakukan sesuatu dengan nilai pencarian, misalnya, tampilkan di console
    console.log("Search value:", searchValue);

    // Tutup modal
    closeSearchModal();
}
// Fungsi untuk menampilkan modal pencarian pada mode mobile
function openMobileSearchModal() {
    openSearchModal(); // Panggil fungsi yang menampilkan modal pencarian
    hideMobileMenu(); // Sembunyikan menu mobile
}

// Menangani klik pada tombol pencarian di dalam mode mobile
document.getElementById("searchButtonMobile").addEventListener("click", openMobileSearchModal);

// Menangani klik pada tombol pencarian
document.getElementById("searchButton").addEventListener("click", openSearchModal);

// Menangani klik pada ikon close modal
document.getElementById("closeModal").addEventListener("click", closeSearchModal);

// Menangani klik pada tombol pencarian di dalam modal
document.getElementById("searchSubmit").addEventListener("click", handleSearch);

// Menangani pencarian ketika tombol "Enter" ditekan di dalam input
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});
// Menutup modal jika di luar area modal diklik
window.addEventListener("click", function (event) {
    if (event.target === document.getElementById("searchModal")) {
        closeSearchModal();
    }
});
// Menutup modal jika tombol escape ditekan
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSearchModal();
    }
});

// Menutup modal jika tombol navbar-toggler ditekan
document.getElementById("navbar-toggler").addEventListener("click", closeSearchModal);
// Search Bar End

// Carousel Auto Sliding
document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselExampleCaptions"), {
        interval: 4000,
    });

    // Handle keyboard
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            myCarousel.prev();
        } else if (event.key === "ArrowRight") {
            myCarousel.next();
        }
    });

    // Handle double click
    document.getElementById("carouselExampleCaptions").addEventListener("dblclick", function () {
        myCarousel.next();
    });
});
// Carousel Auto Sliding End

// Update Background NavBar
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    // Fungsi untuk mengupdate warna background navbar berdasarkan posisi scroll
    function updateNavbarBackground() {
        var scrollPosition = window.scrollY;
        var offset = 30;

        if (scrollPosition > offset) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    }

    updateNavbarBackground();

    window.addEventListener("scroll", function () {
        updateNavbarBackground();
    });
}); // Update Background Navbar End

// Mobile NavBar
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("navbar-toggler");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const mobileMenu = document.getElementById("mobileMenu");
    const navbar = document.getElementById("navbarNavAltMarkup");

    // Fungsi untuk menampilkan menu mobile
    function showMobileMenu() {
        mobileMenuOverlay.style.display = "block";
        mobileMenu.style.display = "block";
    }

    // Fungsi untuk menyembunyikan menu mobile
    function hideMobileMenu() {
        mobileMenuOverlay.style.display = "none";
        mobileMenu.style.display = "none";
    }
    // Fungsi untuk menyembunyikan navbar utama
    function HideNavbar() {
        navbar.style.display = "none";
    }

    // Menambahkan event listener pada tombol mobile menu
    mobileMenuButton.addEventListener("click", function () {
        if (mobileMenu.style.display === "block") {
            // Jika menu mobile sedang terbuka, tutup
            hideMobileMenu();
        } else {
            showMobileMenu();
        }
    });

    mobileMenuOverlay.addEventListener("click", hideMobileMenu);
    mobileMenuButton.addEventListener("click", HideNavbar);

    // Menambahkan event listener pada setiap item menu mobile
    const mobileMenuLinks = mobileMenu.getElementsByTagName("a");
    for (let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener("click", hideMobileMenu);
    }
});
