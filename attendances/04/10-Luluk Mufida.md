Rangkuman Pertemuan 4 Cloud Computing

Pada pertemuan kali ini akan membahas setting web server yang memiliki banyak jenisnya. Apache tidak disarankan karena terlalu kompleks dan belum tentu diperlukan.

- Menjelaskan beberapa komponen networking.
- Mengulas kembali materi jaringan komputer di semester 3 serta mambahasa konsep dasar di dunia jaringan komputer yang dapat diaplikasikan
- Memberitahu bahwa di cloud bisa membuat subnetting.
- Menjelaskan tentang penulisan ID yang benar.
- Dilanjut dengan membahas VCN
- Kemudian membahas banyak mengenai perbedaan NGINX dan Apache dengan kesimpulan bahwa NGINX jauh lebih direkomendasikan
- Salah satu alasan lebih memilih NGINX karena lebih difokuskan pada pemrograman
- Sebagai contoh (Jika ada Aplikasi port 9000 dan kita akan mengakses dari yang port 80. Maka jika satu lokasi, akses tidak perlu dibuka, jika berbeda vm maka harus dibuka)
- Request Proxy -> misal ada aplikasi.com(:80) yang ingin mengakses phpmyadmin(:8080), maka perlu ditambahi menjadi db.aplikasi.com. (domain db tersebut request pass ke port 8080)
- Untuk memanajemen layanan kita bisa menggunakan perintah 'sudo systemctl'
- Di oracle linux cmd harus dibuka (sudo firewall-cmd)
- Lalu menjelaskan bahwa 1 vm bisa digunakan untuk beberapa web server dengan catatan port tidak boleh sama (tapi tidak direkomendasikan)
- Dan yang terakhir yakni demo Jobsheet 4 Computing Cloud.
