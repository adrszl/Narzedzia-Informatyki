var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
        }
    };
    xhttp.open("GET", "zadanie6,1.xml", true);
    xhttp.send();

    function myFunction(xml) {
    var x, y, cloneNode, i, xmlDoc, names, surnames, sexs;
    var professions, years, places, postal_codes, citys;
    var salarys, phones;
    xmlDoc = xml.responseXML;
    names = "";
    surnames = "";
    sexs = "";
    professions = "";
    years = "";
    places = "";
    postal_codes = "";
    citys = "";
    salarys = "";
    phones = "";
    x = xmlDoc.getElementsByTagName('person')[0];
    cloneNode = x.cloneNode(true);
    xmlDoc.documentElement.appendChild(cloneNode);


    y = xmlDoc.getElementsByTagName("name");
    for (i = 0; i < y.length; i++) {
        names += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("surname");
    for (i = 0; i < y.length; i++) {
        surnames += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("sex");
    for (i = 0; i < y.length; i++) {
        sexs += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("profession");
    for (i = 0; i < y.length; i++) {
        professions += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("year");
    for (i = 0; i < y.length; i++) {
        years += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("place");
    for (i = 0; i < y.length; i++) {
        places += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("postal_code");
    for (i = 0; i < y.length; i++) {
        postal_codes += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("city");
    for (i = 0; i < y.length; i++) {
        citys += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("salary");
    for (i = 0; i < y.length; i++) {
        salarys += y[i].childNodes[0].nodeValue + "<br>";
    }

    y = xmlDoc.getElementsByTagName("phone");
    for (i = 0; i < y.length; i++) {
        phones += y[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("xml_result_name").innerHTML = names;
    document.getElementById("xml_result_surname").innerHTML = surnames;
    document.getElementById("xml_result_sex").innerHTML = sexs;
    document.getElementById("xml_result_profession").innerHTML = professions;
    document.getElementById("xml_result_year").innerHTML = years;
    document.getElementById("xml_result_place").innerHTML = places;
    document.getElementById("xml_result_postal_code").innerHTML = postal_codes;
    document.getElementById("xml_result_city").innerHTML = citys;
    document.getElementById("xml_result_salary").innerHTML = salarys;
    document.getElementById("xml_result_phone").innerHTML = phones;
}
