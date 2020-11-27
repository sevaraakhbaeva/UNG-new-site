import React from "react";
import BlockLayout from "./BlockLayout";
import TextWithPics from "./TextWithPics";

import { Typography, Breadcrumbs } from "@material-ui/core";
import Paragraph from "./Paragraph";
import LastChangesText from "./LastChangesText";

const MainContainer = () => {
  return (
    <BlockLayout
      title="Kompaniya tarixi"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Kompaniya tarixi"]}
    >
      <Paragraph title="Neft qazib olishdagi bir asrdan ortiq tajriba:">
        <Typography>
          Neftni sanoatlashgan tarzda qazib olish ishlari O‘zbekistonda 1885
          yilda boshlangan. Neft Farg‘ona vodiysida joylashgan Chimion qishlog‘i
          yaqinidagi ikki burg‘ qudug‘idan qazib olinar edi. 1900 yilda ushbu
          mintaqada jiddiy razvedka ishlari boshlandi va 1904 yilda 270 metrdan
          ortiq chuqurlikdan neft favvorasi otilib chiqdi;
        </Typography>
      </Paragraph>

      <Paragraph title="Uglevodorodlar xom ashyosini qayta ishlashdagi bir asrlik tajriba:">
        <Typography>
          1906 yilda Farg‘ona viloyatida neft haydash zavodi qurilib, u davriy
          harakat qiluvchi bitta ikki kubali qurilmadan iborat edi. Neft konidan
          qazilma boylik ot-ulov transportida tashilar edi. Neftning sifati esa
          termometr va areometr yordamida aniqlanar edi. Qayta ishlash
          natijasida olinadigan asosiy mahsulotlar chiroq kerosini va isitish
          mazuti edi. O‘sha zamonda keraksiz benzin zavod hududi tashqarisidagi
          chuqurlarda yoqib yo‘q qilinar edi. 1915-1916 yillarda, O‘rta Osiyoda
          ichki yonuv dvigateli yordamida harakatlanadigan avtomobillar paydo
          bo‘lgandan keyingina benzin foydali mahsulotga aylandi. Mahsulot
          Afg‘oniston va Xitoyga temir yo‘l va ot-ulov transportida eksport
          qilinar edi. 1907 yilda zavodni aka-uka Nobellar sotib olishdi va
          uning bosqichma-bosqich rekonstruksiyasini boshlashdi. O‘sha yilning
          o‘zida Chimion konidan zavodgacha tortilgan to‘rt dyuymli neft
          quvuridan foydalana boshlandi hamda rezervuar parki qurildi. 1940
          yilga kelib zavod o‘z laboratoriyasiga ega bo‘ldi, texnologik jarayon
          sifat jihatidan yuksaldi, yillik ishlab chiqarish quvvati 176 ming
          tonnaga yetdi. 1972 yilda Qashqadaryo viloyatida jahondagi eng yirik
          qurilmalardan biri bo‘lgan Muborak gazni qayta ishlash zavodi qurildi,
          1980 yilda esa Sho‘rtanda zavod ishga tushirildi;
        </Typography>
      </Paragraph>
      <Paragraph title="Uglevodorodlar xom ashyosini qayta ishlashdagi bir asrlik tajriba:">
        <Typography>
          1906 yilda Farg‘ona viloyatida neft haydash zavodi qurilib, u davriy
          harakat qiluvchi bitta ikki kubali qurilmadan iborat edi. Neft konidan
          qazilma boylik ot-ulov transportida tashilar edi. Neftning sifati esa
          termometr va areometr yordamida aniqlanar edi. Qayta ishlash
          natijasida olinadigan asosiy mahsulotlar chiroq kerosini va isitish
          mazuti edi. O‘sha zamonda keraksiz benzin zavod hududi tashqarisidagi
          chuqurlarda yoqib yo‘q qilinar edi. 1915-1916 yillarda, O‘rta Osiyoda
          ichki yonuv dvigateli yordamida harakatlanadigan avtomobillar paydo
          bo‘lgandan keyingina benzin foydali mahsulotga aylandi. Mahsulot
          Afg‘oniston va Xitoyga temir yo‘l va ot-ulov transportida eksport
          qilinar edi. 1907 yilda zavodni aka-uka Nobellar sotib olishdi va
          uning bosqichma-bosqich rekonstruksiyasini boshlashdi. O‘sha yilning
          o‘zida Chimion konidan zavodgacha tortilgan to‘rt dyuymli neft
          quvuridan foydalana boshlandi hamda rezervuar parki qurildi. 1940
          yilga kelib zavod o‘z laboratoriyasiga ega bo‘ldi, texnologik jarayon
          sifat jihatidan yuksaldi, yillik ishlab chiqarish quvvati 176 ming
          tonnaga yetdi.
        </Typography>
        <Typography>
          Birinchi gaz 1953 yil Qizilqum cho‘lidagi Setalantepa konidan qazib
          olindi. 1962 yilda noyob Gazli koni ishga tushirilgandan keyin Buxoro
          — Ural va O‘rta Osiyo — Markaz transkontinental' gaz quvuryo‘llari
          o‘tkazildi.
        </Typography>
      </Paragraph>
      <Paragraph title="Mustaqillik yillarida sohaning rivojlanishi">
        <TextWithPics images={["img1.png", "img2.png"]}>
          <Typography>
            O‘zbekiston Respublikasi mustaqilligining birinchi kunlaridan
            sohaning yangi hayoti, neft va gaz sanoati rivojlanishining yangi
            bosqichi boshlandi. Mamlakat rahbariyati ushbu sohaning keng
            ko‘lamli rivojlanishiga katta ahamiyat berdi.
          </Typography>
          <Typography>
            O‘zbekiston mustaqillikka erishishi va 1992 yildan respublikada
            iqtisodiy islohotlar boshlanishi bilan neft-gaz kompleksiga alohida
            e'tibor qaratildi.
          </Typography>
        </TextWithPics>

        <Typography>
          Ma'muriy buyruqbozlik usullaridan bozor mexanizmi bo‘yicha faoliyatga
          evolyasiyali o‘tishni ta'minlovchi strukturaviy o‘zgarishlar
          bosqichlari O‘zbekiston Respublikasi Prezidenti I.A.Karimov tomonidan
          1992 yilda belgilab berilgan quyidagi strategik vazifalarni bajarish
          bilan olib borildi:
        </Typography>
        <Typography>
          - respublikaning neft mustaqilligiga erishish maqsadida neft va gaz
          kondensati qazib chiqarishni jiddiy ravishda oshirish;
        </Typography>
        <Typography>
          - ishlab chiqarilayotgan mahsulot sifatini jahon andozalari darajasiga
          yetkazish maqsadida neft va gazni texnologik qayta ishlash
          jarayonlarini chuqurlashtirish;
        </Typography>
        <Typography>
          - O‘zbekiston neft-gaz sohasi xom ashyo bazasini ishonchli ta'minlash
          maqsadida yangi konlarni ochish hisobiga birinchi navbatda suyuq
          uglevodorodlar zahirasini ko‘paytirish.
        </Typography>
        <Typography>
          3 may 1992 yil O‘zbekiston Respublikasi Prezidenti Islom Karimovning
          «O‘zbekneftgaz» neft va gaz sanoati O‘zbekiston davlat konsernini
          tashkil qilish to‘g‘risida»gi Farmoni imzolandi.
        </Typography>
        <Typography>
          23 dekabr 1992 yil O‘zbekiston Respublikasi Prezidentining
          «O‘zbekiston neft va gaz sanoati davlat konsernini «O‘zbekneftgaz»
          neft va gaz sanoati Milliy korporatsiyasiga aylantirish to‘g‘rida»
          Farmoni e'lon qilindi.
        </Typography>
        <Typography>
          11 dekabr 1998 yil O‘zbekiston Respublikasi Prezidentining
          «O‘zbekneftgaz neft va gaz sanoati Milliy korporatsiyasini
          «O‘zbekneftgaz» Milliy xolding kompaniyasiga aylantirish to‘g‘rida» gi
          Farmoni imzolandi.
        </Typography>
        <Typography>
          «O‘zbekneftgaz» MXK – bir butun birlashgan uch pog‘onali xolding
          kompaniya. Kompaniyani amaldagi boshqaruv tizimi «O‘zbekneftgaz»
          Milliy xolding kompaniyasi faoliyatini tashkil etishni
          takomillashtirish chora-tadbirlari to‘g‘risida» O‘zbekiston
          Respublikasi Prezidentining 2006 yil 21 avgustdagi PQ-446 son Qarori
          va O‘zbekiston Respublikasi Prezidentining 2008 yil 1 iyuldagi PQ-906
          son «O‘zbekneftgaz» Milliy xolding kompaniyasi ijro etuvchi
          apparatining tashkiliy tuzilmasiga o‘zgartishlar kiritish
          to‘g‘risida»gi Qaroriga muvofiq tasdiqlangan.
        </Typography>
        <Typography>
          Respublika sanoati barqaror, jadal va mos ravishda rivojlanishini,
          qayta o‘zgartirishlar strukturasini chuqurlashtirish, soha
          komplekslari va sanoat korxonalarini modernizasiyalash, ishlab
          chiqarishni texnik va texnologik yangilash asosida uning asosiy
          sohalarini diversifikasiyalashga, hamda eksport salohiyati,
          samaradorligi, raqobatbardoshligini oshirishga yo‘naltirilgan asosiy
          vazifalar 2011-2015 yillarda respublika sanoatini rivojlantirishning
          muhim yo‘nalishlarida belgilab berilgan, O‘zbekiston Respublikasi
          Prezidentining 15 dekabr 2010 yildagi «2011-2015 yillarda O‘zbekiston
          Respublikasi sanoatini rivojlantirishning ustuvor yo‘nalishlari
          to‘g‘rida»gi PQ-1442 son Qarori qabul qilingan.
        </Typography>
        <Typography>
          Bugungi kunda «O‘zbekneftgaz» MXK neft-gaz sohasining barcha faoliyat
          yo‘nalishlarini ta'minlaydigan, 200 dan ortiq korxonalarni
          birlashtirgan, 120 mingdan ortiq kishi ishlaydigan, vertikal bir butun
          birlashgan, uch pog‘onali xolding kompaniyadir.
        </Typography>
      </Paragraph>

      <Paragraph title="Buxoro neftni qayta ishlash zavodi">
        <TextWithPics images={["img3.png", "img4.png"]}>
          <Typography>
            1997 yil tarkibi «Teknip» (Fransiya), «Marubeni», «Djey Dji-Si»
            (Yaponiya) kompaniyalardan iborat konsorsium bilan hamkorlikda
            Buxoro neftni qayta ishlash zavodi ishga tushirildi.
          </Typography>
        </TextWithPics>
      </Paragraph>
      <Paragraph title="Xo‘jaobod yer osti gaz saqlash ombori">
        <Typography>
          1999 yil «Dresser-Rend» (AQSh) kompaniyasining kompressorlari asosida
          «BSI Indastriz»(AQSh) kompaniyasi bilan hamkorlikda Xo‘jaobod yer
          ostida gazni saqlash ombori foydalanishga topshirildi.
        </Typography>
      </Paragraph>
      <Paragraph title="Sho‘rtan gaz-kimyo majmuasi">
        <TextWithPics images={["img5.png", "img6.png"]}>
          <Typography>
            2001 yilda tarkibiga «Misui», «Toyo injiniring», «Nisho Ivai» va
            «ABB Soimi» (Italiya) kompaniyalari kirgan, «ABB Lummus Global»
            (AQSh) kompaniyasi yetakchiligidagi konsorsium bilan hamkorlikda
            Sho‘rtan gaz-kimyo majmuasining qurilishi amalga oshirildi.
          </Typography>
        </TextWithPics>
      </Paragraph>
      <Paragraph title="“Sho‘rtan” GSKS">
        <Typography>
          Sho‘rtan konida gazni siqish kompressor stansiyasi qurilish loyihasi
          «Beytman» (Isroil) inijiniring kompaniyasi bilan hamkorlikda amalga
          oshirildi va ob'ekt 2003 yil foydalanishga topshirildi.
        </Typography>
      </Paragraph>
      <Paragraph title="O‘zbekiston mustaqilligi yillarida sohada chet el kompaniyalari bilan hamkorlikda qurilgan yirik inshootlar">
        <Typography>“KO‘KDUMALOQ” GHKS</Typography>
        <Typography>
          Ko‘kdumaloq konida «Dresser-Rend» (AQSh) kompaniyasining qurilmalari
          asosida kompressor stansiyasi qurildi va 1997 yil foydalanishga
          topshirildi. Ko‘kdumaloq kompressor stansiyasining qurilishi
          O‘zbekiston Respublikasi neft-gaz sohasining rivojlanishidagi muhim
          qadam bo‘ldi. «Kellog» (AQSh), «Nisho Ivai» (Yaponiya) kompaniyalari
          bilan hamkorlikda ushbu loyihani amalga oshirish chet el
          investisiyalarini jalb qilish ishlarining boshlanishi hisoblanadi.{" "}
        </Typography>
      </Paragraph>
      <Paragraph title="Farg‘ona NQIZ qayta tiklash">
        <TextWithPics images={["img7.png"]}>
          <Typography>
            Yuqori sifatli neft mahsulotlari ishlab chiqarish uchun 2000 yilda
            «Misui» va « Toyo injiniring» (Yaponiya) kompaniyalari bilan
            hamkorlikda Farg‘ona neftni qayta ishlash zavodining
            rekonstruksiyasi amalga oshirildi.
          </Typography>
        </TextWithPics>
      </Paragraph>
      <Paragraph title="Amalga oshirilayotgan yirik investisiya loyihalari">
        <Typography>
          2004 yil O‘zbekiston Respublikasi bilan tarkibi Rossiyaning Lukoyl
          neft kompaniyasi hamda «O‘zbekneftgaz» Milliy xolding kompaniyasidan
          iborat investorlar konsorsiumi o‘rtasida Qandim konlari guruhi
          uchastkasi, Xauzak, Shodi uchastkalari va Qo‘ng‘irot uchastkalari
          bo‘yicha 35 yil muddatga (mega-loyiha) mahsulotni taqsimlash Kelishuvi
          (SRP) imzolandi.
        </Typography>
      </Paragraph>
      <Paragraph title="O‘zbekistonda GAZPROM">
        <Typography>
          2002 yil tomonlar o‘rtasida hamkorlikni faollashtirish va kengaytirish
          maqsadida «Gazprom» OAJ hamda «O‘zbekneftgaz» MXK gaz sohasida
          strategik hamkorlik to‘g‘risida Kelishuv imzolandi. Shaxpaxta konida
          qoldiq zahiralarni konservasiyadan chiqarish va o‘zlashtirish bo‘yicha
          pilot loyihasini respublikada amalga oshirish O‘zbekiston neft-gaz
          sektorida «Gazprom»ni keyingi faoliyati rivojlanishiga imkon berdi.
          2014 yil 14 aprelda «Shaxpaxta konini ishlash» loyihasi bo‘yicha
          «O‘zbekneftgaz» MXK bilan «Zarubejneftegaz» YoAJ , «Gazprom» OAJ va
          «Gas Project Development Central Asia AG» (Shveysariya) tarkibdan
          iborat konsorsium o‘rtasida mahsulotni taqsimlash Kelishuvi (SRP)
          imzolandi.
        </Typography>
      </Paragraph>
      <Paragraph title="Orol loyihasi bo‘yicha investorlar konsorsiumi">
        <Typography>
          O‘zbekiston Respublikasi Prezidentining 30 avgust 2006 yildagi «Orol
          Dengizining O‘bekiston qismini geologik jihatdan o‘rganish va
          keyinchalik yangi ochiladigan uglevodorod konlarini mahsulotni
          taqsimlash to‘g‘risidagi bitim shartlari asosida qazish» PQ-457 son
          Qaroriga muvofiq 30.08.2006 yil O‘zbekiston Respublikasi va CNPC
          (XXR), KNOC (Koreya), LUKOIL Overseas Holding Ltd (RF), PETRONAS
          Carigali Overseas SDN BHD (Malayziya), «O‘zbekneftgaz» MXK tarkibdan
          iborat investorlar Konsorsiumi o‘rtasida Orol Dengizining O‘bekiston
          qismi bo‘yicha mahsulotni taqsimlash to‘g‘risidagi Kelishuv imzolandi
          va u 30 yanvar 2007 yil kuchga kirdi.
        </Typography>
      </Paragraph>
      <Paragraph title="Sho‘rtan gaz-kimyo majmuasining tozalangan metani asosida ishlab chiqariladigan sun'iy suyuq yoqilg‘i">
        <Typography>
          Loyihaning umumiy qiymati – 3985 mln. doll. Ishlab chiqarishning
          yillik o‘rtacha loyihaviy quvvati 863 ming tonna dizel yoqilg‘isi, 304
          ming tonna kerosin, 393 ming tonna nafta, 11 ming tonna suyultirilgan
          gazdan iborat. Loyiha «Sasol» (JAR) va «Petronas» (Malayziya)
          kompaniyalari bilan hamkorlikda amalga oshirilmoqda. U nodir
          texnologiya asosida sun'iy suyuq yoqilg‘i olish va gazni qayta ishlash
          bo‘yicha dunyodagi eng yirik loyiha hisoblanadi.
        </Typography>
      </Paragraph>
      <Paragraph title="Muborak GQIZ UShK qoshidagi gaz-kimyo majmuasining qurilishi">
        <Typography>
          Loyihaning umumiy qiymati 2 milliard dollardan ortiq, ishlab
          chiqarishning loyihaviy quvvati – 492 ming tonna polietilen, 66 ming
          tonna gaz kondensati va 53 ming tonna pirobenzindan iborat.
          O‘zbekiston Respublikasi Prezidenti Islom Karimovning Xitoy Xalq
          Respublikasiga 19-20 avgust 2014 yildagi tashrifi davomida «Muborak
          GQIZ» UShKda gaz-kimyo majmuasini qurish loyihasini hamkorlikda amalga
          oshirish to‘g‘risidagi Kelishuv imzolandi.
        </Typography>
      </Paragraph>
      <Paragraph title="“O‘zbekiston-Xitoy” transmilliy magistral gaz quvuri">
        <Typography>
          2007 yil O‘zbekiston yirik masshtabdagi, dunyodagi eng uzun (7000 km)
          Turkmaniston-O‘zbekiston-Qozog‘iston-Xitoy xalqaro gaz uzatish quvuri
          qurilishi loyihasiga qo‘shildi. O‘zbekiston qismidagi gaz uzatish
          quvurining (530 km) loyihasini qurish va foydalanish uchun
          «O‘zbekneftgaz» MXK bilan CNPC o‘rtasida «Asia Trans Gas» Qo‘shma
          korxonasi tashkil qilindi. O‘zbekiston Respublikasi Prezidenti Islom
          Karimovning Xitoy Xalq Respublikasiga 19-20 avgust 2014 yildagi
          tashrifi davomida «O‘zbekneftgaz» MXK bilan CNPC o‘rtasida
          «O‘zbekiston-XXR» gaz uzatish quvurining 4-tarmog‘ini qurish va
          foydalanish prinsiplari to‘g‘risida Kelishuv imzolandi.
        </Typography>
      </Paragraph>
      <Paragraph title="Ustyurt gaz-kimyo majmuasi loyihasi haqida dunyo reytingi nashrlari bahosi">
        <TextWithPics images={["img8.png", "img9.png"]}>
          <Typography>
            Ustyurt gaz-kimyo majmuasini moliyalash loyihasi yilning xalqaro
            bitimi sifatida e'tirof etildi. Biznes tahlili sohasida dunyoda
            yetakchi bo‘lgan «Thomson Reuters» kompaniyasi moliya loyihasini
            global tahlil qilish bo‘yicha «PFI» (Project Finance International)
            davriy nashrini chop etadi.
          </Typography>
          <Typography>
            Project Finance International 2012 yil dekabrdagi yakuniy nashrida
            moliyaviy loyihalash global uyushma qatnashchilarining bitimlarini
            tahlil qilish asosida 2012 yil natijalari bo‘yicha yillik mukofotlar
            bilan taqdirlashni e'lon qildi. Obro‘li «Infrastructure Jornal»
            xalqaro nashriyoti 13 mart 2014 yilda Ustyurt gaz-kimyo majmuasi
            qurilish loyihasini «Neft-gaz sohasidagi 2014 yilning Global bitimi»
            nufuzli mukofati bilan taqdirladi.
          </Typography>
        </TextWithPics>
      </Paragraph>
      <Paragraph title="“Navoiy” erkin industrial iqtisodiy hududidagi neft va gaz sohasining yangi quvvatlari">
        <ul>
          <li>
            <Typography>DP «POLIETILEN QUVURLARI»</Typography>
          </li>
          <li>
            <Typography>DP «POLIPROPILEN QUVURLARI»</Typography>
          </li>
          <li>
            <Typography>
              Bosim ostida ishlovchi uzatish quvurlari uchun polietilen quvurlar
              va fitinglar.
            </Typography>
          </li>
          <li>
            <Typography>
              Issiq va sovuq suv bilan ta'minlash hamda isitish tizimlari uchun
              polipropilen quvurlar.
            </Typography>
          </li>
        </ul>
      </Paragraph>
      <Paragraph title="“KO-UNG CYLINDER”MChJ">
        <Typography>
          2011 yil «Navoiy» erkin industrial iqtisodiy zonasida
          O‘zbekiston-Koreya «KO-UNG CYLINDER» MChJ qo‘shma korxonasi tashkil
          qilindi. Korxona yiliga maksimal quvvatda 120 000 donagacha gaz
          balloni ishlab chiqarishni rejalashtirgan.
        </Typography>
      </Paragraph>
      <Paragraph title="ARISTON zamonaviy isitish tizimlari">
        <Typography>
          2011 yil «Navoiy» erkin industrial iqtisodiy zonasida «ARISTON-Thermo
          UTG» O‘zbekiston-Italiya qo‘shma korxonasi tashkil qilindi. 2013 yil
          iyulidan boshlab bu yerda gaz bilan isitish va suvni isitish zamonaviy
          «ARISTON BS II FF» savdo markasidagi qozonlarini ishlab chiqarish
          yo‘lga qo‘yildi.
        </Typography>
      </Paragraph>
      <Paragraph title="“Angren” maxsus industrial hududidagi neft va gaz sohasining yangi quvvatlari">
        <Typography>
          Chet el investorlarini jalb qilgan holda «Angren» maxsus industrial
          zonasi hududida ishlatilgan texnik moylarni yig‘ish va qayta
          ishlashning tugallangan texnologik siklini qo‘llash orqali bazaviy va
          motor moylari zamonaviy ishlab chiqarishini tashkil qilish.
        </Typography>
        <Typography>
          Investisiyalarning umumiy qiymati 15 mln AQSh dollariga teng.
          «O‘zneftmahsulot» aksionerlik kompaniyasi (AK) ulushi - 49%. «Prista
          Recycling EAD» (Bolgariya) kompaniyasi ulushi - 51%.
        </Typography>
        <Typography>
          Tashkil etilayotgan «Uz-Prista Recycling» MChJ qo‘shma korxonasining
          xom ashyoga bo‘lgan ehtiyoji 100% quvvat bilan bir yil davomida 7920
          soat ishlashni hisobga olgan holda – 44,55 mln. litrga teng.
        </Typography>
      </Paragraph>
      <Paragraph title="I.M. Gubkin nomidagi Rossiya davlat neft va gaz universitetining Toshkent shahridagi filialida soha uchun kadrlar tayyorlash">
        <TextWithPics images={["img10.png", "img11.png"]}>
          <Typography>
            O‘zbekiston Respublikasi Prezidentining 6 iyul 2011 yildagi «
            Toshkent shahrida I.M. Gubkin nomidagi neft va gaz Rossiya Davlat
            Universiteti filiali faoliyatini takomillashtirish choralari
            to‘g‘risida» PQ-1569-son Qarori, ushbu Qaror ijrosini nazorat qilish
            bo‘yicha O‘zbekiston Respublikasi Bosh vaziri 29 iyul 2011 yil
            06/1-488 son bilan tasdiqlagan Reja, O‘zbekiston Respublikasi
            Ministrlar Kabinetinig 14 oktyabr 2011 yildagi 282-son «I.M.Gubkin
            nomidagi Rossiya Davlat neft va gaz Universitetining Toshkent
            shahridagi filiali qoshida maxsus akademik lisey faoliyatini tashkil
            etish bo‘yicha chora-tadbirlar to‘g‘risida» qaroriga muvofiq 2012
            yil neft-gaz sohasida yana bir o‘quv muassasa - I.M.Gubkin nomidagi
            Rossiya Davlat neft va gaz Universitetining Toshkent shahridagi
            filiali qoshida maxsus akademik lisey tashkil qilindi.
          </Typography>
        </TextWithPics>
      </Paragraph>
      <LastChangesText>20-sentabr 2020</LastChangesText>
    </BlockLayout>
  );
};

export default MainContainer;
