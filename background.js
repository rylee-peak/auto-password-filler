chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ passwords: {} });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlContains: '' },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
