chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      // Create a new window for the tab groups
      chrome.windows.create({}, function (window) {
        // Sort the tabs by title
        tabs.sort(function (a, b) {
          return a.title.localeCompare(b.title);
        });
  
        // Group the tabs by title
        var currentTitle = "";
        var currentTabIndex = -1;
  
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].title !== currentTitle) {
            currentTitle = tabs[i].title;
            currentTabIndex++;
  
            // Create a new tab group
            chrome.tabs.create({
              url: tabs[i].url,
              windowId: window.id,
              index: currentTabIndex,
            });
          } else {
            // Add the tab to the current tab group
            chrome.tabs.move(tabs[i].id, {
              windowId: window.id,
              index: currentTabIndex + 1,
            });
          }
        }
      });
    });
  });
  