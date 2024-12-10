chrome.storage.sync.get("passwords", ({ passwords }) => {
  const url = window.location.hostname;
  const password = passwords[url];
  if (password) {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => field.value = password);
  }
});
