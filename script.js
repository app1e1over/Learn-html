function Rebuild(){
    var all = document.querySelectorAll(".Text");
    for(let y=0; y<all.length; y++){
        var parent = all[y]
        var text = parent.textContent.split(" ");
        for(let i=0; i<text.length; i++){
            var x= document.createElement("LABEL");
            x.innerText = text[i];
            x.className = "higlightLabel";
            parent.appendChild(x);
        }
    }
}