<h1>Rangkuman Minggu-10</h1>
<h2>Docker<h2>

Docker adalah sebuah container management system yang membantu mengelolah caontainer lebih mudah dan universal. Mengandalkan penggunaan kernel Linux Kernel. Daocker sendiri menghasilkan sebuah ukuran image yang kecil, compact, dan ringan untuk didistribusikan karena tidak terdapat kernel bahkan sistem operasi. 

Keuntungan doker adalah seperti berikut ini:
- Portability
- Quick deployment/teardown
- Managing infrastucture-like code
- Open source
- Consistency

Arsitektur Docker terbagi menjadi 3 yaitu:
- Docker container: virtual machine atau guest operating system, aplikasi kita berjalan di dalam docker container.
- Docker client: kumpulan perintah command line untuk mengoperasikan docker container, misalkan membuat container start/stop container, menghapus, dan sebagainya.
- Docker daemon: aplikasi yang berjalan di host machine. Docker server berjalan dibackground(sebagai daemon) dan menunggu perintah dari docker client. 

Sedangkan Docker engine adalah gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon, yang terdiri dari:
- Docker image: template yang digunakan untuk membuat container.
- Docker registry: tempat yang digunakan untuk menyimpan docker image.
- Docker compose: sebuah cara yang dapat digunakan untuk mendefinisikan dan 
menjalankan lebih dari satu container.
