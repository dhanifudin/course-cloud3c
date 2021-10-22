Rangkuman Pertemuan 8

TI3C - 17 - Octavia Alya Nabilla

Materi pada minggu ke 8 adalah tentang Object Storage.

Object Storage adalah platform penyimpanan yang memiliki performa yang tinggi dan scalable, menawarkan ketahanan data yang andal dan hemat biaya. Layanan Object Storage dapat menyimpan data tidak terstruktur dalam jumlah tak terbatas dari jenis konten apa pun, termasuk data analitik dan konten (seperti gambar dan video).

Object Storage mendukung private access dari Oracle Cloud Infrastructure resource yang ada di VCN melalui gateway layanan. Sebuah gateway layanan memungkinkan konektivitas ke end point publik Object Storage dari alamat IP pribadi di subnet pribadi.

Oracle Cloud Infrastructure memili memiliki berbagai tipe Object Storage untuk mengelola
dan menyimpan data, antara lain yaitu:
1. Buckets = Bucket adalah logical container untuk menyimpan objek. Pengguna atau sistem membuat bucket sesuai kebutuhan dalam suatu wilayah. 
2. Objects = Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek. Sebuah objek terdiri dari objek itu sendiri dan metadata tentang objek tersebut. Setiap objek disimpan dalam bucket.
3. Namespace = Namespace Object Storage berfungsi sebagai top-level container untuk semua bucket dan objek. Namespace mencakup semua kompartemen dalam suatu wilayah. Kita dapat mengontrol nama bucket, tetapi nama bucket tersebut harus unik dalam namespace. Meskipun namespace adalah khusus wilayah, nama namespace itu sendiri sama di semua wilayah.
4. Compartment = Kompartemen adalah primary block building yang digunakan untuk mengatur sumber daya cloud.


Object Storage menyediakan fitur-fitur berikut:
1. Strong Consistency = dimana saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke sistem.
2. Durability = Object Storage secara aktif memantau integritas data menggunakan checksum dan secara otomatis mendeteksi dan memperbaiki data yang rusak. Object Storage secara aktif memantau dan memastikan redundansi data. Jika kehilangan redundansi terdeteksi, Object Storage secara otomatis membuat lebih banyak salinan data.
3. Custom Metadata = Kita dapat menentukan metadata ekstensif kita sendiri sebagai pasangan nilai kunci untuk tujuan apa pun. Misalnya, kita dapat membuat tag deskriptif untuk objek, mengambil tag tersebut, dan menyortir data.
4. Security = Object Storage memastikan keamanan data yang disimpan menggunakan enkripsi data. Enkripsi data adalah metode yang digunakan untuk melindungi kerahasiaan data


Object Storage dapat diakses menggunakan beberapa cara, OCI menyediakan sesuai
dengan preferensi kita dan sesuai dengan kebutuhan :
• Console
• CLI
• REST API
• OCI SDK

Memblokir Akses ke Object Storage dari Alamat IP Tidak Sah dapat dilakukan dengan n keamanan Object Storage policies dengan membatasi akses hanya untuk permintaan yang berasal dari alamat IP yang diizinkan. Pertama, kita membuat network source (grup alamat IP dapat digunakan dalam policies untuk membatasi akses) untuk menentukan alamat IP yang diizinkan, lalu kita menambahkan ketentuan ke kebijakan untuk membatasi akses ke alamat IP di sumber jaringan.