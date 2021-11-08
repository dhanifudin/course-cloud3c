# RANGKUMAN PERTEMUAN 11

## DOCKER NETWORKING

Pada pertemuan 11 ini membahas lebih lanjut tentang Docker. Pemabahasan tersebut lebih banyak seputar Docker Networking, dimana meliputi sebagai berikut ini:

1. Docker Network Bridge
Docker network bridge ini adalah default network. Docker menyambungkan container ke network ini secara default, kecuali memilih opsi driver yang berbeda ketika menjalankan docker run --network=<NETWORK>

2. Docker Network None
Docker network none ini adalah container yang tidak memiliki network interface

3. Docker Network Host
Docker network host ini adalah container yang berada pada jaringan host. Tidak ada batasan antara container dan host. Port yang ada dibuka pada host bisa diakses langsung oleh container, begitu juga sebaliknya.

Dari jenis-jenis networking diatas, juga terdapat beberapa perintah dasar yang digunakan. Berikut ini adalah contoh perintah dasar nya:
- Docker network ls -> untuk mengetahui network yang tersedia pada host docker
- Docker network create -> untuk membuat sebuah network pada host docker.
- Docker network connect -> untuk menghubungkan container pada spesifik network
- Docker network disconnect -> memutus network pada container
- dan lain sebagainya.
