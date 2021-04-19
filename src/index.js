import "./styles.css";

const data = {
  dry_cough: [0, 1, 1, 0, 0, 1, 1, 0, 1, 1],
  sour_throat: [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  mhs: [
    {
      id: 7,
      nama: "baguse",
      kelas: "IPA"
    },
    {
      id: 4,
      nama: "eksan",
      kelas: "IPA"
    },
    {
      id: 3,
      nama: "sopo",
      kelas: "IPS"
    }
  ]
};

console.table(data.mhs.map(i => ({nama: i.nama, kelas: i.kelas})));
console.table(data.mhs.filter(x => x.kelas=="IPA"));
console.table(data.mhs.map((a, index) => {
  for (let i = 0; i < data.mhs.length; i++) {
    if (a >=)
  }
}));

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
