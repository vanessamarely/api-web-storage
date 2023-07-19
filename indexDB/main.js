let db;

function indexedDBOk() {
  return "indexedDB" in window;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    //No support? Go in the corner and pout.
    if (!indexedDBOk) return;

    // openDatabase returns a DB request object, not a DB.
    let openRequest = indexedDB.open("peopleStore", 1);
    // onerror handler signifies that the database didn't open successfully
    openRequest.onupgradeneeded = function (e) {
      // e is an instance of IDBVersionChangeEvent
      let thisDB = e.target.result;
      // Create an objectStore for this database
      if (!thisDB.objectStoreNames.contains("people")) {
        //thisDB.createObjectStore("people");
        thisDB.createObjectStore("people", {autoIncrement:true});
      }
    };

    openRequest.onsuccess = function (e) {
      console.log("running onsuccess");
      db = e.target.result;
      //Listen for add clicks
      document
        .querySelector("#addButton")
        .addEventListener("click", addPerson, false);
    };

    openRequest.onerror = function (e) {
      //Do something for the error
    };
  },
  false
);

function addPerson(e) {
  //Get a reference to the fields in html
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  console.log("About to add " + name + "/" + email);
  //Get a transaction
  const transaction = db.transaction(["people"], "readwrite");
  const store = transaction.objectStore("people");
  //Define a person
  let person = {
    name,
    email,
    created: new Date(),
  };
  //Perform the add
  //const request = store.add(person, 1);
  const request = store.add(person);
  //Success
  request.onerror = function (e) {
    console.log("Error", e.target.error.name);
    //some type of error handler
  };
  request.onsuccess = function (e) {
    console.log("Woot! Did it");
  };
}
