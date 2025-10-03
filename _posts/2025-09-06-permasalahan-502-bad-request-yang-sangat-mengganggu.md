---
layout: post
title: Permasalahan 502 bad request yang sangat mengganggu
date: 2025-09-06 17:40:23
tags: blog
categories: blog
thumbnail: assets/img/502-bad.jpg
---

Kemarin aku sempat menuliskan tentang permasalahan di peladen gratisan, aku sempat bingung kenapa sering begini tiap mengunjungi halaman webku? akhirnya aku menelusuri masalah ini, ternyata adalah karena templat web yang aku gunakan kemarin benar-benar membebani penggunaan server karena:

1. Animasi pada web yang membebani penggunaan server
2. Gambar di situs utama terlalu banyak khususnya halaman depan (homepage)

Sebenarnya aku sih gak masalah tetapi daripada masalah ini muncul lagi, aku memutuskan untuk mengganti templat yang jauh lebih sederhana & tidak ada efek animasi apapun. Templat web statis adalah pilihan paling sempurna untuk aku yang menggunakan server jenis free-tier ini, contohnya seperti yang aku gunakan sekarang.. templatnya lumayan ringan, awalnya karena seorang teman fbku juga menggunakan templat ini (tapi layoutnya berbeda) karena selain sederhana, juga gak sampai membebani penggunaan server. Oh iya tambahan saranku lagi nih, install plugin LScache buat optimalin webmu.
