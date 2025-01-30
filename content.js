
  (function() {
    // Abre o menu para capturar as tags
    document.querySelector("#labels-filter > div > div").click();
  
    setTimeout(() => {
  
      // Captura as tags existentes
      const tagEls = document.querySelectorAll('li[data-animate-dropdown-item="true"] ._ao3e');
      const tagSet = new Set();
      tagEls.forEach(el => tagSet.add(el.textContent.trim()));
  
      // Lista de tags
      const tagNames = Array.from(tagSet);
  
      // Localiza o HEADER
      const headerEl = document.querySelector('header.xa1v5g2.x1n2onr6.x9f619.x78zum5.x6s0dn4');
      headerEl.style.width = "200px";
  
      if (!headerEl) {
        console.warn('Não foi encontrado o header no seletor desejado!');
        return;
      }
  
      // Força o <header> a ter position relative + z-index alto
      headerEl.style.position = 'relative';
      headerEl.style.zIndex = '1000';
  
  
      //300px
      // Cria o container “Pastas”
      const containerHTML = `
        <div id="folder-view-container" style="
          position: absolute;
          top: 50vmin;
          left: 0;
          z-index: 9999;
          width: 200px;
          background: #202C33;
          color: #FFFFFF;
          font-family: sans-serif;
          font-size: 14px;
          border-right: 1px solid #3b4a54;
        ">
          <h3 style="
            margin: 0;
            padding: 8px;
            font-size: 16px;
            background: #202C33;
            border-bottom: 1px solid #3b4a54;
            text-align: center;
          ">Pastas</h3>
          <div id="folder-list-container" style="
            max-height: 20vmin;
            overflow-y: auto;
          ">
            <ul id="folder-list" style="
              list-style: none;
              margin: 0;
              padding: 0;
            "></ul>
          </div>
        </div>
      `;
  
      // Insere o container no <header>
      headerEl.insertAdjacentHTML('afterbegin', containerHTML);
  
      // Preenche a lista de pastas
      const folderList = headerEl.querySelector('#folder-list');
      if (!folderList) return;
  
      function addItem(tag) {
        folderList.insertAdjacentHTML('beforeend', `
          <li class="folder-list-item" style="
            padding: 8px;
            border-bottom: 1px solid #3b4a54;
            cursor: pointer;
            background: #202C33;
          ">
            <span class="folder-list-item-name" style="margin-left: 4px;">${tag}</span>
          </li>
        `);
      }
  
      // Cria a pasta "All" e depois as demais
      addItem('All');
      tagNames.forEach(t => addItem(t));
  
      // Ao clicar em uma pasta:
      folderList.addEventListener('click', (e) => {
        const item = e.target.closest('.folder-list-item');
        if (item) {
          highlightItem(item);
          const folderName = item.textContent.trim();
          console.log('Selecionado:', folderName);
  
            if(folderName === 'All') {
  
                document.querySelector("#all-filter").click();
  
            }else{
          // 1) Abre o menu
          document.querySelector("#labels-filter > div > div").click();
  
          // 2) Aguarda meio segundo e clica na tag correspondente
          setTimeout(() => {
            const labelItems = document.querySelectorAll('li[data-animate-dropdown-item="true"] ._ao3e');
            for (let labelEl of labelItems) {
              if (labelEl.textContent.trim() === folderName) {
                labelEl.closest('li[data-animate-dropdown-item="true"]').click();
                break;
              }
            }
          }, 500);
            }
        }
      });
  
      // Para manter clicável novamente depois da captura
      document.querySelector("#labels-filter > div > div").click();
  
      // Função para destacar o item selecionado
      function highlightItem(li) {
        folderList.querySelectorAll('.folder-list-item')
          .forEach(el => el.style.background = '#202C33');
        li.style.background = '#2F3E45';
      }
      
    }, 1000);
  })();
  
