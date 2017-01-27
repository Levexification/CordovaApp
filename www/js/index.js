/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//Store data
document.getElementById("storeData").addEventListener("click", storeData);

var i = 0;

function storeData(){

    var what = document.getElementById("what");
    var where = document.getElementById("where");
    var when = document.getElementById("when");

    var myData = { "what": what.value, "where": where.value, "when": when.value};
    var myJSON = JSON.stringify(myData);

    localStorage.setItem("data", myJSON);
}

//Reads data
document.getElementById("print").addEventListener("click", printData);
function printData(){



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

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

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

app.initialize();