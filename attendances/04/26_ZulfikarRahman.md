pada hari ini kita membahas tentang Virtual Cloud Network (VCN)
di pertemuan kali ini kita harus memahami tentang
-layanan oracle Cloud Infrastructure Networking
-Mampu mengaktifkan port 80 melalui Virtual Cloud Network (VCN) di layanan Oracle Cloud
-Mampu memasang Apache server dan mengonfigurasi IP tables Firewalls

komponen komponen yang ada dalam networking :
  -VIRTUAL CLOUD NETWORK (VCN)
   Jaringan pribadi virtual yang Anda siapkan di pusat data Oracle
  -SUBNETS
   Subnet berisi Virtual Network Interface Cards (VNIC), yang ditautkan ke dalam instance.
  -VNIC (Virtual Network Interface Cards)
   VNIC melekat pada sebuah instance dan berada di subnet untuk mengaktifkan koneksi ke VCN subnet.
  -PRIVATE IP
   Alamat IPv4 pribadi dan informasi terkait untuk menangani instance (misalnya,nama host untuk DNS)
  -PUBLIC IP
   Anda dapat secara opsional menetapkan IP publik ke instances Anda atau sumber daya lain yang memiliki IP pribadi.
  - dan lain lain 
 
 Availability Domains (AD) dan Gambaran Kerja VCN
VCN Anda berada di satu region Oracle Cloud Infrastructure. Suatu region dapat memiliki beberapa domain untuk menyediakan ruang isolasi dan redundansi.
