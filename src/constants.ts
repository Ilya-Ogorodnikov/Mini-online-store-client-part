const validRegExForPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;

const REQUIRED_TEXT = 'Поле обязательно для заполнения';

const phoneNumberRegEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const apiKey = 'c3059d8e1b244051bbc23776c2d7c652';

const mapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const BACK_URL = 'http://localhost:8010/';

const footerLinks = [
  {
    title: 'Стартовая страница',
    to: '/',
  },
  {
    title: 'Главная страница',
    to: '',
  },
  {
    title: 'Каталог',
    to: '',
  },
  {
    title: 'Личный кабинет',
    to: '',
  },
  {
    title: 'Корзина',
    to: '/shopping-bag',
  },
  {
    title: 'Избранное',
    to: '/favorite',
  },
];

const settingsForSlider = {
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1600, min: 730 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 730, min: 0 },
      items: 1,
    }
  },
  infinite: true,
  autoPlay: true,
  autoPlaySpeed: 3000,
  arrows: false
};

export {
  validRegExForPassword,
  phoneNumberRegEx,
  REQUIRED_TEXT,
  apiKey,
  footerLinks,
  settingsForSlider,
  mapUrl,
  BACK_URL
};