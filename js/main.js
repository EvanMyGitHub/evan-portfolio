/* =========================
   PRELOADER
========================= */
document.body.classList.add("loading");
window.addEventListener("load", () => {

    const preloader =
    document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

        document.body.classList.remove("loading");

    }, 2000);

});


/* =========================
   NAVIGATION
========================= */
document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const links = document.querySelectorAll('.mobile-nav-links a');

    if (!hamburger || !mobileMenu) return;

    // TOGGLE MENU + HAMBURGER X
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // CLOSE MENU WHEN CLICK LINK
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

});


/* =========================
   PROJECT GALLERY
========================= */
const projectsData = [
    { id: "p1", img: "images/projects/web/mockup1.png", link: "https://www.hkhfuneralservices.com/" },
    { id: "p2", img: "images/projects/web/mockup2.png", link: "https://www.stephensfuneral.com/" },
    { id: "p3", img: "images/projects/web/mockup3.png", link: "https://www.rsthvn.com/" },
    { id: "p4", img: "images/projects/web/mockup4.png", link: "https://www.garrettsykesfs.com/" },
    { id: "p5", img: "images/projects/web/mockup5.png", link: "https://www.spilkerfuneralhome.com/" },
    { id: "p6", img: "images/projects/web/mockup6.png", link: "https://www.faithfuneralservice.net/" },
    { id: "p7", img: "images/projects/web/mockup7.png", link: "https://www.cornerstonefuneralhomeandcremations.com/" },
    { id: "p8", img: "images/projects/web/mockup8.png", link: "https://www.russellandpicafuneralhome.com/" },
    { id: "p9", img: "images/projects/web/mockup9.png", link: "https://www.miller-funeralhome.com/" },
    // Page 2 Items
    { id: "p10", img: "images/projects/web/mockup10.png", link: "https://www.chatmanharrisfh.com/" },
    { id: "p11", img: "images/projects/web/mockup11.png", link: "https://www.delhommefuneralhome.com/" },
    { id: "p12", img: "images/projects/web/mockup12.png", link: "https://www.metropolitanfuneralservice.com/" },
    { id: "p13", img: "images/projects/web/mockup13.png", link: "https://www.dykstrafuneralhome.com/" },
    { id: "p14", img: "images/projects/web/mockup14.png", link: "https://www.oguinnfh.com/" },
    { id: "p15", img: "images/projects/web/mockup15.png", link: "https://www.sullivanfamilyfuneralhomes.com/" },
    { id: "p16", img: "images/projects/web/mockup16.png", link: "https://www.yatesfuneralhome.com/" },
    { id: "p17", img: "images/projects/web/mockup17.png", link: "https://www.gundrumcares.com/" },
    { id: "p18", img: "images/projects/web/mockup18.png", link: "https://www.loyalcompanionpetcremation.com/" },
    // Page 3 Items
    { id: "p19", img: "images/projects/web/mockup19.png", link: "https://www.arsulowiczbrothers.com/" },
    { id: "p20", img: "images/projects/web/mockup20.png", link: "https://www.fischersfuneralservices.com/" },
    { id: "p21", img: "images/projects/web/mockup21.png", link: "https://www.wigginsfuneralhomes.com/" }
];

let currentPage = 1;
const itemsPerPage = 9;
const totalPages = Math.ceil(projectsData.length / itemsPerPage);

// Hinahayaan nating maging global ang function para matawagan kahit saan
function displayProjects(page) {
    const gridContainer = document.querySelector('.projects-grid');
    const pageInfo = document.querySelector('.pagination-info');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Safe check: Kung wala pa sa DOM ang mga elements, huwag munang itakbo para iwas error
    if (!gridContainer || !pageInfo || !prevBtn || !nextBtn) return;

    gridContainer.innerHTML = ""; 
    
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = projectsData.slice(start, end);

    paginatedItems.forEach(project => {
        const cardHTML = `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card-wrapper" id="${project.id}">
                <div class="project-card">
                    <div class="card-image-wrapper">
                        <img src="${project.img}" alt="Project Mockup" class="project-img" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x450/1a1a1a/ffffff?text=Image+Not+Found';">
                    </div>
                    <span class="live-preview-link">
                        Live Preview
                    </span>
                </div>
            </a>
        `;
        gridContainer.innerHTML += cardHTML;
    });

    pageInfo.textContent = `${page} of ${totalPages}`;

    // Update button states
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;

    prevBtn.style.opacity = page === 1 ? "0.3" : "1";
    prevBtn.style.cursor = page === 1 ? "not-allowed" : "pointer";
    nextBtn.style.opacity = page === totalPages ? "0.3" : "1";
    nextBtn.style.cursor = page === totalPages ? "not-allowed" : "pointer";
}

// Hihintayin muna nitong matapos mag-load ang buong HTML (DOM) bago lagyan ng Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Siguraduhing active ang buttons bago lagyan ng click event
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProjects(currentPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProjects(currentPage);
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }
        });
    }

    // Unang patakbo ng gallery pagka-load ng page
    displayProjects(currentPage);
});

