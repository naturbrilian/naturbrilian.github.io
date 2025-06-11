---
layout: post
title: Review Jellyfin MediaPlayer atau Server
date: 2023-10-14 14:49:23
tags: media server, jellyfin
categories: review
thumbnail: assets/img/jf-homepage.png
---

Mumpung ada kesempatan untuk nulis lagi di blog pribadi, kali ini aku ingin review Media Server yaitu Jellyfin yang aku gunakan selama 2 bulan terakhir ini. Yak awalnya ini aku benar-benar gak tertarik, pertama lihat ini hanya gara-gara postingan temanku di Facebook, lalu kemudian aku diracunin oleh pololer (salah satu staff Yurasub).

## Apa itu Jellyfin?
Seperti namanya, Jellyfin adalah server media sumber terbuka dan gratis dan rangkaian aplikasi multimedia yang dirancang untuk mengatur, mengelola, dan berbagi file media digital ke perangkat jaringan

## Soal pengelolaan Media
Kalau soal pengelolaan media, menurutku ini sangat bagus.. tetapi untuk penataan pada pustaka ini sangat-sangatlah mirip dengan Kodi, yang dimana kalau untuk lagu, kita harus mengurutkannya dengan Artist kemudian Folder Album baru trek2 dengan secara urut dan menurutku ini sangat-sangatlah enak dan mudah, biasanya aku ini build database musik pakai media player lokalan AIMP.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/music-jf.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Pemutaran Video
Kalau soal pemutaran video, sangatlah lancar tetapi ada minusnya, kalau video yang berdurasi lebih 1 jam atau tipe film, ini akan force close dan ane gak tau cara mengatasinya bagaimana. Nah, untuk di hp, kamu bisa mengakalinnya dengan menggunakan VLC Media player. Jadi kurasa masih kurang enak & lebih baik nonton secara luring saja.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/release-yura.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Untuk sumber berkas dan lain-lainnya?
Nah, untuk sumber berkasnya, ini mengandalkan Google Drive & Mega, yang disambungkan menggunakan RClone, kalau jika di host di PC atau laptop.. langsung lewat File Explorernya (Hardisk) atau biasanya kita menyebutnya Home Server.

## Format yang didukung untuk sumber ini
Format file yang didukung untuk sumber ini, tak lain *.WAV, *.MP3, *.M4A, *.FLAC dan untuk versi terbarunya, kini juga sudah mendukung format *.dsf dan *.dff, tapi jika dihosting secara daring, saya saranin sih format MP3, agar tidak menguras kuota kamu saat streaming.

## Dukungan pelacakan Trakt untuk film, dan Taiga untuk anime
Yaps tentu saja, karena baru bulan kemarin nyoba trakt (padahal register dari 2021) & dukungan ini sudah berfungsi dengan baik. Di versi sebelumnya malah gak **work** sama sekali, dan tentunya Taiga

> [!NOTE]
> Untuk Taiga, kamu harus mengakses Jellyfin dalam mode ip public, bukan lokal (localhost:7272)

## Kekurangannya menggunakan ini dibanding menggunakan pemutar media Lokal
Selama aku menggunakan ini, sering mendapati bug/error yang dimana kadang file musik yang ingin di play tidak bisa.. yang dimana kamu harus menghubungi pemilik server ini untuk memulai ulang server ini (jika kamu tidak memiliki aksesnya) agar berfungsi kembali seperti sedia kala. Lalu untuk video seperti w sebutkan tadi, kadang suka lama untuk memuat salah satu takarir, kedua force close di video berdurasi 1 jam. Tetapi sisanya normal kok.

# Sumber #
1. [Yurasub Jellyfin](https://we.yurasu.xyz/jellyfin)
2. [Hananako Jellyfin](https://jellyfin.hananako.xyz/)
