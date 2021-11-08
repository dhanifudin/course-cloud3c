# Pertemuan 8 | Cloud Computing

## Object Storage Resource

1. Buckets

Bucket adalah logical container untuk menyimpan objek Pengguna atau sistem membuat bucket sesuai kebutuhan dalam suatu wilayah. Bucket dikaitkan dengan kompartemen tunggal (Kumpulan resource yang hanya dapat diakses oleh grup yang telah diberi izin oleh administrator di organisasi) yang memiliki policies (Dokumen Identity and Access Management (IAM) digunakan untuk menentukan siapa yang memiliki jenis akses ke resource kita) untuk menentukan tindakan apa
yang dapat dilakukan pengguna pada bucket dan pada  semua objek dalam bucket.

2. Objects

Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek. Sebuah objek terdiri dari objek itu sendiri dan metadata tentang objek tersebut. Setiap objek disimpan dalam bucket.

3. Namespace 

Namespace Object Storage berfungsi sebagai top-level container untuk semua bucket dan objek. Pada waktu pembuatan akun, setiap penyewa Oracle Cloud Infrastructure diberi satu nama namespase Object Storage unik yang dibuat oleh sistem dan tidak dapat diubah. Namespace mencakup semua kompartemen dalam suatu wilayah. Kita dapat mengontrol nama bucket, tetapi nama bucket tersebut harus unik dalam namespace.Meskipun namespace adalah khusus wilayah, nama namespace itu sendiri sama di semua wilayah.

4. Compartment

Kompartemen adalah primary block building yang digunakan untuk mengatur sumber daya cloud. Saat sewa, kompartemen root dibuat untuk kemudian membuat kompartemen di bawah kompartemen root untuk mengatur sumber daya Kita. Kita dapat mengontrol akses dengan membuat kebijakan yang menentukan tindakan apa yang dapat dilakukan grup pengguna terhadap sumber daya di kompartemen tersebut. Bucket Penyimpanan Objek hanya bisa ada di satu kompartemen.

