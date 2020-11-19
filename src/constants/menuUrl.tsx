// type MenuObjectProps = { [index: string]: string | {[index: string]: string} };
// type MenuObjectOfObjectProps = {
//   [index: string]: MenuObjectProps;
// };

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

type jsonObj = { [index: string]: string };
type arrOfJsonObj = { name: string; url: string }[];
type MenuObjectOfObjectProps = { [index: string]: jsonObj | arrOfJsonObj };
export const menuItems = {
  "Kompaniya haqida": {
    url: "about",
    children: [
      { name: "Жамият тарихи", url: "history" },
      { name: "Tashkiliy tuzilma", url: "" },
      { name: "Tizim tarkibiga kiruvchi jamiyatlar", url: "structure" },
      { name: "Rahbariyat", url: "management" },
      { name: "Faoliyat maqsadi va vazifalari", url: "" },
      { name: "Kuzatuv kengashi", url: "" },
      { name: "Taftish komissiyasi", url: "" },
      { name: "Ichki audit xizmati", url: "" },
      { name: "Jamiyatning strategik rivojlanishi", url: "" },
      { name: "Biznes rejaning asosiy parametrlarini bajarilishi", url: "" },
      { name: "Kasaba uyushmasi", url: "" },
      { name: "Ilmiy texnik kengashi", url: "" },
      { name: "Sohaga oid me’yoriy hujjatlar", url: "" },
    ],
  },
  "Бизнесга оид": {
    url: "business",
    children: [
      { name: "Хуқуқий маълумотлар", url: "" },
      {
        name: "Конкурслар",
        url: "tender",
        children: [
          { name: 'АО "Узбекнефтегаз"', url: "1" },
          { name: '"Шўртан" НГҚЧБ', url: "2" },
          { name: '"Муборак" НГҚЧБ', url: "3" },
          { name: '"Газли" НГҚЧБ', url: "4" },
          { name: '"Устюрт" ГҚЧБ', url: "5" },
          { name: "Инвестицион лойихалар доирасидаги конкурслар", url: "6" },
        ],
      },
      {
        name: "localization",
        url: "",
        children: [
          { name: "Ишлаб чиқаришни маҳаллийлаштириш", url: "1" },
          { name: "«Ўзбекнефтгаз» АЖнинг маҳаллийлаштириш дастури", url: "2" },
          { name: "Импортни қисқартиришнинг мақсадли кўрсаткичлари", url: "3" },
          {
            name: "Моддий-техник ресурслар ва хизматларга бўлган эҳтиёж",
            url: "4",
          },
          { name: "Тадбиркорлик субъектлари учун", url: "5" },
          { name: "Саноат ярмаркаси ва кооперация биржаси", url: "6" },
        ],
      },
    ],
  },
  // "Aksiyador va investorlar": {
  //   "Акциядорлик капиталининг таркиби": [""],
  //   "Акциядорлар йиғилиши": ["АУЙ хабарлари", "АУЙ овоз бериш натижалари"],
  //   "Ошкоралик маълумотлар": [
  //     "Мухим фактлар",
  //     "Қимматли қоғозлар эмиссия проспекти",
  //     "Тавсия қилинган соф фойда тақсимоти",
  //     "Дивидендлар",
  //     "Жамият аффиланган шахслари рўйхати",
  //   ],
  //   "Устав ва ички низомлар": [""],
  //   "Корпоратив бошқарув кодекси": [""],
  //   Ҳисоботлар: [
  //     "MҲХС бўйича консолидациялашган молиявий ҳисобот",
  //     "Чораклик ҳисоботлар",
  //     "Йиллик ҳисоботлар",
  //     "Аудитор хулосаси",
  //     "СМК бажарилиши",
  //   ],
  //   "Инвестицион лойихалар": [""],
  // },
  // "Matbuot markazi": { Янгиликлар: [""] },
  // "Yoshlar siyosati": {
  //   "Ёшлар марказининг ташкилий тузилмаси": [""],
  //   "Ёшлар маркази янгиликлари": [""],
  //   "Фото лавҳалар": [""],
  //   "Медиа кутибхона": [""],
  // },
  // "Korrupsiyaga qarshi": {
  //   '"Ўзбекнефтгаз" АЖ баёноти': [""],
  //   "Локал норматив ҳужжатлар": [""],
  //   "Коррупция фактлари ҳақида маълумот": [""],
  //   "Коррупцияга қарши курашиш": [""],
  //   Тадбирлар: [""],
  // },
  // "Harakatlar strategiyasi": {
  //   "Ўзбекистон Республикаси Энергетика вазирлиги": [""],
  //   '"Ўзтрансгаз" Акциядорлик жамияти': [""],
  //   '"Худудгазтаъминот" Акциядорлик Жамияти': [""],
  //   '"ТАРАҚҚИЁТ СТРАТЕГИЯСИ" МАРКАЗИ': [""],
  //   "Ягона интерактив давлат хизматлари портали": [""],
  // },
  // "Open Data": {},
};
