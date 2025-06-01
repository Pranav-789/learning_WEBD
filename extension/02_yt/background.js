let tabsInSession = 0;
let tracker = [];

function isValidUrl(url){
    if(url === "") return false;
    const invalids = ["google.com", "bing.com", "yahoo.com"];
    const result = invalids.some(pattern => url.includes(pattern));
    return !result;
}

function startTracking(tabId, url){
    if(isValidUrl(url) === false) return;
    
    tabsInSession++;
    let tab = {
        id: tabsInSession,
        startTime: Date.now(),
        url: url,
    }
    tracker.push(tab);
}

