# Rangkuman Pertemuan 11
Pada minggu ini membahas tentang melanjutkan materi sebelumnya yaitu tentang Docker2.
## Tipe Docker Network
Ada 3 tipe docker network, diantaranya yaitu :
<li>Bridge => Menghubungkan docker daemon ke container dan digunakan ketika tidak menyebutkan spesifik network yang digunakan
<li>Host => Meletakkan container di dalam stack hostnya network dan digunakan ketika menjalankan container dengan parameter –net=host
<li>None => Digunakan ketika tidak menginginkan container untuk dapat diakses.

## Expose dan mapping port
Skenario yang umum digunakan ketika kita menginginkan container menerima koneksi yang datang, salah satunya dari container yang lain atau dari luar docker.Expose port adalah container aplikasi kita akan listen pada port yang ter-expose. Sebagai contoh, aplikasi server Tomcat akan listen pada port default yaitu 8080.Semua container yang berjalan pada host yang sama dan network yang sama dapat berkomunikasi dengan Tomcat pada port 8080.
Expose port dapat dilakukan menggunakan 2 cara yaitu 
<li>Menggunakan Dockerfile dengan perintah EXPOSE 
<li>Menggunakan perintah docker run –expose.
Maping port digunakan ketika container berbeda host atau network agar tetap bisa berkomunikasi. Cara penggunaannya dengan menambahkan parameter –p ketika menjalankan container.

## Persistent Storage (Volume)
Persistent storage pada docker bertujuan agar data pada container tetap terjaga walaupun container telah dihapus.Persitence storage juga dapat berbagi data antara container yang lain ataupun dengan host docker.

## Docker Volume Driver
Beberapa jenis Volume Driver, Antara lain:
<li> Docker volume driver for Azure file storage digunakan Azure file storage untuk mount file yang dishare pada cloud ke Docker container sebagai volume.
<li> IPFS(InterPlanetary File System) yaitu sebuah plugin volume open source yang mengizinkan menggunakan sebuah IPFS filesystem sebagai sebuah volume.
<li> Keywhiz digunakan untuk mengelola dan mendistribusikan data yang bersifat rahasia, seperti TLS certificate/keys, GPG keys, API tokens, dan database credential. Selain meletakkan data di dalam file-file config atau meng-copy file-file tersebut, keywhiz membuat pengelolaaan akan lebih mudah dan lebih aman.

## Docker Compose
Docker compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.<br>
Fungsi dari Docker Compose adalah sebagai berikut:
<li>Build docker image
<li>Menjalankan aplikasi container sebagai service
<li>Menjalankan full system dari service
<li>Mengelola secara individu service pada sebuah sistem
<li>Melakukan scaling up atau down
<li>Melihat log dari kumpulan container yang berjalan sebagai service.
