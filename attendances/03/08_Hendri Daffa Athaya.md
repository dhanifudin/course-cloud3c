# PERTEMUAN 3
## Jenis-jenis Compute
Oracle Cloud Infrastructure menawarkan 2 jenis instances yaitu bare metal dan virtual machine (VM).
- Bare Metal: memberi akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
- Virtual Machine: (VM) yang berjalan di atas perangkat keras fisik bare metal. Ideal untuk menjalankan 
aplikasi yang tidak memerlukan kinerja dan sumber daya.

## Jenis-jenis Instance
Ketika membuat sebuah compute instance, kita dapat memilih jenis instance yang sesuai kebutuhan berdasarkan 
karakteristik sumber daya misalnya jumlah core CPU yang dibutuhkan, jumlah memori, dan sumber daya jaringan.

## Jenis shapes
OCI menawarkan berbagai variasi shapes. Shapes adalah sebuah templat yang menentukan kebutuhan jumlah CPU, 
volume memori, dan sumber daya lainnya yang dialokasikan untuk sebuah compute instance. Berikut ini 
jenis-jenis shape yang tersedia:
• Standard shapes
• DenseIO shapes
• GPU shapes
• High performance computing (HPC) shapes
• Optimized shapes

## Flexible shapes
Flexible shapes adalah sebuah templat yang dapat melakukan kustom sejumlah OCPU dan memori ketika melakukan 
launching atau mengubah VM.

## Flexible shapes
Jenis-jenis flexible shapes yang tersedia:
VM.Standard.E3.Flex (AMD)
VM.Standard.E4.Flex (AMD)
VM.Optimized3.Flex (Intel)
VM.Standard.A1.Flex (Arm processor dari Ampere)

Kita dapat memilih kapasitas tiap jenis host yang digunakan untuk VM. Secara default kapasitas jenis on-demand sudah terpilih, 
tetapi juga memungkinkan memilih jenis kapasitas lainnya.

## Komponen ketika membuat VM
1. Availability domain
2. Virtual cloud network
3. Key pair (untuk Linux)
4. Tags
5. Password (untuk Windows)
6. Image
7. Shape




