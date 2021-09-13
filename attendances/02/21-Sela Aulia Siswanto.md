<h1>Rangkuman Komputasi Awan Minggu-2</h1>
Pada pertemuan minggu kedua membahas tentang layanan cloud computing yang merujuk pada Oracle. Untuk Oracle sendiri memiliki 3 kategori yaitu SaaS, PaaS, dan IaaS. Sedangkan untuk Core Service meliputi 5 hal yaitu:

1. Compute yang terdiri dari 5 komponen: 
    - Bare metal = blank server sehingga pengguna harus menangani virtualisasi, operating system, language runtime, app container dan code.
    - Dedicated virtual host = single tenant model atau tidak ada resource yang akan dibagi dengan pengguna lain dan layer virtualisasi ditangani oleh Oracle.
    - Virtual machines = multitenant model dengan virtualisasi berbasis hypervisor, yang berbeda dengan dedicated virtual hosts adalah berbagi resource dengan pengguna yang lain. 
    - Container engine = Container runtime environment yang mengeksekusi Containers dan mengelola Container Image pada node.
    - Function = layanan yang memungkinkan pengguna hanya menulis code.

2. Storage (Penyimpanan) terdapat dua macam yaitu Storage MOdel dan Storage Service (Layanan Penyimpanan).

3. Networking menggunakan Oracle VCN (Virtual Cloud Networking) layanan dari Iaas berfungsi untuk memperluas jaringan, meningkatkan keamanan jaringan, dan mengatur lalu lintas data masuk dan keluar. Sedangakn untuk komponennya Subnets, Route Table, Security List, Internet Gateway, Nat Gateway, Service Gateway, dan Dynamic Router Gateway.

4. Identity and Access Management (IAM) berfungsi untuk mengontrol siapa yang memiliki akses ke sumber daya cloud yang Anda miliki, dan jenis akses apa yang mereka miliki, dan ke sumber daya tertentu.

5. Database Cloud Service yang terbagi menjadi 3 macam yaitu:
    - ATP = layanan basis data cloud yang menghilangkan kerumitan pengoperasian dan pengamanan high performance databases.
    - ADW = layanan Data Warehouse yang menghilangkan semua kerumitan pengoperasian Data Warehouse, mengamankan data dan mengembangkan aplikasi berbasis data. 
    - Database Oracle Autonomous JSON = database dokumen yang memudahkan pengembangan aplikasi JSON-centric.