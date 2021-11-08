# Rangkuman Pertemuan 10
Pada minggu ini membahas tentang Docker.
## Docker
Docker adalah aplikasi yang berguna untuk menggabungkan beberapa file software dalam sebuah wadah(container) agar mempermudah dalam proses pengembangan software.

## Keuntungan dari Docker
<li>Portability
<li>Quick deployment/teardown
<li>Managing infrastructure-like code
<li>Open source
<li>Consistency 

## Istilah yang terdapat pada docker antara lain:
<li>Docker container: virtual machine atau guest operating system, aplikasi kita berjalan di dalam docker container.
<li>Docker client: kumpulan perintah command line untuk mengoperasikan docker container.
<li>Docker daemon: aplikasi yang berjalan di host machine. Docker server berjalan di background(sebagai daemon) dan menunggu perintah dari docker client.
<li>Docker engine: gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon. 
<li>Docker image: template yang digunakan untuk membuat container. Misalkan image ubuntu, CentOS, dan sebagainya. 
<li>Docker registry: tempat yang digunakan untuk menyimpan docker image. Docker hub adalah sebuah registry public yang semua orang dapat menggunakan. Secara default docker akan mencari image pada docker hub.
<li>Docker compose: sebuah cara yang dapat digunakan untuk mendefinisikan dan menjalankan lebih dari satu container.
