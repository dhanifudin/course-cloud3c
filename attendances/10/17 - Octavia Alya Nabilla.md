Rangkuman Minggu ke 10

TI3C - 17 - Octavia Alya Nabilla

Pada minggu ini menjelaskan materi tentang Docker.

Dalam Containerization, Docker sendiri adalah sebuah container management system yang membantu mengelola container lebih mudah dan universal.
Yang mana memungkinkan membuat container pada virtual environment Mac/Windows di laptop dan menjalankan perintah atau mengoperasikannya. Sehingga perintah atau operasi yang dilakukan pada container yang dijalankan di local, akan sama seperti yang berjalan di production.
Setiap membuat sebuah container, tidak membutuhan system operasi secara penuh. Karena Docker mengandalkan penggunaan kernel Linux Kernel. Docker menghasilkan sebuah ukuran image yang kecil, compact, dan ringan untuk didistribusikan karena tidak terdapat kernel bahkan sistem operasi

Docker adalah sebuah command-line program, sebuah background daemon dan serangkaian remote service dengan mengambil pendekatan logistic untuk memecahkan permasalahan umum perangkat lunak dan menyederhanakan pengalaman kita dalam installing, running, publishing, dan menghapus perangkat lunak.
Docker adalah sebuah tool yang membantu kita dalam menyelesaikan permasalah umum seperti installing, removing, upgrading, distributing, trustring, dan menggelola software.

Istilah yang ada dalam docker, yaitu:
1. Docker container: virtual machine atau guest operating system, aplikasi kita berjalan di dalam docker container.
2. Docker client: kumpulan perintah command line untuk mengoperasikan docker container, misalkan membuat container, start/stop container, menghapus, dan sebagainya.
3. Docker daemon: aplikasi yang berjalan di host machine. Docker server berjalan di background(sebagai daemon) dan menunggu perintah dari docker client.
4. Docker engine: gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon. 
5. Docker image: template yang digunakan untuk membuat container. Misalkan image ubuntu, CentOS, dan sebagainya. 
6. Docker registry: tempat yang digunakan untuk menyimpan docker image. Docker hub adalah sebuah registry public yang semua orang dapat menggunakan. Secara default docker akan mencari image pada docker hub.
7. Docker compose: sebuah cara yang dapat digunakan untuk mendefinisikan dan menjalankan lebih dari satu container.

Perintah dasar pada Docker, yaitu:
1. docker run: sebuah perintah untuk menjalankan container, ketika baru dijalankan pertama kali maka akan mencari/download image.
2. docker build: digunakan untuk membuat sebuah docker image dari sebuah Dockerfile. Perintah ini secara default akan mencari di direktori saat ini tetapi dapat juga menggunakan spesifik PATH atau URL.
3. docker images: perintah ini akan menampilkan semua image yang ada, informasi seperti tag dan ukuran akan ditampilkan.
4. docker ps: akan menampilkan daftar container
5. docker rm: perintah untuk menghapus satu atau lebih dari satu container.
6. docker rmi: perintah untuk menghapus sebuah image atau lebih dari satu image.
7. docker commit: digunakan untuk melakukan perubahan atau pengaturan file ke dalam image yang baru. 
8. docker push: perintah untuk mengupload image ke server, docker hub.
9. docker pull: perintah untuk mengambil/download image dari server, docker hub.

Dockerfile adalah sebuah teks dokumen yang berisi semua perintah yang dapat dipanggil pengguna pada command line untuk membuat sebuah image.
Dengan menggunakan Dockerfile kita tidak perlu mengetik perintah satu persatu ketika akan membuat image. Karena Docker dapat membuat sebuah image secara automatis dengan membaca perintah dari Dockerfile.

Perintah dalam dockerfile, yaitu:
1. FROM: sebuah perintah inisialisasi untuk mengambil image dari repository yang sudah ada.
2. MAINTENER: menginformasikan siapa yang melakukan maintenance pada image yang dibuat.
3. LABEL: menambahkan tambahan informasi terhadap image.
4. ADD/COPY: digunakan untuk menambahkan file pada lokasi folder tertentu
5. CMD: perintah untuk menjalankan command tertentu
6. ENTRYPOINT: menjalankan script tertentu ketika docker booting

