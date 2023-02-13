'use strict'

// меню бургер
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.head__nav');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('menu-open');
      menuBody.classList.toggle('menu-open');
   });
}

// скролл тз меню, кнопок до якоря на странице 
const anchors = document.querySelectorAll('[data-goto]');
const timeout = 800;

if (anchors.length > 0) {
   anchors.forEach(anchor => {
      anchor.addEventListener("click", onAnchorClick);
   });

   function onAnchorClick(e) {
      // получаем объект-ссылку, где был клик
      const anchor = e.target;
      // проверяем заполнен ли атрибут и существует ли данный объект
      if (anchor.dataset.goto && document.querySelector(anchor.dataset.goto)) {
         const gotoBlock = document.querySelector(anchor.dataset.goto);
         // учитываем высоту шапки
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.head').offsetHeight + 120;

         if (iconMenu.classList.contains('menu-open')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('menu-open');
            menuBody.classList.remove('menu-open');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
         });
         e.preventDefault();
      }
   }
}

// скрываем скролл, добавляя паддинг body и объектам с position: fixed
function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
         const el = lockPadding[i];
         el.getElementsByClassName.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

// открываем скролл и убираем паддинг у body и объектов с position: fixed
function bodyUnlock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}