Rangkuman Pertemuan 11 CLoud Computing

Pada pertemuan kali ini yang menjadi pembahasan utama yakni docker lanjutan.
Adapun isi pembahasannya sebagai berikut :
- Tipe docker network ada 3 yakni bridge, host dan none
- Docker network bridge : jenis network bawaan dari Docker
- Docker network host : meletakkan container di dalam stack hostnya network.
- Docker network none : bertujuan untuk tidak mengkonfigurasi networking.
- Perintah networking 
- untuk perintahnya hampir sama dengan docker image, docker network kemudian ditambahkan beberapa parameter setelah perintah dasar.
- Expose dan mapping  
- Di docker expose digunakan sebagai jalan masuk atau komunikasi dengan container
- Persistent storage (volume): bertujuan agar data pada container tetap terjaga walaupun container telah dihapus, dapat berbagi data antara container yang lain ataupun dengan host docker.
- Untuk perintah docker volume hampir sama seperti di networking hanya menambahkan 'volume' kemuadian menambahkan perintahnya
- Docker volume driver : Sama halnya dengan network yang memiliki driver, volume juga memiliki jenis-jenis volume agar mampu terintegrasi dengan jenis penyimpanan yang lain.
- Docker compose : sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.
- Perintah dasar docker compose sama halnya seperti perintah network dan volume.
- Masuk ke pembahasan jobsheet
