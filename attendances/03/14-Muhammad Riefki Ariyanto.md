<h1>Pertemuan Minggu-03  Infrastructure as a Service (IaaS)-Compute</h1>

Materi singkat pada minggu ke 03 
Software as a Service (SaaS), layanan Cloud pada jenis ini disediakan dalam bentuk perangkat lunak. 
Contoh dari SaaS adalah Google Apps (Docs, Spreadsheet, dll), Office 365, dan Creative Cloud dan Oracle Cloud Infrastructure.

Oracle Cloud Infrastructure
Infrastructure menawarkan 2 jenis instances yaitu bare metal dan virtual machine (VM)
Bare Metal: merupakan instances komputasi bare metal yang memberi Anda akses ke server 
fisik khusus untuk kinerja tertinggi dan isolasi yang kuat

Virtual Machine: (VM) adalah lingkungan komputasi independen secara virtual 
yang berjalan di atas perangkat keras fisik bare metal.

membuat sebuah compute instance, Anda dapat memilih jenis instance yang sesuai kebutuhan berdasarkan karakteristik 
sumber daya misalnya jumlah core CPU yang dibutuhkan, jumlah memori, dan sumber daya jaringan.

Jenis shapes
OCI menawarkan berbagai variasi shapes.
• Standard shapes: dirancang untuk kebutuhan umum yang banyak digunakan pada aplikasi-aplikasi dan use cases pada umumnya.
• DenseIO shapes: dirancang untuk basis data yang besar, seperti big data dan aplikasi-aplikasi yang membutuhkan performa storage yang tinggi
• GPU shapes: dirancang untuk akselerasi pada hardware terutama kebutuhan GPU 
• High performance computing (HPC) shapes: dirancang untuk komputasi performa tinggi yang membutuhkan frekuensi prosesor core yang tinggi 
• Optimized shapes: dirancang untuk komputasi tingkat tinggi pada frekuensi core prosesor.

Flexible shapes
Jenis-jenis flexible shapes yang tersedia:
VM.Standard.E3.Flex (AMD)
VM.Standard.E4.Flex (AMD)
VM.Optimized3.Flex (Intel)
VM.Standard.A1.Flex (Arm processor dari Ampere)

Komponen ketika membuat VM
Availability domain
Virtual cloud network
Key pair (untuk Linux)
Tags
Password (untuk Windows)
Image
Shape

Jenis-jenis Instance
Kita dapat memilih kapasitas tiap jenis host yang digunakan untuk VM.
On-demand capacity
Preemptible capacity
Reserved capacity
Dedicated capacity





