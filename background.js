chrome.action.onClicked.addListener((tab) => {
  // Se quiser rodar somente se estiver na URL do WhatsApp:
  // if (tab.url.includes('web.whatsapp.com')) {
  //   ...
  // }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
