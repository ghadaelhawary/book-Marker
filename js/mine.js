


var siteName = document.getElementById("siteName");

var siteUrl = document.getElementById("siteUrl");

var submitBtn = document.getElementById("submit");

var tableBody = document.getElementById("tableBody");

var deleteBtn = document.getElementById("delete");

var visitBtn = document.getElementById("visit");

//local storage getting back webSiteArray
var websiteArr = [];

/*starter condition */

if(localStorage.getItem("webSiteArray") != null ){

    var websiteArr =  JSON.parse(localStorage.getItem('webSiteArray'))
    dispalyWebsites();
   

}


function addWebsite(){

// alert("hi");
  var website ={

    sitename : siteName.value,
    siturl :  siteUrl.value
   }

  websiteArr.push(website);


  //var localstgArray = JSON.stringify(websiteArr);

  localStorage.setItem("webSiteArray", JSON.stringify(websiteArr));
 

   console.log(websiteArr);


   
   clearForm();
   dispalyWebsites();
   


}

function dispalyWebsites(){

    var tr= " ";

    for(var i = 0 ; i< websiteArr.length ; i++){

        tr += ` 
        <tr id="tableRow" class=" my-2 p-2" > 
            <td class=" my-2 me-5 d-inline-block fs-3"> ${websiteArr[i].sitename} </td>
            <td class=" my-2 me-5 d-inline-block"> <a href="${websiteArr[i].siturl}" target="_blank" id="visit"  class="btn btn-primary"> visit</a> </td>
            <td class=" my-2 me-5 d-inline-block" > <input type="button" value="delete" class="btn btn-danger " id="delete" onclick="delteWebsit(${i})"></td>
        </tr> `
        
    }

    tableBody.innerHTML = tr;
   
}


function clearForm(){
    siteName.value = " ";
    siteUrl.value = ' ';
}


function delteWebsit(index){

    websiteArr.splice(index,1);
    localStorage.setItem("webSiteArray", JSON.stringify(websiteArr));
    dispalyWebsites();

    console.log(websiteArr);
}

// function visiteWebsit(index){

//     console.log(index.siturl);
// }

