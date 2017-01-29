//Store data
var storeData = document.getElementById("storedata");

storedata.addEventListener('click', function(evt) {  

    var what = document.getElementById("what");
    var where = document.getElementById("where");
    var when = document.getElementById("when");

    var myData = { "what": what.value, "where": where.value, "when": when.value};
    var myJSON = JSON.stringify(myData);

    localStorage.setItem("data" + localStorage.length, myJSON);

    for(i=0; i<localStorage.length; i++){
      var myJSON = JSON.parse(myData[i]);
      document.getElementById("demo").innerHTML = myObj.what;
    }
}



//Add form
var addForm = document.getElementById("addform");
var checkBox = document.getElementById("check");

addForm.addEventListener('click', function(evt) {
  if (!checkBox.checked) {
    evt.preventDefault();
    var what = document.getElementById("what");
    console.log(what.value);

    var where = document.getElementById("where");
    console.log(where.value);

    var when = document.getElementById("when");
    console.log(when.value);

    var cameraTakePicture = document.getElementById("cameraTakePicture"); 
    console.log(cameraTakePicture.value);
   } 
}, false);

//Captures picture using phone camera
document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
function cameraTakePicture() {
   navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
   });

   function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.height = 100;
      image.width = 100;
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}