Rangkuman Pertemuan 3 -  IaaS (Compute)

pada pertemuan ke 3 disini membahas tentang Mengetahui layanan Oracle Cloud Infrastructure Compute dan Mampu membuat Virtual Machine (VM) di layanan compute Oracle Cloud

Oracle Cloud Infrastructure menawarkan 2 jenis instances yaitu bare metal dan virtual machine (VM):
- Bare Metal -> memberikan akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.
- Virtual Machine: (VM) -> lingkungan komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal. 

Shapes adalah sebuah templat yang menentukan kebutuhan jumlah CPU, volume memori, dan sumber daya lainnya yang dialokasikan untuk sebuah compute instance. 
Berikut ini jenis-jenis shape yang tersedia:
- Standard shapes
- DenseIO shapes
- GPU shapes
- High performance computing (HPC) shapes
- Optimized shapes

Flexible shapes adalah sebuah templat yang dapat melakukan kustom sejumlah OCPU dan memori ketika melakukan launching atau mengubah VM.
Jenis-jenis flexible shapes :
- VM.Standard.E3.Flex (AMD)
- VM.Standard.E4.Flex (AMD)
- VM.Optimized3.Flex (Intel)
- VM.Standard.A1.Flex (Arm processor dari Ampere)

Jenis-jenis kapasitas :
- On-demand capacity
- Preemptible capacity
- Reserved capacity
- Dedicated capacity 

Komponen ketika membuat VM:
- Availability domain
- Virtual cloud network
- Key pair (untuk Linux)
- Tags
- Password (untuk Windows)
- Image
- Shape
