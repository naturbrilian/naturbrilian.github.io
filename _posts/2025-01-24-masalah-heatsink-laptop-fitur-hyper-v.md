---
layout: post
title: Masalah heatsink laptop & Fitur Hyper-V
date: 2025-01-24 12:35:11
tags: fixing
categories: blog
thumbnail: assets/img/heatsink.png
---

Singkat cerita soal fitur Hyper-V, awalnya aku ngaktifkan ini fitur karena waktu itu benar-benar butuh untuk buat peladen media/pemutar yaitu Jellyfin lewat laptopku yang utama, karena ternyata laptopku yang lama tidak bisa pakai fitur ini dikarenakan terhalang oleh edisi windows yang hanya mendukung Single Language.

Setelah itu aku mendapat sebuah keanehan, yang dimana biasanya aku kalau mau ngedit video fan laptop (internal) itu berputar kenceng menjadi tidak alias seperti dalam kondisi normal-normal aja alias tidak berisik setelah aku ngaktifin ini fitur. Padahal menurutku fitur ini tidak ada hubungannya sama sekali dengan soal performa.

Ketika aku tidak membutuhkan fitur Hyper-V aku langsung matikan fitur ini, ya saat aku mau menginstal emulator Memu emang diwajibkan untuk menonaktifkan fitur ini. Lalu disinilah kejanggalan mulai terjadi, tiba-tiba heatsink laptop berputar kencang padahal itu kondisi lagi idle dan posisi tidak buka apa-apa, kecuali peramban & itu terjadi sampai 2 bulan, belum lagi digeber Premiere dan rendering, dan sampai pada akhirnya ketika aku memulai ulang laptop ini, muncullah peringatan seperti gambar ini

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/maxresdefault.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Sudah cari sana-sini solusi & hampir mau dibawa ke tempat servis kemarin, kemudian iseng lagi ngaktifin Hyper-V itu kemarin, karena butuh lagi untuk yah, peladen kecil2an untuk [Maloja Scrobbling](https://github.com/krateng/maloja) dan web statis. Malah normal lagi & tidak ada masalah lagi, ketika buka premiere & proses rendering tidak sampai berisik, apalagi saat restart tidak  lagi muncul peringatan seperti itu.
Nah, darisinilah aku mulai bertanya-tanya, ini masalah sebenarnya bukannya karena heatsinknya yah, tapi Hyper-V yang tidak ada hubungannya sama sekali (menurutku) kok bisa normal lagi ya?

## Sumber gambar
- YouTube: https://www.youtube.com/watch?v=J5W8la-OCEs&ab_channel=RupaRupi%28Rdua%29
- Artikel Heatsink: https://indradp.com/penyebab-kipas-laptop-berbunyi-bising-dan-cara-mengatasinya/
