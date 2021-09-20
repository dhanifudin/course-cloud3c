<h1>Laporan Minggu ke 3</h1>

pada minggu ke 3 memulai pengenalan terhadap cloud computing milik oracle yaitu oracle cloud. Pada materi ini membahas tentang apa saja yang perlu diketahui saat akan membuat suatu virtual machine di dalam sebuah cloud. Muali dari jenis instance, jenis shapes, hingga membahas flexible shapes.

Oracle sendiri menawarkan 2 jenis instance yaitu bare metal dan virtual machine. Secara singkatnya bare metal memberi akses ke server fisik sedangkan virtual machine adalah lingkungan independen secara virtual yang bergerak diatas bare metal.

Terdapat juga jenis jenis shape, shape secara garis besar adalah tamplate untuk virtual machine dimana shape menawarkan berbagai kombinasi perangkat keras untuk virtual machine yang dibuat. Mulai dari standard shape yang di rancang untuk kebutuhan umum, kemudian denseIO shape yang di rancang untuk database yang beasr, kemmudian GPU shape di rancang untuk akselerasi hardware yang membutuhkan gpu, kemudian hpc hsape yang di rancang untuk komputasi tingkat tinggi, hingga optimezed shape yang di rancang untuk komputasi tinggi tingkat prosesor.

Untuk flexible shape ialah sistem shape secara custom yang bisa di sesuaikan oleh kebutuhan pengguna , jadi pada flexible shape ini lebih bisa leluasa dalam mengatur hardware yang dibutuhkan.

Kemudian ada juga cara membuat vm pada oracle cluod dengan cara pilih strip 3 pada bagian atas sebelah kiri, lalu pilih compute, kemudian pilih instance, kemudian akan pindah ke halaman instance disini saya mengalami kebingan saat pertama kali karena tidak bisa membuat instance, solusinya ialah cek apakah compartment nya sudah terpilih atau belum, itu merupakan kesalahan saya karena tidak mengeceknya terlebih dahulu.

Kemudian buat spek vm sesuai kebutuhan, saya menggunakan ubuntu sebagai os vm saya, jangan lupa unduh terlebih dahulu private key nya, setelah itu langsung saja create.

Cara membuka vm bisa lewat ssh, kebetulan disini saya menggunakan os linux jadi saya hanya perlu merubah hak akses dari private key yang sudah di download tadi dengan cara “chmod 400 (file)”. Setelah merubah hak akses langsung saja ssh ke vm nya dengan cara “ssh -i (file key) ubuntu@(ip public)” dan akan langsung otomatis masuk kedalam vm yang telah di buat tadi
