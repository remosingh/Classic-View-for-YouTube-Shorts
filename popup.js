document.addEventListener('DOMContentLoaded',() => {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        // and use that tab to fill in out title and url
        var tab = tabs[0];
        var url = tab.url
        if(url.includes("shorts") && url.includes("youtube")) {
            let parts = url.split("/")
            let lastOne = parts[parts.length - 1]
            let newUrl = "https://www.youtube.com/watch?v=" + lastOne
            chrome.tabs.update(undefined,{"url":newUrl});
        } else {
        }
    });
})