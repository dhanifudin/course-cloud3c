# Pertemuan 4
Pada pertemuan kali ini membahas mengenai VCN yang digunakan untuk sumber daya cloud.
Komponen-komponen dalam networking : 
1. Virtual Cloud Network (VCN)
2. Subnets
3. VNIC (Virtual Network Interface Cards)
4. Private IP
5. Public IP
6. IPV6
7. Dynamic Routing Gateway (DRG)
8. Internet Gateway
9. Network Address Translation (NAT) Gateway
10. Service Gateway
11. Local Peering Gateway (LPG)
12. Remote Peering Connection (RPC)
13. Route Tables
14. Security Rules
15. DHCP Options

## Ukuran VCN dan Batas Address
VCN mencangkup satu atau lebih blok CIDR IPv4 pilihan. Rentang ukuran VCN yang diizinkan adalah /16 hingga /30. Blok CIDR tidak boleh tumpang tindih satu sama lain, dengan CIDR di jaringan lokal Anda, atau dengan CIDR dari VCN lain yang saling terhubung. Subnet dalam VCN yang diberikan tidak boleh tumpang tindih satu sama lain.

## Availability Domains (AD) dan Gambaran Kerja VCN
VCN berada di satu region OCI. Suatu region memiliki beberapa domain untuk menyediakan ruang isolasi dan redundansi.
Awalnya subnet dirancang hanya untuk mencangkup satu availability domain (AD) di suatu wilayah. Semuanya khusus AD, yang berarti sumber daya subnet harus berada di AD tertentu. Sekarang subnet dapat berupa spesifik AF atau regional. Kita dapat meilih jenisnya saat membuat subnet. Kedua jenis subnet dapat hidup berdampingan di VCN yang sama.