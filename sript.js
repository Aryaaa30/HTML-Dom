function kirimData() {
    const form = document.getElementById('peminatanForm');
    const formData = new FormData(form);

    const nama = formData.get('Nama');
    const nim = formData.get('NIM');
    const peminatan = formData.get('Peminatan');
    const alamat = formData.get('Alamat');
    const semester = formData.get('Semester');
    const angkatan = formData.get('Angkatan');
    const tanggal = formData.get('Tanggal');

    alert(`
        Nama: ${nama}
        NIM: ${nim}
        Peminatan: ${peminatan}
        Alamat: ${alamat}
        Semester: ${semester}
        Angkatan: ${angkatan}
        Tanggal Lahir: ${tanggal}
    `);

    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Data Pendaftaran</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Peminatan:</strong> ${peminatan}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <p><strong>Semester:</strong> ${semester}</p>
        <p><strong>Angkatan:</strong> ${angkatan}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    `;
}