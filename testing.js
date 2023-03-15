let table = document.querySelector("table");
let sortOrder = 'asc';
let data = [
  { id: 1, name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { id: 2, name: "Z Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { id: 3, name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { id: 4, name: "A Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { id: 5, name: "Monte Amiata", height: 1738, place: "Siena" }
];
let headers = Object.keys(data[0]);

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function clearTable() {
  table.innerHTML = '';
}

function sortByName() {
  clearTable();
  const sortCompareAZ = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  
    const sortCompareZA = (a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    }
  const sortedData = data.sort(sortOrder === 'asc' ? sortCompareAZ : sortCompareZA);
  sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  generate(table, headers, sortedData);
}

function generate(newTable, headers, newData) {
  generateTableHead(newTable, headers);
  generateTable(newTable, newData);
}

// Initial Run
generate(table, headers, data);