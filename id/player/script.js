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
// DAFTAR LAGUMU (Masukkan semua lagu di sini)
// ==========================================
const songs = [
    {
        title: "MAGIC BPM",
        artist: "EasyPop",
        src: "E:/Lagu/A/EasyPop/ベリーイージー2/11 MAGIC BPM.flac" // Mengambil path dari screenshot-mu
    },
    {
        title: "だから言ったでしょ?",
        artist: "EasyPop",
        src: "E:/Lagu/A/EasyPop/ベリーイージー2/10 I've Told You, Right_.flac" // Ganti dengan path lagu aslimu
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

// Fungsi memuat lagu ke player
function loadSong(index) {
    const song = songs[index];
    trackTitle.textContent = song.title;
    trackArtist.textContent = song.artist;
    audio.src = song.src;
    updatePlaylistActiveState();
}

// Fungsi membuat elemen HTML untuk playlist
function renderPlaylist() {
    playlistList.innerHTML = ''; // Bersihkan dulu
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="song-title">${song.title}</span><span class="song-artist">${song.artist}</span>`;
        
        // Kalau lagu di playlist di-klik, putar lagu tersebut
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        
        playlistList.appendChild(li);
    });
}

// Menandai warna hijau pada lagu yang sedang jalan
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

// Fungsi Play dan Pause
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

// Tombol Prev
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

// Tombol Next
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

// Format waktu (detik jadi menit:detik)
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Update progress bar
audio.addEventListener('timeupdate', () => {
    if(audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }
});

// Geser progress bar
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Otomatis next kalau lagu habis
audio.addEventListener('ended', () => {
    nextBtn.click();
});

// Jalankan saat web pertama kali dibuka
renderPlaylist();
loadSong(currentSongIndex);