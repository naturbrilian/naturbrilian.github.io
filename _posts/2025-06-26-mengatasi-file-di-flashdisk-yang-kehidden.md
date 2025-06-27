---
layout: post
title: Mengatasi masalah file di flashdisk yang ke hidden karena virus
date: 2025-06-26 13:08:23
description: Tutorial yang mungkin hampir semua orang lupa
tags: blog
categories: tutorial
thumbnail: assets/img/512274831_697499616383376_570875852809618813_n.jpg
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/512274831_697499616383376_570875852809618813_n.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> [!NOTE]
> Sebenarnya ini artikel adalah salinan dari postingan yang aku buat di fb kemarin

Aku kan kemarin sempat tiba-tiba buat postingan di Facebook, karena sebuah postingan di salah satu grup yang tiba-tiba flashdisknya saat dicolokin ke laptopnya ternyata kena hidden, lalu warga grup tersebut berkomentar "disinilah peran Smadav diperlukan".

Nah, sedangkan Smadav sendiri itu ternyata menggunakan metode yang sama aku gunakan 5 tahun yang lalu, tepatnya setelah aku menancapkan flashdisk ku pc milik kantor tempat aku bekerja. Waktu itu karena mau mengunggah berkas video ke YouTube yang terpaksa pakai laptopku gara-gara PC kantor tidak terpasang driver wifi/jaringannya.

## Cara mengatasinya
Nah, buat yang masih mengandalkan smadav, sebenarnya bisa menggunakan perintah ini di *Command Prompt*, cukup ketikkan "attrib -s -r -h *.* /s /d /l" lalu tekan enter, jangan lupa untuk mengganti direktori tujuan ke flashdiskmu.

> [!NOTE]
> Perintah ini hanya berlaku untuk flashdisk, tidak berlaku untuk harddisk eksternal

Sebenarnya cara ini sudah lama digunakan, apalagi kamu yang sering ke tukang percetakan dan warnet apalagi. Soal Smadav sendiri ternyata mereka sudah mengimplementasikan ini, tapi hanya saja dalam bentuk GUI (Graphical User Interface) atau kita biasa menyebutnya dengan Antarmuka Pengguna Grafis agar pengguna yang masih awam mudah menggunakannya.

Berdasarkan komentar dari warga threads, flashdisk tersebut sudah terinfeksi virus & ini sebenarnya sudah lama terjadi.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2025-06-27-120724.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

