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

    // For active Class
    var ele = document.querySelectorAll(".navbar-links a");
    var loc = window.location.pathname;
    loc = loc.replace("/","");
    if(loc==="")
        loc = "index.html";
    else
        loc = loc+".html";
    for(var i=0; i<ele.length; i++)
    {
        console.log("Location: "+loc + "\t" + "Mine: "+ele[i].getAttribute("href"));
        if(ele[i].getAttribute("href")===(loc))
        {
            ele[i].classList.add("active");
            if(i!=0)
            {
                ele[0].classList.remove("active");
            }
        }
    }

    
};

// For toggle
function toggleNav()
{
    var navbarLinks = document.getElementById("navbarLinks");
    if(navbarLinks.style.display === "flex")
    {
        navbarLinks.style.display = "none";
    }
    else
    {
        navbarLinks.style.display = "flex";
    }
};