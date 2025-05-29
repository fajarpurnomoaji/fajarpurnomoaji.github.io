document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.querySelector('.project-grid');

    const projects = [
        {
            title: 'Website E-commerce',
            image: 'images/project1.jpg', // Ganti dengan gambar proyek Anda
            description: 'Mengembangkan platform e-commerce yang responsif dengan fitur keranjang belanja, checkout, dan manajemen produk.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            link: 'https://example.com/project1' // Ganti dengan link proyek Anda
        },
        {
            title: 'Aplikasi To-Do List',
            image: 'images/project2.jpg', // Ganti dengan gambar proyek Anda
            description: 'Membuat aplikasi to-do list sederhana menggunakan JavaScript murni dengan kemampuan tambah, hapus, dan tandai selesai.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://example.com/project2' // Ganti dengan link proyek Anda
        },
        {
            title: 'Website Portofolio Pribadi',
            image: 'images/project3.jpg', // Ganti dengan gambar proyek Anda
            description: 'Mendesain dan mengembangkan website portofolio yang bersih dan modern untuk menampilkan proyek-proyek dan keahlian.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            link: 'https://example.com/project3' // Ganti dengan link proyek Anda
        },
        {
            title: 'Sistem Manajemen Inventori',
            image: 'images/project4.jpg', // Ganti dengan gambar proyek Anda
            description: 'Membangun sistem untuk melacak inventori, dengan fitur input data, pencarian, dan laporan.',
            technologies: ['Python', 'Django', 'PostgreSQL'],
            link: 'https://example.com/project4' // Ganti dengan link proyek Anda
        }
        // Tambahkan lebih banyak proyek di sini
    ];

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank">Lihat Proyek</a>
            </div>
        `;
        return card;
    }

    // Memuat proyek ke dalam DOM
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });

    // Opsional: Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});