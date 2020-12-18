export const menuPicPaths = {
  1: "About.png",
  2: "Business.png",
  3: "Shareholders.png",
  4: "Press.png",
  5: "Youth.png",
  6: "Anti-corruption.png",
  7: "Youth.png",
  8: "Press.png",
};

export const initialMenuItems = [
  {
    name_ru: "Бизнесу",
    name_en: "To business",
    name_uz: "Бизнесга оид",
    img:
      "http://webdev.ung.uz/media/static/menu/headline_shutterstock_243762007_pozHlkm.jpg",
    url: "/business",
    id: 2,
    sub_category: [
      {
        name_ru: "Локализация",
        name_en: "Localization",
        name_uz: "Маҳаллийлаштириш",
        id: 3,
        url: "/localization",
        redir: {
          name_ru: "Локализация",
          name_en: "Localization",
          name_uz: "Маҳаллийлаштириш",
          id: 9,
          sub_category: [
            {
              category: 9,
              subcategory_ru: "Локализация производства",
              subcategory_en: "Localization of production",
              subcategory_uz: "Ишлаб чиқаришни маҳаллийлаштириш",
              id: 26,
            },
            {
              category: 9,
              subcategory_ru: "Программа локализации АО «Узбекнефтегаз»",
              subcategory_en: "Localization program JSC «Uzbekneftgaz»",
              subcategory_uz: "«Ўзбекнефтгаз» АЖнинг маҳаллийлаштириш дастури",
              id: 25,
            },
            {
              category: 9,
              subcategory_ru: "Цели сокращения импорта",
              subcategory_en: "The goal of reducing imports",
              subcategory_uz: "Импортни қисқартиришнинг мақсадли кўрсаткичлари",
              id: 24,
            },
            {
              category: 9,
              subcategory_ru:
                "Потребность в материально-технических ресурсах и услугах",
              subcategory_en:
                "Need for material and technical resources and services",
              subcategory_uz:
                "Моддий-техник ресурслар ва хизматларга бўлган эҳтиёж",
              id: 23,
            },
            {
              category: 9,
              subcategory_ru: "Промышленная ярмарка и Кооперационная биржа",
              subcategory_en: "Industrial fair and Cooperative exchange",
              subcategory_uz: "Саноат ярмаркаси ва кооперация биржаси",
              id: 21,
            },
          ],
        },
      },
      {
        name_ru: "Легальная информация",
        name_en: "Legal information",
        name_uz: "Хуқуқий маълумотлар",
        id: 4,
        url: "/legal-info",
        redir: null,
      },
      {
        name_ru: "Товары",
        name_en: "Merchandises",
        name_uz: "Махсулотлар",
        id: 2,
        url: "/products",
        redir: null,
      },
      {
        name_ru: "Конкурсы",
        name_en: "Procurement",
        name_uz: "Конкурслар",
        id: 1,
        url: "/tender",
        redir: null,
      },
    ],
  },
  {
    name_ru: "О нас",
    name_en: "About us",
    name_uz: "Биз ҳақимизда",
    img:
      "http://webdev.ung.uz/media/static/menu/aaron-burden-dXYE1d08BiY-unsplash.jpg",
    url: "/about",
    id: 3,
    sub_category: [
      {
        name_ru: "Нормативно-правовые акты",
        name_en: "Regulations",
        name_uz: "Соҳага оид меъёрий хужжатлар",
        id: 5,
        url: "/regulations",
        redir: {
          name_ru: "Нормативно-правовые акты",
          name_en: "Regulations",
          name_uz: "Соҳага оид меъёрий хужжатлар",
          id: 8,
          sub_category: [
            {
              category: 8,
              subcategory_ru: "О безопасности",
              subcategory_en: "About security",
              subcategory_uz: "UZ: О безопасности",
              id: 20,
            },
            {
              category: 8,
              subcategory_ru: "Законы Республики Узбекистан",
              subcategory_en: "Laws of the Republic of Uzbekistan",
              subcategory_uz: "UZ: Laws of the Republic of Uzbekistan",
              id: 19,
            },
            {
              category: 8,
              subcategory_ru:
                "Указы, Постановления и Распоряжения Президента Республики Узбекистан",
              subcategory_en:
                "Decrees, Resolutions and Orders of the President of the Republic of Uzbekistan",
              subcategory_uz:
                "O'zbekiston Respublikasi Prezidentining Farmonlari, qarorlari va farmoyishlari",
              id: 18,
            },
            {
              category: 8,
              subcategory_ru: "Для хозяйствующих субъектов",
              subcategory_en: "Economic entity",
              subcategory_uz: "Тадбиркорлик субъектлари учун",
              id: 22,
            },
          ],
        },
      },
      {
        name_ru: "История общества",
        name_en: "History of society",
        name_uz: "Жамият тарихи",
        id: 7,
        url: "/history",
        redir: null,
      },
      {
        name_ru: "Организационная структура",
        name_en: "Organizational Structure",
        name_uz: "Ташкилий тузилма",
        id: 6,
        url: "/departments",
        redir: null,
      },
    ],
  },
  {
    name_ru: "Открытые данные",
    name_en: "Open Data",
    name_uz: "Open Data",
    img:
      "http://webdev.ung.uz/media/static/menu/headline_shutterstock_243762007.jpg",
    url: "/open-data",
    id: 1,
    sub_category: [],
  },
];

