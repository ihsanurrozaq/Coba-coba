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
      id: 5,
      nama: "eksan",
      kelas: "IPA"
    },
    {
      id: 1,
      nama: "jarwo",
      kelas: "IPS"
    },
    {
      id: 3,
      nama: "sopo",
      kelas: "IPS"
    }
  ]
};

console.table(data.mhs.map((i) => ({ nama: i.nama, kelas: i.kelas })));
console.table(data.mhs.filter((x) => x.kelas == "IPA"));
let loop1 = 0;
let filter = (nama) => {
  data.mhs.map((arr) => {
    data.mhs.map((a, i) => {
      if (nama[i + 1] !== undefined) {
        if (nama[i].id > nama[i + 1].id) {
          let temp = nama[i];
          nama[i] = nama[i + 1];
          nama[i + 1] = temp;
        }
      }
      loop1++;
    });
  });
  return nama;
};
console.table(filter(data.mhs), loop1);

let mhsNew = data.mhs;
const arrSorted = [];

let loop = 0;

const sorting = (arr) => {
  if (arr.length == 0) return;
  let smaller = 0;
  let index = -1;
  mhsNew.forEach((x, arrIndex) => {
    if (arrIndex == 0) {
      smaller = x.id;
      index = arrIndex;
    }

    if (smaller > x.id) {
      smaller = x.id;
      index = arrIndex;
    }
    loop++;
  });
  arrSorted.push(mhsNew[index]);
  mhsNew.splice(index, 1);
  sorting(mhsNew);
};

sorting(mhsNew);
console.table(arrSorted, loop);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
