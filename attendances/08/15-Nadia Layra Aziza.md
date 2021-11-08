# Pertemuan 08

## Object Storage 

## A. Pendahuluan

Layanan Oracle Cloud Infrastructure Object Storage adalah platform penyimpanan yang memiliki performa yang tinggi dan scalable,  menawarkan ketahanan data yang andal dan hemat biaya. Dengan Object Storage, Kita dapat menyimpan atau mengambil data langsung dari internet atau dari dalam platform cloud. Object Storage adalah layanan regional dan tidak terikat dengan instance komputasi tertentu. Object Storage mendukung private access dari Oracle Cloud Infrastructure resource yang ada di VCN melalui gateway layanan. 

## B. Resource Object Storage

1. Buckets => Logical container untuk menyimpan objek
<br>Bucket dikaitkan dengan kompartemen tunggal yang memiliki policies untuk menentukan tindakan apa yang dapat dilakukan pengguna pada bucket dan pada semua objek dalam bucket.

2. Objects => Semua tipe data dan apa pun tipe kontennya
<br>Sebuah objek terdiri dari objek itu sendiri dan metadata tentang objek tersebut. Setiap objek disimpan dalam bucket.

3. Namespace => Top-level container untuk semua bucket dan objek
<br>Setiap penyewa Oracle Cloud Infrastructure diberi satu nama namespase Object Storage unik yang dibuat oleh sistem dan tidak dapat diubah.

4. Compartment => Primary block building untuk mengatur sumber daya cloud
<br>Saat sewa cloud, kompartemen root dibuat untuk membuat kompartemen di bawah kompartemen root untuk mengatur sumber daya kita. Bucket Penyimpanan Objek hanya bisa ada di satu kompartemen.

## C. Characteristics

1. Strong Consistency
<br>Saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke sistem.

2. Durability
<br>Object Storage secara aktif memantau integritas data & memastikan redundansi data menggunakan checksum dan secara otomatis mendeteksi & memperbaiki data yang rusak. Jika kehilangan redundansi terdeteksi, Object Storage secara otomatis membuat lebih banyak salinan data.

3. Custom Metadata
<br>Kita dapat menentukan metadata ekstensif kita sendiri sebagai pasangan nilai kunci untuk tujuan apa pun. Selain itu, juga dapat menetapkan metadata khusus ke objek dan bucket menggunakan Oracle Cloud Infrastructure CLI atau SDK.

4. Security
<br>Object Storage memastikan keamanan data yang disimpan menggunakan enkripsi data. Data dapat diakses menggunakan kunci dekripsi yang dibuat saat mengunggah objek ke bucket. 

## D. Cara akses Object Storage

<br>Ada beberapa cara, OCI menyediakan sesuai dengan preferensi kita dan sesuai dengan kebutuhan. Diantaranya yaitu :<br>
- Console
- CLI
- REST API
- OCI SDK

## E. Limits on Object Storage Resources

1. Authentication and Authorization
<br>Setiap layanan di Oracle Cloud Infrastructure terintegrasi dengan IAM untuk otentikasi dan otorisasi, untuk semua interface (Konsol, SDK atau CLI, dan REST API). IAM juga mengelola kredensial pengguna API signing keys	, token autentikasi, dan secret key untuk kompatibilitas API Amazon S3.

2. Blocking Access to Object Storage Resources
<br>Kita dapat meningkatkan keamanan Object Storage policies dengan membatasi akses hanya untuk permintaan yang berasal dari alamat IP yang diizinkan. 

3. Object Storage IP Addresses
<br>Oracle Cloud Infrastructure Object Storage service menggunakan CIDR dengan blok IP range 134.70.0.0/16 untuk semua region.

4. Object Storage IP Addresses
- Number of Object Storage namespaces per root compartment: 1
- Maximum object size: 10 TiB
- Maximum object part size in a multipart upload: 50 GiB
- Maximum number of parts in a multipart upload: 10,000
- Maximum object size allowed by PutObject API: 50 GiB
- Maximum size of object metadata: 2 K







