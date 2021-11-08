# Pertemuan 11 | Docker 2

### Docker ada 3
  - Docker Network
  - Docker Volume
  - Docker Compose


### Docker Network
- Brigde

  Jenis network bawaan dari Docker. Ketika Docker service daemon berjalan, akan melakukan konfigurasi sebuah virtual bridge disebut dengan docker0. Jika tidak menyebutkan spesifik network ketika di run, maka otomatis daemon terhubung ke container menggunakan bridge. Masing-masing container yang dibuat akan dialokasikan ke veth dan dipetakan eth0

- Host

	Untuk meletakkan container di dalam stack hostnya network. Semua UI jaraingan yang telah didefinisikan dapat diakses melalui container. ketika menggunakan host network akan secepat jaringan normal karena tidak ada menggunakan bridge.
	
- None

	Untuk tidak mengkonfigurasi networking. Tidak ada driver yang digunakan pada jenis ini.

### Docker Volume

Volume adalah mekanisme untuk menyimpan data yang dihasilkan dan digunakan oleh container Docker. Jika mount dan bind bergantung pada struktur direktori dan OS dari host, maka volume sepenuhnya dikelola oleh Docker


### Docker Compose

Sebuah tool untuk mendefiniskan launching, dan mengelola service, service dan sistemnya didefinisikan dalam file YAML dan untuk mengelola menggunakan perintah docker-compose. Beberapa hal yang bisa dilakukan menggunakan docker compose adalah build docker image, menjalankan aplikasi container sebagai service, menjalankan full system dari service, mengelola secara individu service pada sebuah sistem, melakukan scaling up atau down, dan melihat log dari kumpulan container yang berjalan sebagai service.
