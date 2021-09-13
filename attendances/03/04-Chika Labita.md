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

