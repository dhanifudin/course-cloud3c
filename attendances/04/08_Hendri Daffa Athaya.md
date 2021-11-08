# PERTEMUAN 4
## Komponen-komponen Networking
1) VIRTUAL CLOUD NETWORK (VCN)
2) SUBNETS
3) VNIC (Virtual Network Interface Cards)
4) PRIVATE IP
5) PUBLIC IP
6) IPV6
7) DYNAMIC ROUTING GATEWAY (DRG)
8) INTERNET GATEWAY
9) NETWORK ADDRESS TRANSLATION (NAT) GATEWAY
10) SERVICE GATEWAY
11) LOCAL PEERING GATEWAY (LPG)
12) REMOTE PEERING CONNECTION (RPC)
13) ROUTE TABLES
14) SECURITY RULES
15) DHCP OPTIONS

## Virtual Cloud Network (VCN)
Jaringan pribadi virtual yang disiapkan di pusat data Oracle. Mirip dengan jaringan konvensional, 
dengan aturan firewall dan jenis gateway komunikasi tertentu yang dapat dipilih untuk digunakan. 
VCN berada di satu region Oracle Cloud Infrastructure dan mencakup satu atau beberapa blok CIDR 
(IPv4 dan IPv6, jika diaktifkan).

## Port Web Server
Untuk port web server yang sering digunakan ada 3 yaitu HTTP (port 80) , HTTPS (port 443) , SSH (22).

## Langkah-langkah Mengaktifkan Port 80 melalui VCN
1) Membuat VM terlebih dahulu seperti pertemuan minggu 3.
2) Lalu jika berhasil dibuat, buka VCN dengan cara klik nama.
3) Pilih Security List dan pada Ingress Rulse pilih Add Ingress Rules.
4) Lalu pastikan mengisi seperti dibawah ini :
- Stateless: Checked
- Source Type: CIDR
- Source CIDR: 0.0.0.0/0
- IP Protocol: TCP
- Source port range: (biarkan kosong)
- Destination Port Range: 80
- Description: Allow HTTP connections
5) Setelah itu akses VM melalui SSH dengan menggunakan private Key dan Host (Windows menggunakan Putty).
6) Setelah itu lakukan perintah sudo apt update dan sudo apt -y install.
7) Lalu jalankan service Apache dengan menuliskan perintah sudo systemctl restart apache2.
8) Jika menggunakan ubuntu biasanya perlu mengaktifkan firewall yang status nya disabled dengan cara update 
iptabels dengan perintah sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT dan sudo netfilter-persistent save.
9) Coba akses secara publik public port di VM Instance.