document.getElementById('segitigaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if (isValidTriangle(sisiA, sisiB, sisiC)) {
        const keliling = hitungKeliling(sisiA, sisiB, sisiC);
        const luas = hitungLuas(sisiA, sisiB, sisiC);

        document.getElementById('keliling').textContent = `Keliling: ${keliling}`;
        document.getElementById('luas').textContent = `Luas: ${luas}`;
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Ketiga sisi tersebut tidak membentuk segitiga yang valid.');
    }
});

function hitungKeliling(a, b, c) {
    return a + b + c;
}

function hitungLuas(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function isValidTriangle(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}