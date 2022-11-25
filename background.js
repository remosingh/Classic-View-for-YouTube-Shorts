chrome.tabs.onUpdated.addListener(async () => {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            var tab = tabs[0];
            var url = tab.url
            chrome.storage.local.get({
                autoForward: false
            }, function(items) {
              console.log(items.autoForward);
              if(url.includes("shorts") && url.includes("youtube") && items.autoForward === true && !url.includes("/c/")) {
                  console.log("going to auto forward to classic view")
                let parts = url.split("/")
                let lastOne = parts[parts.length - 1]
                let newUrl = "https://www.youtube.com/watch?v=" + lastOne
                chrome.tabs.update(undefined,{"url":newUrl});
            } else {
            }
            });
            
        });


  });