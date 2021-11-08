Rangkuman pertemuan 10
Docker
- Docker adalah aplikasi untuk menyatukan berbagai file software dan pendukungnya dalam sebuah wadah (container) agar memudahkan proses pengembangan software.
- Docker bisa membungkus semua komponen jadi satu menggunakan container
- Instalasi Docker di windows dan macs jauh lebih kompleks dibandingkan linux
- Virtualisasi yang paling banyak dipakai yaitu vm box, vm ware, open source
- Membantu kita menyelesaikan issue yang ada pada image server
- Istilah pada docker : 1. Container (virtual machine), 2. Docker client, Docker daemond (aplikasi yang jalan pada server) 4. Docker engine 5. Docker image (template membuat container) 5. Docker registry ( menyimpan docker image) 6. Docker compose (mendefinisikan dan menjalakan lebih dari 1 container) 
- Beberapa istilah pada Docker: 1. docker run 2. docker build 3. docker images 4. docker ps 5. docker rm (menghaopus container) 6. docker rmi (menghapus image)  7. docker commit 8. docker push 9. docker pull
- Dockerfile adalah sebuah teks dokumen yang berisi semua perintah yang dapat dipanggil pengguna pada command line untuk membuat sebuah image.
- beberapa perintahnya dockerfile: FROM (inisilisasi mengambil image), MAINTAINER (menginformasi siapa yang melakukan), LABEL (menambahkan informasi pada image), ADD/COPY, CMD, ENTRYPOINT
- Pada Docker tidak perlu menulis sesuatuketika melakukan install
