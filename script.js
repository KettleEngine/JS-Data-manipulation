import data from "./data.json";
let sortDatetimeOrder = 'asc';
const DateTime = luxon.DateTime;

var table = document.getElementById("DTable");

function formatDate(date) {
  //console.log(date);
  //let dateObject = new Date(date);
  //var hours = dateObject.getHours();
  //var minutes = dateObject.getMinutes();
  //var ampm = hours >= 12 ? 'pm' : 'am';
  //hours = hours % 12;
  //hours = hours ? hours : 12; // the hour '0' should be '12'
  //minutes = minutes < 10 ? '0' + minutes : minutes;
  //var strTime = hours + ':' + minutes + ' ' + ampm;
  //return dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear() + " " + strTime;
  return DateTime.fromSQL(date).toFormat('dd/LL/yyyy t a')
}

function SizeStuff(size) {
  switch (size) {
    case "XS":
      return "Extra Small";
    case "S":
      return "Small";
    case "M":
      return "Medium";
    case "L":
      return "Large";
    case "XL":
      return "Extra Large";
    case "2XL":
      return "Extra Extra Large";
    case "3XL":
      return "Extra Extra Extra Large";
  }
}

function Agree(agree) {
  return (agree == "true" ? "Yes" : "No");
}

const newData = data.map(item => {
  return {
    id: item.id,
    name: `${item.first_name} ${item.last_name}`,
    slug: `${item.first_name.toLowerCase()}-${item.last_name.toLowerCase()}`,
    email: `${item.email}`,
    datetime: formatDate(item.datetime),
    agree: Agree(`${item.agree}`),
    size: SizeStuff(`${item.size}`),
    address: `${item.address.split(" ")}`
  };
});

function AddRow(pos, call_ID, call_Name, call_Slug, call_Email, call_DT, call_Agree, call_Size, call_Addr) {

  var row = table.insertRow(pos);
  var cell_ID = row.insertCell(0);
  var cell_Name = row.insertCell(1);
  var cell_Slug = row.insertCell(2);
  var cell_Email = row.insertCell(3);
  var cell_DateTime = row.insertCell(4);
  var cell_Agree = row.insertCell(5);
  var cell_Size = row.insertCell(6);
  var cell_Address = row.insertCell(7);

  //sets the values
  cell_ID.innerHTML = call_ID;
  cell_Name.innerHTML = call_Name;
  cell_Slug.innerHTML = call_Slug;
  cell_Email.innerHTML = call_Email;
  cell_DateTime.innerHTML = call_DT;
  cell_Agree.innerHTML = call_Agree;
  cell_Size.innerHTML = call_Size;
  cell_Address.innerHTML = call_Addr;
};

export function AddAllRows(data = newData) {
  let flip = 1;
  const sortedData = data;

  for (var i = 1; i < sortedData.length + 1; i++) {
    const rowItem = sortedData[i - 1];
    AddRow(i, rowItem.id, rowItem.name, rowItem.slug, rowItem.email, rowItem.datetime, rowItem.agree, rowItem.size, rowItem.address)
  }
}

export { newData };