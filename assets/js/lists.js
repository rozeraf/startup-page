// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		let listItems = '';
		for (const link of list.links) {
			listItems += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="listItem"
          >${link.name}</a>
      `;
		}

		let item = `
        <div class="list list__${list.id}" id="list_${list.id}">
          <img class="listIcon" src="chrome/icons/${list.icon}.svg" alt="${list.id}">
          ${listItems}
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		let listItems = '';
		for (const link of list.links) {
			listItems += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${link.link}"
          class="listItem"
          >${link.name}</a>
      `;
		}

		let item = `
        <div class="list list__${list.id}" id="list_${list.id}">
        <img class="listIcon" src="chrome/icons/${list.icon}.svg" alt="${list.id}">
          ${listItems}
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();