# RANGKUMAN PERTEMUAN 4

Pada pertemuan 4 ini membahas seputar Oracle Virtual Cloud Network (VCN). 
Virtual Cloud Network atau disingkat dengan VCN merupakan Jaringan cloud virtual Oracle (VCN) menyediakan jaringan cloud pribadi dan dapat disesuaikan di Oracle Cloud Infrastructure (OCI). Sama seperti jaringan pusat data tradisional, VCN memberi pelanggan kendali penuh atas lingkungan jaringan cloud mereka. 

VCN menawarkan dua fitur firewall virtual yang keduanya menggunakan aturan keamanan untuk mengontrol lalu lintas di tingkat paket. Kedua fitur tersebut adalah:

1.  Security List: 
    Fitur firewall virtual asli dari layanan Jaringan. Saat Anda membuat VCN, daftar keamanan default juga dibuat. Tambahkan aturan yang diperlukan ke daftar keamanan untuk subnet yang berisi target pemasangan.
    
2.  Network security groups (NSG): Fitur berikutnya yang dirancang untuk komponen aplikasi yang memiliki postur keamanan berbeda. Buat NSG yang berisi aturan yang diperlukan, lalu tambahkan target mount ke NSG. Atau, Anda dapat menambahkan aturan yang diperlukan ke NSG yang sudah ada sebelumnya, dan menambahkan target pemasangan ke NSG. 

## Perbedaan antara Apache vs Nginx

Apache adalah server HTTP open-source sedangkan Nginx adalah server web asinkron berkinerja tinggi dan server proxy terbalik. Perbedaan utama antara keduanya adalah cara keduanya menangani permintaan klien. Sementara Apache menyediakan berbagai modul multi-pemrosesan untuk menangani permintaan klien dan lalu lintas web, Nginx dirancang untuk menangani beberapa permintaan klien secara bersamaan dengan sumber daya perangkat keras minimal.

Nginx atau Apache merupakan langkah penting dalam menyiapkan situs web anda. Kedua solusi tersebut mampu menangani beragam beban kerja dan bekerja dengan perangkat lunak lain untuk menyediakan tumpukan web yang lengkap.
