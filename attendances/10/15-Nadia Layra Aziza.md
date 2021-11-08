# Pertemuan 10

## Rangkuman Docker

Docker mengemas aplikasi dengan semua dependensi yang dibutuhkannya ke dalam sebuah standar untuk deployment menjadi sistem file lengkap yang berisi semua kebutuhan aplikasi dan yang menjalankan mesin virtual itu sendiri.

Docker menggunakan Container Linux. Linux container adalah sebuah virtualisasi sistem operasi yang dapat digunakan untuk menjalankan beberapa sistem Linux yang terisolasi pada satu host.

Docker adalah sebuah container management system yang membantu mengelola container lebih mudah dan universal. Fungsi Docker adalah untuk memindahkan suatu PC dalam bentuk container. Setiap membuat sebuah container, tidak membutuhan system operasi secara penuh Docker mengandalkan penggunaan kernel Linux Kernel. 

Adapun keuntungan dari container diantaranya :
- Portability
- Quick deployment/teardown
- Managing infrastructure-like code
- Open source
- Consistency 

Produk Virtualisasi ada 2 macam :
1. Berbasis hypervisor
- Oracle Virtualbox => yang paling umum digunakan
- VMWare
- KVM
- Microsoft Hyper-V
2. Berbasis container
- OpenVZ
- LXC

Docker adalah sebuah tool yang membantu kita dalam menyelesaikan permasalah umum seperti installing, removing, upgrading, distributing, trustring, dan menggelola software.

Istilah pada Docker :
- Docker container: virtual machine/guest operating system, tempat berjalannya aplikasi
- Docker client: kumpulan perintah command line untuk mengoperasikan docker container
- Docker daemon: aplikasi yang berjalan di host machine
- Docker engine: gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon
- Docker image: template yang digunakan untuk membuat container
- Docker registry: tempat untuk menyimpan docker image
- Docker compose: cara untuk mendefinisikan dan menjalankan lebih dari satu container.

Perintah dasar docker :
- docker run: menjalankan container
- docker build: membuat sebuah docker image dari sebuah Dockerfile
- docker images: menampilkan semua image yang ada
- docker ps: menampilkan daftar container
- docker rm: menghapus satu atau lebih dari satu container
- docker rmi: menghapus sebuah image atau lebih dari satu image
- docker commit: melakukan perubahan atau pengaturan file ke dalam image yang baru
- docker push: mengupload image ke server
- docker pull: mengambil/download image dari server, docker hub.

Dockerfile adalah sebuah teks dokumen yang berisi semua perintah yang dapat dipanggil pengguna pada command line untuk membuat sebuah image.

Perintah dalam Dockerfile :
- FROM: perintah inisialisasi untuk mengambil image dari repository yang sudah ada
- MAINTENER: yang melakukan maintenance pada image yang dibuat
- LABEL: menambahkan tambahan informasi terhadap image
- ADD/COPY: menambahkan file pada lokasi folder tertentu
- CMD: menjalankan command tertentu
- ENTRYPOINT: menjalankan script tertentu ketika docker booting


