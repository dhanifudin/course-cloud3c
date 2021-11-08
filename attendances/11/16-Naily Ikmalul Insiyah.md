Rangkuman pertemuan 11

Docker Network Bridge
- Tipe Docker Network: bridge, host dan none
- Container interface pada model lama kodenya 0, untuk yang baru kodenya macam-macam
- untuk menghubungkan container ke internet menggunakan bridge tanpa menggunkan setting tambahan
- Perintah dasar networking docker diawali dengan kalimat " docker network" kemudian dilajutkan dengan parameter, seperti is, create, rm, connect, disconnect dan inspect
- Expose port adalah container aplikasi kita akan listen pada port yang ter-expose. 
- Expose digunakan sebagai jalan masuk/komunikasi dengan containaer
- Container membagi networknya dari host yang langsung ter-expose ke dunia luar.
- menggunakan perintah –net=host, container kita akan dapat diakses melalui hostnya IP address
- Kita tidak bisa mapping di port yang sama
- Ketika menjalankan container datanya tidak akan tersimpan, maka solusinya dengan mapping volume (Persistent storage)
- Perintah menjalankan volum -> 'docker volume' + parameter
- Docker compose adalah sebuah tool untuk mendefiniskan, launching, dan mengelola service, dimana sebuah service adalah didefinisikan sebagai satu atau lebih dari sebuah docker container.
- Docker Compose adalah alat yang memungkinkan untuk menjalankan lingkungan aplikasi multikontainer berdasarkan definisi yang ditetapkan dalam berkas YAML.
