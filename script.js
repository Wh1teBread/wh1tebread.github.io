function setLinks(){
    let links = document.getElementsByClassName("link-container");
    for(let link of links){
        const attr = link.getAttribute("class");
        let text;

        if (attr.includes("telegram")) text = "https://t.me/+iPfIDfzKqT84Y2Zi";
        if (attr.includes("youtube")) text = "https://www.youtube.com/channel/UCGo8qayYoA7kh9sccGNr-Gg";
        if (attr.includes("instagram")) text = "https://www.instagram.com/wh1tebread3?igsh=ZDVocGwyNG92bzZ3";
        if (attr.includes("vk")) text = "https://vk.com/yahlep";
        
        link.addEventListener('click', function () {
            window.location.href = text;
        });
    }
}
setLinks();
