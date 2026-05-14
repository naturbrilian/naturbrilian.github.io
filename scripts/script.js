// ===== scripts/script.js =====

// Data Terjemahan Bahasa

// Fungsi Ganti Bahasa
function changeLanguage() {
    const selectedLang = document.getElementById("languageSelect").value;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[selectedLang][key]) {
            element.innerHTML = translations[selectedLang][key];
        }
    });
    document.documentElement.lang = selectedLang;

    // 👇 TAMBAHKAN BARIS INI 👇
    renderBlog(selectedLang);
}

// Logika Tema (Light/Dark)
// ==========================================
// TEMA OTOMATIS ALA WEB TENSHI 
// ==========================================
// ==========================================
// 1. TEMA MANUAL (AUTO-SYNC VIA CSS TENSHI)
// ==========================================
const themeBtn = document.getElementById('themeBtn');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

function updateIcon() {
    const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const manualTheme = document.documentElement.getAttribute('data-theme');
    
    if (manualTheme === 'dark' || (!manualTheme && !isLight)) {
        if(moonIcon) moonIcon.style.display = 'none';
        if(sunIcon) sunIcon.style.display = 'block';
    } else {
        if(moonIcon) moonIcon.style.display = 'block';
        if(sunIcon) sunIcon.style.display = 'none';
    }
}

updateIcon();

if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        let currentTheme = document.documentElement.getAttribute('data-theme');
        let osIsLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        if (!currentTheme) {
            currentTheme = osIsLight ? 'light' : 'dark';
        }
        
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateIcon();
    });
}

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    document.documentElement.removeAttribute('data-theme'); 
    updateIcon();
});


// ==========================================
// 2. KODE POP-UP GALERI (JANGAN DIHAPUS!)
// ==========================================
// (PASTE KODE ASLI LU DI SINI)
const modal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");
const galleryImages = document.querySelectorAll(".gallery-item img");
const closeModal = document.querySelector(".close-modal");// Sesuaikan class-nya

if (modal && fullImage && galleryImages.length > 0) {
    
    // Pasang 'telinga' di setiap gambar galeri
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("show");
            fullImage.src = this.src; // Ambil URL gambar yang diklik dan taruh di pop-up
        });
    });

    // Fungsi tutup saat tombol X diklik
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Fungsi tutup saat area gelap di luar gambar diklik
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
}

// ==========================================
// 3. LOGIKA MENU MOBILE (HAMBURGER)
// ==========================================
// Logika Menu Mobile (Hamburger)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

window.onload = changeLanguage;


