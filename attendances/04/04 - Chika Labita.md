<h1>Week 4 - Cloud Computing</h1>

Fokus Pembahasan pada minggu ke 4 ini adalah antara lain: 
1. Setting Web Server<br>
2. Reverse Proxy<br>
3. Deployment<br>

Komponen-komponen Networking OCI, antara lain adalah : <br>
•VCN(Virtual Cloud Network)<br>
•Subnets<br>
•Dan sebagainya<br>

##Konsep dasar pada jaringan komputer diaplikasikan<br>

##IP Table Firewalls<br>

Perbedaan Apache dan Nginx :<br>
- Nginx 2,5 lebih cepat daripada Apache.<br>
- Industri rata-rata menggunakan Nginx daripada Apache. Hal ini berdasarkan pada error yang tampil pada halaman website terkait.<br>

*Database yang tidak optimal sangat berpengaruh sehingga membuat performa website menurun dan melambat. <br>

Nginx  -> dalam pemrosesan tidak dapat berdiri sendiri. Nginx meneruskan request.<br>
Confignya tidak menyebar ke mana-mana<br>

Apache dan Nginx bisa digunakan dalam 1 VM. tetapi jangan menggunakan port yang sama.<br>
Tapi jika cloud nya tinggi, maka hal ini tidak direkomendasikan.<br>

<h3>SSH FORWARDING</h3>
SSH Tunneling<br>
Ada 3 tipe SSH Tunneling yang masing-masing memiliki tujuan berbeda, yaitu  : <br>
• Local Port Forwarding,<br>
ssh -L local_port:remote_address:remote_port user@ip-server<br>
• Remote Port Forwarding<br>
ssh -R remote_port:local_address:local_port <br>
• Dynamic Port Forwarding<br>
ssh -D local_port user@ip-server<br>
dapat menggunakan SSH client seperti PuTTY atau Xshell.<br>
