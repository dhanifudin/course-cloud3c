# Materi Minggu 8 - Object Storage

## Object Storage
Layanan Oracle Cloud Infrastructure Object Storage adalah platform penyimpanan yang memiliki performa yang tinggi dan scalable,
dan menawarkan ketahanan data yang andal, serta hemat biaya.
Layanan Object Storage dapat menyimpan data tidak terstruktur dalam jumlah tak terbatas dari jenis konten apa pun, termasuk data analitik dan konten.
Dengan Layanan Object Storage, Kita dapat menyimpan atau mengambil data langsung dari internet atau dari dalam platform cloud.
Object Storage mendukung private access dari Oracle Cloud Infrastructure resource yang ada di VCN melalui gateway layanan. 
sebuah gateway layanan memungkinkan konektivitas ke end point publik Object Storage dari alamat IP pribadi di subnet pribadi.

### Object Storage Resource:
* Buckets adalah logical containeer untuk menyimpan objek.
* Objects, semua tipe data, apapun kontennya disimpan sebagi objek.
* Namespace, berfungsi sebagai top-level container untuk semua bucket dan objek.
* Compartment adalah primary block building yang digunakan untuk mengatur sumber daya cloud.

### Object Storage Characteristics:
* Strong Consistency
* Durability
* Custom Metadata
* Security

### Cara akses Object Storage:
* Console
* CLI
* REST API
* OCI SDK

### Limits on Object Storage Resources:
* Number of Object Storage namespaces per root compartment: 1
* Maximum object size: 10 TiB
* Maximum object part size in a multipart upload: 50 GiB
* Maximum number of parts in a multipart upload: 10,000
* Maximum object size allowed by PutObject API: 50 GiB
* Maximum size of object metadata: 2 K

