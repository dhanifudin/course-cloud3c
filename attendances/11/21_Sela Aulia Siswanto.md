<h1>Rangkuman Pertemuan 11</h1>

1. Jenis-Jenis Docker Network
Docker memiliki beberapa jenis network yaitu seperti berikut ini:
    - Docker Network Bridge merupakan jenis network bawaan docker
    - Docker Network Host merupakan Docker network jenis ini yaitu meletakkan container di dalam stack hostnya network. Kita butuh berhati-hati ketik menggunkaan network host karena berbahaya.
    - Docker Network None bertujuan untuk tidak mengkonfigurasi networking.Tidak ada driver yang digunakan pada Network jenis ini.Ketika kita tidak menginginkan container untuk dapat diakses. Perintah yang digunakan dengan 
    menambahkan parameter –net=none.

2. Perintah Networking Docker
Perintah Networking dasar yang digunakan adalah docker network kemudian ditambahkan beberapa perintah parameter setelah perintah dasar. Contohnya adalah:
    - Docker Network ls
    - Docker Network create
    - Docker Network rm
    - Docker Network connect
    - Docker Network disconnect
    - Docker Network inspect

3. Expose dan Mapping Port
Expose adalah container aplikasi kita akan listen pada port yang ter-expose. Sebagai contoh, aplikasi server Tomcat akan listen pada port default yaitu 8080. Sedangkan mapping port dilakuan dengan menambahkan parameter –p ketika menjalankan container. 

4. Persistent Storage (Volume)
Persistent storage pada docker bertujuan agar data pada container tetap terjaga walaupun container telah dihapus. Dapat berbagi data antara container yang lain ataupun dengan host 
docker.

5. Jenis-jenis Docker Volume Driver
    - Docker volume driver for Azure file storage; sebuah driver docker volume yang digunakan Azure file storage untuk mount file yang dishare pada cloud ke Docker container sebagai 
    volume.
    - IPFS(InterPlanetary File System); sebuah plugin volume open source yang mengizinkan 
    menggunakan sebuah IPFS filesystem sebagai sebuah volume. 
    - Keywhiz adalah sebuah sistem untuk mengelola dan 
    mendistribusikan data yang bersifat rahasia, seperti TLS certificate/keys, GPG keys, API 
    tokens, dan database credential. 

6. Docker Compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.