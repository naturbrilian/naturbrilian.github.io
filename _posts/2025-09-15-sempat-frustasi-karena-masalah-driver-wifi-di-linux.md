---
layout: post
title: Sempat frustasi karena masalah driver wifi di Linux
date: 2025-09-15 23:13:00
tags: blog
categories: tutorial
thumbnail: assets/img/thumbnail-wifi-missing.png
---

Sempat bingung ketika aku berselancar di internet menggunakan laptopku yang satunya (dulunya aku instal windows 10), tapi baru kali ini aku nemu sebuah masalah setelah memulai ulang laptopku yang terinstal Linux. Masalah ini aku temukan pas jam 17:00 tadi sore, setelah mengganti tema bawaan ke tema Yaru yang aku dapatkan di repositori tema Linux Mint.

Sebelum masalah di laptop sendiri ini muncul, dulu aku pernah menemukan salah satu postingan di grup facebook teknisi komputer dan salah satu masalahnya adalah di driver wifi, salah satu member sempat bertanya dengan kutipan

> ##### TIP
> 
> gan, ini driver wifi nya sudah aku instal,
> tapi kok masih tidak terdeteksi
{: .block-tip }

Kalau tidak salah, salah satu member itu juga dualboot dengan windows (untuk kasus dualboot, mungkin belum bisa bantu yah)

# Yang aku lakukan pertama kali
Sebelumnya aku sudah mencoba dengan berbagai cara seperti
```script
lspci | grep -i wireless
```

Namun semuanya nihil, bahkan cara yang diberikan oleh chatGPT tidak ada yang membantu sama sekali, sampai aku mengirimkan beberapa salinan teks dari Terminal Linux dan tangkapan layar driver yang sudah terinstal.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/command-line-linux.png" title="Osamake" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ask-chatgpt.png" title="Hanashura" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Dari sini aku baru inget punya bundle Google One yang sudah termasuk dengan Gemini AI, lalu aku mencoba bertanya dengan pertanyaan yang sama dan mencoba memberinya pertanyaan & aku menemukan sebuah jawaban yang bagus.

# Cara Mengatasi
Jika laptop atau komputermu tiba-tiba wifi adapternya tidak bisa terdeteksi atau justru setelah instal driver masih tidak terdeteksi, jangan khawatir terlebih dahulu, khususnya penyedia jasa instal ulang atau instal ulang sendiri
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-11.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

1. Restart laptop atau komputermu
2. Masuk ke Bios dengan memencet f2 (tiap merek laptop berbeda-beda)
3. Kita masuk ke tab security terlebih dahulu untuk memastikan. Biasanya disini kok tiba-tiba pengaturannya lebih lengkap seperti kita ke mode uefi yang dimana uefi itu adalah booting khusus windows
4. Baru kita ke tab boot, jika tiba-tiba itu keganti ke uefi disitu letak penyebabnya wifi tidak terdeteksi, linux bootingnya menggunakan legacy mode jadi ubah
5. setelah itu exit dan biarkan booting dan normal kembali seperti sebelumnya

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wifi-muncul-lagi.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> ##### TIP
> 
> Walaupun bios nya tadi tiba-tiba ganti ke uefi,
> entah kenapa laptop ini masih bisa booting dengan normal dan masalah cuma satu,
> yaitu driver wifi
{: .block-tip }
