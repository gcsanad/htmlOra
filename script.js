function nagyit(kuldes){
    document.getElementById("kep").setAttribute("src", kuldes.value)
    document.getElementById("kep").setAttribute("height", 600)
    document.getElementById("kep").setAttribute("width", 600)
}

function valtas(){
    document.getElementById("kep").setAttribute("height", document.getElementById("magassag").value)
    document.getElementById("kep").setAttribute("width", document.getElementById("szelesseg").value)
}

function effektek(){
    var effects=" ";
    if(document.getElementById("opacity").checked){
        effects += "filter:opacity(20%)"
    }
    if(document.getElementById("blur").checked){
        effects += "filter:blur(8px)"
    }
    if(effects.length>0){
        document.getElementById("kep").style=effects;
    }
    else{
        document.getElementById("kep").style="none";
    }

}