# Pertemuan 04

## Rangkuman Bab 4 Virtual Cloud Network (VCN)

## A. Komponen-Komponen Networking

Menyiapkan VCN merupakan langkah pertama saat kita bekerja dengan Oracle Cloud Infrastucture (OCI) sebagai sumber daya cloud kita.
Adapun komponen-komponen Networking terdiri dari :

1. Virtual Cloud Network (VCN)
2. Subnets
3. Virtual Network Interface Cards (VNIC)
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
15. DHCP Optios

## B. Ukuran VCN dan batas Address

Rentang ukuran VCN yang diizinkan adalah 16 hingga 30 (contoh 10.0.0.0/16). Untuk VCN kita, oracle merekomendasikan penggunaan rentang alamat IP pribadi yang ditentukan dalam RFC 1918 (10.0.0.0/16, 172.16/16, dan 192.168/16). Namun, kita dapat menggunakan rentang yang dapat dirutekan secara public. 

## C. Perbedaan Apache VS Nginx

Perbedaan Apache dengan Nginx :
- Config nya berbeda
- Secara garis besar, peforma Nginx lebih cepat daripada Apache
- Nginx ini hanyalah web server, tidak bisa berdiri sendiri. Untuk menjalankan suatu program (seperti php) dia meneruskan request dari php-fpm. Sedangkan apache mempunyai modul sendiri untuk menjalankan program php, biasanya disebut dengan mod_php
- Apache menggunakan multiple thread, sehingga satu request dihendel oleh satu thread. Sedangkan Nginx hanya memiliki satu thread, sehingga satu thread menghendel multiple requests
- Dalam hal static content, Nginx lebih unggul dari pada apache. Dalam 1 detik, Nginx dapat menghendel 20232 request, sedengkan apache hanya dapat menghendel 10770 request

## D. Security VCN

Pembahasan tentang security VCN yang pastinya berkaitan dengan port. Default port number adalah 80 untuk http, misalnya kita memiliki aplikasi php dan prosesnya menggunakan php-fpm berarti nantinya butuh untuk membuka port 9000 pada VM, sedangkan port yang diakses dari luar adalah port 80. Kira-kira port 9000 ini apakah perlu dimasukkan ke security VCN untuk dibuka ? Tidak harus/tergantung, jika php-fpm dan web server itu berada dalam satu VM yang sama, maka tidak perlu karena web server dapat membaca port 9000. Kita butuh pengaturan security jika ada komunikasi dengan VM lain (misal ada komunikasi antara web server dengan database), maka dibutuhkan untuk membuka port nya namun harus dibatasi dan dibukanya hanya dari VM yang berhubungan.

Jika suatu aplikasi php memiliki port sendiri (seperti phpmyadmin), kalau bisa nantinya dilakukan suatu mekanisme reverse proxy. Jadi port yang dibuka tetap port public (80 atau 443), namun nanti kita bisa mempunyai default port 8080 tetapi mengaksesnya tetap melalui port 80, itulah yang dinamakan reverse proxy. Untuk lebih jelasnya tentang reverse proxy bisa melihat contohnya pada link berikut :
https://stackoverflow.com/questions/24861311/forwarding-port-80-to-8080-using-nginx

Dalam satu MV bisa nampung lebih dari satu web server dengan syarat port nya harus berbeda karena jangan sampai ada beberapa proses yang berjalan pada port yang sama