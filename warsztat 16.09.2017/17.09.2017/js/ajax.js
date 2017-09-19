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

    xmlHttpRaquest.open(options.httpMethod, opttions.url, true);

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
            return folse;
        }
    }
};