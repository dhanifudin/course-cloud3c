# RANGKUMAN PERTEMUAN 10

## DOCKER

Pada pertemuan 10 ini membahas tentang Docker.
Docker adalah aplikasi untuk menyatukan berbagai file software dan pendukungnya dalam sebuah wadah (container) agar memudahkan proses pengembangan software. Mesin Docker diinstal pada setiap server tempat Anda ingin menjalankan kontainer dan menyediakan sekumpulan perintah sederhana yang dapat digunakan untuk membuat, memulai, atau menghentikan kontainer.
Selain itu Proses packaging ke dalam sebuah image lengkap dan menjamin bahwa itu portable, ketika menjalankan dilakukan dengan cara yang sama, tidak memperdulikan environment deployment yang digunakan.

Didalam Docker terdapat yang namanya container. Container Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.

Perbedaan Virtualisasi vs Container:
- Container management system yang membantu mengelola container lebih mudah dan universal.
- Membuat container pada virtual environment Mac/Windows di laptop dan menjalankan perintah atau mengoperasikannya.
- Perintah atau operasi yang dilakukan pada container yang dijalankan di local, akan sama seperti yang berjalan di production.


Dibawah in iadalah arsitektur dari Docker itu sendiri. Yaitu:

- Client
- Docker Host
- Registry
