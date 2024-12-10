document.getElementById('save').addEventListener('click', () => {
  const url = document.getElementById('url').value;
  const password = document.getElementById('password').value;
  chrome.storage.sync.get("passwords", ({ passwords }) => {
    passwords[url] = password;
    chrome.storage.sync.set({ passwords });
  });
});
