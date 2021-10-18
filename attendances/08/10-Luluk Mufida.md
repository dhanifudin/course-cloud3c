Rangkuman Pertemuan 8 Cloud Computing

Pada pertemuan kali ini pembahasan utamanya adalah Layanan Oracle Cloud Infrastructure Object Storage. Object Storage adalah teknologi yang mengelola 
data sebagai objek. Semua data disimpan dalam satu repositori besar yang dapat didistribusikan ke beberapa perangkat penyimpanan fisik tanpa harus dibagi 
ke dalam file atau folder. Object Storage ini merupakan layanan storage yang khusus menyimpan object-object  seperti contoh: Mp3, Mp4, JPG, GIF dan lain-lain.

Object Storage Resource :
1. Buckets : logical container untuk menyimpan objek
2. Objects : Semua tipe data, apa pun tipe kontennya, disimpan sebagai objek
3. Namespace : sebagai top-level container untuk semua bucket dan objek
4. Compartment : primary block building yang digunakan untuk mengatur sumber daya cloud

Object Storage Characteristics :
1. Strong Consistency : Saat ada read request, Object Storage akan membuat salinan terbaru dari data yang ditulis ke sistem
2. Durability : layanan regional, data disimpan secara redundan di beberapa server penyimpanan
3. Custom Metadata : Kita dapat menentukan metadata ekstensif kita sendiri sebagai pasangan nilai kunci untuk tujuan apa pun
4. Security : Object Storage memastikan keamanan data yang disimpan menggunakan enkripsi data

Cara akses Object Storage :
1. Console 
2. CLI 
3. REST API 
4. OCI SDK

Limits on Object Storage Resources :
1. Authentication and Authorization 
2. Blocking Access to Object Storage Resources 
3. Object Storage IP Addresses

Keuntungan utama dari Cloudian object storage adalah pengguna dapat mengelompokkan perangkat penyimpanan objek ke dalam set penyimpanan yang besar dan 
mendistribusikan set tersebut di beberapa lokasi. Ini tidak hanya memungkinkan perluasan tanpa batas, tetapi juga meningkatkan ketahanan dan ketersediaan 
data yang tinggi.

Manfaat Menggunakan Object Storage :
1. Tingkat keandalan yang tinggi (Highly Reliable)
2. Menghemat Biaya CapEX dan OpEX
3. Data Terlindungi
4. Melindungi data dari hardware failur dan badsector
5. Design dan pendistribusian dibuat untuk high availability dan durable
