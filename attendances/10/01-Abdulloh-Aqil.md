Rangkuman Cloud Computing Pertemuan 10

Pada pertemuan kali ini yang menjadi pembahasan utama yakni docker. Docker adalah aplikasi untuk menyatukan berbagai file software dan pendukungnya 
dalam sebuah wadah (container) agar memudahkan proses pengembangan software.

Adapun pembahasan lainnya yakni :
- Untuk sisi lain dari docker bisa membungkus semua komponen jadi satu menggunakan container
- Docker memudahkan proses pemindahan server
- Untuk instalasi di windows dan macs jauh lebih kompleks dibandingkan linux
- Pada VM virtualisasi penuh berbeda dengan docker yakni tidak ada hubungan dengan OCI dan lain sebagainya. dan untuk hal lain berjalan diatas kendali
- Beberapa keuntungan:
	portabilitas: bisa pindah sesuai keinginan selama docker masih berjalan, jadi tidak perlu config deploymen dan lainnya
	quick deployment/teardown
	Managing infrastructure-like code
	open source : masing masing server mendapatkan aplikasi yang sama
	consitency
- Virtualisasi ada beberapa oper source yang sering digunakan yakni:
	- Berbasis hypervisor
		Oracle Virtualbox
		VMWare
		KVM
		Microsoft Hyper-V
	- Berbasis container
		OpenVZ
		LXC
- Docker adalah sebuah command line program
- Docker bukan bahasa pemrograman. merupakan sebuah package yang dijalankan dan akan menjadi sebuah aplikasi
- Arsitekture docker, ketika kita install docker maka akan terinstall 2 server yakni docker client dan docker daemon
- Semua aktifitas akan dijalankan di docker daemon seperti container dan images
- Setiap menjalankan docker run maka akan membuat container baru
- Sedangkan di client berisi proses (build, pull, dan run)
- Docker memiliki beberapa istilah
	docker container : virtual machine atau guest operating system
	docker client : kumpulan perintah command line untuk mengoperasikan docker container
	docker daemon : ketika menjalankan perintah maka akan diproses disini
	docker engine : gabungan aplikasi yang menjalankan docker container, docker client, dan docker daemon. 
	docker image : sebuah template yang digunakan untuk membuat container
	docker registry : tempat untuk distribusi ke server lain
	docker compose : berisi beberoa definisi/perintah yang dijalankan jadi satu kesatuan 
- Adapun beberapa pertintah pada docker
	docker run
	docker build
	docker images
	docker ps
	docker rm
	docker rmi
	docker commit
	docker push
	docker pull
- Dan ada dockerfile berisi beberapa kumpulan perintah
- Adapun beberapa perintahnya yaitu :
	FROM
	MAINTAINER
	LABEL
	ADD/COPY
	CMD
	ENTRYPOINT
- Tambahan tugas : membuat akun di docker hub
- Penjelasan mengenai jobsheet docker
