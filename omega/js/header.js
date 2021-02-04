function openNav() {
    const height = document.getElementById("sidenavInstance").style.height
    console.log(height)
    if (height == 0 || height == "0px") {
        document.getElementById("sidenavInstance").style.height = "auto"
        //filter: blur(3px);
    } 
    else {
        document.getElementById("sidenavInstance").style.height = "0"
    }

}