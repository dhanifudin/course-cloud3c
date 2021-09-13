# Pertemuan 3

## IaaS(Compute)
Pada pertemuan 3 membahas 2 topik yaitu : 
1. Mengetahui layanan Oracle Cloud Infrastructure Compute
2. Mampu membuat Virtual Machine (VM) di layanan compute Oracle Cloud

OCI menawarkan 2 jenis instances yaitu : 
1. Bare Metal : instance komputasi bare metal yang memberi Anda akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
2. Virtual Machine (VM) : lingkungan komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal. Virtualisasi memungkinkan untuk menjalankan beberapa VM yang terisolasi satu sama lain.  

Tujuan membuat vm adalah untuk menyesuaikan dengan kebutuhan kita seperti spesifikasi yang dibutuhkan. Saat membuat compute instance dapat memilih jenis instance yang sesuai dengan kebutuhan berdasarkan karakteristik sumber daya seperti core CPU yang dibutuhkan, jumlah memori dan sumber daya jaringan. Oci menawarkan beberapa shapes atau sebuah template yang menentukan kebutuhan jumlah CPU, volume memori, dan sumber daya lainnya yang dialokasikan untuk sebuah compute instance. Jenis-jenis shape :
- Standard shapes
- DenseIO shapes
- GPU shapes
- High performance computing (HPC) shapes
- Optimized shapes

Flexibel shapes : template yang dapat melakukan kustom sejumlah OCPU dan memori ketika melakukan launching atau mengubah VM. Jenis-jenis flexible shapes : 
1. VM.Standard.E3.Flex (AMD)
2. VM.Standard.E4.Flex (AMD)
3. VM.Optimized3.Flex (AMD)
4. VM.Standard.A1.Flex (Arm processor dari Ampere)
Base practice nya dimulai dari kecil terlebih dahulu karena kita tidak tahu kebutuhannya akan sampai dimana kemudian kita monitor apakah penggunaanya masih bisa banyak maupun tidak.

Jenis-jenis kapasitas : 
- On-demand capacity 
- Preemptible capacity
- Reserved capacity
- Dedicated capacity
secara default kapastas jenis on-demand sudah terpilih.

