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
    {
        id: "apakah-tema-windows-10-masih-bisa-digunakan-saat-kamu-mengunakan-windows-11",
        date: "19 February 2023",
        category: "Themes",
        image: "/assets/image-39.png",
        link: "artikel-2.html",
        title: {
            id: "Apakah Tema Windows 10 masih bisa digunakan saat kamu mengunakan Windows 11?",
            en: "Can Windows 10 themes still be used when you are using Windows 11?",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "cara menerapkan tema windows 10 ke 11",
            en: "how to apply windows 10 theme to 11",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "nanako-music-player-concept-a-k-a-nanako-skins",
        date: "09 August 2022",
        category: "Themes",
        image: "/assets/image-461.png",
        link: "artikel-2.html",
        title: {
            id: "Konsep Nanako Music Player?",
            en: "Nanako Music Player Concept?",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Aku gak tau judul artikel nya apa, um Nanako Skin?",
            en: "I dont know what a title say, um Nanako Skins?",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "mahjong-soul-on-desktop",
        date: "29 April 2022",
        category: "Tutorial",
        image: "/assets/20220429092614.png",
        link: "artikel-2.html",
        title: {
            id: "Mahjong Soul on Desktop",
            en: "Mahjong Soul on Desktop",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "cara menjalankan Mahjong Soul seperti aplikasi mandiri (tutorial sudah usang)",
            en: "how to run Mahjong Soul as a standalone application (tutorial is outdated)",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "anniversary-proyek-gingalibadeidara-works-yang-ke-8",
        date: "28 February 2022",
        category: "Project",
        image: "/assets/image-54.png",
        link: "artikel-2.html",
        title: {
            id: "Anniversary Proyek Gingalibadeidara Works yang ke 8",
            en: "Anniversary of gingalibadeidara works 8 years (from Blogging until Translations Project)",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "8 tahun sudah proyek berjalan, dan sekaligus komentar dari author",
            en: "8 years my project run, and the commentaries author",
            jp: "ウェブサイトやドメインの価格は、今後も上昇し続けるだろう。"
        }
    },
    {
        id: "happy-new-year-2022",
        date: "25 February 2022",
        category: "Tutorial",
        image: "/assets/llenn.BU9zeOdz_Zfa2VF.webp",
        link: "artikel-2.html",
        title: {
            id: "Tahun Baru 2022",
            en: "Happy New Year 2022 but its too late",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Tulisan blog di tahun 2022, tapi terlambat dikit gak ngaruh",
            en: "A blog post from 2022, but it’s a little late",
            jp: "2022年のブログ記事だけど、少し遅れても問題ない"
        }
    },
    {
        id: "tips-trik-cara-mengunci-akun-facebook-tidak-bekerja-untuk-saat-ini",
        date: "08 June 2021",
        category: "Tutorial",
        image: "/assets/rumah.CTmkZ41B_1doc2t.webp",
        link: "artikel-2.html",
        title: {
            id: "Tips & Trik cara mengunci akun Facebook (Tidak bekerja untuk saat ini)",
            en: "Tips & Tricks how to lock Facebook account (Not working at the moment)",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Tutorial sudah tidak bekerja lagi, karena sudah bisa diakses fiturnya",
            en: "The tutorial no longer works because the feature is now available",
            jp: "このチュートリアルは、その機能が利用可能になったため、現在使用できません"
        }
    },
    {
        id: "its-been-a-long-time-since-updating-this-blog",
        date: "13 April 2021",
        category: "Blog",
        image: "/assets/75c7431c-d027-409f-bc30-aed9cf1a7831.webp",
        link: "artikel-2.html",
        title: {
            id: "Sudah lama tidak memperbarui blog",
            en: "It's been a long time since updating this blog",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Cuma keluh kesah penulis dengan ABK Tunagrahita",
            en: "Just the author's thoughts on ABK with Mental Retardation",
            jp: "このチュートリアルは、その機能が利用可能になったため、現在使用できません"
        }
    },
    {
        id: "pengumuman-sebuah-proyek-baru",
        date: "27 January 2021",
        category: "Fansubs",
        image: "/assets/image-68.png",
        link: "artikel-2.html",
        title: {
            id: "Pengumuman sebuah project baru",
            en: "Announcement of a new project",
            jp: "翻訳プロジェクトのウェブサイト用のドメイン設定方法が分からず、費用も限られている？ FansubIDなら無料のサブドメインが利用できます。"
        },
        desc: {
            id: "Pengumuman sebuah proyek & terjemahan penggemar",
            en: "Announcement of a project & fan translation",
            jp: "プロジェクトの発表とファンによる翻訳"
        }
    },
    {
        id: "what-are-your-hopes-for-2021",
        date: "28 Desember 2020",
        category: "Themes",
        image: "/assets/couple.CoLiFNiF_ecXSq.webp",
        link: "artikel-2.html",
        title: {
            id: "Apa harapanmu di tahun 2021 nanti?",
            en: "What are your hopes for 2021?",
            jp: "2021年にどんなことを期待していますか？"
        },
        desc: {
            id: "Postingan untuk penutup tahun 2020",
            en: "Posts for the end of 2020",
            jp: "2020年末の投稿"
        }
    },
    {
        id: "first-post-on-decembers",
        date: "02 Desember 2020",
        category: "Blog",
        image: "/assets/45a57fb6-7736-4caa-8548-db4bcf272eb3.webp",
        link: "artikel-2.html",
        title: {
            id: "Tulisan pertama di bulan Desember",
            en: "First Post on December's",
            jp: "12月の最初の投稿"
        },
        desc: {
            id: "Postingan untuk penutup tahun 2020",
            en: "This post only available on English",
            jp: "2020年末の投稿"
        }
    },
    {
        id: "the-old-project-was-suddenly-raised-again",
        date: "14 October 2020",
        category: "Blog",
        image: "/assets/book.wOCt5fU__Zu4whs.webp",
        link: "artikel-2.html",
        title: {
            id: "Proyek lama tiba-tiba nongol kembali karena sebuah komentar",
            en: "Old project suddenly resurfaces due to a comment",
            jp: "あるコメントがきっかけで、古いプロジェクトが突然再浮上"
        },
        desc: {
            id: "Masih ingatkah, kalau dulu aku pernah membuat kustom ikon untuk salah satu aplikasi?",
            en: "Do you still remember, that I once made a custom icon for one of the applications?",
            jp: "私が以前、あるアプリケーション用にカスタムアイコンを作成したことを覚えていますか？"
        }
    },
    {
        id: "in-the-near-future-i-will-have-a-web-page",
        date: "10 October 2020",
        category: "Blog",
        image: "/assets/137479f0-f919-48fe-86b9-0d318efe8e7b.webp",
        link: "artikel-2.html",
        title: {
            id: "Untuk kedepannya, aku akan memiliki halaman web",
            en: "In the near future, I will have a web page",
            jp: "近い将来、私はウェブページを開設する予定です。"
        },
        desc: {
            id: "Semua bermula dari sini, sebuah keinginan ingin memiliki halaman utama",
            en: "It all started here, a desire to have a homepage",
            jp: "すべてはここから始まった。ホームページを持ちたいという願望から。"
        }
    },
    {
        id: "making-girls-frontline-themes-but-for-browsers-chrome",
        date: "20 August 2020",
        category: "Themes",
        image: "/assets/bd373785-ae6e-40e3-9b73-4f7020f272ac.webp",
        link: "artikel-2.html",
        title: {
            id: "Membuat tema Girls' Frontline untuk browser Chrome",
            en: "Making Girls Frontline Themes for Browsers Chrome",
            jp: "Chromeブラウザ用のドールズフロントラインテーマを作成する"
        },
        desc: {
            id: "Ini adalah lanjutan dari tema windows 7/10 Girls' Frontliine yang dibuat oleh Desonime, hanya untuk melengkapi saja",
            en: "This is a continuation of the Girls' Frontline windows 7/10 theme created by Desonime, just to complete it.",
            jp: "これは、Desonimeが作成したドールズフロントラインのウィンドウ7/10テーマの続きで、完成させるためのものです。"
        }
    },
    {
        id: "i-returned-with-a-strange-strange-experiment",
        date: "12 June 2020",
        category: "Themes",
        image: "/assets/e13c3a37-bbd3-4ca4-ac9f-17c27fef65e6.webp",
        link: "artikel-2.html",
        title: {
            id: "Saya kembali dengan sebuah eksperimen baru",
            en: "I returned with a strange strange experiment",
            jp: "Chromeブラウザ用のドールズフロントラインテーマを作成する"
        },
        desc: {
            id: "Ini adalah lanjutan dari tema windows 7/10 Girls' Frontliine yang dibuat oleh Desonime, hanya untuk melengkapi saja",
            en: "This is a continuation of the Girls' Frontline windows 7/10 theme created by Desonime, just to complete it.",
            jp: "これは、Desonimeが作成したドールズフロントラインのウィンドウ7/10テーマの続きで、完成させるためのものです。"
        }
    },
    {
        id: "last-project-for-go-for-dream",
        date: "12 January 2019",
        category: "Blog",
        image: "/assets/9971ee31-647d-476e-a570-446ed5c1e41d.webp",
        link: "artikel-2.html",
        title: {
            id: "Project terakhir untuk Go For Dream",
            en: "Last Project for Go For Dream",
            jp: "Chromeブラウザ用のドールズフロントラインテーマを作成する"
        },
        desc: {
            id: "Kontribusi terakhir untuk seri webtoon yang dibuat bersama teman sekolah kami",
            en: "The last contribution to the webtoon series created with our school friends",
            jp: "これは、Desonimeが作成したドールズフロントラインのウィンドウ7/10テーマの続きで、完成させるためのものです。"
        }
    },
 {
        id: "proyek-komik-telah-selesai-go-for-dream",
        date: "28 December 2018",
        category: "Blog",
        image: "/assets/image-11.png",
        link: "artikel-2.html",
        title: {
            id: "Proyek komik teleah selesai (Go For Dream)",
            en: "Comics Project is Done (Go For Dream)",
            jp: "最後のプロジェクト"
        },
        desc: {
            id: "Setelah beberapa bulan berkontribusi, akhirnya ini adalah kontribusi terakhirku",
            en: "After several months of contributing, this is finally my last contribution.",
            jp: "数ヶ月間投稿を続けてきましたが、これが私の最後の投稿となります。"
        }
    },
    {
        id: "last-project",
        date: "26 December 2018",
        category: "Blog",
        image: "/assets/f3a0b541-6416-41cd-ae2a-8d1eb3cd4413.webp",
        link: "artikel-2.html",
        title: {
            id: "Proyek terakhir",
            en: "Last Project",
            jp: "最後のプロジェクト"
        },
        desc: {
            id: "Pratinjau lineart desain karakter untuk serial webtoon Go For Dream",
            en: "Character design lineart preview for webtoon series Go For Dream",
            jp: "ウェブトゥーンシリーズ「Go For Dream」のキャラクターデザイン線画プレビュー"
        }
    },
    {
        id: "welcome-to-new-blog",
        date: "23 December 2018",
        category: "Blog",
        image: "/assets/14537c74-bdc7-4746-bed4-935b53e87ce0.webp",
        link: "artikel-2.html",
        title: {
            id: "Selamat datang di blog baruku",
            en: "Welcome to new blog",
            jp: "新しいブログへようこそ"
        },
        desc: {
            id: "Habis pindahan ceritanya, jadi selamat datang di halaman web sekaligus blog ku yang baru",
            en: "After moving, so welcome to my new web page and blog.",
            jp: "ストーリーを移転したので、私の新しいウェブページとブログへようこそ。"
        }
    },
    {
        id: "proyek-lama-yang-baru-saja-saya-posting-di-blog-pribadi",
        date: "04 October 2018",
        category: "Blog",
        image: "/assets/image-8.png",
        link: "artikel-2.html",
        title: {
            id: "Yah, ini project lamaku",
            en: "Yes, this is my old project",
            jp: "以前作成したプロジェクトを、私の個人ブログに投稿しました。"
        },
        desc: {
            id: "Habis pindahan ceritanya, jadi selamat datang di halaman web sekaligus blog ku yang baru",
            en: "After moving, so welcome to my new web page and blog.",
            jp: "ストーリーを移転したので、私の新しいウェブページとブログへようこそ。"
        }
    },
    {
        id: "jenis-dan-ciri-ciri-kamera",
        date: "15 August 2015",
        category: "Definition",
        image: "/assets/thumbnail-kamera.png",
        link: "artikel-2.html",
        title: {
            id: "Jenis & ciri kamera",
            en: "Types and Features of Cameras",
            jp: "カメラを理解する"
        },
        desc: {
            id: "Penjelasan singkat tentang apa itu kamera dan jenis-jenisnya",
            en: "A brief explanation of what a camera is and its types",
            jp: "カメラとは何か、そしてその種類についての簡単な説明"
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

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const playlistList = document.getElementById('playlist-list');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    // ==========================================
    // DAFTAR LAGU
    // ==========================================
    const songs = [
        {
            title: "MAGIC BPM",
            artist: "EasyPop",
            src: "E:/Lagu/A/EasyPop/ベリーイージー2/11 MAGIC BPM.flac" 
        },
        {
            title: "だから言ったでしょ?",
            artist: "EasyPop",
            src: "E:/Lagu/A/EasyPop/ベリーイージー2/10 I've Told You, Right_.flac" 
        },
        {
            title: "Aishiteru",
            artist: "Kourin",
            src: "path/ke/lagumu3.mp3"
        }
    ];
    // ==========================================

    let currentSongIndex = 0;
    let isPlaying = false;

    if (!audio || !playlistList) return; // Mencegah error jika elemen tidak ditemukan

    function loadSong(index) {
        const song = songs[index];
        trackTitle.textContent = song.title;
        trackArtist.textContent = song.artist;
        audio.src = song.src;
        updatePlaylistActiveState();
    }

    function renderPlaylist() {
        playlistList.innerHTML = ''; 
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="song-title">${song.title}</span><span class="song-artist">${song.artist}</span>`;
            
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            });
            
            playlistList.appendChild(li);
        });
    }

    function updatePlaylistActiveState() {
        const items = playlistList.querySelectorAll('li');
        items.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function playSong() {
        isPlaying = true;
        playPauseBtn.textContent = '⏸ Pause';
        audio.play();
    }

    function pauseSong() {
        isPlaying = false;
        playPauseBtn.textContent = '▶ Play';
        audio.pause();
    }

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) pauseSong();
        else playSong();
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    audio.addEventListener('timeupdate', () => {
        if(audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            currentTimeEl.textContent = formatTime(audio.currentTime);
            durationEl.textContent = formatTime(audio.duration);
        }
    });

    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    // Inisialisasi
    renderPlaylist();
    loadSong(currentSongIndex);
});

function startClock() {
    const timeEl = document.getElementById('clock-time');
    const secondsEl = document.getElementById('clock-seconds');
    if (!timeEl || !secondsEl) return;

    // Jalankan sekali di awal biar gak nunggu 1 detik baru muncul angkanya
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timeEl.textContent = `${hours}:${minutes}`;
        secondsEl.textContent = seconds;
    };

    updateTime(); // Eksekusi langsung
    setInterval(updateTime, 1000); // Jalankan loop detikan
}

// Langsung panggil fungsinya di sini secara terbuka
startClock();


const lastfmUser = "naturbrilian"; 
const lastfmApiKey = "411b298c830d3599a94c097d70bc953e"; 
const lastfmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=naturbrilian&api_key=411b298c830d3599a94c097d70bc953e&format=json&limit=1`;

async function getRecentTrack() {
    try {
        const response = await fetch(lastfmUrl);
        const data = await response.json();
        
        // Ambil lagu urutan pertama (paling baru)
        const track = data.recenttracks.track[0];
        
        // Cek apakah lagunya lagi diputar SEKARANG
        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
        
        // Update teks di HTML
        document.getElementById('bento-lastfm-title').textContent = track.name;
        document.getElementById('bento-lastfm-artist').textContent = track.artist['#text'];
        
        // Update Badge kalau lagi diputar
        if (isPlaying) {
            document.getElementById('lastfm-badge').textContent = '🎧 Now Playing';
        } else {
            document.getElementById('lastfm-badge').textContent = '🎵 Recently Played';
        }

        // Update gambar cover (index [2] biasanya ukurannya pas/medium)
        if (track.image[2]['#text']) {
            document.getElementById('bento-lastfm-cover').src = track.image[2]['#text'];
        }

    } catch (error) {
        console.error("Gagal narik data Last.fm:", error);
        document.getElementById('bento-lastfm-title').textContent = "Failed to load";
        document.getElementById('bento-lastfm-artist').textContent = "Connection error";
    }
}

// Jalankan fungsi saat web dibuka
getRecentTrack();

// Opsional: Auto-refresh tiap 30 detik biar datanya update terus
setInterval(getRecentTrack, 30000);

// Ganti dengan data punyamu!
const lfmUser = "naturbrilian"; 
const lfmApiKey = "411b298c830d3599a94c097d70bc953e"; 
// limit=5 artinya narik 5 lagu terakhir. Bisa diganti jadi 10 atau berapapun.
const lfmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=naturbrilian&api_key=411b298c830d3599a94c097d70bc953e&format=json&limit=5`;

// Fungsi ajaib untuk ngubah waktu jadi "11h ago"
function timeAgo(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const now = new Date();
    const seconds = Math.round((now - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    if (seconds < 60) return "Just now";
    else if (minutes < 60) return `${minutes}m ago`;
    else if (hours < 24) return `${hours}h ago`;
    else return `${days}d ago`;
}

async function renderLastfmList() {
    try {
        const response = await fetch(lfmUrl);
        const data = await response.json();
        const tracks = data.recenttracks.track;
        const container = document.getElementById('lastfm-track-list');
        
        container.innerHTML = ''; // Hapus tulisan "Fetching tracks..."

        tracks.forEach(track => {
            // Cek status "Now Playing"
            const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
            
            // Set waktu
            let timeText = "Now";
            if (!isPlaying && track.date) {
                timeText = timeAgo(track.date.uts);
            }

            // Ambil gambar cover (pakai ukuran medium index [1])
            let coverSrc = track.image[1]['#text'];
            
            // Kalau covernya kosong, tampilkan icon nada pakai CSS background
            let coverHTML = coverSrc 
                ? `<img src="${coverSrc}" class="track-cover" alt="cover">`
                : `<div class="track-cover">🎵</div>`;

            // Rangkai elemen HTML-nya
            const trackHTML = `
                <div class="track-item">
                    <div class="track-left">
                        ${coverHTML}
                        <div class="track-info">
                            <p class="track-title">${track.name}</p>
                            <p class="track-artist">${track.artist['#text']}</p>
                        </div>
                    </div>
                    <div class="track-time">${timeText}</div>
                </div>
            `;
            container.innerHTML += trackHTML;
        });

    } catch (error) {
        console.error("Gagal konek ke Last.fm:", error);
        document.getElementById('lastfm-track-list').innerHTML = '<p style="text-align:center;">Failed to load tracks.</p>';
    }
}

// Eksekusi fungsinya
renderLastfmList();