absensi 11
Membahas tentang docker , yang dibahas adalah printah printah docker seperti
network , volume dan docker compose , 

docker network 
 - Bagian dari docker yang berperan menangani jaringan host antar container 
local bisa jadi bridge, none dan sebuah host langsung
 
  docker netwwork bridge => tipe newtork ini biasanya di pakai ketika banyak
ethernet atau interface yang akan di jadikan 1 dalam sebuah bridge dalam 1 
beridge ini ada beberapa interface yang dicluster sehingga beberapa interface
ini yang ada di dalam bridge bisa memiliki rule yang sama ataupun juga berbeda

  docker network host => tipe network ini adalah tipe yang langsung maping
dengan host local jadi tinggal di attach atau di petakkan kedalam container

 docker network none atau kosong => tipe network ini dalam artian kosong
dan tidak ada , jadi didalam container ini tidak ada jaringan yang berperan
dan hanya bisa jalan di lokal

 docker volume => berperan sebagai penyimpanan dalam sebuah container yang 
konsepnya sama dengan sysmlink , jadi storage dalam container link dengan
storage atau path di local

 docker compose => berperan sebagai paling akhir dalam menjalankan sebuah 
container sesuai instruksi 
