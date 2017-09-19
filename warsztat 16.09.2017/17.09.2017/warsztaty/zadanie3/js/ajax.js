'use strict';
/*definicja funkcji ajax*/
function ajax(ajaxOptions) {

    var options = {
        httpMethod: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions || "text"
    }
    var xmlHttpRaquest = new XMLHttpRequest();

    xmlHttpRaquest.open(options.httpMethod, options.url, true);

    xmlHttpRaquest.onreadystatechange = function () {
        if (xmlHttpRaquest.readyState == 4) {
            if (httpSuccess(xmlHttpRaquest)) {
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML :
                    xmlHttpRaquest.responseText;

                options.onSuccess(returnData);
                xmlHttpRaquest = null;
            } else {
                options.onError(xmlHttpRaquest.statusText);
            }
            options.onComplete(xmlHttpRaquest);

            
        }
    }
    xmlHttpRaquest.send();
    /*funkcja sprawdzająca czy jest OK*/
    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 &&
                httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                (navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined"));
        } catch (e) {
            return false;
        }
    }
    
};

function pobierzDane(){
    ajax({
    type: "GET",
    url:"https://jsonplaceholder.typicode.com/users",
    onError: function(msg){
        console.log(msg);
    },     

onSuccess: function(response){
    var jsonObj =JSON.parse(response);
    
    jsonObj.forEach(function(element){
    var paragraphUserId=document.createElement("p");
    paragraphUserId.innerHTML = "User ID: "+ element.id;
    document.body.appendChild(paragraphUserId);
    
    var paragraphUserName = document.createElement("p");
    paragraphUserName.innerHTML = "User Name: "+ element.name;
    document.body.appendChild(paragraphUserName);
    
    var paragraphURL = document.createElement("p");
    paragraphURL.innerHTML = "User URL: " + element.website;
    document.body.appendChild(paragraphURL);
     });
    
}
    });
}
pobierzDane();
 window.onscroll = function(ev){
     if((window.innerHeight + window.pageYOffset)>= document.body.offsetHeight){
         pobierzDane();
     }
 }
