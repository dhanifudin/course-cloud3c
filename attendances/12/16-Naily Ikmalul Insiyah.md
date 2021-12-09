Rangkuman Pertemuan 12
- CI/CD adalah metode untuk sering mengirimkan aplikasi ke pelanggan dengan memperkenalkan otomatisasi ke dalam tahapan pengembangan aplikasi
- CI (Continuous integration) : pengintegrasian kode ke dalam repositori kode kemudian menjalankan pengujian secara otomatis, cepat, dan sering. Kamu dapat melakukan CI ini dengan menggunakan perintah  commit.
- CD (continous delivery atau continuous deployment) : praktik yang dilakukan setelah proses CI selesai dan seluruh kode berhasil terintegrasi, sehingga aplikasi bisa dibangun lalu dirilis secara otomatis.
- CI/CD Illustration : Continous Integration (build, test, merge), continous delivery (automatically release to repo), dan Continous deployment (automatically deploy to production)
- Manfaat dari CI/CD : Mendapat feedback lebih cepat, Dapat mendeteksi bug lebih cepat, dan Dapat mempercepat proses rilis
- Dua aspek penting harus dipertahankan untuk menjamin stabilitas basis kode. Aspek pertama adalah memastikan bahwa kode dikompilasi tanpa kesalahan. Aspek kedua adalah memastikan bahwa semua pengujian unit yang memvalidasi perilaku kode lulus, termasuk perubahan kode terbaru, dengan persentase yang sangat tinggi.
- GitHub-Hosted Runners adalah mesin yang mirip dengan agen yang dihosting di saluran Azure DevOps. Mereka didukung di Windows, Linux, dan macOS.
- Job adalah serangkaian langkah yang disiapkan untuk dijalankan dalam satu pelari. Sebuah pekerjaan dapat terdiri dari satu atau lebih tindakan.
- Self-Hosted Runner berguna saat Anda memiliki konfigurasi perangkat keras khusus atau persyaratan perangkat lunak untuk membangun aplikasi atau menjalankan pekerjaan Anda.
