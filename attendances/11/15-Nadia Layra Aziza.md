# Pertemuan 11

## Rangkuman Docker 2

## Tipe Docker Network
Ada 3 tipe docker network, diantaranya yaitu :
- Bridge => Menghubungkan docker daemon ke container dan digunakan ketika tidak menyebutkan spesifik network yang digunakan
- Host => Meletakkan container di dalam stack hostnya network dan digunakan ketika menjalankan container dengan parameter –net=host
- None => Digunakan ketika tidak menginginkan container untuk dapat diakses.

## Expose dan Mapping Port
Container bisa menerima koneksi yang datang dari container yang lain atau dari luar docker. Expose port adalah container aplikasi akan listen pada port yang ter-expose seprti port 80 atau 8080. Expose port dapat dilakukan oleh sebuah image. Semua container yang berjalan pada host yang sama dan network yang sama dapat berkomunikasi dengan Tomcat pada port 8080.

Expose port dapat dilakukan menggunakan 2 cara yaitu :
- Menggunakan Dockerfile dengan perintah EXPOSE 
- Menggunakan perintah docker run –expose

Maping port digunakan ketika container berbeda host atau network agar tetap bisa berkomunikasi. Cara penggunaannya dengan menambahkan parameter –p ketika menjalankan container.

## Persistent Storage (Volume)
Kegunaan Persistent Storage (Volume) :
- Agar data pada container tetap terjaga walaupun container telah dihapus
- Dapat berbagi data antara container yang lain ataupun dengan host docker

## Docker Volume Driver
Volume juga memiliki beberapa jenis agar mampu terintegrasi dengan jenis penyimpanan yang lain. Berikut beberapa jenis dari Volume diantaranya yaitu :
- Docker volume driver for Azure file storage => Digunakan Azure file storage untuk mount file yang dishare pada cloud ke Docker container sebagai volume.
- IPFS(InterPlanetary File System) => Plugin volume open source yang mengizinkan menggunakan sebuah IPFS filesystem sebagai sebuah volume. IPFS adalah sebuah sistem storage yang memungkinkan dalam mendistribusikan high volume data dengan efisiensi yang tinggi.
- Keywhiz => Untuk membuat container berkomunikasi secara remote pada server Keywhiz. Keywhiz adalah sistem untuk mengelola dan mendistribusikan data yang bersifat rahasia dengan lebih mudah dan lebih aman, seperti TLS certificate/keys, GPG keys, API tokens, dan database credential.

## Docker Compose
Docker compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service yang didefinisikan sebagai satu atau lebih dari sebuah docker container. Service dan sistem service didefinisikan di dalam file YAML dan mengelolanya menggunakan perintah command-line docker-compose. 
Berikut beberapa kegunaan Docker Compose diantaranya yaitu :
- Untuk build docker image
- Menjalankan aplikasi container sebagai service
- Menjalankan full system dari service 
- Mengelola secara individu service pada sebuah sistem
- Melakukan scaling up atau down
- Melihat log dari kumpulan container yang berjalan sebagai service
