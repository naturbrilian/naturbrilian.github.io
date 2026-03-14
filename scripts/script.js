// ===== scripts/script.js =====

// Data Terjemahan Bahasa
const translations = {
    en: {
        nav_karya: "About", nav_cv: "CV", nav_layanan: "Services", nav_kontak: "Contact", nav_news: "News",
        hero_title: "Hello, I'm Lieba Natur Brilian", hero_desc: " I am a graphic designer, video editor, and contributor translator for various services, applications, and software. People also know me as gingalibadeidara on other websites such as Alphacoders.", hero_btn: "Let's Talk",
        port_title: "Selected Works", port_1_title: "Vector Anime Style", port_1_desc: "Exploring character rendering with a focus on lighting details and hair texture finishing.", port_2_title: "Multilingual Personal Site", port_2_desc: "A lightweight and super fast portfolio website, built using the Astro framework.", port_3_title: "Custom Last.fm Web Player", port_3_desc: "Custom UI widget that fetches and displays the currently playing song in real-time via API.", port_5_desc: "Some other videos I worked on previously.",
        serv_title: "What I Do", serv_1_desc: "Creating character illustrations and digital artwork with a focus on detail, expression, and vibrant lighting.", serv_2_desc: "Building super fast and responsive static websites using modern technologies like HTML, CSS, and Astro.",
        
        cv_contact_title: "Contact",
        cv_skill_title: "Skills", cv_skill_1: "Localization (EN to ID)", cv_skill_2: "Graphic Design", cv_skill_3: "Blogging", cv_skill_4: "Video Editing", cv_skill_5: "Microsoft Word",
        cv_job_title: "Graphic Designer & Video Editor", cv_profile_title: "About Me", cv_profile_desc: "I am a graphic designer and video editor with knowledge of information technology, particularly computers, operating systems, and more. I work at Kediri TV as a video editor and also contribute to Yuramedia as a graphic designer.",
        cv_exp_title: "Work Experience", cv_exp_1_title: "Graphic Designer — Yuramedia Links", cv_exp_1_desc: "<ul><li>Creating designs for social media posts.</li></ul>", cv_exp_2_title: "Video Editor & Designer — Kediri Televisi", cv_exp_2_desc: "<ul><li>Editing video content for YouTube publication, including commercial ads for government agencies, hospitals, and documentary videos.</li><li>Designing ads for websites, as well as printed pamphlets and brochures.</li></ul>",
        cv_edu_title: "Education",

        priv_title: "Privacy Policy",
        priv_p1: "At Lieba Natur Brilian Website, accessible from https://naturbrilian.dpdns.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Lieba Natur Brilian Website and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        priv_h2_1: "Log Files", priv_p2: "Lieba Natur Brilian Website follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
        priv_h2_2: "Cookies and Web Beacons", priv_p3: "Like any other website, Lieba Natur Brilian Website uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
        priv_h2_3: "Privacy Policies", priv_p4: "You may consult this list to find the Privacy Policy for each of the advertising partners of Lieba Natur Brilian Website. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Lieba Natur Brilian Blog, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Lieba Natur Brilian Website has no access to or control over these cookies that are used by third-party advertisers.",
        priv_h2_4: "Third Party Privacy Policies", priv_p5: "Lieba Natur Brilian Blog's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
        priv_h2_5: "Children's Information", priv_p6: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Lieba Natur Brilian Blog does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.",
        priv_h2_6: "Online Privacy Policy Only", priv_p7: "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Lieba Natur Brilian Blog. This policy is not applicable to any information collected offline or via channels other than this website.",
        priv_h2_7: "Consent", priv_p8: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",

        nav_gallery: "Gallery",
        gal_title: "Photos Gallery",
        gal_desc: "A collection of personal photos that were supposed to be uploaded to Instagram, but ended up being cropped.",

        nav_vector: "Vector",
        gal_title_vector: "Vector",
        gal_desc_vector: "gallery containing vectors that I previously created",

        back_to_blog: "Back to Blog",

        about_intro_title: "About Me",
        about_intro_p1: "I’m Liba Natur Brilian and also known as Natur or gingalibadeidara, a video editor and graphics designer with a deep passion for technology, art, music and content creator.",
        about_intro_p2: "Here, I share my recent project like design, video editing, vector, and blogging. I hope this platform can be a space to share inspiration, ideas, and engaging discussions with you.",
        about_interest_title: "Interesting On",
        about_tech_h: "Technologies",
        about_tech_p: "Already interested in technology since elementary school, initially because of the internet cafe era at that time. At first, I only knew the games that came with the operating system, then in 2007 I got to know the internet and others.",
        about_music_h: "Music",
        about_music_p: "At first, it was because my father himself almost every Sunday morning played songs through a VCD player and cassette tape. I was interested in old western songs, then Indonesian, then K-pop because of junior high school friends (Super Junior & SNSD) until finally to J-Pop songs until now. I also like classical music and Doujin music like Touhou.",
        about_anime_h: "Anime",
        about_anime_p: "Started with anime on Indonesian TV stations. My first was Naruto, then in 2012 I got interested in Little Busters (one of my favorites), and finally I continued until now. check my <a href='https://anilist.co/' target='_blank' style='color: var(--accent); text-decoration: underline;'>Anilist</a>.",
        about_game_h: "Game & Visual Novel",
        about_game_p: "Curiosity started from Nightcore songs and the artwork used. It turned out many came from Visual Novels like <i>Koi Kakeru Shin Ai Kanojo</i>. For games, it started with <i>Bully Scholarship</i>, and my first mobile game was <i>Deresute</i>.",
        about_trans_h: "Translation",
        about_trans_p: "I became interested in translation when learning to make karaoke effects and subtitles. Since 2016, I've dived into this world to fill free time and develop my interest in languages. I hope to master German, Japanese, and Mandarin.",
        about_proj_title: "Project:",
        about_proj_desc: "Contributing to various localization projects on the Crowdin platform.",

        now_playing: "Now Listening",
        loading_song: "Loading...",
        loading_artist: "Tuning in...",

        news_title: "News & Updates",
        news_desc: "Latest information about projects, web updates, and other announcements.",
        news_1_date: "September 25, 2025",
        news_1_title: "Gradual Migration",
        news_1_desc: "Just moving hosting because you are fed up with free hosting, which of course will result in limits or your account being suspended at some point.",
        news_2_date: "March 10, 2026",
        news_2_title: "App Localization Project Completed",
        news_2_desc: "The English to Indonesian translation project for an open-source application has reached 100% on the Crowdin platform.",
        news_3_date: "March 1, 2026",
        news_3_title: "Vector Gallery Updated",
        news_3_desc: "Several new digital art and vector works have been added to the gallery page, including anime character explorations with new lighting techniques.",

        ilm_title: "Pentingnya Cuci Tangan",
        ilm_subtitle: "Video Ilmiah Masyarakat (ILM) - Proyek Tugas Akhir SMK.",
        ilm_h1: "Awal Mula Cerita",
        ilm_p1: "Video pertama ini adalah tugas akhir saya saat berada di sekolah menengah kejuruan. Menceritakan kisah seorang anak laki-laki yang suka jajan di kantin sekolahnya, tetapi ia mengabaikan kebersihan. Seorang teman perempuannya kemudian mengingatkannya bahwa sebelum makan di kantin, alangkah baiknya untuk mencuci tangan terlebih dahulu.",
        ilm_h2: "Proses Pembuatan",
        ilm_p2: "Pengambilan gambar dilakukan di area sekolah dengan melibatkan beberapa teman sekelas sebagai aktor. Proses pengeditan memakan waktu sekitar satu minggu menggunakan Adobe Premiere Pro, fokus pada penyampaian pesan yang jelas dan mudah dipahami oleh siswa lainnya.",
        back_to_video: "Kembali",

        foot_copy: "&copy; 2026 Lieba Natur Brilian. All Rights Reserved. | <a href='privacy.html'>Privacy Policy</a>", foot_contact: "Find me on:",
        foot_copy_2: "&copy; 2026 Lieba Natur Brilian. All Rights Reserved. | <a href='../privacy.html'>Privacy Policy</a>", foot_contact: "Find me on:",
    },

    id: {
        nav_karya: "Tentang", nav_cv: "CV", nav_layanan: "Layanan", nav_kontak: "Kontak", nav_news: "Kabar",
        hero_title: "Halo, Saya Lieba Natur Brilian", hero_desc: "Aku seorang desainer grafis, editor video, dan penerjemah kontributor untuk berbagai layanan, aplikasi, dan perangkat lunak. Orang-orang juga mengenalku sebagai gingalibadeidara di situs web lain seperti Alphacoders.", hero_btn: "Mari Berdiskusi",
        port_title: "Karya Pilihan", port_1_title: "Anime Vektor Style", port_1_desc: "Eksplorasi rendering karakter dengan fokus pada detail pencahayaan dan penyelesaian tekstur rambut.", port_2_title: "Multilingual Personal Site", port_2_desc: "Website portofolio yang ringan dan super cepat, dibangun menggunakan framework Astro.", port_3_title: "Custom Last.fm Web Player", port_3_desc: "Beberapa video lainnya, yang sebelumnya saya kerjakan.", port_5_desc: "Beberapa video lainnya, yang sebelumnya saya kerjakan.",
        serv_title: "Apa yang Saya Kerjakan", serv_1_desc: "Menciptakan ilustrasi karakter dan karya seni digital dengan fokus pada detail, ekspresi, dan pencahayaan yang hidup.", serv_2_desc: "Membangun website statis yang super cepat dan responsif menggunakan teknologi modern seperti HTML, CSS, dan Astro.",
        
        cv_contact_title: "Kontak",
        cv_skill_title: "Keahlian", cv_skill_1: "Pelokalan (EN ke ID)", cv_skill_2: "Desain Grafis", cv_skill_3: "Blogging", cv_skill_4: "Video Editing", cv_skill_5: "Microsoft Word",
        cv_job_title: "Desainer Grafis & Video Editor", cv_profile_title: "Profil", cv_profile_desc: "Saya seorang desainer grafis dan video editor yang juga mengetahui seputar teknologi informasi, khususnya komputer, sistem operasi dan lain-lain. Saya bekerja di Kediri TV sebagai video editor dan juga sebagai kontributor di Yuramedia sebagai desainer grafis.",
        cv_exp_title: "Pengalaman Kerja", cv_exp_1_title: "Desainer Grafis — Yuramedia Links", cv_exp_1_desc: "<ul><li>Membuat desain untuk postingan di sosial media.</li></ul>", cv_exp_2_title: "Video Editor & Desainer — Kediri Televisi", cv_exp_2_desc: "<ul><li>Mengedit konten video untuk publikasi di YouTube, termasuk iklan komersial seperti instansi pemerintahan, rumah sakit dan video dokumenter.</li><li>Mendesain iklan untuk ditampilkan di situs web, dicetak sebagai pamflet dan brosur.</li></ul>",
        cv_edu_title: "Pendidikan",

        priv_title: "Kebijakan Privasi",
        priv_p1: "Di Situs Web Lieba Natur Brilian, yang dapat diakses dari https://naturbrilian.dpdns.org, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Situs Web Lieba Natur Brilian dan bagaimana kami menggunakannya. Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.",
        priv_h2_1: "File Log", priv_p2: "Situs Web Lieba Natur Brilian mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Ini tidak ditautkan ke informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuan informasi ini adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.",
        priv_h2_2: "Cookies dan Web Beacons", priv_p3: "Seperti situs web lainnya, Situs Web Lieba Natur Brilian menggunakan 'cookies'. Cookie ini digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman-halaman di situs web yang diakses atau dikunjungi pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan/atau informasi lainnya.",
        priv_h2_3: "Kebijakan Privasi", priv_p4: "Anda dapat berkonsultasi dengan daftar ini untuk menemukan Kebijakan Privasi untuk masing-masing mitra periklanan dari Situs Web Lieba Natur Brilian. Server iklan pihak ketiga atau jaringan iklan menggunakan teknologi seperti cookie, JavaScript, atau Web Beacons yang digunakan dalam iklan masing-masing dan tautan yang muncul di Blog Lieba Natur Brilian, yang dikirim langsung ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda saat ini terjadi. Teknologi ini digunakan untuk mengukur keefektifan kampanye iklan mereka dan/atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi. Perhatikan bahwa Situs Web Lieba Natur Brilian tidak memiliki akses ke atau kontrol atas cookie yang digunakan oleh pengiklan pihak ketiga ini.",
        priv_h2_4: "Kebijakan Privasi Pihak Ketiga", priv_p5: "Kebijakan Privasi Blog Lieba Natur Brilian tidak berlaku untuk pengiklan atau situs web lain. Oleh karena itu, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing dari server iklan pihak ketiga ini untuk informasi lebih rinci. Ini mungkin termasuk praktik dan instruksi mereka tentang cara menyisih dari opsi tertentu. Anda dapat memilih untuk menonaktifkan cookie melalui opsi browser individual Anda. Untuk mengetahui informasi lebih rinci tentang manajemen cookie dengan browser web tertentu, dapat ditemukan di situs web masing-masing browser.",
        priv_h2_5: "Informasi Anak", priv_p6: "Bagian lain dari prioritas kami adalah menambahkan perlindungan untuk anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi dalam, dan/atau memantau dan membimbing aktivitas online mereka. Blog Lieba Natur Brilian tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak-anak di bawah usia 13 tahun. Jika Anda merasa bahwa anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk segera menghubungi kami dan kami akan melakukan upaya terbaik kami untuk segera menghapus informasi tersebut dari catatan kami.",
        priv_h2_6: "Hanya Kebijakan Privasi Online", priv_p7: "Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku untuk pengunjung situs web kami sehubungan dengan informasi yang mereka bagikan dan/atau kumpulkan di Blog Lieba Natur Brilian. Kebijakan ini tidak berlaku untuk informasi apa pun yang dikumpulkan secara offline atau melalui saluran selain situs web ini.",
        priv_h2_7: "Persetujuan", priv_p8: "Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.",

        about_intro_title: "Tentang Saya",
        about_intro_p1: "Saya Liba Natur Brilian, dikenal juga sebagai Natur atau gingalibadeidara, seorang editor video dan desainer grafis dengan minat mendalam pada teknologi, seni, musik, dan pembuatan konten.",
        about_intro_p2: "Di sini, saya membagikan proyek terbaru saya seperti desain, pengeditan video, vektor, dan blogging. Saya harap platform ini dapat menjadi ruang untuk berbagi inspirasi, ide, dan diskusi menarik dengan Anda.",
        about_interest_title: "Minat Saya",
        about_tech_h: "Teknologi",
        about_tech_p: "Sudah tertarik dengan teknologi sejak sekolah dasar, awalnya karena era warnet pada masa itu. Pada awalnya, saya hanya tahu game bawaan sistem operasi, lalu pada tahun 2007 saya mulai mengenal internet dan lainnya.",
        about_music_h: "Musik",
        about_music_p: "Awalnya, karena ayah saya hampir setiap Minggu pagi memutar lagu melalui pemutar VCD dan kaset pita. Saya tertarik dengan lagu barat lawas, lalu pop Indonesia, kemudian K-pop karena pengaruh teman SMP (Super Junior & SNSD) hingga akhirnya ke lagu J-Pop sampai sekarang. Saya juga menyukai musik klasik dan musik Doujin seperti Touhou.",
        about_anime_h: "Anime",
        about_anime_p: "Berawal dari anime yang tayang di stasiun TV Indonesia. Anime pertama saya adalah Naruto, lalu pada tahun 2012 saya mulai tertarik dengan Little Busters (salah satu favorit saya), dan terus berlanjut sampai sekarang. Cek progres saya di <a href='https://anilist.co/' target='_blank' style='color: var(--accent); text-decoration: underline;'>Anilist</a>.",
        about_game_h: "Game & Novel Visual",
        about_game_p: "Rasa penasaran berawal dari lagu Nightcore dan ilustrasi yang digunakan. Ternyata banyak yang berasal dari Novel Visual seperti <i>Koi Kakeru Shin Ai Kanojo</i>. Untuk game, dimulai dari <i>Bully Scholarship</i>, dan game mobile pertama saya adalah <i>Deresute</i>.",
        about_trans_h: "Penerjemahan",
        about_trans_p: "Saya mulai tertarik dengan dunia terjemahan ketika belajar membuat efek karaoke dan subtitle. Sejak 2016, saya terjun ke bidang ini untuk mengisi waktu luang dan mengembangkan minat bahasa. Saya berharap bisa menguasai bahasa Jerman, Jepang, dan Mandarin.",
        about_proj_title: "Proyek: ",
        about_proj_desc: "Berkontribusi pada berbagai proyek pelokalan di platform Crowdin.",

        nav_gallery: "Galeri",
        gal_title: "Galeri Foto",
        gal_desc: "Koleksi foto kegiatan pribadi, yang seharusnya diunggah di instagram, namun ternyata kena potong.",

        nav_vector: "Vektor",
        gal_title_vector: "Vektor",
        gal_desc_vector: "galeri berisikan vektor yang sebelumnya aku buat",

        back_to_blog: "Kembali ke Blog",

        loading_song: "Memuat...",
        now_playing: "Sedang Diputar",
        loading_artist: "Mencari frekuensi...",

        news_title: "Berita & Pembaruan",
        news_desc: "Informasi terbaru seputar proyek, pembaruan web, dan pengumuman lainnya.",
        news_1_date: "25 September2025",
        news_1_title: "Migrasi Secara Bertahap",
        news_1_desc: "Hanya pindah hosting saja karena sudah muak dengan hosting gratisan, yang tentunya suatu saat kena batasan atau akun kena suspen",
        news_2_date: "10 Maret 2026",
        news_2_title: "Proyek Lokalisasi Aplikasi Selesai",
        news_2_desc: "Proyek penerjemahan bahasa Inggris ke bahasa Indonesia untuk aplikasi open-source telah mencapai 100% di platform Crowdin.",
        news_3_date: "1 Maret 2026",
        news_3_title: "Galeri Vektor Diperbarui",
        news_3_desc: "Beberapa karya digital art dan vektor baru sudah ditambahkan ke halaman galeri, termasuk eksplorasi karakter anime dengan teknik pencahayaan baru.",

        ilm_title: "Pentingnya Cuci Tangan",
        ilm_subtitle: "Video Ilmiah Masyarakat (ILM) - Proyek Tugas Akhir SMK.",
        ilm_h1: "Awal Mula Cerita",
        ilm_p1: "Video pertama ini adalah tugas akhir saya saat berada di sekolah menengah kejuruan. Menceritakan kisah seorang anak laki-laki yang suka jajan di kantin sekolahnya, tetapi ia mengabaikan kebersihan. Seorang teman perempuannya kemudian mengingatkannya bahwa sebelum makan di kantin, alangkah baiknya untuk mencuci tangan terlebih dahulu.",
        ilm_h2: "Proses Pembuatan",
        ilm_p2: "Pengambilan gambar dilakukan di area sekolah dengan melibatkan beberapa teman sekelas sebagai aktor. Proses pengeditan memakan waktu sekitar satu minggu menggunakan Adobe Premiere Pro, fokus pada penyampaian pesan yang jelas dan mudah dipahami oleh siswa lainnya.",
        back_to_video: "Kembali",


        foot_copy: "&copy; 2026 Lieba Natur Brilian. Semua Hak Cipta Dilindungi. | <a href='privacy.html'>Kebijakan Privasi</a>", foot_contact: "Temukan saya di:",
        foot_copy_2: "&copy; 2026 Lieba Natur Brilian. Semua Hak Cipta Dilindungi. | <a href='../privacy.html'>Kebijakan Privasi</a>", foot_contact: "Temukan saya di:",
    },

    jp: {
        nav_karya: "作品", nav_cv: "履歴書", nav_layanan: "サービス", nav_kontak: "連絡先", nav_news: "ニュース",
        hero_title: "こんにちは、Natur Brilianです", hero_desc: "グラフィックデザイナー、ビデオ編集者、そして様々なサービス、アプリケーション、ソフトウェアの翻訳者として活動しています。アルファコーダーズなどの他のウェブサイトでは、gingalibadeidara としても知られています。", hero_btn: "相談しましょう",
        port_title: "厳選された作品", port_1_title: "デジタルキャラクターイラスト", port_1_desc: "光源のディテールと髪の質感の仕上げに焦点を当てたキャラクターレンダリングの探求。", port_2_title: "多言語個人サイト", port_2_desc: "Astroフレームワークを使用して構築された、軽量で超高速のポートフォリオWebサイト。", port_3_title: "カスタムLast.fm Webプレーヤー", port_3_desc: "APIを介して現在再生中の曲をリアルタイムで取得して表示するカスタムUIウィジェット。", port_5_desc: "以前私が制作した他のいくつかの動画。",
        serv_title: "私の仕事", serv_1_desc: "ディテール、表情、鮮やかな照明に焦点を当てたキャラクターイラストやデジタルアートワークの作成。", serv_2_desc: "HTML、CSS、Astroなどの最新テクノロジーを使用して、超高速でレスポンシブな静的Webサイトを構築します。",
        
        cv_contact_title: "連絡先",
        cv_skill_title: "スキル", cv_skill_1: "ローカリゼーション (英→インドネシア語)", cv_skill_2: "グラフィックデザイン", cv_skill_3: "ブログ", cv_skill_4: "ビデオ編集", cv_skill_5: "Microsoft Word",
        cv_job_title: "グラフィックデザイナー ＆ ビデオ編集者", cv_profile_title: "プロフィール", cv_profile_desc: "グラフィックデザイナーおよびビデオ編集者であり、コンピュータやオペレーティングシステムなど、情報技術に関する知識も持っています。Kediri TVでビデオ編集者として働き、Yuramediaでグラフィックデザイナーとして貢献しています。",
        cv_exp_title: "職歴", cv_exp_1_title: "グラフィックデザイナー — Yuramedia Links", cv_exp_1_desc: "<ul><li>ソーシャルメディアの投稿用デザインの作成。</li></ul>", cv_exp_2_title: "ビデオ編集者＆デザイナー — Kediri Televisi", cv_exp_2_desc: "<ul><li>YouTube公開用のビデオコンテンツの編集（政府機関や病院の商業広告、ドキュメンタリービデオなど）。</li><li>ウェブサイト用の広告デザイン、およびパンフレットや印刷物のデザイン。</li></ul>",
        cv_edu_title: "学歴",

        priv_title: "プライバシーポリシー",
        priv_p1: "Lieba Natur Brilianウェブサイト（https://naturbrilian.dpdns.org からアクセス可能）では、訪問者のプライバシーを主な優先事項の一つとしています。このプライバシーポリシー文書には、Lieba Natur Brilianウェブサイトによって収集・記録される情報の種類と、その使用方法が含まれています。プライバシーポリシーについてさらに質問がある場合、または詳細情報が必要な場合は、お気軽にお問い合わせください。",
        priv_h2_1: "ログファイル", priv_p2: "Lieba Natur Brilianウェブサイトは、ログファイルを使用する標準的な手順に従っています。これらのファイルは、訪問者がウェブサイトを訪れたときに訪問者を記録します。すべてのホスティング会社がこれを行っており、ホスティングサービスの分析の一部です。ログファイルによって収集される情報には、インターネットプロトコル（IP）アドレス、ブラウザの種類、インターネットサービスプロバイダ（ISP）、日付とタイムスタンプ、参照/終了ページ、およびクリック数が含まれる場合があります。これらは個人を特定できる情報にはリンクされていません。情報の目的は、傾向の分析、サイトの管理、ウェブサイト上でのユーザーの動きの追跡、および人口統計情報の収集です。",
        priv_h2_2: "クッキーとウェブビーコン", priv_p3: "他のウェブサイトと同様に、Lieba Natur Brilianウェブサイトは「クッキー」を使用しています。これらのクッキーは、訪問者の好みや、訪問者がアクセスまたは訪問したウェブサイト上のページなどの情報を保存するために使用されます。この情報は、訪問者のブラウザの種類やその他の情報に基づいてウェブページの内容をカスタマイズすることにより、ユーザーの体験を最適化するために使用されます。",
        priv_h2_3: "プライバシーポリシー", priv_p4: "このリストを参照して、Lieba Natur Brilianウェブサイトの各広告パートナーのプライバシーポリシーを見つけることができます。サードパーティの広告サーバーまたは広告ネットワークは、それぞれの広告やLieba Natur Brilianブログに表示されるリンクで使用されるクッキー、JavaScript、またはウェブビーコンなどのテクノロジーを使用しており、これらはユーザーのブラウザに直接送信されます。これが発生すると、彼らは自動的にあなたのIPアドレスを受け取ります。これらのテクノロジーは、広告キャンペーンの有効性を測定したり、訪問したウェブサイトで表示される広告コンテンツをパーソナライズしたりするために使用されます。Lieba Natur Brilianウェブサイトは、サードパーティの広告主が使用するこれらのクッキーにアクセスしたり、制御したりすることはできないことに注意してください。",
        priv_h2_4: "サードパーティのプライバシーポリシー", priv_p5: "Lieba Natur Brilianブログのプライバシーポリシーは、他の広告主やウェブサイトには適用されません。したがって、詳細情報については、これらのサードパーティ広告サーバーのそれぞれのプライバシーポリシーを参照することをお勧めします。これには、特定のオプションをオプトアウトする方法に関する彼らの実践と指示が含まれる場合があります。個々のブラウザオプションを通じてクッキーを無効にすることを選択できます。特定のウェブブラウザでのクッキー管理に関する詳細情報を知るには、ブラウザのそれぞれのウェブサイトで見つけることができます。",
        priv_h2_5: "子供の情報", priv_p6: "私たちの優先事項の別の部分は、インターネットを使用する際の子供たちの保護を追加することです。保護者の方々には、お子様のオンライン活動を観察、参加、および/または監視・指導することをお勧めします。Lieba Natur Brilianブログは、13歳未満の子供から個人を特定できる情報を意図的に収集することはありません。お子様が当社のウェブサイトにこのような情報を提供したと思われる場合は、すぐにご連絡いただくことを強くお勧めします。当社の記録からそのような情報を迅速に削除するために最善の努力を尽くします。",
        priv_h2_6: "オンラインプライバシーポリシーのみ", priv_p7: "このプライバシーポリシーは、当社のオンライン活動にのみ適用され、Lieba Natur Brilianブログで共有および/または収集した情報に関して、当社のウェブサイトの訪問者に有効です。このポリシーは、オフラインまたはこのウェブサイト以外のチャネルを通じて収集された情報には適用されません。",
        priv_h2_7: "同意", priv_p8: "当社のウェブサイトを使用することにより、お客様は当社のプライバシーポリシーに同意し、その利用規約に同意したことになります。",

        about_intro_title: "私について",
        about_intro_p1: "私はリーバ・ナトゥール・ブリリアン（Liba Natur Brilian）、別名Naturまたはgingalibadeidaraです。テクノロジー、アート、音楽、コンテンツ制作に深い情熱を持つビデオエディター兼グラフィックデザイナーです。",
        about_intro_p2: "ここでは、デザイン、ビデオ編集、ベクターアート、ブログなど、私の最近のプロジェクトを共有します。この場所が、インスピレーションやアイデアを共有し、皆さんと魅力的な議論を交わす空間になればと願っています。",
        about_interest_title: "興味・関心",
        about_tech_h: "テクノロジー",
        about_tech_p: "小学生の頃からテクノロジーに興味があり、当時はインターネットカフェ（warnet）ブームがきっかけでした。最初はOS付属のゲームしか知りませんでしたが、2007年にインターネットの世界を知りました。",
        about_music_h: "音楽",
        about_music_p: "最初は、父がほぼ毎週日曜日の朝にVCDやカセットで曲を流していたのがきっかけでした。昔の洋楽、次にインドネシアのポップス、そして中学の友人の影響でK-POP（Super JuniorやSNSD）にハマり、最終的に今のJ-POPに行き着きました。クラシック音楽や東方などの同人音楽も好きです。",
        about_anime_h: "アニメ",
        about_anime_p: "インドネシアのテレビで放送されていたアニメから始まりました。初めて見たのは『ナルト』で、2012年には『リトルバスターズ！』（お気に入りの一つ）に興味を持ち、現在に至ります。視聴状況は<a href='https://anilist.co/' target='_blank' style='color: var(--accent); text-decoration: underline;'>Anilist</a>で確認できます。",
        about_game_h: "ゲーム＆ビジュアルノベル",
        about_game_p: "Nightcoreの曲と動画に使われているイラストから好奇心が湧きました。その多くが『恋かける星に愛を』などのビジュアルノベルからのものだと知りました。ゲームは『Bully Scholarship』から始まり、初めてのモバイルゲームは『デレステ』でした。",
        about_trans_h: "翻訳",
        about_trans_p: "カラオケエフェクトや字幕の作り方を学んだ時に翻訳に興味を持ちました。2016年以降、空き時間を活用し語学への関心を深めるためにこの世界に飛び込みました。将来はドイツ語、日本語、中国語を習得したいと思っています。",
        about_proj_title: "プロジェクト：",
        about_proj_desc: "Crowdinプラットフォームで様々なローカライズプロジェクトに貢献しています。",

        now_playing: "再生中",
        loading_song: "読み込み中...",
        loading_artist: "周波数を検索中...",

        news_title: "ニュースと最新情報",
        news_desc: "プロジェクト、ウェブの更新、その他の発表に関する最新情報。",
        news_1_date: "2025年09月25日",
        news_1_title: "段階的な移住",
        news_1_desc: "無料ホスティングにうんざりしたからといってホスティングを変更すれば、当然ながら制限が課されたり、いずれアカウントが停止されたりするでしょう。",
        news_2_date: "2026年3月10日",
        news_2_title: "アプリのローカライズプロジェクト完了",
        news_2_desc: "オープンソースアプリケーションの英語からインドネシア語への翻訳プロジェクトが、Crowdinプラットフォームで100％に達しました。",
        news_3_date: "2026年3月1日",
        news_3_title: "ベクターギャラリーの更新",
        news_3_desc: "新しいデジタルアートやベクター作品がギャラリーページに追加されました。これには、新しい照明技術を使ったアニメキャラクターの探求も含まれます。",

        nav_gallery: "ギャラリー",
        gal_title: "イラストギャラリー",    
        gal_desc: "インスタグラムにアップロードするはずだったプライベートな活動の写真をまとめたコレクションが、どうやら削除されてしまった。",

        nav_vector: "ベクトル",
        gal_title_vector: "ベクトル",
        gal_desc_vector: "ギャラリーには、以前私が作成したベクターが含まれています",

        foot_copy: "&copy; 2026 Natur Brilian. 全著作権所有。 | <a href='privacy.html'>プライバシーポリシー</a>", foot_contact: "SNS:",
        foot_copy_2: "&copy; 2026 Natur Brilian. 全著作権所有。 | <a href='../privacy.html'>プライバシーポリシー</a>", foot_contact: "SNS:",
    }
};

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
        id: "post2",
        date: "10 Maret 2026",
        category: "Translation",
        image: "https://picsum.photos/seed/blog2/600/400",
        link: "artikel-2.html",
        title: {
            id: "Suka Duka Menjadi Penerjemah Lepas",
            en: "The Ups and Downs of Freelance Translation",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Berbagi pengalaman saat menggarap proyek lokalisasi di platform Crowdin dan tantangannya.",
            en: "Sharing experiences while working on localization projects on the Crowdin platform and its challenges.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    },
    {
        id: "post2",
        date: "10 Maret 2026",
        category: "Translation",
        image: "https://picsum.photos/seed/blog2/600/400",
        link: "artikel-2.html",
        title: {
            id: "Suka Duka Menjadi Penerjemah Lepas",
            en: "The Ups and Downs of Freelance Translation",
            jp: "フリーランス翻訳者の悲喜こもごも"
        },
        desc: {
            id: "Berbagi pengalaman saat menggarap proyek lokalisasi di platform Crowdin dan tantangannya.",
            en: "Sharing experiences while working on localization projects on the Crowdin platform and its challenges.",
            jp: "Crowdinプラットフォームでのローカライズプロジェクトの経験とその課題について共有します。"
        }
    }

    
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
                <a href="post.html?id=${post.id}" class="read-more">${readMoreText[lang]}</a>
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

