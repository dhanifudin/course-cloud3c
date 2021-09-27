Rangkuman Pertemuan 4 Cloud Computing

TI3C-19-Rifkie Nurdian AdiNugroho
Tanggal 20-09-2021

Pada pertemuan kali ini akan membahas setting web server yang memiliki banyak jenisnya. Apache tidak disarankan karena terlalu kompleks dan belum tentu diperlukan.

-Menjelaskan beberapa komponen networking.
-Memberitahu bahwa di cloud bisa membuat subnetting.
-Menjelaskan tentang penulisan ID yang benar.
-Dilanjut dengan membahas VCN
-Kemudian membahas banyak mengenai perbedaan NGINX dan Apache dengan kesimpulan bahwa NGINX jauh lebih direkomendasikan,Salah satu alasan lebih memilih NGINX karena lebih difokuskan pada pemrograman
Sebagai contoh:(Jika ada Aplikasi port 9000 dan kita akan mengakses dari yang port 80. Maka jika satu lokasi, akses tidak perlu dibuka, jika berbeda vm maka harus dibuka).

-Request Proxy -> contoh: ada aplikasi.com(:80) yang ingin mengakses phpmyadmin(:8080), maka perlu ditambahi menjadi db.aplikasi.com. (domain db tersebut akan me-request pass ke port 8080).
-Untuk memanajemen layanan kita bisa menggunakan perintah "sudo systemctl"
-Di oracle linux cmd harus dibuka (sudo firewall-cmd)
-Lalu menjelaskan bahwa 1 vm bisa digunakan untuk beberapa web server dengan catatan port tidak boleh sama (tapi tidak direkomendasikan)
-Lalu percobaan untuk jobsheet 4 akan tetapi saat ini jaringan di rumah saya terkendala karena indhome yang bermasalah jadi saya untuk saat ini tidak bisa berbuat banyak selain menunggu jaringan kembali pulih dan lancar
