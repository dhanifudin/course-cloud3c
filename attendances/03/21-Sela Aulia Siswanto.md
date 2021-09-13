<h1>Rangkuman Minggu-03 Infrastructure as a Service (IaaS)-Compute
<h2>TI3C/21-Sela Aulia Siswanto</h2>
Pada pertemuan minggu ketiga ini membahas tentang Infrastructure as a Service (IaaS) pada bagian Compute. Compute sendiri memungkinkan untuk menyediakan dan mengelolah host komputasi yaitu instances.Instances dibuat sesuai kebutuhan unyuk memenuhi persyaratan komputasi dan aplikasi yag dibuat. Terdapat dua jenis instances pada oracle yang dapat digunakan yaitu:

- Bare Metal berfungsi untuk memberikan akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
- Virtual Machine (VM) adalah lingkungan komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal. VM ideal untuk menjalankan aplikasi yang tidak memerlukan kinerja dan sumber daya (CPU, memori, bandwidth jaringan, penyimpanan) dari keseluruhan mesin fisik. 

Shape adalah sebuah template yang menentukan kebutuhan jumlah CPU, volume memori, dan sumber daya lainnya yang dialokasikan untuk sebuah compute instance. Jenis-jenis shape adalah berikut ini:

- Standard Shape => dirancang untuk kebutuhan umum seperti aplikasi-aplikasi dan use case.
- DenseIO shape => dirancang unutk basis data besar.
- GPU Shape => dirancang untuk akselerasi pada hardware terutama kebutuhan CPU.
- High Performance Computing (HPC) => dirancang untuk komputing performa tinggi membutuhkan frekuensi prosesor core tinggi dan HPC klaster jaringan paralel.
- Optimized shape => dirancang untuk komputasi tingkat tinggi pada frekuensi core prosesor. 

Dan flexible shape adalah sebuah template  yang dapat melakukan kustom sejumlah OCPU dan memori ketika melakukan launching atau mengubah VM. Jenis-jenis dari shape ini adalah:
- VM.Standard.E3.Flex (AMD),
- VM.Standard.E4.Flex (AMD),
- VM.Optimized3.Flex (Intel), dan
- VM.Standard.A1.Flex (Arm processor dari Ampere).
