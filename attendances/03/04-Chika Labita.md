<h1>Infrastructure as a Service (IaaS) - Compute || Week 03</h1>

<h3><b>Layanan Oracle Cloud Infrastructure Compute</b></h3>

Oracle Cloud Infrastructure memungkinkan kita untuk menyediakan dan mengelola host komputasi atau disebut juga sebagai intances.
Pembuatan intances sesuai dengan kebutuhan untuk memenuhi persyaratan komputasi dan aplikasi yang kita buat.
Kita dapat mengakses dengan aman melalui komputer, memulai ulang, melampirkan dan melepaskan volume, dan menghapusnya (terminate) setelah selesai.
Setiap perubahan yang kita buat pada drive local intances akan hilang saat kita menghapusnya. dan setiap perubahan yang kita simpan pada volume yang dilampirkan ke intances akan dipertahankan.

<b>Oracle Cloud Infrastructure menawarkan 2 jenis instances yaitu :</b>
- Bare Metal: merupakan instances komputasi bare metal yang memberi Anda akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
- Virtual Machine: Virtual Machine (VM) adalah lingkungan komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal. Virtualisasi memungkinkan untuk menjalankan beberapa VM yang terisolasi satu sama lain. VM ideal untuk menjalankan aplikasi yang tidak memerlukan kinerja dan sumber daya (CPU, memori, bandwidth jaringan, penyimpanan) dari keseluruhan mesin fisik.

<b>Jenis-jenis Intances -> sesuai dengan kebutuhan berdasarkan karakteristik
sumber daya. Misalnya :</b>
1. Jumlah core CPU yang dibutuhkan.
2. Jumlah Memory.
3. Sumberdaya Jaringan.

<b>Jenis-jenis Shape -> Shapes merupakan sebuah template yang digunakan untuk menentukan kebutuhan jumlah CPU, volume memory, dan juga sumberdaya yang dialokasikan untuk sebuah compute intance.
</b>
- Jenis-jenis Shape yang tersedia, antara lain :
	1. Standard Shape -> Dirancang untuk kebutuhan umum yang banyak digunakan pada aplikasi-aplikasi dan use cases pada umumnya.
	Standard shapes menyediakan sumber daya yang seimbang pada core, memori, dan jaringan. Standard shapes tersedia dengan prosesor Intel, AMD, dan Arm-based.
  2. DenseIO shapesm-> dirancang untuk basis data yang besar, seperti big data dan aplikasi-aplikasi yang membutuhkan performa storage yang tinggi. Shapes ini mendapat fitur NVMe berbasis SSD.
	3. GPU shape-> dirancang untuk akselerasi pada hardware terutama kebutuhan GPU termasuk Inter, AMD CPU dan prosesor grafis NVIDIA.
	4. High performance computing (HPC) shapes-> dirancang untuk komputasi performa tinggi yang membutuhkan frekuensi prosesor core yang tinggi dan HPC dalam klaster jaringan yang diakses secara paralel.
	5. Optimized shapes: dirancang untuk komputasi tingkat tinggi pada frekuensi core prosesor. Shape ini juga cocok untuk kebutuhan HPC dengan low latency. Shape ini juga mendukung cluster networking.

<h3><b>Flexible Shapes</b></h3>
Flexible shapes merupakan sebuah template yang dapat melakukan custom sejumlah OCPU dan memori ketika melakukan launching atau mengubah VM.
Setiap OCPU merujuk pada dua hardware yang mengeksekusi threads (juga dikenal sebagai virtual CPUs atau vCPUs). 
Ketika kitaa membuat sebuah VM menggunakan flexible shape, pilihan jumlah OCPU dan volume memori yang dibutuhkan dapat disesuaikan. 

Berikut ini jenis-jenis flexible shapes yang tersedia: <br><br>
	• VM.Standard.E3.Flex (AMD) -> maximum memory sebesar 1024GB<br>
	• VM.Standard.E4.Flex (AMD) -> maximum memory sebesar 1024GB<br>
	• VM.Optimized3.Flex (Intel) -> maximum memory sebesar 256GB<br>
	• VM.Standard.A1.Flex (Arm processor dari Ampere) -> maximum memory sebesar 512GB<br>
	
	#Note : Flexible shape Intel atau AMD? Sesuaikan dengan kebutuhan saja.
	Pada VM.Standard.E3.Flex dan VM.Standard.E3.Flex memiliki karakteristik yang hampir sama. kemungkinan yang membedakan adalah kesupportan pada Operating System.

<h3>Jenis-jenis Kapasitas</h3>
Kita dapat memilih kapasitas tiap jenis host yang digunakan untuk VM. Secara default kapasitas jenis on-demand sudah terpilih, tetapi juga memungkinkan memilih jenis kapasitas lainnya.<br><br>
	- On-demand capacity: cukup bayar sesuai dengan kapasitas compute yang kita gunakan saja.<br>
	- Preemptible capacity: berguna saat membutuhkan sumber daya ketika beban kerja meningkat (autoscaling) pada periode waktu tertentu, sehingga lebih hemat biaya.<br>
	- Reserved capacity: kapasitas cadangan yang berguna untuk masa yang akan datang sesuai dengan kebutuhan. Kapasitas cadangan yang tidak digunakan perhitungan biayanya berbeda dengan sumber daya yang sedang digunakan.<br>
	- Dedicated capacity: menjalankan instance VM pada dedicated server, sehingga sumber daya tidak dibagi dengan client/customer lain.<br><br>
	
<h3><b>Komponen Pembuatan VM</b></h3><br>

1. Availability domain<br>
2. Virtual cloud network<br>
3. Key pair (untuk Linux) -> Aman, tapi kuncinya harus disimpan dengan baik. #Selama kita memiliki kunci maka kita bisa mengaksesnya tanpa perlu ditanya terlebih dahulu<br> 
4. Tags<br>
5. Password (untuk Windows)<br>
6. Image<br>
7. Shape
<br><br>
Jazakallahu Khairan
