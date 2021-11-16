Rangkuman Pertemuan 12 Cloud Computing

Pada pertemuan kali ini yang menjadi pembahasan utama yakni CI/CD atau Continues Integration/Continues Deployment adalah “jembatan” antara tim operasional 
dan development dengan melakukan automasi pembangunan, testing, dan perilisan aplikasi. CI/CD juga berguna dalam membantu developer dan tester dalam 
melakukan rilis dan update aplikasi atau software dengan lebih cepat dan aman, terutama karena CI/CD dilakukan dalam ‘environment’ yang terstruktur.

Adapun beberapa manfaat implementasi CI/CD Pipeline:

- Mendapatkan Feedback Lebih Cepat Menggunakan CI Tools
Untuk setiap code yang ditulis, setiap tes akan berjalan secara bersamaan untuk menjaga kestabilan pengembangan. Feedback yang lebih cepat membantu untuk 
memeriksa kualitas dan kegunaan dari setiap code.

- Visibilitas yang Lebih Baik
Menggunakan CI/CD Pipeline, keseluruhan dari pengembangan, hasil tes, dan masalah dapat lebih mudah dianalisis. Sifat CI/CD Pipeline yang transparan ini 
memungkinkan developer untuk mengatur perubahan dan menghindari kerusakan pada software.

- Deteksi Bug Lebih Awal
CI/CD memiliki fungsi tes otomatis, melalui tes otomatis ini akan lebih mudah mendeteksi bug pada tahap pengembangan awal, jadi kamu tidak perlu khawatir 
dikejutkan dengan error pada detik-detik terakhir.

Tahap-Tahap dalam Implementasi CI/CD Pipeline :
1. Developer akan menulis code yang akan dieksekusi melalui Version Control system (contohnya git, svn, dsb.)

2. Setelah itu, software tersebut akan memasuki tahap Build. Pada tahap ini, developer akan melanjutkan codenya, code tersebut akan dikembalikan ke Version 
Control untuk pembaruan. Code baru dan yang mula ditulis akan digabungkan, dan akan di-compile menggunakan Compiler.

3. Setelah tahap Build selesai, kamu akan memasuki tahap Testing. Pada tahap ini akan dilakukan berbagai jenis tes untuk menguji kelayakan dari software.

4. Setelah tahap Testing selesai, akan dimulai tahap Deploy. Pada tahap Deploy, kamu akan menjalankan software ke staging server atau test server. Staging 
server atau test server berlaku sebagai simulasi dan kamu bisa melihat code atau software melalui simulator tersebut.

5. Jika tahap Deploy berhasil, kamu akan berlanjut ke tahap Auto Test. Jika keseluruhan software yang dikembangkan sudah dapat berjalan baik, maka software 
kamu sudah dapat dijalankan ke produksi (Deploy to Production).

6. Dalam setiap tahap, jika ada error dan semacamnya, kamu bisa menghubungi tim developer untuk membenarkan software tersebut, ini disebut sebagai 
Production Feedback. Developer akan memperbarui versi melalui Version Control, dan setiap tahap di atas akan berulang kembali. Siklus tersebut akan berulang 
sebanyak mungkin hingga diperoleh code yang dapat dijalankan ke server produksi, di mana kita dapat mengukur dan memvalidasi code. (Measure + Validate).
