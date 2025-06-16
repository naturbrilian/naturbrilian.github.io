---
layout: distill
title: Mahjong Soul Desktop Client (Bahasa Indonesia)
description: tutorial singkat cara bermain Mahjong Soul Desktop menggunakan klien tidak resmi (sudah tidak berlaku)
tags: tutorial
giscus_comments: true
date: 2022-05-01
featured: false
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Lieba Natur Brilian
    url: "https://naturbrilian.github.io/site"
    affiliations:
      name: Gingalibadeidara Works

bibliography: 2018-12-22-distill.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: PENGENALAN
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Sebelumnya apa sih itu Mahjong atau Mahjong Soul itu?
  - name: PEMASANGAN
  - name: JALANKAN & MAINKAN
  - name: Penggantian URL pada desktop client Mahjong Soul
  - name: Video Version

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## PENGENALAN
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_vWOYi5le6ovBINHsyLG-cQ.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Sebelumnya apa sih itu Mahjong atau Mahjong Soul itu? ##
Mahyong atau orang biasa menyebutnya Mahjong adalah sebuah permainan untuk empat orang yang berasal dari Cina. Ini adalah permainan yang menuntut kecakapan, strategi, kecerdasan, kalkulasi, dan peruntungan. Tergantung pada variasi permainannya, faktor keberuntungan bisa kecil atau dominan. Di Asia, mahyong adalah permainan yang populer untuk judi atau permainan komputer.

---

## PEMASANGAN ##

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_tCwoeuBBPZA8hNxbzIsmmQ.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Kamu hanya perlu satu software bernama NodeJS, kamu bisa memasangnya melalui pranala [berikut](https://www.google.com/url?q=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2Fcurrent%2F&sa=D&sntz=1&usg=AOvVaw2NBLQNRYaH0g2zYL7qEUe2). Kemudian install seperti biasa (disini aku lewati karena sudah terpasang).

Kemudian [download](https://github.com/berpergian/MahjongSoul-Dekstop) & ekstrak dimana saja, ya asalkan mudah diingat lokasi penyimpanannya.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_5YojCTVIxJjBejTjy3z7LA.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_h1lkIt_pHpiyUSYfGi6mQg.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_-8WfyGF2ppQ6VxvaummVTA.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah semua ter-ekstrak, kamu tinggal menjalankan terminal atau cmd di dalam folder itu, seperti ini. Lalu ketikkan baris perintah npm install seperti gambar ini dan tunggu proses sampai selesai.

---

## JALANKAN & MAINKAN ##
Setelah selesai semua proses, tinggal jalankan npm start seperti pada gambar ini.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_n-m-TH40QQVTHVyLaSHHfw.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

voila, kamu bisa memainkannya tanpa perlu membuka peramban kamu. Kebetulan untuk event saat ini sedang kolab dengan anime Perang cinta nona Kaguya (artikel ini ditulis tahun 2022), yang bisa kamu tonton di YouTube atau bilibili.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_5eNT2-QM5dKVyQrSlWYR1Q.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
---

## Penggantian URL pada desktop client Mahjong Soul ##
Ingin bermain versi lain? simpel kamu tinggal sunting di berkas index.html nya menggunakan text editor terserah. Ganti ke game.mahjongsoul.com untuk server Jepang seperti gambar di bawah.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_ihsEshrOeUX8986QPGE05A.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Punya pertanyaan seputar permainan ini? tinggal kontak saya di twitter: [@naturbrilian](https://twitter.com/naturbrilian) atau [Peladen Discord](https://go.naturbrilian.my.id/discord)

Ohiya, selain itu kamu juga bisa memainkannya melalui dmm melalui pranala berikut [https://dmg.mahjongsoul.com/](https://dmg.mahjongsoul.com/)

---
