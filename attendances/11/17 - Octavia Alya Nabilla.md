Rangkuman Minggu ke 11

TI3C - 17 - Octavia Alya Nabilla

Docker Network Bridge merupakan jenis network bawaan dari Docker Ketika Docker service daemon berjalan, akan melakukan konfigurasi sebuah virtual bridge disebut dengan docker0. Jika kita tidak menyebutkan spesifik network yang digunakan, docker run –net=<Network> maka Docker daemon akan terhubung ke container menggunakan bridge network.Dalam container interface eth0 akan diberi sebuah IP address dari rentang alamat bridge. Docker akan mencari sebuah IP address yang tersedia pada bridge dan akan mengkonfigurasi interface eth0 container dengan IP address.

Docker Network Host, Docker network jenis ini yaitu meletakkan container di dalam stack hostnya network. Semua antarmuka jaringan yang telah didefinisikan dapat diakses melalui container. Ketika menggunakan host network akan secepat jaringan normal karena tidak ada menggunakan bridge ataupun translation.

Docker Network None, Network None bertujuan untuk tidak mengkonfigurasi networking.
Tidak ada driver yang digunakan pada Network jenis ini.

Expose dan Mapping Port
1. Expose port adalah container aplikasi kita akan listen pada port yang ter-expose. Sebagai contoh, aplikasi server Tomcat akan listen pada port default yaitu 8080.
2. Expose port dapat dilakukan menggunakan 2 cara yaitu salah satunya adalah menggunakan Dockerfile dengan perintah EXPOSE dan menggunakan perintah docker run –expose.
3. Ketika container berbeda host atau network agar tetap bisa berkomunikasi menggunakan maping port.
4. Mapping port dilakuan dengan menambahkan parameter –p ketika menjalankan container. 

Persistance Storage pada docker bertujuan agar data pada container tetap terjaga walaupun container telah dihapus. Persitence storage juga dapat berbagi data antara container yang lain ataupun dengan host docker.

Docker Volume Driver : 
Volume driver juga memiliki jenis-jenis volume agar mampu terintegrasi dengan jenis penyimpanan yang lain.
1. Docker volume driver for Azure file storage; sebuah driver docker volume yang digunakan Azure file storage untuk mount file yang dishare pada cloud ke Docker container sebagai volume.
2. IPFS(InterPlanetary File System); sebuah plugin volume open source yang mengizinkan menggunakan sebuah IPFS filesystem sebagai sebuah volume. IPFS adalah sebuah sistem storage yang sangat menarik dan menjanjikan, memungkinkan dalam mendistribusikan high volume data dengan efisiensi yang tinggi.
3. Keywhiz; kita dapat menggunakan drive ini untuk membuat container kita berkomunikasi secara remote pada server Keywhiz. Keywhiz adalah sebuah sistem untuk mengelola dan mendistribusikan data yang bersifat rahasia, seperti TLS certificate/keys, GPG keys, API tokens, dan database credential.

Docker Compose 
Docker compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.
Beberapa hal yang bisa dilakukan menggunakan docker compose adalah build docker image, menjalankan aplikasi container sebagai service, menjalankan full system dari service, mengelola secara individu service pada sebuah sistem, melakukan scaling up atau down, dan melihat log dari kumpulan container yang berjalan sebagai service.

