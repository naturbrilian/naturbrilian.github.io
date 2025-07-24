// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/site/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "some projects that I have previously worked on and some examples of previous design commissions and projects for fun.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/projects/";
          },
        },{id: "nav-website-my-friends",
          title: "website my friends",
          description: "These are some links that I often visit, localization project sites &amp; some application sites that I have previously translated into Indonesian and my friends&#39; sites from several translation teams and others.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/friends/";
          },
        },{id: "nav-now",
          title: "now",
          description: "Page for activity for now",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/now/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My name is Liba Natur Brilian also known as naturbrilian and Gingalibadeidara for another project | also i have experience on video editor, graphics design and social media admin at Kediri Televisi and The Java Post ID | Also im contributor at Yurasubs as Graphics Design Staff",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/cv/";
          },
        },{id: "nav-me",
          title: "me",
          description: "more about me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/site/people/";
          },
        },{id: "post-memutuskan-untuk-menghentikan-proyek-gingalibadeidara-works",
      
        title: "Memutuskan untuk menghentikan proyek Gingalibadeidara Works",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/project-gingalibadeidara-works-dihentikan/";
        
      },
    },{id: "post-mengatasi-masalah-file-di-flashdisk-yang-ke-hidden-karena-virus",
      
        title: "Mengatasi masalah file di flashdisk yang ke hidden karena virus",
      
      description: "Tutorial yang mungkin hampir semua orang lupa",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/mengatasi-file-di-flashdisk-yang-kehidden/";
        
      },
    },{id: "post-just-a-moment",
      
        title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://ufal.my.id/2025/06/11/taiga/", "_blank");
        
      },
    },{id: "post-antarmuka",
      
        title: "Antarmuka",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/antarmuka/";
        
      },
    },{id: "post-tentang-inkscape",
      
        title: "Tentang Inkscape",
      
      description: "Tentang dari Software atau Aplikasi ini",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/apa-itu-inkscape/";
        
      },
    },{id: "post-migrasi-lagi-tidak-tahu",
      
        title: "Migrasi lagi? tidak tahu",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/migrasi-tidak-tahu/";
        
      },
    },{id: "post-peristiwa-tahun-ini-dan-overthinking-si-pemilik-website",
      
        title: "Peristiwa tahun ini dan overthinking si pemilik website",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/peristiwa-di-tahun-ini/";
        
      },
    },{id: "post-roadmap-2025-aimp-s-blog",
      
        title: 'Roadmap 2025 | AIMP’s Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.aimp.ru/blogs/?p=1498&language=en", "_blank");
        
      },
    },{id: "post-masalah-heatsink-laptop-amp-fitur-hyper-v",
      
        title: "Masalah heatsink laptop &amp; Fitur Hyper-V",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/masalah-heatsink-laptop-fitur-hyper-v/";
        
      },
    },{id: "post-postingan-di-awal-2025",
      
        title: "Postingan di awal 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2025/postingan-di-awal-2025/";
        
      },
    },{id: "post-keabadian-atau-masa-depan-yang-kauharapkan-guci-39-s-mind",
      
        title: 'Keabadian (atau, Masa Depan) yang Kauharapkan | Guci&#39;s Mind <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Entah gimana, dari aku yang awalnya tertarik sama Owarinaki Natsu Towa Naru Shirabe, malah beralih ke nonton sedikit Muv-Luv Alternative (yang jelek banget), lalu malah berakhir nonton Kimi ga Nozomu Eien. Waktu bocah esema aku pernah membaca sinopsisnya yang mana “Protagonis pacaran sama Heroine 1 suatu hari Heroine 1 kecelakaan terus koma terus Protagonis pacaran…",
      section: "Posts",
      handler: () => {
        
          window.open("https://nectarinia99.wordpress.com/2025/01/18/keabadian-atau-masa-depan-yang-kauharapkan/", "_blank");
        
      },
    },{id: "post-postingan-terakhir-di-tahun-ini",
      
        title: "Postingan terakhir di tahun ini",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/postingan-akhir/";
        
      },
    },{id: "post-postingan-di-awal-2025",
      
        title: "Postingan di awal 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/memutuskan-untuk-pensi-dari-gim-favorit/";
        
      },
    },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/photo-gallery/";
        
      },
    },{id: "post-analisa-yang-sangat-menarik-buatku",
      
        title: "Analisa yang sangat menarik buatku",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/analisa-yang-sangat-menarik-buatku/";
        
      },
    },{id: "post-tutorial-tema-google-chrome",
      
        title: "Tutorial Tema Google Chrome",
      
      description: "dasar-dasar kustomisasi tema perambanmu sendiri",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/chrome-themes/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/pseudocode/";
        
      },
    },{id: "post-pensi-atau-lanjut",
      
        title: "Pensi atau Lanjut?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/pensi-atau-lanjut/";
        
      },
    },{id: "post-ada-rencana-mau-stay-di-blogspot-atau-pindah-ke-digitalpress",
      
        title: "Ada rencana mau stay di Blogspot atau pindah ke DigitalPress?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/ada-rencana-mau-stay-di-blogspot-atau/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2024/chartjs/";
        
      },
    },{id: "post-suka-suka-bahasa-indonesia-guci-39-s-mind",
      
        title: 'Suka-suka Bahasa Indonesia | Guci&#39;s Mind <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Ini bahasan yang agak jarang di perbindoan, tapi sering diucapkan orang-orang sampai mungkin ga sadar, yaitu penggunaan kata &quot;suka&quot;. Jadi aku tulis ini biar kita sama-sama &quot;oh iya juga ya&quot; bareng.Bahasa Indonesia, dengan segala keterbatasan jumlah katanya, memiliki salah satu keunikan dalam hal Pembicara - Pendengar yang saling memahami. Umumnya, &quot;suka&quot; memiliki makna KESENANGAN Subjek…",
      section: "Posts",
      handler: () => {
        
          window.open("https://nectarinia99.wordpress.com/2024/01/16/suka-suka-bahasa-indonesia/", "_blank");
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/tikzjax/";
        
      },
    },{id: "post-punya-blog-nganggur-fungsikan-aja-sebagai-blog-sharing-lagu",
      
        title: "Punya blog nganggur? fungsikan aja sebagai blog sharing lagu",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/punya-blog-nganggur-fungsikan-aja-sebagai-blog-sharing-lagu/";
        
      },
    },{id: "post-bingung-mau-pasang-domain-di-web-proyek-terjemahan-namun-terkendala-biaya-fansubid-memberikan-sub-domain-gratis-buat-kamu",
      
        title: "Bingung mau pasang domain di web proyek terjemahan, namun terkendala biaya? FansubID memberikan...",
      
      description: "Tutorial klaim sub-domain fansub id",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/bingung-mau-pasang-domain-di-web-proyek/";
        
      },
    },{id: "post-review-jellyfin-mediaplayer-atau-server",
      
        title: "Review Jellyfin MediaPlayer atau Server",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/jellyfin-review/";
        
      },
    },{id: "post-herannya-mengapa-orang-orang-masih-mempermasalahkan-tentang-vector-art",
      
        title: "Herannya mengapa orang-orang masih mempermasalahkan tentang vector art",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/herannya-mengapa-orang-orang-masih-mempermasalahkan-tentang-vector-art/";
        
      },
    },{id: "post-alasan-aku-tidak-menggunakan-hatena-lagi-sebagai-cabang-blog-bahasa-inggris",
      
        title: "Alasan aku tidak menggunakan Hatena lagi sebagai cabang blog Bahasa Inggris",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/alasan-aku-tidak-menggunakan-hatena/";
        
      },
    },{id: "post-should-this-blog-be-closed",
      
        title: "Should this blog be closed?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/ashould-this-blog-be-closed/";
        
      },
    },{id: "post-proyek-unit-terjemahan-nanako-tidak-dilanjut-mengapa",
      
        title: "Proyek unit terjemahan Nanako tidak dilanjut, mengapa?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/proyek-unit-terjemahan-nanako/";
        
      },
    },{id: "post-proyek-situs-web-hananako-dimulai",
      
        title: "Proyek Situs Web Hananako dimulai",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/proyek-situs-web-hananako-dimulai/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-my-tweets",
      
        title: "My tweets",
      
      description: "auto post my tweets | copy post from my livejournal",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/74365/";
        
      },
    },{id: "post-my-tweets",
      
        title: "My tweets",
      
      description: "auto post my tweets | copy post from my livejournal",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/74197/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/table-of-contents/";
        
      },
    },{id: "post-google-chrome-themes-shiroko-blue-archive",
      
        title: "Google Chrome Themes Shiroko Blue Archive",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/google-chrome-themes-shiroko-blue/";
        
      },
    },{id: "post-apakah-tema-windows-10-masih-bisa-digunakan-saat-kamu-mengunakan-windows-11",
      
        title: "Apakah Tema Windows 10 masih bisa digunakan saat kamu mengunakan Windows 11?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/apakah-tema-windows-10-masih-bisa/";
        
      },
    },{id: "post-how-can-the-windows-10-theme-still-work-on-the-windows-11-os",
      
        title: "How can the Windows 10 theme still work on the Windows 11 os?...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2023/how-can-windows-10-theme-still-work-on/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/giscus-comments/";
        
      },
    },{id: "post-keluh-kesah-dan-penyesalan-soal-hubungan-pertemanan",
      
        title: "Keluh kesah dan penyesalan soal hubungan pertemanan",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/hadeh/";
        
      },
    },{id: "post-memulai-dari-awal",
      
        title: "Memulai dari awal",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/memulai-dari-awal/";
        
      },
    },{id: "post-mahjong-soul-desktop-client-bahasa-indonesia",
      
        title: "Mahjong Soul Desktop Client (Bahasa Indonesia)",
      
      description: "tutorial singkat cara bermain Mahjong Soul Desktop menggunakan klien tidak resmi (sudah tidak berlaku)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/mahjong-soul-desktop-client/";
        
      },
    },{id: "post-mahjong-soul-on-desktop-english",
      
        title: "Mahjong Soul on Desktop (English)",
      
      description: "Because official launcher available, just use the official launcher",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/mahjong-soul-on-desktop/";
        
      },
    },{id: "post-anniversary-of-gingalibadeidara-works-8-years-from-blogging-until-translations-project-english",
      
        title: "Anniversary of gingalibadeidara works 8 years (from Blogging until Translations Project) (English)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/anniversary-of-gingalibadeidara-works-8-years-from-blogging-until-translations-projec/";
        
      },
    },{id: "post-anniversary-proyek-gingalibadeidara-works-yang-ke-8",
      
        title: "Anniversary Proyek Gingalibadeidara Works yang ke 8",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/anniversary-proyek-gingalibadeidara/";
        
      },
    },{id: "post-happy-new-year-2022-but-its-too-late",
      
        title: "Happy New Year 2022 but its too late",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/test/";
        
      },
    },{id: "post-tahun-baru-2022",
      
        title: "Tahun Baru 2022",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/tahun-baru-2022/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-post-pertama-di-tahun-2022",
      
        title: "Post pertama di tahun 2022",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2022/post-pertama-di-tahun-2022/";
        
      },
    },{id: "post-light-novel-moriarty-the-patriot-volume-1-3-bahasa-indonesia",
      
        title: 'Light Novel Moriarty The Patriot Volume 1-3 Bahasa Indonesia <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "JUST TO ANSWER YOUR CURIOSITY, ESPECIALLY ABOUT ANIME :)",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.shirayuki-chan.my.id/2021/08/light-novel-moriarty-patriot-volume-1-3.html", "_blank");
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/diagrams/";
        
      },
    },{id: "post-wallpaper-amp-tutorial-cara-buat-minimalist",
      
        title: "Wallpaper &amp; Tutorial cara buat minimalist",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/wallpaper-tutorial-cara-buat-minimalist/";
        
      },
    },{id: "post-tips-amp-trik-cara-mengunci-akun-facebook-tidak-bekerja-untuk-saat-ini",
      
        title: "Tips &amp; Trik cara mengunci akun Facebook (Tidak bekerja untuk saat ini)",
      
      description: "trik ini sudah terlalu lama, jadi kalian tidak perlu melakukannya lagi",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/tips-trik-cara-mengunci-akun-facebook/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/distill/";
        
      },
    },{id: "post-it-39-s-been-a-long-time-since-updating-this-blog",
      
        title: "It&#39;s been a long time since updating this blog",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/its-been-a-long-time-since-updating-this-blog/";
        
      },
    },{id: "post-kustomisasi-tema-untuk-browser",
      
        title: "Kustomisasi tema untuk browser",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/artikel-spesial-kustomisasi-tema-untuk/";
        
      },
    },{id: "post-novel-the-failure-alchemist-of-the-royal-capital-my-job-is-a-failure-so-i-ll-manage-my-store-carefreely-bahasa-indonesia-rena-translations",
      
        title: '[Novel] The Failure Alchemist of the Royal Capital ~My job is a failure... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://renatl.blogspot.com/2021/04/novel-failure-alchemist-of-royal.html", "_blank");
        
      },
    },{id: "post-pengumuman-sebuah-proyek-baru",
      
        title: "Pengumuman Sebuah Proyek Baru",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2021/pengumuman-sebuah-proyek-baru/";
        
      },
    },{id: "post-apa-harapanmu-untuk-tahun-2021",
      
        title: "Apa harapanmu untuk tahun 2021?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/apa-harapanmu-untuk-tahun-2021/";
        
      },
    },{id: "post-what-are-your-hopes-for-2021",
      
        title: "What are your hopes for 2021?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/what-are-your-hopes-for-2021/";
        
      },
    },{id: "post-apa-saja-yang-terjadi-selama-1-tahun-ini",
      
        title: "Apa saja yang terjadi selama 1 tahun ini",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/apa-saja-yang-terjadi-selama-1-tahun-ini/";
        
      },
    },{id: "post-migrating-to-a-new-blog-soon",
      
        title: "Migrating to a new blog, soon!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/migrating-to-a-new-blog-soon/";
        
      },
    },{id: "post-first-post-on-december-39-s",
      
        title: "First Post on December&#39;s",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/first-post-on-decembers/";
        
      },
    },{id: "post-tulisan-pertama-di-tahun-2020",
      
        title: "Tulisan pertama di tahun 2020",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/tulisan-pertama-di-tahun-2020/";
        
      },
    },{id: "post-曲-アルバム推薦-木漏れ日のエデン",
      
        title: "【曲・アルバム推薦】木漏れ日のエデン",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/entry-12631604255/";
        
      },
    },{id: "post-proyek-lama-tiba-tiba-di-angkat-kembali",
      
        title: "Proyek lama tiba-tiba di angkat kembali",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/proyek-lama-tiba-tiba-di-angkat-kembali/";
        
      },
    },{id: "post-the-old-project-was-suddenly-raised-again",
      
        title: "The old project was suddenly raised again",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/the-old-project-was-suddenly-raised-again/";
        
      },
    },{id: "post-曲-アルバム推薦-木漏れ日のエデン",
      
        title: "【曲・アルバム推薦】木漏れ日のエデン",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/entry-12631494656/";
        
      },
    },{id: "post-近い将来-私はウェブページを持っているでしょう",
      
        title: "近い将来、私はウェブページを持っているでしょう",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/entry-12631592717/";
        
      },
    },{id: "post-membuat-tema-girls-39-frontline-tetapi-untuk-browser-chrome",
      
        title: "Membuat tema Girls&#39; Frontline tetapi untuk browser Chrome",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/membuat-tema-girls-frontline-tetapi/";
        
      },
    },{id: "post-saya-kembali-dengan-sebuah-eksperimen-baru",
      
        title: "Saya kembali dengan sebuah eksperimen baru",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/saya-kembali-dengan-sebuah-eksperimen/";
        
      },
    },{id: "post-sempat-kepikiran-kalau-ingin-menghentikan-aktivitas-dalam-pembuatan-proyek-vektor",
      
        title: "Sempat kepikiran kalau ingin menghentikan aktivitas dalam pembuatan proyek vektor",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2020/sempat-kepikiran-kalau-ingin/";
        
      },
    },{id: "post-2019年に私の最初の投稿",
      
        title: "2019年に私の最初の投稿",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2019/entry-12495863267/";
        
      },
    },{id: "post-my-absurd-imaginations-the-big-five-team-of-miniature-program",
      
        title: '~MY ABSURD IMAGINATIONS~: THE BIG FIVE TEAM OF MINIATURE PROGRAM <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "HALOOOOO! APA KABAR KALIAN?! KALIAN PASTI MERINDUKANKU~ //TAMPAR",
      section: "Posts",
      handler: () => {
        
          window.open("https://yummyulia.blogspot.com/2019/03/the-big-five-team-of-miniature-program.html", "_blank");
        
      },
    },{id: "post-go-for-dreamの最後のプロジェクト",
      
        title: "Go For Dreamの最後のプロジェクト",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2019/entry-12631526888/";
        
      },
    },{id: "post-go-for-dream-projectコミックとあらすじ",
      
        title: "Go For Dream Projectコミックとあらすじ",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2018/entry-12631528746/";
        
      },
    },{id: "post-最後のプロジェクト",
      
        title: "最後のプロジェクト",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2018/entry-12631529988/";
        
      },
    },{id: "post-戻ってきました",
      
        title: "戻ってきました",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2018/entry-12631531599/";
        
      },
    },{id: "post-同じ私の友人",
      
        title: "同じ私の友人",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2016/entry-12145364242/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/math/";
        
      },
    },{id: "post-悠長",
      
        title: "悠長",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/entry-12067374111/";
        
      },
    },{id: "post-教師と生徒の間の分離",
      
        title: "教師と生徒の間の分離",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/entry-12059373042/";
        
      },
    },{id: "post-自分の",
      
        title: "自分の",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/entry-12059372554/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/images/";
        
      },
    },{id: "post-その後-私たちのクラスでは-教師の実践によって教えられて記憶に残る写真-だった-これは私たちの",
      
        title: "その後、私たちのクラスでは、教師の実践によって教えられて記憶に残る写真、だった、これは私たちの…",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/entry-12004140959/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/site/blog/2015/formatting-and-links/";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/site/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/site/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/6_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/9_project/";
            },},{id: "projects-banner-design-for-my-social-media",
          title: 'Banner design for my social media',
          description: "This is my another project for personal",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/banner_design_for_my_social_media/";
            },},{id: "projects-request",
          title: 'Request',
          description: "Banner Commision i design before and some request from client",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/design_commision/";
            },},{id: "projects-poster-design",
          title: 'poster design',
          description: "Poster Design Gallery",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/poster_design/";
            },},{id: "projects-wallpaper-design",
          title: 'Wallpaper Design',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/site/projects/wallpaper_design/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/aku.naturbrilian.web.id", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/304313603253862401", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%6E%67%61%6C%69%62%61%64%65%69%64%61%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/naturbrilian28", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/naturbrilian", "_blank");
        },
      },{
        id: 'social-lastfm',
        title: 'Last FM',
        section: 'Socials',
        handler: () => {
          window.open("https://www.last.fm/user/naturbrilian", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/naturbrilian", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mastodon.social/@naturbrilian", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/site/feed.xml", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/gingalibadeidara", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/naturbrilian", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/naturbrilian", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
