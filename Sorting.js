import { newData } from './script.js';
import { AddAllRows } from './script.js';
let sortIdOrder = 1;
let sortDateTimeOrder = 1;
const DateTime = luxon.DateTime;

const tableDB = document.getElementById("DTable");

let Data = null;

//works
function filterName(data) {
  Data = data;

  //decending
  if (sortIdOrder === -1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("Decending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].name > data[j + 1].name) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  else if (sortIdOrder === 1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("accending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].name < data[j + 1].name) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }
  Data = data;
  clearTable();
  AddAllRows(data);
}

//it finnally works dont touch ever again
function filterTime(data) {

  let TimeTemp1 = "";
  let TimeTemp2 = "";
  // decending
  if (sortDateTimeOrder === 1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortDateTimeOrder *= -1;
    console.log("Decending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        TimeTemp1 = data[j].datetime;
        TimeTemp2 = data[j + 1].datetime;

        //console.log('1', TimeTemp1);
        //console.log('2', TimeTemp2);

        let Temp1 = DateTime.fromFormat(TimeTemp1, 'dd/LL/yyyy hh:mm a').valueOf();
        let Temp2 = DateTime.fromFormat(TimeTemp2, 'dd/LL/yyyy hh:mm a').valueOf();

        //console.log('1', Temp1);
        //console.log('2', Temp2);

        if (Temp1 < Temp2) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  } //accending
  else if (sortDateTimeOrder === -1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortDateTimeOrder *= -1;
    console.log("accending");
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < (data.length - i - 1); j++) {

        TimeTemp1 = data[j].datetime;
        TimeTemp2 = data[j + 1].datetime;

        //console.log('1', TimeTemp1);
        //console.log('2', TimeTemp2);

        let Temp1 = DateTime.fromFormat(TimeTemp1, 'dd/LL/yyyy hh:mm a').valueOf();
        let Temp2 = DateTime.fromFormat(TimeTemp2, 'dd/LL/yyyy hh:mm a').valueOf();

        //console.log('1', Temp1);
        //console.log('2', Temp2);

        if (Temp1 > Temp2) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  clearTable();

  AddAllRows(data);

  Data = data;

}

// if (a.datetime > b.datetime) return -1;
// finally works
function filterID(data) {
  // ID are strings for some reason try to change that
  for (let i = 0; i < data.legnth; i++) {
    data.id[i] = parseInt(data.id[i]);
  };
  if (sortIdOrder === -1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("Decending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].id > data[j + 1].id) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  else if (sortIdOrder === 1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("accending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].id < data[j + 1].id) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  Data = data;
  clearTable();
  AddAllRows(data);
  //Data = document.getElementById("DTable");
}

function filterAgree(data) {
  Data = data;
  //decending
  if (sortIdOrder === -1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("Decending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].agree > data[j + 1].agree) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  else if (sortIdOrder === 1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("accending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (data[j].agree < data[j + 1].agree) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }
  Data = data;
  clearTable();
  AddAllRows(data);
}

function filterSize(data) {
  Data = data;
  //decending
  if (sortIdOrder === -1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("Decending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (SizeStuff(data[j].size) < SizeStuff(data[j + 1].size)) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }

  else if (sortIdOrder === 1) {
    // *= -1 flips the -1 to a 1 and then 1 to -1 so it dosnt need a complex double if statment to work
    sortIdOrder *= -1;
    console.log("accending");

    for (var i = 0; i < data.length; i++) {

      // Last i elements are already in place 
      for (var j = 0; j < (data.length - i - 1); j++) {

        // Checking if the item at present iteration
        // is greater than the next iteration


        if (SizeStuff(data[j].size) > SizeStuff(data[j + 1].size)) {

          // If the condition is true then swap them
          var temp = data[j]
          data[j] = data[j + 1]
          data[j + 1] = temp
        }
      }
    }
  }
  Data = data;
  clearTable();
  AddAllRows(data);
}

function SizeStuff(size) {
  switch (size) {
    case "Extra Small":
      return 1;
    case "Small":
      return 2;
    case "Medium":
      return 3;
    case "Large":
      return 4;
    case "Extra Large":
      return 5;
    case "Extra Extra Large":
      return 6;
    case "Extra Extra Extra Large":
      return 7;
  }
}


function clearTable() {
  let delAll = true;
  //while loop is here to not have to write for loop logic for the length of the table
  while (delAll == true) {
    try {
      //deletes the 2nd position in the table as the 1st is the labels this way it will remove all the data one by one until there is no data left
      tableDB.deleteRow(1);
      //catch statment is here so that once there is no data in the table left then there will be a index error and the catch will stop the while loop meanng that the table is cleared of all the old data
    } catch {
      delAll = false;
    }
  }
}

// reads when the button is clicked
document.getElementById('FilterByID').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterID(newData)
});

// reads when the button is clicked
document.getElementById('FilterByTime').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterTime(newData)
});

document.getElementById('FilterByName').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterName(newData)
});

document.getElementById('FilterBySlug').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterName(newData)
});

document.getElementById('FilterByAgree').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterAgree(newData)
});

document.getElementById('FilterBySize').addEventListener("click", function() {
  //executes the stuff here for when the button is clicked
  filterSize(newData)
});

//all the sorting is finally done all that you have to do now is update teh HTML table