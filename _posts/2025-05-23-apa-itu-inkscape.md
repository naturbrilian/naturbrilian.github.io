---
layout: post
title: Tentang Inkscape
date: 2025-05-23 17:11:00-0400
description: Tentang dari Software atau Aplikasi ini
tags: tutorial penjelasan inkscape vector
categories: tutorial
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

# Tentang Inkscape
Inkscape adalah sebuah perangkat lunak editor gambar vektor yang bersifat bebas terbuka dibawah lisensi GNU GPL. Tujuan utama dari Inkscape adalah membuat perangkat grafik mutakhir yang memenuhi standar XML, SVG, dan CSS.

Inkscape tersedia untuk sistem operasi Windows, Macintosh, dan Linux. Program dan kode sumber (source kode) Inkscape tersedia untuk umum pada situs resmi Inkscape sehingga siapapun dapat mempelajari dan mengembangkannya.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.inkscape.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Inkscape dapat digunakan untuk membuat gambar vektor untuk berbagai kebutuhan, misalnya untuk membuat gambar ilustrasi pada web, ikon untuk smartphone, gambar kartun atau animasi, membuat garis sederhana, kaligrafi, logo, brosur, dan masih banyak lagi.

Format gambar yang dibuat menggunakan Inkscape sangat handal dan dapat disebarkan melalui internet dengan mudah karena ukurannya lebih kecil dibandingkan dengan format yang dibuat menggunakan aplikasi lain yang sejenis. Dukungan untuk berbagai format telah ditambahkan termasuk untuk berbagai browser dan smartphone masa kini.

IInkscape mendukung gambar dengan bentuk biasa (misal; persegi panjang dan lingkaran), garis, dan teks. Setiap object dapat dimodifikasi dan diberi warna sendiri. Hiperlink dapat ditambahkan sehingga gambar dapat digunakan dalam web browser karena program Inkscape tujuannya untuk membuat gambar dengan format XML, SVG, dan kampatible dengan script CSS.
Saat ini Inkscape masih terus dikembangkan, hal ini dapat dilihat dengan adanya  penambahan fitur dan antarmuka baru secara rutin pada setiap rilis versi baru.

## 1.2.  Sejarah Inkscape
Inkscape dirintis pada tahun 2003 sebagai sebuah fork dari proyek Sodipodi. Proyek sodipodi sendiri sudah dikembangkan sejak tahun 1999 dengan menggunakan dasar Gill (Gnome Illustration Application) karya  Raph Levien.

Fork tersebut dipandu oleh sebuah tim berjumlah empat orang yang beranggotakan mantan pengembang Sodipodi (Ted Gould, Bryce Harrington, Nathan Hurst, dan MenTaLguY) yang mana ke-empat orang tersebut lebih mengenali perbedaan dari tujuan project tersebut, keterbukaan untuk pihak ketiga agar dapat berkontribusi, dan ketidaksetujuan teknis sebagai alasan mereka melakukan forking Inkscape.
Dengan Inkscape, mereka berpendapat fokus dan pengembangan untuk penerapan standar SVG dapat dilakukan secara lengkap, hal ini sedikit berbeda dengan pengembangan Sodipodi yang menekankan pada pembuatan sebuah program editor grafik vektor seperti pada umumnya yang mengorbankan implementasi SVG.

Sejak dikembangkan dalam fork tersebut, Inkscape yang semula menggunakan bahasa pemrograman C ke C++; berubah menggunakan GTK+ toolkit C++ y (gtkmm), antarmuka inkscape kemudian dirancang ulang sehingga lebih mudah jika ingin menambahkan sejumlah fitur baru. Pennerapannya terhadap standar SVG telah menunjukkan perbaikan yang signifikan, meski sampai saat ini belum lengkap karena SVG sendiri sampai sekarang juga masih terus dikembangkan

Berita baik kemudian muncul setelah Xara meluncurkan rencana untuk merilis aplikasi pelukisan Xara Xtreme sebagai proyek Open Source, mereka mengungkapkan minat untuk bekerja sama dengan Inkscape agar kedua proyek ini dapat saling berbagi kode. Tujuannya adalah sebuah proyek dengan  koordinasi yang baik sehingga tercipta editor grafik open source yang lebih hebat dari editor grafik apapun.

Sejak tahun 2005 Inkscape ikut serta di dalam Summer of Code, sebuah program yang dikembangkan Google. Sejak bulan November 2007, sistem pencarian kesalahan program Inkscape ditanam ke Sourceforge, namun pada tanggal 21 November 2007 para pengembang menyatakan akan memindahkannya ke Launchpad

## 1.3.  Apa Itu SVG
SVG adalah singkatan dari Scalable Vector Graphics dan merupakan format file baru untuk menampilkan grafik dalam pengembangan web yang berbasis XML (eXtensible Markup Language).
SVG telah direkomendasikan oleh World Wide Web Consortium (W3C) untuk menampilkan grafik serta mendeskripsikan gambar 2 dimensi dalam pengembangan web yang berbasis XML. SVG mengijinkan tiga tipe dari object grafis, yaitu bentuk vektor grafis (misalkan path yang terdiri dari garis lurus dan kurva), gambar, dan teks.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/W3C®_Icon.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

SVG dapat digunakan untuk menghasilkan berbagai macam variasi dari object grafis, dan juga menyediakan bentuk dasar umum seperti bujur sangkar dan elips. SVG memberikan pengendalian kualitas melalui sistem koordinat dari object grafis yang telah didefinisikan dan transformasi yang digunakan selama proses render.

## 1.4.  Perbedaan gambar Vektor dan Bitmap
### 1.4.1.  Vektor
Gambar vektor merupakan gambar yang terbentuk dari sejumlah garis dan kurva, maka dari itu gambar dengan format vektor apabila diperbesar tidak akan mengalami penurunan sehingga kwalitasnya gambar tetap baik.

### 1.4.2.  Bitmap
Gambar Bitmap sering juga disebut Rester, tampilan gambar jenis ini terdiri dari titik-titik atau piksel, gambar dengan format Bitmap jika diperbesar dengan ukuran tertentu akan terlihat kotak-kotak.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Vektor-vs-Bitmap.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 1.5.  Keuntungan Penggunaan SVG 
Keuntungan penggunaan SVG dibanding format gambar yang lain: 
- File sumber SVG dapat dibaca dan modifikasi dengan menggunakan hampir semua tool/text (misalnya notepad).
- File sumber SVG berukuran lebih kecil dan dapat dikompresi dibanding dengan format gambar JPEG dan GIF.
- Gambar dalam format SVG bersifat scalable/diresizing.
- Gambar dalam format SVG dapat dicetak dengan kualitas yang tinggi dan sama baiknya pada berbagai resolusi.
- Gambar dalam format SVG bersifat zoomable. Setiap bagian dari gambar dapat di zoom tanpa degradasi mutu.
- Text dalam SVG “selectable” dan “searchable” (sangat berguna dalam peta).
- SVG dapat bekerja dengan Teknologi Java.
- SVG merupakan “open standard”.
- SVG merupakan murni XML.

Tulisan ini diambil dari [Blog](https://manual-inkscape.blogspot.com/2013/08/tentang-inkscape.html)
