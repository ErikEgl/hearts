class LocalStorageUtil {
    constructor() {
      this.keyName = 'main';
    }
    getMain() {
      const mainLocalStorage = localStorage.getItem(this.keyName);
      if (mainLocalStorage !== null) {
        return JSON.parse(mainLocalStorage);
      }
      return [];
    }
    putMain(id) {
      let main = this.getMain();
      let pushMain = false;
      const index = main.indexOf(id);
      if (index === -1) {
        main.push(id);
        pushMain = true;
      } else {
        main.splice(index, 1);
      }
      localStorage.setItem(this.keyName, JSON.stringify(main));
      return { pushMain, main };
    }
  }
  
  const localStorageUtil = new LocalStorageUtil();
  