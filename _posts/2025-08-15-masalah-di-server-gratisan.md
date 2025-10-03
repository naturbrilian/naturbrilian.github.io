---
layout: post
title: Masalah di server gratisan
date: 2025-08-15 03:38:23
description: Sebenarnya ini salinan tulisan dari wordpress resmi saat website masih bermasalah.
tags: blog
categories: rant
thumbnail: assets/img/masalah-server-thumbnail.png
---

Belum genap sebulan aku mencari server gratisan karena gak ada budget beli, semuanya berawal dari chatGPT ketika aku bertanya tentang hosting gratis (lebih ke hosting apps dan web) & aku disarankan Infinity Free karena 000webhost kuotanya sudah penuh.

# 1. Muncul masalah ketika akses
Mengingat Infinity Free ini adalah layanan gratis, pasti ada plus minusnya, tapi ini yang bikin gw panik yaitu hari ini tiba-tiba situs webku yang udah kuatur sedemikian rupa tiba-tiba gak bisa diakses.
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/error-502.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Kemudian, aku mencoba memeriksa kembali ke dasbor Infinity Free dan aku kaget tiba-tiba statusnya htadocs dan lain-lain jadi begini

Lalu tanpa pikir panjang, aku membuka chatGPT daripada bertanya kepada teman yang paham perserveran, dan jawabannya adalah “karena masalah di server itu” dan katanya “hak akses pada htadocs tiba-tiba berubah”

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/htdocs-error.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

# 2. Mulanya gimana bisa begini
Sebenarnya aku sedang tidak ngapa-ngapain setelah merapikan website ku, terus aku coba buka lagi dengan menyegarkan tiba-tiba jadi seperti itu. Tetapi anehnya situsku yang berjalan di subdomain kuuhaku404x1.great-site.net malah lancar

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alter-web.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Mungkin karena ini adalah html situs paling ringan & statis ya, yang seharusnya aku hosting di nekoweb atau neocities.

> ##### Kesimpulan
> 
>Setiap server apalagi yang gratisan,
> pasti memiliki kekurangan termasuk sering bermasalah saat pemuatan website,
> ftp tiba-tiba rusak dan masih banyak lagi kalau dibandingkan dengan yang berbayar
{: .block-kesimpulan }

Seharusnya ini adalah konten rant, tapi mengingat jadi satu dengan web wordpress juga direktorinya, jadinya keduanya gak bisa diakses

