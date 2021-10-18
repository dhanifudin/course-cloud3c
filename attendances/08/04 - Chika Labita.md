<h1>Week 8 - Object Storage</h1>

Resume :)

<h2>Object Storage Resource</h2>
Oracle Cloud Infrastructure memili memiliki berbagai tipe Object Storage untuk mengelola
dan menyimpan data, antara lain yaitu:
1. Buckets -> logical container untuk menyimpan objek. <br> 
2. Objects -> Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek. Sebuah objek terdiri dari
objek itu sendiri dan metadata tentang objek tersebut. Setiap objek disimpan dalam bucket.<br>
3. Namespace -> Namespace Object Storage berfungsi sebagai top-level container untuk semua bucket dan
objek.<br>
4. Compartment -> Kompartemen adalah primary block building yang digunakan untuk mengatur sumber daya
cloud.

<h2>Object Storage Characteristics</h2>
Object Storage menyediakan fitur-fitur berikut:<br>
1. Strong Consistency -> Saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke
sistem.<br>
2. Durability -> Object Storage adalah layanan regional. Data disimpan secara redundan di beberapa server
penyimpanan.<br>
3. Custom Metadata -> Kita dapat menentukan metadata ekstensif kita sendiri sebagai pasangan nilai kunci untuk
tujuan apa pun.<br>
4. Security -> Object Storage memastikan keamanan data yang disimpan menggunakan enkripsi data. 

<h2>Ways to Access Object Storage</h2>
Kita dapat mengakses Object Storage menggunakan beberapa cara, OCI menyediakan sesuai
dengan preferensi kita dan sesuai dengan kebutuhan :<br>
• Console<br>
• CLI<br>
• REST API<br>
• OCI SDK<br>

<h2>Blocking Access to Object Storage Resources from Unauthorized IP Addresses.</h2>
Kita dapat meningkatkan keamanan Object Storage policies dengan membatasi akses hanya
untuk permintaan yang berasal dari alamat IP yang diizinkan<br>

<h2>Object Storage IP Addresses</h2>
Oracle Cloud Infrastructure Object Storage service menggunakan CIDR dengan blok IP range
134.70.0.0/16 untuk semua region.<br>

<h2>Limits on Object Storage Resources</h2>
• Number of Object Storage namespaces per root compartment: 1<br>
• Maximum object size: 10 TiB<br>
• Maximum object part size in a multipart upload: 50 GiB<br>
• Maximum number of parts in a multipart upload: 10,000<br>
• Maximum object size allowed by PutObject API: 50 GiB<br>
• Maximum size of object metadata: 2 K<br>
