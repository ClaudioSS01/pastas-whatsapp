# Pastas WhatsApp

Extensão simples para adicionar uma organização diferenciada (ex: “pastas”) no WhatsApp Web.  
Ao clicar no ícone da extensão, o arquivo `content.js` é injetado na página do WhatsApp Web, permitindo que você execute funcionalidades personalizadas.

## Como funciona

1. **Manifest (manifest.json)**  
   - Define permissões e informações básicas da extensão.
   - Permite injetar scripts no site `https://web.whatsapp.com/*`.

2. **Background (background.js)**  
   - Escuta o clique no ícone da extensão (`chrome.action.onClicked`).
   - Ao clicar, injeta o script `content.js` na aba ativa (desde que a URL corresponda ao WhatsApp Web).

3. **Content (content.js)**  
   - Contém o código que será executado diretamente na página do WhatsApp Web.
   - Aqui você pode manipular o DOM da página para criar “pastas” ou organizar chats da forma desejada.

## Instalação

1. Baixe ou clone este repositório.
2. Abra o **Google Chrome** e acesse `chrome://extensions`.
3. Ative o modo **Desenvolvedor** (canto superior direito).
4. Clique em **Carregar sem compactação** (ou “Load unpacked” em inglês).
5. Selecione a pasta onde está o arquivo `manifest.json`.
6. A extensão será adicionada e você já poderá clicar no ícone para injetar o script no WhatsApp Web.

## Observações

- **Importante**: O script `content.js` só será injetado ao clicar no ícone da extensão e somente se a aba estiver no domínio `web.whatsapp.com`.
- Para testar alterações em tempo real, basta atualizar a página do WhatsApp Web e clicar novamente no ícone.
- Após editar arquivos do projeto, lembre-se de recarregar a extensão na página `chrome://extensions`.

Feito! Agora você tem uma extensão que adiciona funcionalidades ao WhatsApp Web de forma direta ao clicar no ícone.
