Pertemuan 8 - Storage services oracle cloud infrastructure
Layanan Oracle Cloud Infrastructure Object Storage adalah platform penyimpanan yang memiliki performa yang tinggi dan scalable,  menawarkan ketahanan data yang andal dan hemat biaya. Layanan Object Storage dapat menyimpan data tidak terstruktur dalam jumlah tak terbatas dari jenis konten apa pun, termasuk data analitik dan konten (seperti gambar dan video).
Object Storage adalah layanan regional dan tidak terikat dengan instance komputasi tertentu. Kita dapat mengakses data dari mana saja di dalam atau di luar konteks Oracle Cloud Infrastructure, selama Kita memiliki konektivitas internet dan dapat mengakses salah satu end point Object Storage (untuk authorization dan resource limit akan dibahas pada jobseet/pertemuan yang lain). 

Object Storage Resource:

-	Buckets -> logical container untuk menyimpan objek.
-	Objects -> Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek.
-	Namespace -> sebagai top-level container untuk semua bucket dan objek.
-	Compartment -> primary block building yang digunakan untuk mengatur sumber daya cloud.

Object Storage Characteristics:

-	Strong Consistency -> Saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke sistem.
-	Durability -> layanan regional. Data disimpan secara redundan di beberapa server penyimpanan. 
-	Custom Metadata -> menentukan metadata ekstensif kita sendiri sebagai pasangan nilai kunci untuk tujuan apa pun.
-	Security -> memastikan keamanan data yang disimpan menggunakan enkripsi data.

Cara akses Object Storage:

-	Console
-	CLI
-	REST API
-	OCI SDK

Limits on Object Storage Resources :

1.	Authentication and Authorization
2.	Blocking Access to Object Storage Resources
3.	Object Storage IP Addresses


