---
layout: post
title: Memanfaatkan chatGPT untuk membuat kodingan sederhana
date: 2025-08-17 06:33:23
tags: tutorial
categories: tutorial
thumbnail: assets/img/aimp4-and-cmd-show.png
---

kemarin aku teringat sesuatu kalau punya akun bluesky yang rencananya waktu itu mau tak buat untuk posting lagu apa saja melalui lastfm, sebelumya aku pernah nyoba LegatoNowPlaying, namun sayangnya hanya mendukung untuk misskey yang waktu itu aku sangat tidak setuju sama sekali kalau gak ada opsi bluesky
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/misskey-id-buat-bot-post.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Tapi sayangnya ternyata si developer [LegatoNowPlaying](https://github.com/Legato-Dev/Legato-NowPlaying) hanya membuat dukungan untuk satu pemutar yaitu [AIMP](https://aimp.ru/), dan akhirnya aku gak bisa pakai untuk [Spotify](https://open.spotify.com/) dan lain-lainnya.

Akhirnya terlintas di pikiranku soal akunku yang beralamat di [@scrobble.naturbrilian.dpdns.org](https://bsky.app/profile/scrobble.naturbrilian.dpdns.org) yang aku buat beberapa bulan yang lalu. Akun ini sebenarnya aku pisah dengan akun utama & hanya berisi status pemutaran.

# Bagaimana cara aku memberi perintah pada chatGPT untuk membuat alat sederhana
Cara untuk memberi perintah kepada chatGPT ini sangat mudah, pertama aku memberi perintah seperti ini layaknya kamu mengobrol dengan temanmu
```script
aku kan punya akun di bluesky dengan username ini https://bsky.app/profile/namapengguna.bsky.social nah, rencananya tuh akun ini mau aku pake untuk memposting apa yang aku dengarkan menggunakan api nya lastfm, hmm aku pernah coba toolsnya seperti LegatoNowPlaying dari github, cuma ini untuk di misskey doang.. tau gak tools atau scriptnya yang saat ini work?
```

Tunggu sampai chatGPT merespon, biasanya chatGPT akan merespon dengan rekomendasi beberapa alat yang kamu maksud, terkadang jawaban yang diterima kadang tidak sesuai. Jadi coba lakukan percakapan lagi seperti biasa dengan seperti ini

Aku kan ingin autopost apa yang aku dengarkan, bukan posting top artis tiap minggu
Atau lebih singkatnya seperti “bukan top artis”, nah disitu nanti baru chatGPT menjawab dengan “cara bikin autopost Now Playing ke Bluesky” nanti bot akan membuatkan script python sederhana, ikuti saja petunjuknya nanti bot akan membuatkan versi fullnya sekaligus

# Menyiapkan API lastfm kamu
Ambil API lastfm mu dari tautan [ini](https://www.last.fm/api/account/create), kemudian klik create, nanti akan muncul beberapa API nya, lalu salin API Keynya kesitu

http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=USERNAME&api_key=APIKEY&format=json&limit=1
lalu, salin kode yang diberikan dari chatGPT ke teks editor favoritmu, disini aku menggunakan vscode
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/python-script-on-vscode.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

lalu masukkan username dan APIkey yang kamu dapat tadi, kemudian kita ke bluesky untuk mendapatkan password


> ##### NOTE
> 
> Password di bluesky itu bukan password akun,
> tetapi password aplikasi
{: .block-note }

# Bagaimana cara mendapatkan Apps passwordmu itu?
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/apps-password.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Masuk ke pengaturan > Privasi & Keamanan > Sandi Aplikasi, kemudian klik Sandi Aplikasi, buat nama terserah apa aja lalu klik berikutnya nanti muncul sandi aplikasinya

Setelah itu masukkan Sandi Aplikasi Bluesky ke bagian ***BSKY_PASS***.

> ##### REMINDER
> 
> Pyang dilabeli **BSKY_HANDLE** &
> **BSKY_PASS** isi seperti yang diatas
{: .block-reminder }

Setelah semua ter atur, coba tes dulu dengan cara menjalankan script python tadi di direktori kamu, jika muncul error coba pertama kita cari sendiri buat yang paham pemrograman, jika tidak paham kirim kembali ke chatGPT log yang ditampilkan di CMD.

Setelah semua problem terpecahkan, mari kita tes apa scriptnya berjalan dengan baik & kita play lagu dengan pemutar musik yang mendukung lastfm scrobble, web scrobble atau Spotify. Jika berhasil maka seharusnya lognya akan muncul seperti ini

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/contoh-post-otomatis.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hasil-di-bsky.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Gimana? mau mencobanya atau aku taruh script hasil modifikasinya dibawah jika kamu ingin menyempurnakan

```scss
import requests, time, datetime

LASTFM_USER = "USERNAMEKAMU"
LASTFM_API_KEY = "APIKEYKAMU"
BSKY_HANDLE = "username.bsky.social"
BSKY_PASS = "APPSPASSWORDKAMU"

last_track = None

while True:
    r = requests.get("http://ws.audioscrobbler.com/2.0/", params={
        "method": "user.getrecenttracks",
        "user": "USERNAMEKAMU",
        "api_key": "APIKEYKAMU",
        "format": "json",
        "limit": 1
    }).json()

    track = r["recenttracks"]["track"][0]
    if "@attr" in track and track["@attr"].get("nowplaying") == "true":
        artist = track["artist"]["#text"]
        title = track["name"]
        text = f"🎵 Now Playing: {artist} – {title}"

        if text != last_track: 
            # login Bluesky
            session = requests.post("https://bsky.social/xrpc/com.atproto.server.createSession",
                json={"identifier": "username.bsky.social", "password": "APPSPASSWORDKAMU"}).json()
            headers = {
                "Authorization": f"Bearer {session['accessJwt']}",
                "Content-Type": "application/json"
            }

            post = {
                "repo": "DID AKUN KAMU",
                "collection": "app.bsky.feed.post",
                "record": {
                    "text": text,
                    "createdAt": datetime.datetime.utcnow().isoformat() + "Z"
                }
            }

            requests.post("https://bsky.social/xrpc/com.atproto.repo.createRecord",
                          headers=headers, json=post)
            print("Posted:", text)
            last_track = text

    time.sleep(30)
```
