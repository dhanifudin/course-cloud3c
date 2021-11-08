<h1>Week 11 - Docker (2) </h1>

Bismillah :)

Pokok bahasan minggu ke 11 adalah mengenai materi lanjutan : Docker <br>

Outline : Docker Network, Volume, Compose<br>

Terdapat 3 Tipe Docker Network, antara lain :
1. Bridge -> Docker Network Brigde : docker run -net=<Network>, maka secara otomatis Docker Daemon akan terhubung kedalam container menggunakan bridge network.
  Container yang dibuat akan dialokasikan virtual Ethernet dan dipetakan sebagai eth0 pada container.
  Pada Container Interface eth0 akan diberi sebuah IP Address dari rentang alamat bridge<br>
2. Host -> Meletakkan container di dalam stack host network. menjalankan container menggunakan parameter -net=host sehingga container akan menggunakan network host.<br>
3. None -> None bertujuan untuk tidak mengkonfigurasi networking. Perintah yang digunakan dengan menambahkan parameter –net=none.<br>
  
Perintah Dasar Docker : docker network
- Docker Network ls
- Docker Network create
- Docker Network rm
- Docker Network connect
- Docker Network disconnect
- Docker Network inspect
  
Expose dan Mapping port :
  Expose port -> container aplikasi kita akan listen pada port yang ter-expose.<br>
  
  Expose port dapat dilakukan menggunakan 2 cara yaitu
  - menggunakan Dockerfile dengan perintah EXPOSE<br>
  - menggunakan perintah docker run –expose.
  
Persistent Storage (Volume) :
  bertujuan agar data pada container tetap terjaga walaupun container telah dihapus.
  
Perintah Docker Volume :
  - Docker volume create
  - Docker volume inspect
  - Docker volume ls
  - Docker volume rm
  - Docker volume prune
  
Docker Volume Driver
  - Docker volume driver for Azure file storage.
  - IPFS(InterPlanetary File System)
  - Keywhiz
  
Docker Compose :
  sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service 
  adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.<br>
  
  Hal yang dapat dilakukan :
  - Build Docker Image
  - Menjalankan aplikasi container sebagai Service
  - dsb.

  Perintah dasar :
  - Docker-compose up
  - Docker-compose down
  - Docker-compose logs
  - Docker-compose ps

Alhamdulillah :)
