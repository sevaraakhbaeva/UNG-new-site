type MenuObjectProps = { [index: string]: Array<string> };
type MenuObjectOfObjectProps = {
  [index: string]: MenuObjectProps;
};
type menuPicPathsProps = { [index: string]: string };

export const menuPicPaths: menuPicPathsProps = {
  "Kompaniya haqida": "About.png",
  "Бизнесга оид": "Business.png",
  "Aksiyador va investorlar": "Shareholders.png",
  "Matbuot markazi": "Press.png",
  "Yoshlar siyosati": "Youth.png",
  "Korrupsiyaga qarshi": "Anti-corruption.png",
  "Harakatlar strategiyasi": "Youth.png",
  "Open Data": "Press.png",
};

export const menuItems: MenuObjectOfObjectProps = {
  "Kompaniya haqida": {
    "Жамият тарихи": [""],
    "Tashkiliy tuzilma": [""],
    "Tizim tarkibiga kiruvchi jamiyatlar": [""],
    Rahbariyat: [""],
    "Faoliyat maqsadi va vazifalari": [""],
    "Kuzatuv kengashi": [""],
    "Taftish komissiyasi": [""],
    "Ichki audit xizmati": [""],
    "Jamiyatning strategik rivojlanishi": [""],
    "Biznes rejaning asosiy parametrlarini bajarilishi": [""],
    "Kasaba uyushmasi": [""],
    "Ilmiy texnik kengashi": [""],
    "Sohaga oid me’yoriy hujjatlar": [""],
  },
  "Бизнесга оид": {
    "Хуқуқий маълумотлар": [""],
    Конкурслар: [
      'АО "Узбекнефтегаз"',
      '"Шўртан" НГҚЧБ',
      '"Муборак" НГҚЧБ',
      '"Газли" НГҚЧБ',
      '"Устюрт" ГҚЧБ',
      "Инвестицион лойихалар доирасидаги конкурслар",
    ],
    Шартномалар: ['"Устюрт" ГҚЧБ', '"Газли" НГҚЧБ'],
    Маҳаллийлаштириш: [
      "Ишлаб чиқаришни маҳаллийлаштириш",
      "«Ўзбекнефтгаз» АЖнинг маҳаллийлаштириш дастури",
      "Импортни қисқартиришнинг мақсадли кўрсаткичлари",
      "Моддий-техник ресурслар ва хизматларга бўлган эҳтиёж",
      "Тадбиркорлик субъектлари учун",
      "Саноат ярмаркаси ва кооперация биржаси",
    ],
  },
  "Aksiyador va investorlar": {
    "Акциядорлик капиталининг таркиби": [""],
    "Акциядорлар йиғилиши": ["АУЙ хабарлари", "АУЙ овоз бериш натижалари"],
    "Ошкоралик маълумотлар": [
      "Мухим фактлар",
      "Қимматли қоғозлар эмиссия проспекти",
      "Тавсия қилинган соф фойда тақсимоти",
      "Дивидендлар",
      "Жамият аффиланган шахслари рўйхати",
    ],
    "Устав ва ички низомлар": [""],
    "Корпоратив бошқарув кодекси": [""],
    Ҳисоботлар: [
      "MҲХС бўйича консолидациялашган молиявий ҳисобот",
      "Чораклик ҳисоботлар",
      "Йиллик ҳисоботлар",
      "Аудитор хулосаси",
      "СМК бажарилиши",
    ],
    "Инвестицион лойихалар": [""],
  },
  "Matbuot markazi": { Янгиликлар: [""] },
  "Yoshlar siyosati": {
    "Ёшлар марказининг ташкилий тузилмаси": [""],
    "Ёшлар маркази янгиликлари": [""],
    "Фото лавҳалар": [""],
    "Медиа кутибхона": [""],
  },
  "Korrupsiyaga qarshi": {
    '"Ўзбекнефтгаз" АЖ баёноти': [""],
    "Локал норматив ҳужжатлар": [""],
    "Коррупция фактлари ҳақида маълумот": [""],
    "Коррупцияга қарши курашиш": [""],
    Тадбирлар: [""],
  },
  "Harakatlar strategiyasi": {
    "Ўзбекистон Республикаси Энергетика вазирлиги": [""],
    '"Ўзтрансгаз" Акциядорлик жамияти': [""],
    '"Худудгазтаъминот" Акциядорлик Жамияти': [""],
    '"ТАРАҚҚИЁТ СТРАТЕГИЯСИ" МАРКАЗИ': [""],
    "Ягона интерактив давлат хизматлари портали": [""],
  },
  "Open Data": {},
};
