# Pertemuan 10 | Docker

## Docker

Docker dimulai sebagai project internal oleh dotCloud, pada tahun 2013 menjadi sebuah project opensource. Untuk meningkatkan waktu start up, mereka menggunakan container dan docker. Peluncuran pertama pada bulan Juni 2014 yang telah dievaluasi lebih dari 10000 developer dan lebih dari 2,75 juta pengguna

Docker adalah sebuah container management system yang membantu megelola container lebih mudah dan universal. dan juga memmungkinkan untuk membuat container pada viertual environment Mac/Windows. Perimntah atau operasi yang dilakukan pada container yang dijalankan di local, akan sama seperti yang berjalan di production.

Keuntungan Docker : 
  - Portabilitas
  - Quick deployment/teardown
  - Manging infrastructure-like code
  - Open source
  - Konsistensi
 
> Arsitektur Docker

- Docker Container : VM atau Guest Operating System
- Docker Client	   : Kumpulan command-line untuk mengoperasikan docker container
- Docker Daemon    : aplikasi yang berjalan di host machine
- Docker engine    : gabungan ketiga diatas
- Docker image	   : template yang digunakan untuk membuat container
- Docker registry  : tempat yang digunakan untuk menyimpan docker image
- Docker compose   : sebuah cara yang dapat digunakan untuk mendefinisikan dan menjalankan lebih dari satu container
	
