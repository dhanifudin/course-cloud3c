# Pertemuan 11
## Docker 2
### Tipe Docker Network 
- Bridge, Merupakan jenis network bawaan dari Docker
- Host, Docker network jenis ini yaitu meletakkan container di dalam stack hostnya network.
- None, Network None bertujuan untuk tidak mengkonfigurasi networking.

### Perintah Networking Docker
- Perintah yang dasar digunakan adalah docker network kemudian ditambahkan beberapa parameter setelah perintah dasar.
- Docker network ls; untuk mengetahui network yang tersedia pada host docker
- Docker network create; untuk membuat sebuah network pada host docker.
- Docker network rm; untuk menghapus network yang terdapat pada host docker.
- Docker network connect; untuk menghubungkan container pada spesifik network
- Docker network disconnect; memutus network pada container
- Docker network inspect; untuk mengetahui secara terperinci dari sebuah network, misalkan ip address dan informasi lain

### Expose dan mapping port
Expose port adalah container aplikasi kita akan listen pada port yang ter-expose. Sebagai contoh, aplikasi server Tomcat akan listen pada port default yaitu 8080. Expose port dapat dilakukan menggunakan 2 cara yaitu salah satunya adalah menggunakan Dockerfile dengan perintah EXPOSE dan menggunakan perintah docker run –expose.

### Persistent Storage (Volume)
Persistent storage pada docker bertujuan agar data pada container tetap terjaga walaupun container telah dihapus. Persitence storage juga dapat berbagi data antara container yang lain ataupun dengan host docker.

### Perintah Docker Volume
- Docker volume create; untuk membuat sebuah volume
- Docker volume inspect; menampilkan detail informasi pada satu atau lebih dari satu volume.
- Docker volume ls; menampilkan daftar volume.
- Docker volume rm; menghapus satu atau lebih volume yang terdapat pada docker host.
- Docker volume prune; menghapus semua volume yang tidak digunakan, semua volume yang sudah tidak digunakan oleh container akan dihapus.

### Docker Volume Driver
Volume juga memiliki jenis-jenis volume agar mampu terintegrasi dengan jenis penyimpanan yang lain sebagai berikut : 
- Docker volume driver for Azure file storage, sebuah driver docker volume yang digunakan Azure file storage untuk mount file yang dishare pada cloud ke Docker container sebagai volume.
- IPFS(InterPlanetary File System), IPFS adalah sebuah sistem storage yang sangat menarik dan menjanjikan, memungkinkan dalam mendistribusikan high volume data dengan efisiensi yang tinggi.
- Keywhiz, sebuah sistem untuk mengelola dan mendistribusikan data yang bersifat rahasia, seperti TLS certificate/keys, GPG keys, API tokens, dan database credential. 

### Docker Compose
Docker compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.

### Perintah Dasar Docker Compose
- Docker-compose up; membuat dan menjalankan container, ketika ditambakan parameter –d maka container akan berjalan sebagai daemon.
- Docker-compose down; menghentikan dan menghapus semua resource
- Docker-compose logs; melihat logging pada container
- Docker-compose ps; melihat container yang sedang berjalan
