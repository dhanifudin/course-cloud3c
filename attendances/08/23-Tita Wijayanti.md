# Pertemuan 8
## Object Storage
Layanan Oracle Cloud Infrastructure Object Storage adalah platform penyimpanan yang memiliki performa yang tinggi dan scalable,  menawarkan ketahanan data yang andal dan hemat biaya. Dengan Object Storage, Kita dapat menyimpan atau mengambil data langsung dari internet atau dari dalam platform cloud. Object Storage mendukung private access dari Oracle Cloud Infrastructure resource yang ada di VCN melalui gateway layanan. Sebuah gateway layanan memungkinkan konektivitas ke end point publik Object Storage dari alamat IP pribadi di subnet pribadi.

## Object Storage Resource
- Buckets 
    Buckets adalah logical container untuk menyimpan objek. Pengguna atau sistem membuat bucket sesuai kebutuhan dalam suatu wilayah.
- Objects 
    Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek. Sebuah objek terdiri dari objek itu sendiri dan metadata tentang objek tersebut. Setiap objek disimpan dalam bucket.
- Namespace
    Namespace Object Storage berfungsi sebagai top-level container untuk semua bucket dan objek. Pada waktu pembuatan akun, setiap penyewa Oracle Cloud Infrastructure diberi satu nama namespase Object Storage unik yang dibuat oleh sistem dan tidak dapat diubah.
- Compartment
    Kompartemen adalah primary block building yang digunakan untuk mengatur sumber daya cloud. Saat sewa, kompartemen root dibuat untuk kemudian membuat kompartemen di bawah kompartemen root untuk mengatur sumber daya kita. 

## Object Storage Characteristics
- Strong Consistency
- Durability
- Custom Metadata
- Security

## Cara akses Object Storage
- Console
- CLI
- REST API
- OCI SDK