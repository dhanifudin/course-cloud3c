# Pertemuan 10
## Docker
Docker adalah sebuah command-line program, sebuah background daemon dan serangkaian remote service dengan mengambil pendekatan logistic untuk memecahkan permasalahan umum perangkat lunak dan menyederhanakan pengalaman kita dalam installing, running, publishing, dan menghapus perangkat lunak. Docker mengemas aplikasi dengan semua dependensi yang dibutuhkannya ke dalam sebuah standar untuk deployment, membungkus semuanya menjadi sistem file lengkap yang berisi semuanya kebutuhan aplikasi dan yang menjalankan mesin virtual itu sendiri. Proses packaging tersebut ke dalam sebuah image lengkap dan menjamin bahwa itu portable, ketika menjalankan dilakukan dengan cara yang sama, tidak memperdulikan environment deployment yang digunakan.

### Containerization
Docker menggunakan Container Linux. Linux container adalah sebuah virtualisasi sistem operasi yang dapat digunakan untuk menjalankan beberapa sistem Linux yang terisolasi pada satu host.

### Keuntungan Container
- Portability
- Quick deployment/teardown
- Managing infrastructure-like code
- Open source
- Consistency 

### Istilah pada Docker
- Docker container: virtual machine atau guest operating system, aplikasi kita berjalan di dalam docker container.
- Docker client: kumpulan perintah command line untuk mengoperasikan docker container, misalkan membuat container, start/stop container, menghapus, dan sebagainya.
- Docker daemon: aplikasi yang berjalan di host machine. Docker server berjalan di background(sebagai daemon) dan menunggu perintah dari docker client.
- Docker engine: gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon. 
- Docker image: template yang digunakan untuk membuat container. Misalkan image ubuntu, CentOS, dan sebagainya. 
- Docker registry: tempat yang digunakan untuk menyimpan docker image. Docker hub adalah sebuah registry public yang semua orang dapat menggunakan. Secara default docker akan mencari image pada docker hub.
- Docker compose: sebuah cara yang dapat digunakan untuk mendefinisikan dan menjalankan lebih dari satu container.

### Perintah dasar docker
- docker run: sebuah perintah untuk menjalankan container, ketika baru dijalankan pertama kali maka akan mencari/download image.
- docker build: digunakan untuk membuat sebuah docker image dari sebuah Dockerfile. Perintah ini secara default akan mencari di direktori saat ini tetapi dapat juga menggunakan spesifik PATH atau URL.
- docker images: perintah ini akan menampilkan semua image yang ada, informasi seperti tag dan ukuran akan ditampilkan.
- docker ps: akan menampilkan daftar container
- docker rm: perintah untuk menghapus satu atau lebih dari satu container.
- docker rmi: perintah untuk menghapus sebuah image atau lebih dari satu image.
- docker commit: digunakan untuk melakukan perubahan atau pengaturan file ke dalam image yang baru. 
- docker push: perintah untuk mengupload image ke server, docker hub.
- docker pull: perintah untuk mengambil/download image dari server, docker hub.

### Dockerfile
Dockerfile adalah sebuah teks dokumen yang berisi semua perintah yang dapat dipanggil pengguna pada command line untuk membuat sebuah image.

### Perintah Dockerfile
- FROM: sebuah perintah inisialisasi untuk mengambil image dari repository yang sudah ada.
- MAINTENER: menginformasikan siapa yang melakukan maintenance pada image yang dibuat.
- LABEL: menambahkan tambahan informasi terhadap image.
- ADD/COPY: digunakan untuk menambahkan file pada lokasi folder tertentu
- CMD: perintah untuk menjalankan command tertentu
- ENTRYPOINT: menjalankan script tertentu ketika docker booting