export const menuItems = [
  {
    id: 1,
    name: "About us",
    url: "/about",
    children: [
      {
        id: 1,
        name: "History of society",
        url: "/history",
      },
      {
        id: 2,
        name: "Organizational structure",
        url: "/departments",
      },
      {
        id: 3,
        name: "Structural subdivision",
        url: "/structure",
      },
      {
        id: 4,
        name: "Management",
        url: "/management",
      },
      {
        id: 5,
        name: "The objectives and activities",
        url: "/aims",
      },
      {
        id: 6,
        name: "Supervisory Board",
        url: "/supervisor",
      },
      {
        id: 7,
        name: "Revision Commission",
        url: "/audit",
      },
      {
        id: 8,
        name: "Internal Audit Service",
        url: "/internal",
      },
      {
        id: 9,
        name: "Society Development Strategy",
        url: "/strategy",
      },
      {
        id: 10,
        name: "Implementation of the basic parameters of a business plan",
        url: "/business-plan",
      },
      {
        id: 11,
        name: "Trades committee",
        url: "/trade-union",
      },
      {
        id: 12,
        name: "Scientific and Technical Council",
        url: "/scientech",
      },
      {
        id: 13,
        name: "Regulations",
        url: "/regulation",
      },
      {
        id: 14,
        name: "Contacts",
        url: "/contacts",
      },
      {
        id: 15,
        name: "FAQ",
        url: "/faq",
      },
    ],
  },
  {
    id: 2,
    name: "To business",
    url: "/business",
    children: [
      {
        id: 1,
        name: "Legal information",
        url: "/legal-info",
      },
      {
        id: 2,
        name: "Procurement",
        url: "/tender",
        children: [],
      },
      {
        id: 3,
        name: "Localization",
        url: "/localization",
        children: [],
      },
      {
        id: 4,
        name: "Merchandises",
        url: "/products",
      },
    ],
  },
  {
    id: 3,
    name: "Investor and Shareholder",
    url: "/shareholders",
    children: [
      {
        id: 1,
        name: "Share capital structure",
        url: "/share-capital",
      },
      {
        id: 2,
        name: "Common Meeting of Shareholders",
        url: "/announcements",
        children: [
          {
            id: 1,
            name: "GMS Announcement",
            url: "/1",
          },
          {
            id: 2,
            name: "GMS Voting Results",
            url: "/2",
          },
        ],
      },
      {
        id: 4,
        name: "Disclosures Information",
        url: "/open",
        children: [
          {
            id: 1,
            name: "Material facts",
            url: "/1",
          },
          {
            id: 2,
            name: "Prospectus for the issue of securities",
            url: "/2",
          },
          {
            id: 3,
            name: "Suggested Profit Distribution",
            url: "/3",
          },
          {
            id: 4,
            name: "Dividends",
            url: "/4",
          },
          {
            id: 5,
            name: "List of Affiliated persons",
            url: "/5",
          },
        ],
      },
      {
        id: 5,
        name: "Charter and internal documents",
        url: "/charter-regulations",
      },
      {
        id: 6,
        name: "Corporation Control Codex",
        url: "/corporate-governance",
      },
      {
        id: 7,
        name: "Reports",
        url: "/reports",
        children: [
          {
            id: 1,
            name: "IFRS reports",
            url: "/1",
          },
          {
            id: 2,
            name: "Quarterly reports",
            url: "/2",
          },
          {
            id: 3,
            name: "Annual report",
            url: "/3",
          },
          {
            id: 4,
            name: "Audit report",
            url: "/4",
          },
          {
            id: 5,
            name: "Performance KPI",
            url: "/5",
          },
        ],
      },
      {
        id: 8,
        name: "Investment projects",
        url: "/investment-projects",
      },
      {
        id: 9, // !!! LAST
        name: "Redemption of shares",
        url: "/redemption-of-shares",
      },
    ],
  },
  {
    id: 4,
    name: "News press center",
    url: "/press",
    children: [],
  },
  {
    id: 5,
    name: "Youth policy",
    url: "/youth",
    children: [],
  },
  {
    id: 6,
    name: "Against corruption",
    url: "/anti-corruption",
    children: [
      {
        id: 1,
        name: "Statement JSC «Uzbekneftgaz»",
        url: "/ung-statement",
      },
      {
        id: 2,
        name: "Local regulatory documents",
        url: "/local-regulations",
      },
      {
        id: 3,
        name: "Fight against corruption",
        url: "/aginst-corruption",
      },
      {
        id: 4,
        name: "Events",
        url: "/events",
      },
    ],
  },
  {
    id: 7,
    name: "Action strategy",
    url: "",
    children: [
      {
        id: 1,
        name: "Ministry of Energy of the Republic of Uzbekistan",
        url: "//minenergy.uz",
      },
      {
        id: 2,
        name: "JSC «Uztransgaz»",
        url: "//uztransgaz.uz",
      },
      {
        id: 3,
        name: "JSC «HUDUDGAZ»",
        url: "//hududgaz.uz",
      },
      {
        id: 4,
        name: "Development strategy center",
        url: "//strategy.uz",
      },
      {
        id: 5,
        name: "Unified Portal of interactive public services",
        url: "//my.gov.uz",
      },
    ],
  },
  {
    id: 8,
    name: "Open Data",
    url: "/open-data",
    children: [],
  },
];
