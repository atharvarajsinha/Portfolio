function includeHTML()
{
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++)
    {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file)
        {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if (this.readyState == 4)
                {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
    var ele = document.querySelectorAll(".navbar a");
    var loc = window.location.pathname;
    loc = loc.replace("/","");
    for(var i=1; i<ele.length; i++)
    {
        if(ele[i].getAttribute("href")===(loc))
        {
            ele[i].classList.add("active");
            if(i!=1)
            {
                ele[i-1].classList.remove("active");
                ele[1].classList.remove("active");
            }
        }
    }
};