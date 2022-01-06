<h1>Pertemuan Minggu 12 | | CI/CD </h1>

<h2>Resume Materi </h2>

CI/CD illustration : <br><br>
Continuous Integration [Build -> Test -> Merge] => Continuous Delivery [Automatically Release To Repository] => Continuous Deployment [Automatically Deploy To Production].<br><br>

GitHub Action :
- Action -> logic yang dipakai untuk menjalankan sesuatu
- Artifacts ->
- Event ->
- GitHub-Hosted Runners -> support pada windows, linux dan macOS
- Job -> Kumpulan beberapa action
- Selft-Hostedf Runner -> dipasang pada satu server yang tidak terjangkau oleh connection public
- Step -> diwakili satu action, di definisikan workflow file YAML
- Workflow ->
- Workflow File ->
- Workflow Run ->

Variables :
Pada Common CI/CD System, kita dapat mendefinisikan custom variables.
Contoh pada GitHub Actions:

     env:
       varname1: value1
       varname2: value2
       
Secrets and Token : 
Password, Key, dsb


<h2>Live demo penjelasan singkat</h2>
Workflows dapat dilihat di menu Actions pada GitHub.<br>
Aplikasi Command Line -> digunakan untuk automasi.
<br>
Custom yang perlu diperhatikan adalah pada bagian Dockerfile
