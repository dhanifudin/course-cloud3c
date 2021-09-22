# Rangkuman Pertemuan 4 - Virtual Cloud Network (VCN)
## Komponen-Komponen Networking
langkah pertama menyiapkan OCI(Oracle Cloud Infrastructure) dengan menyiapkan jaringan cloud virtual(VCN) sebagai sumber daya cloud kita.
komponen-komponen Networking terdiri dari :
- Virtual Cloud Network (VCN)
- Subnets
- Virtual Network Interface Cards (VNIC)
- Private IP 
- Public IP
- IPV6
- Dynamic Routing Gateway (DRG)
- Internet Gateway
- Network Address Translation (NAT) Gateway
- Service Gateway
- Local Peering Gateway (LPG)
- Remote Peering Connection (RPC)
- Route Tables
- Security Rules
- DHCP Optios
## Ukuran VCN dan batas Address
VCN mencakup satu atau lebih blok CIDR IPv4 Rentang ukuran VCN yang diizinkan adalah 16 hingga 30 (contoh 10.0.0.0/16).Layanan jaringan mencadangkan 2 alamat IP pertama dan terakhir di CIDR setiap Subnet. Untuk VCN kita, oracle merekomendasikan penggunaan rentang alamat IP pribadi yang ditentukan dalam RFC 1918 (10.0.0.0/16, 172.16/16, dan 192.168/16). Namun, kita dapat menggunakan rentang yang dapat dirutekan secara public.

## Kelebihan Apache
- Lintas platform.
- Kompatibel dengan WordPress.
- Komunitas yang besar dan dokumentasi yang lengkap.
- Lisensinya gratis (open source).
- Mempunyai perangkat lunak yang stabil dan andal.
- Patch keamanan yang terus diperbarui.
- Konfigurasi mudah.
 
## Kelebihan Nginx
Nginx merupakan web server yang lebih ringan jika dibandingkan dengan Apache karena terkenal dengan impresi lightweight yang dimiliki. Demikian juga Nginx populer memiliki arsitektur events-driven architecture dan asynchronous. Ditambah lagi dalam menampilkan konten yang statis sehingga lebih efisien.
