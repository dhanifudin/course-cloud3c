Pertemuan 12

Rangkuman Pertemuan 12 Cloud Computing

Pada pertemuan kali ini yang menjadi pembahasan utama yakni CI/CD atau Continues Integration/Continues Deployment adalah “jembatan” antara tim operasional dan development dengan melakukan automasi pembangunan, testing, dan perilisan aplikasi. CI/CD juga berguna dalam membantu developer dan tester dalam melakukan rilis dan update aplikasi atau software dengan lebih cepat dan aman, terutama karena CI/CD dilakukan dalam ‘environment’ yang terstruktur.

Adapun beberapa manfaat implementasi CI/CD Pipeline:

Mendapatkan Feedback Lebih Cepat Menggunakan CI Tools Untuk setiap code yang ditulis, setiap tes akan berjalan secara bersamaan untuk menjaga kestabilan pengembangan. Feedback yang lebih cepat membantu untuk memeriksa kualitas dan kegunaan dari setiap code.

Visibilitas yang Lebih Baik Menggunakan CI/CD Pipeline, keseluruhan dari pengembangan, hasil tes, dan masalah dapat lebih mudah dianalisis. Sifat CI/CD Pipeline yang transparan ini memungkinkan developer untuk mengatur perubahan dan menghindari kerusakan pada software.

Deteksi Bug Lebih Awal CI/CD memiliki fungsi tes otomatis, melalui tes otomatis ini akan lebih mudah mendeteksi bug pada tahap pengembangan awal, jadi kamu tidak perlu khawatir dikejutkan dengan error pada detik-detik terakhir.

Tahap-Tahap dalam Implementasi CI/CD Pipeline :

Developer akan menulis code yang akan dieksekusi melalui Version Control system (contohnya git, svn, dsb.)

Setelah itu, software tersebut akan memasuki tahap Build. Pada tahap ini, developer akan melanjutkan codenya, code tersebut akan dikembalikan ke Version Control untuk pembaruan. Code baru dan yang mula ditulis akan digabungkan, dan akan di-compile menggunakan Compiler.

Setelah tahap Build selesai, kamu akan memasuki tahap Testing. Pada tahap ini akan dilakukan berbagai jenis tes untuk menguji kelayakan dari software.

Setelah tahap Testing selesai, akan dimulai tahap Deploy. Pada tahap Deploy, kamu akan menjalankan software ke staging server atau test server. Staging server atau test server berlaku sebagai simulasi dan kamu bisa melihat code atau software melalui simulator tersebut.

Jika tahap Deploy berhasil, kamu akan berlanjut ke tahap Auto Test. Jika keseluruhan software yang dikembangkan sudah dapat berjalan baik, maka software kamu sudah dapat dijalankan ke produksi (Deploy to Production).

Dalam setiap tahap, jika ada error dan semacamnya, kamu bisa menghubungi tim developer untuk membenarkan software tersebut, ini disebut sebagai Production Feedback. Developer akan memperbarui versi melalui Version Control, dan setiap tahap di atas akan berulang kembali. Siklus tersebut akan berulang sebanyak mungkin hingga diperoleh code yang dapat dijalankan ke server produksi, di mana kita dapat mengukur dan memvalidasi code. (Measure + Validate).

CI/CD adalah suatu metode yang mengirimkan aplikasi secara automasi ke dalam tahap pengembangan aplikasi. "CI" dalam CI/CD merupakan proses otomatisasi untuk pengembang. CI yang berhasil berarti perubahan kode baru pada aplikasi secara teratur dibuat, diuji, dan digabungkan ke repositori bersama. "CD" dalam CI/CD mengacu pada pengiriman atau deployment berkelanjutan yang merupakan konsep terkait yang terkadang digunakan secara bergantian.

Software dikembangkan secara iteratively (berulang) dalam sebuah potongan kecil berdasarkan feedback pengguna (user) yang sering. Tes ditulis selama dan diterapkan di seluruh proses development untuk memastikan kode aplikasi yang berkualitas. Security patches dan perbaikan pada bug (bug fixes) cepat digunakan melalui otomatisasi. Kode aplikasi yang baru sering diintegrasikan dengan basis kode yang ada dan diuji untuk memastikan software selalu siap digunakan untuk produksi.

Terdapat 2 aspek penting yang perlu diperhatikan untuk menjamin stabilitas basis kode, yaitu seperti berikut ini:

Aspek untuk memastikan bahwa kode dikompilasi tanpa kesalahan.
Aspek untuk memastikan bahwa semua unit test yang memvalidasi perilaku kode lulus, termasuk perubahan kode terbaru dengan persentase yang sangat tinggi.
