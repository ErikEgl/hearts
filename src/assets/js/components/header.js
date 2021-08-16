class Header {
  burgerOpen() {
    const burger = document.querySelector('.header__burger');
    const menuList = document.querySelector('.header__right-wrap');
    const body = document.querySelector('body');
    burger.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('lock');
  }


  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  myFunction() {
    const dropdown = document.querySelector("#myDropdown");
    dropdown.classList.toggle("show");
  }


  render(count) {
    const html = `
        <div class="container">
          <div class="header__wrap">
            <a href="#" class="header__logo"></a>
            <div onclick="headerPage.burgerOpen();" class="header__burger">
              <span></span>
            </div>
            <div class="header__right-wrap">
              <nav class="header__nav-wrap">
                <ul class="header__nav">
                  <li class="header__nav-item"><a href="#">Experiences</a></li>
                  <li class="header__nav-item"><a href="#">Inspiration</a></li>
                  <li class="header__nav-item"><a href="#">Hearts(${count})</a></li>
                  <li class="header__nav-item"><a href="#">Cart(1)</a></li>
                </ul>
              </nav>
              <div class="dropdown">
                <button onclick="headerPage.myFunction()" class="dropbtn">English</button>
                <div id="myDropdown" class="header__dropdown dropdown-content">
                  <a href="#">Norsk</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const mainStore = localStorageUtil.getMain();
headerPage.render(mainStore.length);
