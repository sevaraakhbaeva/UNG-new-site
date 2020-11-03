type MenuObjectProps = { [index: string]: Array<string> };
type menuPicPathsProps = { [index: string]: string };

export const menuPicPaths: menuPicPathsProps = {
  "Kompaniya haqida": "About.png",
  "Бизнесга оид": "Business.png",
  "Aksiyador va investorlar": "Shareholders.png",
  "Matbuot markazi": "Press.png",
  "Korrupsiyaga qarshi": "Anti-corruption.png",
  "Harakatlar strategiyasi": "Youth.png",
};

export const menuItems: MenuObjectProps = {
  "Kompaniya haqida": [
    "Жамият тарихи",
    "Tashkiliy tuzilma",
    "Tizim tarkibiga kiruvchi jamiyatlar",
    "Rahbariyat",
    "Faoliyat maqsadi va vazifalari",
    "Kuzatuv kengashi",
    "Taftish komissiyasi",
    "Ichki audit xizmati",
    "Jamiyatning strategik rivojlanishi",
    "Biznes rejaning asosiy parametrlarini bajarilishi",
    "Kasaba uyushmasi",
    "Ilmiy texnik kengashi",
    "Sohaga oid me’yoriy hujjatlar",
  ],
  "Бизнесга оид": ["Харидлар", "Конкурслар", "Шартномалар", "Маҳаллийлаштириш"],
  "Aksiyador va investorlar": [
    "Акциядорлик капиталининг таркиби",
    "Акциядорлар йиғилиши",
    "Ошкоралик маълумотлар",
    "Устав ва ички низомлар",
    "Корпоратив бошқарув кодекси",
    "Ҳисоботлар",
    "Инвестицион лойихалар",
  ],
  "Matbuot markazi": ["Янгиликлар"],
  "Yoshlar siyosati": [
    "Ёшлар марказининг ташкилий тузилмаси",
    "Ёшлар маркази янгиликлари",
    "Фото лавҳалар",
    "Медиа кутибхона",
  ],
  "Korrupsiyaga qarshi": [
    '"Ўзбекнефтгаз" АЖ баёноти',
    "Локал норматив ҳужжатлар",
    "Коррупция фактлари ҳақида маълумот",
    "Коррупцияга қарши курашиш",
    "Тадбирлар",
  ],
  "Harakatlar strategiyasi": [
    "Ўзбекистон Республикаси Энергетика вазирлиги",
    '"Ўзтрансгаз" Акциядорлик жамияти',
    '"Худудгазтаъминот" Акциядорлик Жамияти',
    '"ТАРАҚҚИЁТ СТРАТЕГИЯСИ" МАРКАЗИ',
    "Ягона интерактив давлат хизматлари портали",
  ],
  "Open Data": [],
};