// --- DATABASE BLOG MULTIBAHASA ---
const blogPosts = [
        {
        id: "ketika-sebuah-era-mendengarkan-radio-perlahan-berakhir",
        date: "01 April 2026",
        category: "Radio",
        image: "/assets/pexels-adiardizulfansyah-32507863.jpg",
        link: "test1",
        title: {
            id: "Ketika era mendengarkan radio perlahan menghilang",
            en: "As the era of listening to the radio slowly fades away",
            jp: "新しいポートフォリオデザインの実験"
        },
        desc: {
            id: "Persaingan dengan layanan musik streaming digital dan nasib kedepannya.",
            en: "Competition with digital music streaming services and their future prospects",
            jp: "デジタル音楽ストリーミングサービスとの競争と今後の展望。"
        }
    },
    {
        id: "test1",
        date: "12 Maret 2026",
        category: "Web Development",
        image: "https://picsum.photos/seed/blog1/600/400",
        link: "test1",
        title: {
            id: "Eksperimen Desain Portofolio Baru",
            en: "New Portfolio Design Experiment",
            jp: "新しいポートフォリオデザインの実験"
        },
        desc: {
            id: "Catatan singkat tentang bagaimana saya mendesain ulang antarmuka portofolio menggunakan palet warna Catppuccin.",
            en: "A quick note on how I redesigned my portfolio interface using the Catppuccin color palette.",
            jp: "Catppuccinカラーパレットを使用してポートフォリオのインターフェースを再設計した方法についての短いメモ。"
        }
    },
    {
        id: "memverifikasi-kepemilikan-tautan-ternyata-mudah",
        date: "19 Feb 2026",
        category: "Verification",
        image: "/assets/rel-me.png",
        link: "artikel-2.html",
        title: {
            id: "Memverifikasi kepemilikan tautan ternyata mudah",
            en: "Verifying link ownership is surprisingly easy",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Cara paling sederhana untuk memverifikasi kepemilikan tautan.",
            en: "The simplest way to verify link ownership.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "script-skin-tutorial",
        date: "19 Jan 2026",
        category: "Tutorial",
        image: "/assets/script-tutorial.png",
        link: "artikel-2.html",
        title: {
            id: "Cara membuat skrip untuk dukungan multi-warna pada skinmu sendiri",
            en: "How to create a script for multi-color support on your own skins",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Berbagi pengalaman saat menggarap proyek lokalisasi di platform Crowdin dan tantangannya.",
            en: "Sharing experiences while working on localization projects on the Crowdin platform and its challenges.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "at-the-end-of-the-year",
        date: "15 Dec 2025",
        category: "Refreshing",
        image: "/assets/langit.webp",
        link: "artikel-2.html",
        title: {
            id: "Pada akhir tahun",
            en: "At the end of the year",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Cerita tentang liburanku beberapa pekan lalu di Surabaya",
            en: "The story about my holiday a few weeks ago in Surabaya",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "what-are-the-characteristics-of-a-scammer",
        date: "30 September 2025",
        category: "Reminder",
        image: "/assets/serupa-tapi-tak-sama.png",
        link: "artikel-2.html",
        title: {
            id: "Pada akhir tahun",
            en: "What are the characteristics of a scammer?",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Cerita tentang liburanku beberapa pekan lalu di Surabaya",
            en: "This post only available on English language, and this is backup from Deviantart post",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "lastfm-to-sbky",
        date: "30 August 2025",
        category: "Tutorial",
        image: "/assets/aimp4-and-cmd-show.png",
        link: "artikel-2.html",
        title: {
            id: "Menggunakan chatGPT untuk membuat skrip sederhana",
            en: "Using chatGPT to create simple code",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Ini adalah cara sederhana yang kugunakan untuk meminta AI ChatGPT membuat kode sederhana untuk mengirimkan scrobble Last.fm ke Bluesky.",
            en: "This is simple way i prompt AI ChatGPT to create simple code for posting Last.fm tracks to Bluesky.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "migrate-is-done",
        date: "07 August 2025",
        category: "Blog",
        image: "/assets/ev_miko_07a.webp",
        link: "artikel-2.html",
        title: {
            id: "Proses migrasi sudah selesai",
            en: "The migration process is done",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Pindah ke halaman web baru",
            en: "Move to new homepage.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "this-blog-is-not-completed-dead",
        date: "10 February 2025",
        category: "Blog",
        image: "/assets/20250210055150.jpg",
        link: "artikel-2.html",
        title: {
            id: "Proses migrasi sudah selesai",
            en: "This blog is not totally dead",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Pindah ke halaman web baru",
            en: "The short announcement from english blog version",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
     {
        id: "postingan-terakhir-di-tahun-ini",
        date: "24 December 2024",
        category: "Blog",
        image: "/assets/vector-2.Bn1M0fK3_Z2kKx87.webp",
        link: "artikel-2.html",
        title: {
            id: "Postingan terakhir di tahun ini",
            en: "Last post in this year",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Masa depan situs web, dan domain yang makin kedepannya harganya naik",
            en: "The future of websites, and domains, will continue to rise in price.",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "retiring-from-priconne",
        date: "12 December 2024",
        category: "Blog",
        image: "/assets/image-10.webp",
        link: "artikel-2.html",
        title: {
            id: "Memutuskan untuk pensi dari gim favorit",
            en: "Deciding to retiring from my favourite game",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Meninggalkannya, aku sangat lega dengan gim bodoh ini setelah beberapa tahun tidak bermain",
            en: "Leaving it, I was so relieved with this stupid game after a few years of not playing it.",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "tutorial-tema-google-chrome",
        date: "12 November 2024",
        category: "Tutorial",
        image: "/assets/chrome-themes-tutor.png",
        link: "artikel-2.html",
        title: {
            id: "Tutorial Tema Google Chrome",
            en: "Google Chrome Themes Tutorial",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Panduan cara membuat tema Google Chromemu sendiri",
            en: "Tutorial on how to create a your own Google Chrome theme.",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "free-subdomain-from-fansub-id",
        date: "18 November 2023",
        category: "Domain",
        image: "/assets/fansub-id-preview.png",
        link: "artikel-2.html",
        title: {
            id: "Bingung mau pasang domain di web proyek terjemahan, namun terkendala biaya? FansubID memberikan sub-domain gratis buat kamu",
            en: "Don't know if you want to put a domain on your translation project, but you can't afford it? FansubID provides free sub-domains for you",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Cara mendapatkan domain gratisan untuk proyek terjemahanmu atau terjemahan penggemar",
            en: "How to get a free domain for translation projects or fan translations",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },

    
];

// --- FUNGSI MENCETAK GRID BLOG ---
function renderBlog(lang) {
    
    const container = document.getElementById('blogContainer');
    
    // Cek apakah kita sedang berada di halaman blog.html
    if (!container) return; 

    // Kosongkan kontainer sebelum dicetak ulang
    container.innerHTML = ''; 

    // Terjemahan untuk tombol "Baca Artikel"
    const readMoreText = {
        id: "Baca Artikel",
        en: "Read More",
        jp: "続きを読む"
    };

    // Cetak setiap postingan menjadi kartu HTML
    blogPosts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card';
        card.innerHTML = `
    <img src="${post.image}" alt="Cover Artikel" class="blog-img">
    <div class="blog-content">
        <div class="blog-meta">${post.date} • ${post.category}</div>
        <h3>${post.title[lang]}</h3>
        <p>${post.desc[lang]}</p>
        <a href="/posts/${post.id}.html" class="read-more">${readMoreText[lang]}</a>
    </div>
        `;
        container.appendChild(card);
    });
}

// --- JALANKAN BLOG SAAT HALAMAN PERTAMA KALI DIBUKA ---
document.addEventListener("DOMContentLoaded", () => {
    // Ambil bahasa saat ini dari dropdown (jika ada), kalau tidak ada default ke 'id'
    const langSelect = document.getElementById('languageSelect');
    const currentLang = langSelect ? langSelect.value : 'id';
    
    // Panggil mesin pencetak grid blog
    renderBlog(currentLang);
});

// ==========================================
// FLOATING LAST.FM WIDGET LOGIC
// ==========================================
const lastFmUser = 'naturbrilian'; // Ganti pakai username kamu
const lastFmApiKey = '411b298c830d3599a94c097d70bc953e'; // Ganti pakai API Key kamu

async function fetchNowPlaying() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=naturbrilian&api_key=411b298c830d3599a94c097d70bc953e&format=json&limit=1`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const track = data.recenttracks.track[0];
        // Cek apakah ada atribut @attr dan statusnya nowplaying
        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
        
        const widget = document.getElementById('lastfm-widget');
        
        if (isPlaying) {
            // Ambil cover art ukuran extralarge (index 3)
            const coverUrl = track.image[3]['#text'] || 'assets/default-cover.png'; 
            
            document.getElementById('lastfm-cover').src = coverUrl;
            document.getElementById('lastfm-song').textContent = track.name;
            document.getElementById('lastfm-artist').textContent = track.artist['#text'];
            
            // Munculkan widget
            widget.classList.remove('hidden');
        } else {
            // Sembunyikan kalau musik di-pause/stop
            widget.classList.add('hidden');
        }
    } catch (error) {
        console.error('Gagal mengambil data Last.fm:', error);
    }
}

// Jalankan saat web pertama kali dibuka
fetchNowPlaying();
// Cek lagu baru setiap 15 detik (15000 ms)
setInterval(fetchNowPlaying, 15000);

// ==========================================
// MESIN PENGALIH FOLDER BAHASA (REDIRECTOR)
// ==========================================
const langSelect = document.getElementById('languageSelect');

if (langSelect) {
    const currentPath = window.location.pathname;

    // 1. Setel otomatis tampilan dropdown sesuai URL yang lagi dibuka
    if (currentPath.includes('/id/')) {
        langSelect.value = 'id';
    } else if (currentPath.includes('/ja/') || currentPath.includes('/jp/')) {
        langSelect.value = 'jp';
    } else {
        langSelect.value = 'en'; // Default kalau di root
    }

    // 2. Kalau dropdown diganti, langsung pindah folder
    langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        let path = window.location.pathname;
        
        // Bersihin dulu URL dari awalan folder bahasa yang lama (kalau ada)
        path = path.replace(/^\/(id|ja|jp)\//, '/');
        // Jaga-jaga kalau cuma di index
        if (path === '/id' || path === '/ja' || path === '/jp') path = '/';

        // Tentukan rute tujuan
        let targetUrl = '';
        if (selectedLang === 'en') {
            targetUrl = path; // Balik ke root
        } else if (selectedLang === 'id') {
            targetUrl = '/id' + path; // Masuk folder ID
        } else if (selectedLang === 'jp') {
            targetUrl = '/ja' + path; // Masuk folder JA
        }
        
        // Gas pindah halaman!
        window.location.href = targetUrl;
    });
}

// ==========================================
// MESIN PEMBACA MARKDOWN (AUTO-DETECT FOLDER)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Cek apakah halaman ini lagi butuh baca Markdown (contoh di halaman read.html/post.html)
    const markdownContent = document.getElementById("markdown-content");
    if (!markdownContent) return; 

    // 1. Ambil ID artikel dari URL (?id=nama-artikel)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        // 2. Deteksi otomatis bahasa dari URL folder
        const currentPath = window.location.pathname;
        let folderLang = 'en'; // Default bahasa Inggris kalau di root
        
        if (currentPath.includes('/id/')) {
            folderLang = 'id';
        } else if (currentPath.includes('/ja/') || currentPath.includes('/jp/')) {
            folderLang = 'ja';
        }

        // 3. Tarik file Markdown sesuai foldernya
        // Pastikan path '../' disesuaikan dengan posisi file HTML lu berada
        const mdPath = `../posts/${folderLang}/${postId}.md`; 
        
        fetch(mdPath)
            .then(response => {
                if (!response.ok) throw new Error("Artikel tidak ditemukan");
                return response.text();
            })
            .then(text => {
                // Proses render Markdown (bawaan script lu sebelumnya)
                markdownContent.innerHTML = marked.parse(text);
                
                // Kalau lu punya fungsi generate TOC, panggil di sini:
                // generateTOC(); 
            })
            .catch(error => {
                markdownContent.innerHTML = `<p style="text-align:center; color: var(--accent);">Oops! Artikel belum tersedia dalam bahasa ini.</p>`;
            });
    }
});

/* ========================================= */
/* AUTO-GENERATE TOC (DAFTAR ISI) ARTIKEL    */
/* ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    const contentArea = document.getElementById('article-content'); 
    const tocNav = document.getElementById('toc');
    const tocContainer = document.getElementById('toc-container');
    
    if (!contentArea || !tocNav) return;

    const headings = contentArea.querySelectorAll('h2, h3');
    tocNav.innerHTML = ''; 

    if (headings.length === 0) {
        if(tocContainer) tocContainer.style.display = 'none';
        return;
    } else {
        if(tocContainer) tocContainer.style.display = 'block';
    }

    headings.forEach((heading, index) => {
        if (!heading.id) {
            let safeId = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            heading.id = safeId + '-' + index; 
        }

        const link = document.createElement('a');
        link.href = '#' + heading.id; 
        link.textContent = heading.textContent;
        link.className = 'toc-link toc-' + heading.tagName.toLowerCase();
        
        tocNav.appendChild(link);
    });
});
