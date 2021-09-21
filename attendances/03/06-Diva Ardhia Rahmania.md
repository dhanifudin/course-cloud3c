# Rangkuman Minggu ketiga Cloud Computing

## Jenis - Jenis Compute

Oracle Cloud Infrastructure menawarkan 2 jenis instances yaitu bare metal dan virtual machine (VM)

Bare Metal: merupakan instances komputasi bare metal yang memberi Anda akses ke server fisik khusus untuk kinerja tertinggi dan isolasi yang kuat.

Virtual Machine: (VM) adalah lingkungan komputasi independen secara virtual yang berjalan di atas perangkat keras fisik bare metal. Virtualisasi memungkinkan untuk menjalankan beberapa VM yang terisolasi satu sama lain. VM ideal untuk menjalankan aplikasi yang tidak memerlukan kinerja dan sumber daya (CPU, memori, bandwidth jaringan, penyimpanan) dari keseluruhan mesin fisik.


## Jenis - Jenis Instance

Ketika membuat sebuah compute instance, Anda dapat memilih jenis instance yang sesuai kebutuhan berdasarkan karakteristik sumber daya misalnya jumlah core CPU yang dibutuhkan, jumlah memori, dan sumber daya jaringan.

Shapes adalah sebuah templat yang menentukan kebutuhan jumlah CPU, volume memori, dan sumber daya lainnya yang dialokasikan untuk sebuah compute instance. Berikut ini jenis-jenis shape yang tersedia:

- Standard shapes: dirancang untuk kebutuhan umum yang banyak digunakan pada aplikasi-aplikasi dan use cases pada umumnya. Standard shapes menyediakan sumber daya yang seimbang pada core, memori, dan jaringan. Standard shapes tersedia dengan prosesor Intel, AMD, dan Arm-based.
- DenseIO shapes: dirancang untuk basis data yang besar, seperti big data dan aplikasi-aplikasi yang membutuhkan performa storage yang tinggi. Shapes ini mendapat fitur NVMe berbasis SSD.
- GPU shapes: dirancang untuk akselerasi pada hardware terutama kebutuhan GPU termasuk Inter, AMD CPU dan prosesor grafis NVIDIA.
- High performance computing (HPC) shapes: dirancang untuk komputasi performa tinggi yang membutuhkan frekuensi prosesor core yang tinggi dan HPC dalam klaster jaringan yang diakses secara paralel.
- Optimized shapes: dirancang untuk komputasi tingkat tinggi pada frekuensi core prosesor. Shape ini juga cocok untuk kebutuhan HPC dengan low latency. Shape ini juga mendukung cluster networking.

Flexible shapes adalah sebuah templat yang dapat melakukan kustom sejumlah OCPU dan memori ketika melakukan launching atau mengubah VM.

Jenis-jenis flexible shapes yang tersedia:
- VM.Standard.E3.Flex (AMD)
- VM.Standard.E4.Flex (AMD)
- VM.Optimized3.Flex (Intel)
- VM.Standard.A1.Flex (Arm processor dari Ampere)


