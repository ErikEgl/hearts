class Main {

    constructor() {
        this.classNameActive = 'main__trash';
    }

    handleSetLocationStorage(element, id) {
        const { pushMain, main } = localStorageUtil.putMain(id);
        
        if (pushMain) {
            element.classList.add(this.classNameActive);
        } else {
            element.classList.remove(this.classNameActive);
        }
        headerPage.render(main.length);
    }


  render() {
    const mainStore = localStorageUtil.getMain();
    let htmlCatalog = '';

    CATALOG.forEach(({ id, title, text, img, link }) => {

        let activeClass = '';

        if (mainStore.indexOf(id) === -1) {
            activeClass = '';
        } else {
            activeClass = ' '+this.classNameActive;
        }
        
      htmlCatalog += `
                <li class="main__item">
                    <img src="${img}" alt="Img Title" class="main__pic" />
                    <div class="main__info">
                    <div class="main__wrapper">
                        <h2 class="main__title">${title}</h2>
                        <div class="main__add ${activeClass} main__ico" onclick="mainPage.handleSetLocationStorage(this,'${id}');"></div>
                    </div>
                    <p class="main__text">
                        ${text}
                    </p>
                    <a href="${link}" class="main__link">View experience</a>
                    </div>
                </li>
            `;
    });

    const html = `
        <div class="container">
            <ul class="main__wrap">
                ${htmlCatalog}
            </ul>
        </div>
        `;

    ROOT_MAIN.innerHTML = html;
  }
}

const mainPage = new Main();
mainPage.render();
