
document.getElementById('app').innerHTML = `
  <h2>Invoice Ayam Hidup</h2>
  <label>Total Berat (kg): <input id="berat" type="number"></label><br>
  <label>Jumlah Kotak: <input id="kotak" type="number" value="1"></label><br>
  <label>Berat Kotak per Box (kg): <input id="beratKotak" type="number" value="8"></label><br>
  <label>Harga per Kg (Rp): <input id="harga" type="number" value="21500"></label><br><br>
  <button onclick="hitung()">Hitung</button>
  <div id="hasil" style="margin-top: 20px;"></div>
`;

function hitung() {
  const berat = parseFloat(document.getElementById('berat').value);
  const kotak = parseInt(document.getElementById('kotak').value);
  const beratKotak = parseFloat(document.getElementById('beratKotak').value);
  const harga = parseFloat(document.getElementById('harga').value);

  const bersih = berat - (beratKotak * kotak);
  const total = bersih * harga;

  document.getElementById('hasil').innerHTML = `
    <strong>Berat Bersih:</strong> ${bersih.toFixed(2)} kg<br>
    <strong>Total Harga:</strong> Rp ${total.toLocaleString('id-ID')}
  `;
}
