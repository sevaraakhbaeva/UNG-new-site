export const menuPicPaths = {
  1: "About.png",
  15: "Business.png",
  32: "Shareholders.png",
  52: "Press.png",
  54: "Youth.png",
  59: "Anti-corruption.png",
  64: "Youth.png",
  70: "Press.png",
};

export const menuItems = [
  {
    id: 1,
    name: "Kompaniya haqida",
    url: "/about",
    children: [
      {
        id: 2,
        name: "Жамият тарихи",
        url: "/history",
      },
      {
        id: 3,
        name: "Tashkiliy tuzilma",
        url: "/departments",
      },
      {
        id: 4,
        name: "Tizim tarkibiga kiruvchi jamiyatlar",
        url: "/structure",
      },
      {
        id: 5,
        name: "Rahbariyat",
        url: "/management",
      },
      {
        id: 6,
        name: "Faoliyat maqsadi va vazifalari",
        url: "/aims",
      },
      {
        id: 7,
        name: "Kuzatuv kengashi",
        url: "/supervisor",
      },
      {
        id: 8,
        name: "Taftish komissiyasi",
        url: "/audit",
      },
      {
        id: 9,
        name: "Ichki audit xizmati",
        url: "/internal",
      },
      {
        id: 10,
        name: "Jamiyatning strategik rivojlanishi",
        url: "/strategy",
      },
      {
        id: 11,
        name: "Biznes rejaning asosiy parametrlarini bajarilishi",
        url: "/business-plan",
      },
      {
        id: 12,
        name: "Kasaba uyushmasi",
        url: "/trade-union",
      },
      {
        id: 13,
        name: "Ilmiy texnik kengashi",
        url: "/scientech",
      },
      {
        id: 14,
        name: "Sohaga oid me’yoriy hujjatlar",
        url: "/regulation",
      },
      {
        id: 72,
        name: "Контакты",
        url: "/contacts",
      },
      {
        id: 73, // !!! LAST
        name: "FAQ",
        url: "/faq",
      },
    ],
  },
  {
    id: 15,
    name: "Бизнесга оид",
    url: "/business",
    children: [
      {
        id: 16,
        name: "Хуқуқий маълумотлар",
        url: "/legal-info",
      },
      {
        id: 17,
        name: "Конкурслар",
        url: "/tender",
        children: [
          {
            id: 18,
            name: 'АО "Узбекнефтегаз"',
            url: "/1",
          },
          {
            id: 19,
            name: '"Шўртан" НГҚЧБ',
            url: "/2",
          },
          {
            id: 20,
            name: '"Муборак" НГҚЧБ',
            url: "/3",
          },
          {
            id: 21,
            name: '"Газли" НГҚЧБ',
            url: "/4",
          },
          {
            id: 22,
            name: '"Устюрт" ГҚЧБ',
            url: "/5",
          },
          {
            id: 23,
            name: "Инвестицион лойихалар доирасидаги конкурслар",
            url: "/6",
          },
        ],
      },
      {
        id: 24,
        name: "Маҳаллийлаштириш",
        url: "/localization",
        children: [
          {
            id: 25,
            name: "Ишлаб чиқаришни маҳаллийлаштириш",
            url: "/1",
          },
          {
            id: 26,
            name: "«Ўзбекнефтгаз» АЖнинг маҳаллийлаштириш дастури",
            url: "/2",
          },
          {
            id: 27,
            name: "Импортни қисқартиришнинг мақсадли кўрсаткичлари",
            url: "/3",
          },
          {
            id: 28,
            name: "Моддий-техник ресурслар ва хизматларга бўлган эҳтиёж",
            url: "/4",
          },
          {
            id: 29,
            name: "Тадбиркорлик субъектлари учун",
            url: "/5",
          },
          {
            id: 30,
            name: "Саноат ярмаркаси ва кооперация биржаси",
            url: "/6",
          },
        ],
      },
      {
        id: 31,
        name: "Махсулотлар",
        url: "/products",
      },
    ],
  },
  {
    id: 32,
    name: "Акциядор ва Инвесторлар",
    url: "/shareholders",
    children: [
      {
        id: 33,
        name: "Акциядорлик капиталининг таркиби",
        url: "/share-capital",
      },
      {
        id: 34,
        name: "Акциядорлар йиғилиши",
        url: "/announcements",
        children: [
          {
            id: 35,
            name: "АУЙ хабарлари",
            url: "/1",
          },
          {
            id: 36,
            name: "АУЙ овоз бериш натижалари",
            url: "/2",
          },
        ],
      },
      {
        id: 37,
        name: "Ошкоралик маълумотлар",
        url: "/open",
        children: [
          {
            id: 38,
            name: "Мухим фактлар",
            url: "/1",
          },
          {
            id: 39,
            name: "Қимматли қоғозлар эмиссия проспекти",
            url: "/2",
          },
          {
            id: 40,
            name: "Тавсия қилинган соф фойда тақсимоти",
            url: "/3",
          },
          {
            id: 41,
            name: "Дивидендлар",
            url: "/4",
          },
          {
            id: 42,
            name: "Жамият аффиланган шахслари рўйхати",
            url: "/5",
          },
        ],
      },
      {
        id: 43,
        name: "Устав ва ички низомлар",
        url: "/charter-regulations",
      },
      {
        id: 44,
        name: "Корпоратив бошқарув кодекси",
        url: "/corporate-governance",
      },
      {
        id: 45,
        name: "Ҳисоботлар",
        url: "/reports",
        children: [
          {
            id: 46,
            name: "MҲХС бўйича консолидациялашган молиявий ҳисобот",
            url: "/1",
          },
          {
            id: 47,
            name: "Чораклик ҳисоботлар",
            url: "/2",
          },
          {
            id: 48,
            name: "Йиллик ҳисоботлар",
            url: "/3",
          },
          {
            id: 49,
            name: "Аудитор хулосаси",
            url: "/4",
          },
          {
            id: 50,
            name: "СМК бажарилиши",
            url: "/5",
          },
        ],
      },
      {
        id: 51,
        name: "Инвестицион лойихалар",
        url: "/investment-projects",
      },
    ],
  },
  {
    id: 52,
    name: "Матбуот маркази",
    url: "/press",
    children: [
      {
        id: 53,
        name: "Янгиликлар",
        url: "/news",
      },
    ],
  },
  {
    id: 54,
    name: "Ёшлар сиёсати",
    url: "/youth",
    children: [
      {
        id: 55,
        name: "Ёшлар марказининг ташкилий тузилмаси",
        url: "/structure",
      },
      {
        id: 56,
        name: "Ёшлар маркази янгиликлари",
        url: "/news",
      },
      {
        id: 57,
        name: "Фото лавҳалар",
        url: "/photo",
      },
      {
        id: 58,
        name: "Медиа кутибхона",
        url: "/video",
      },
    ],
  },
  {
    id: 59,
    name: "Коррупцияга қарши",
    url: "/anti-corruption",
    children: [
      {
        id: 60,
        name: '"Ўзбекнефтгаз" АЖ баёноти',
        url: "/ung-statement",
      },
      {
        id: 61,
        name: "Локал норматив ҳужжатлар",
        url: "/local-regulations",
      },
      {
        id: 62,
        name: "Коррупцияга қарши курашиш",
        url: "/aginst-corruption",
      },
      {
        id: 63,
        name: "Тадбирлар",
        url: "/events",
      },
    ],
  },
  {
    id: 64,
    name: "Ҳаракатлар стратегияси",
    url: "/action-strategies",
    children: [
      {
        id: 65,
        name: "Ўзбекистон Республикаси Энергетика вазирлиги",
        url: "",
      },
      {
        id: 66,
        name: '"Ўзтрансгаз" Акциядорлик жамияти',
        url: "",
      },
      {
        id: 67,
        name: '"ХУДУДГАЗТАЪМИНОТ" Акциядорлик Жамияти ',
        url: "",
      },
      {
        id: 68,
        name: '"ТАРАҚҚИЁТ СТРАТЕГИЯСИ" МАРКАЗИ',
        url: "",
      },
      {
        id: 69,
        name: "Ягона интерактив давлат хизматлари портали",
        url: "",
      },
    ],
  },
  {
    id: 70,
    name: "Open Data",
    url: "/open-data",
    children: [
      {
        id: 71,
        name: "Open Data",
        url: "/1",
      },
    ],
  },
];
