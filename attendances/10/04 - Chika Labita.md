<h1>Week 10 | | Docker</h1>

بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم

<b>Latar belakang : </b>

- Deploy nya jadi lebih mudah, 
- bisa dibungkus jadi satu (container)
- portable -> tidak perlu aplikasi tambahan untuk deployment nya

<b>Sejarah :</b>

2013 -> OpenSource

<b>Containerization :</b>

- Menggunakan Container Linux
- Linux container -> virtualisasi sistem operasi 

<b>Perbedaan VM Host dan Docker Host</b> adalah Docker Host lebih ringan daripada VM Host

<b>Keuntungan Container :</b>

- Portability -> Mudah berpindah-pindah
- Quick Deployment
- Managing infrastructure-like code
- Open source
- Consistency

<b>Produk Virtualisasi :</b><br>
- hyper<br>
Paling umum dipakai VirtualBox, dsb.
- container<br>
LXC, dsb.

<b>Docker </b>-> Command-line program, model client-server. Install package, running, publish dsb.
Docker bukan bahasa pemrograman dan bukan juga framework.
Docker membantu menyelesaikan isu yang sering terjadi pada server software.
Kenapa bisa?


<b>Arsitektur :</b><br>
- Client : docker build, pull, run<br>
- Docker_host : Docker Daemon => Container dan Image<br>
- Registry

<b>Istilah Docker:</b>
- Docker container
- Docker client -> mirip menu restoran
- Docker daemon -> 
- Docker image
- Docker registry -> distribusi
- Docker compose -> berisi gabungan definisi dan sebagainya.
- dsb.

<b>Perintah dasar:</b><br>

- run, 
- build, 
- images, 
- ps, 
- rm, 
- rmi, 
- commit, 
- push, 
- pull
- dsb

<b>Dockerfile</b> -> berisi kumpulan perintah.

<b>Perintah </b>: 
- FROM, 
- MAINTENER/MAINTENANCE, 
- LABEL, 
- ADD/COPY, 
- CMD, 
- ENTRYPOINT

اَلْحَمْدُ للَّهِ رَبِّ الْعالَمِينَ
