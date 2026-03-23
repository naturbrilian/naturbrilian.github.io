# Memverifikasi kepemilikan tautan ternyata mudah
Bertahun-tahun menggunakan sebuah sosial media dan ingin rasanya fleksing yang namanya tanda centang di samping nama tampilanmu, tapi aku rasa tidak perlu dikarenakan ternyata untuk memiliki itu kita harus membayar terlebih dahulu agar bisa dapat verifikasi centang.

Di jaman dahulu, untuk mendapatkan sebuah verifikasi apakah ini akun resmi, kita harus menyerahkan sebuah berkas dengan id pengenal sebagai contoh KTP, kartu pajak dan lain-lain untuk kategori individu, namun sekarang sangat mudah apalagi kepemilikan tautan.

## Kepemilikan Tautan
Untuk tautan, kamu bisa memverifikasi kepemilikan hanya dengan menambahkan _<a rel=”me” href=””_ di berkas html mu, sebagai contoh aku akan memverifikasi kepemilikan tautan dengan fediverse Misskey, seperti pada potongan tangkapan layar berikut.

![image](/assets/rel-me.png)


Untuk Misskey sendiri, proses verifikasinya cepat, beda dengan threads yang harus menunggu 1/3 jam. Di Facebook juga ada sistem verifikasi kepemilikan tautan, hanya saja caranya ribet. Kurang lebih seperti yang tampil di tangkapan layar begini.

![image](/assets/contoh-verifikasi-tautan.png)


Di discord sendiri juga ada namanya sistem verifikasi seperti ini, dan tentu saja metodenya macam-macam sebagai contoh aku ingin memverifikasi tautan kepemilikan webku yang juga aku hosting di nekoweb.org, untuk cara nekoweb itu kurang lebih sama seperti neocities.org yaitu meletakkan berkas yang berisi value di folder .well-known seperti ini, yang nantinya nanti langsung diverifikasi oleh Discord.

![image](/assets/nekoweb.png)

![image](/assets/nekoweb-discord.png)

Bahkan sekarang untuk beberapa templat web sudah diberi dukungan untuk verifikasi tautan secara otomatis, sebagai contoh [al-folio](https://github.com/george-gca/multi-language-al-folio) dan [Fuwari](https://github.com/saicaca/fuwari) yang dulu pernah saya pakai sebelum masa domain habis.