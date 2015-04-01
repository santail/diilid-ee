/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Offer = require('../api/offer/offer.model');
var Wish = require('../api/wish/wish.model');
var User = require('../api/user/user.model');

Offer.find({}).remove(function () {
  Offer.create({
    url: "https://www.minuvalik.ee/ru/deal/2231192837/",
    site: "www.minuvalik.ee",
    active: true,
    title: "Большая наивкуснейшая пицца от Pizza Valentina!",
    pictures: [
    "https://www.minuvalik.ee/actimg/2231192837/l/001.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/002.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/003.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/004.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/005.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/006.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/007.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/008.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/009.jpg",
    "https://www.minuvalik.ee/actimg/2231192837/l/010.jpg"
  ],
    description: {
      'intro': "Мы не жалеем начинки! Речь идет о семейном предприятии, где работа выполняется с любовью и заботой. Еда готовиться – как на домашней кухне! Стандарт качества и требования к продуктам очень высоки.",
      'short': "<a href=\"http://www.pizzavalentina.ee\" class=\"nu dred\" target=\"_blank\"><b>www.pizzavalentina.ee</b></a><br> Посети предложенную партнёром ссылку для получения исчерпывающей информации об этом товаре или услуге. При наличии дополнительных вопросов нажми на ссылку «<span id=\"feedback_link\"><b>Задай вопрос</b></span>».",
      'long': "<li class=\"li_descr\">В стоимость ваучера&nbsp;вхо��ит <strong>большая пицца</strong> диаметром 30 см на ваш выбор:<br> <strong>Salami, Valentina, Pollo, Hot,&nbsp;Francescana, Topolino.</strong> </li> <li class=\"li_descr\">Шеф повар особенно рекомендует попробовать фирменную пиццу <strong>Valentina</strong>: <em>сыр, ветчина,&nbsp;cоус,&nbsp;маринованный огурчик, красный лук, оливки, свежая паприка</em>. </li> <li class=\"li_descr\"> <strong>Pizza Valentina</strong> - это открытая в 2009 году пиццерия, в которой внутреннее и наружное оформление, элементы дизайна и ноу-хау в части приготовления еды основаны на рекомендациях итальянских мастеров пиццы. </li> <li class=\"li_descr\">Обслуживание - приветливое и ориентированное на клиента, гостям всегда рады.&nbsp;Помещение пиццерии небольшое, но по-домашнему уютное - именно такие небольшие пиццерии широко распространены в Италии. </li> <li class=\"li_descr\">Мы предлагаем пиццы как на месте, так и с собой.<span style=\"color:rgb(235, 179, 42)\">&nbsp;</span>При заказе с собой стоимость коробки - 0,40 €. </li> <li class=\"li_descr\"> <strong>NB!</strong> Предварительный заказ по &nbsp;телефону&nbsp;<strong>+372 5665 3710</strong> обязателен! </li> <li class=\"li_descr\">Мы находимся по адресу Таллинн, Pae 20.&nbsp;Бесплатная парковка. </li> <li class=\"li_descr\">Часы работы: Пн. - Вск. 11:00 - 22:00. </li> <li class=\"li_descr\">Приобретённым ваучером можно воспользоваться до 30.04.2015. </li>"
    },
    price: {
      original: "7€",
      discount: "4.55 €",
      save: "-35%"
    },
    parsed: "1/3/2015"
  }, {
    url: "http://www.kriisis.ee/ru/view_sale.php?id=645868",
    site: "www.kriisis.ee",
    title: "Свиная лопатка, без кожи Sea abaliha kamarata, kg",
    pictures: "http://www.kriisis.ee/testing/files/30-03-2015/119881.jpg",
    description: {
      'short': "Свиная лопатка, без кожи Sea abaliha kamarata, kg"
    },
    price: {
      sales: "Цена: 2.89€"
    },
    active: {
      period: "Период кампании: 24.03.2015 - 30.03.2015"
    },
    parsed: "26/2/2015"
  }, {
    url: "https://cherry.ee/06-06-valjumisega-puhkusepakett-kuprosele?utm_source=pakkumisedee&utm_medium=Aggregators&utm_campaign=cherry_april_old_morning",
    site: "www.cherry.ee",
    active: true,
    title: "06.06 väljumisega 7-päevane puhkusepakett Küprosele lennupiletite, ekskursiooni ja majutusega 4* hotellis",
    pictures: [
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415560/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415561/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415564/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415562/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415563/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415565/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415566/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415567/cherry3_large/image.jpg"
  ],
    description: {
      intro: "<p> <img alt=\"\" src=\"https://cherry-uploads.s3-eu-west-1.amazonaws.com/uploads%2F1418310484327-Alla.jpg\"><span><br> <br> Esialgsed lennuajad:</span> </p> <p> 06.06 Tallinn-Antalya 09:30-13:15<br> 06.06 Antalya-Ercan 14:00-15:00 </p> <p> 13.06&nbsp;<span>Ercan-Antalya 03:05-04:00<br></span>13.06 Antalya-Tallinn 04:45-08:30<span><br> <br> Tegemist on <i>charter'</i>lennuga, lende opereerib <b>Corendon Airlines</b>. Vahemaandumisel Antalyas lennukist enamasti väljuda ei tule, Ercanisse jätkab sama lend.&nbsp;Hinnas sisaldub üks ühik&nbsp;<b>kuni 20 kg äraantavat pagasit</b>&nbsp;ja üks ühik&nbsp;kuni <b>5 kg käsipagasit</b>&nbsp;reisija kohta..&nbsp;</span>Lennuaegades võib ette tulla muudatusi. Muudatuste puhul&nbsp;teavitatakse reisijaid sellest lühisõnumi ja e-posti teel. </p> <p> <span>K��prose põhjaosa <strong>unikaalne maastik, vahemereline kliima ja sinine meri</strong> muudavad selle paiga tõeliselt ihaldusväärseks puhkuse sihtpaigaks. Erinevalt teistest Vahemere piirkonna puhkepiirkondadest on <strong>Põhja-Küprose puhtad rannad harva ülerahvastatud</strong>, tagades ehedad naudingud rahulikust rannapuhkusest.</span> </p> <p> <span>Põhja-Küpros sobib nii neile, kes soovivad veeta&nbsp;<strong>mõnusa rannapuhkuse kui ka kultuurihuvilistele</strong>, kes plaanivad reisi jooksul saarel ringi vaadata. Seda on võimalik teha nii omal käel rendiautoga kui ka Wow Traveli poolt pakutavate ekskursioonide käigus (lisatasu eest).</span>&nbsp; </p> <p> <span>Hotellist vaid 8 km kaugusel asub&nbsp;<strong>Kyrenia sadamalinn</strong>, mis on küll väike, ent pakub avastamist nädalateks. Linna ilmselt suurim vaatamisväärsus on&nbsp;<strong>12. sajandil rajatud ristirüütlite kindlus</strong>, mis ootab oma majesteetlikkuses külastajaid ka tänasel päeval. Kindlasti ei saa üle ega ümber ka sadamlinna baaridest ja restoranidest, kus ehedad vahemerelised maitsed pakuvad nii elamusi kui ka korralikke kõhutäisi.</span>&nbsp; </p> <p> <span>\"<span><strong>Kohustuslikud\" vaatamisväärsused lähipiirkonnas</strong>&nbsp;on hingematvalt kaunite randadega Karpazi poolsaar, Bellapaisi klooster, Famagusta linn koos kauni vanalinnaga, St. Hilarioni loss, mida loetakse muuseas Walt Disney Lumivalgekese lossi inspiratsiooniks,&nbsp;<span>Vouni Palee ja Nicosia linn.<br></span></span></span> </p> <p> <span>Reisi sihtkohaks on&nbsp;<strong>Põhja-Küpros</strong>&nbsp;ehk Küprose Türgi osa. Lend on Ercani lennujaama, Euroopast saabuvad lennud peavad tegema enne Ercanis maandumist vahemaandumise Türgis, antud pakkumises Antalya lennujaamas. Kuigi riiki sisenemine toimub Põhja-Küprose territooriumil, saavad&nbsp;</span><strong>Euroopa Liidu kodanikud liikuda vabalt kogu Küprose saare ulatuses</strong>.<br> <br> </p>",
      'long': "Voucher kehtib 23.03.2015 kuni 12.04.2015 Voucherite arv pakkumises on piiratud Cherryl on rõõm teatata uuest väljumisest Põhja-Küprosele, kus puhkajaid ootavad pikad liivarannad, valgete majadega külakesed, maaliline Kyrenia linn koos sadamapromenaadiga ning enam kui 300 päikeselist päeva aastas! Voucher kehtib ühele reisihuvilisele ja hõlmab 7-päevast lennupiletitega reisipaketti vahemikus 06.-13.06.2015 Küprosele majutusega kahekohalises toas. Hind kehtib eeldusel, et koos reisivad ja ühes toas majutuvad vähemalt kaks inimest. Igale üle 2-aastasele reisijale tuleb soetada eraldi voucher 7-päevane puhkusepakett Küprosel sisaldab: lend Tallinn-Ercan-Tallinn vahemaandumisega Antalyas transfeerid lennujaamast hotelli ja tagasi 7 ööd majutust 4* hotellis Riverside Premium Hotel hommikusööke Kyrenia linnaekskursiooni inglise või vene keelt kõneleva giidi teenuseid transfeeride ja ekskursioonide ajal Kohapeal on võimalik juurde soetadaõhtusöökide pakett hinnaga 70 € / nädal või \"kõik hinnas\" pakett hinnaga 105 € / nädal. Pakett tuleb soetada kõikidele samas toas peatuvatele reisijatele, kuni 12-aastastele kehtib soodustus 50%. Õhtusöökidega paketi juurde ei kuulu joogid, \"kõik hinnas\" pakett sisaldab lisaks lõuna- ja õhtusöökidele ka jookide valikut (kohalikud mittealkohoolsed ja alkohoolsed joogid) Paketis sisalduv Kyrenia ekskursioon viib puhkajad maalilisse sadamalinna, mis on küll väike, ent täis avastamist. Peamisteks atraktsioonideks on St. Hilarioni loss, mida loetakse muuseas Walt Disney Lumivalgekese lossi inspiratsiooniks, gootipärase arhitektuuri pärl Bellapaisi klooster ja muidugi miljardivaated kaunile Vahemerele. Ekskursiooni orienteeruv ajavahemik on 09:00-14:00 Kohapeal on lisatasu eest võimalik liituda ka teiste ekskursioonidega põneva ajaloo ja kauni loodusega paikadesse. Ekskursioonide hindade ja kirjeldustega (inglise keeles) saad lähemalt tutvuda SIIN Voucher tuleb broneeringuks vormistada eestikeelsel broneerimislehel. Palume voucher broneeringuks vormistada 48 tunni jooksul alates soetamisest. Pärast reisi broneeringuks vormistamist saadetakse Sulle e-posti vahendusel kinnitus broneeringu andmetega Alla 2-aastaste laste eest tasud lisaks 50 € lapse kohta. Kõigile reisijatele alates 2. eluaastast kehtib pakkumises toodud hind, soodustusi lastele ja lisavoodil majutuvatele reisijatele ei ole. Ühte tuppa mahub maksimaalselt kolm inimest Soovides majutuda üksinda toas, kehtib lisatasu 100 € ühe reisija kohta, mis tasutakse otse Wow Travelile nende poolt esitatud arve põhjal Reisikorraldaja jätab endale õiguse reis tühistada, kui koguneb vähem kui 180 huvilist väljumise kohta. Juhul, kui reis tühistatakse, tagastatakse raha 100% ulatuses Juhime tähelepanu, et antud pakkumises kuulub pakett kasutamisele tervikuna, reisijatel ei ole võimalik kasutada vaid ühte osa paketist (näiteks ainult lennupileteid, ainult hotelli, ainult transfeeri jne) Reisi eest vastutab Saksa reisikorraldaja Wow Travel, mis omab turismiettevõtja registreeringut ning vajalikku tagatist Saksamaal Peale reisi broneeringuks vormistamist Wow Traveli kodulehel kehtivad Wow Traveli reisitingimused Eesti kodanikel on Küprosele reisimine viisavaba. Vahemaandumise tõttu Türgis on reisidokumendiks pass, mis kehtib vähemalt 150 päeva peale reisi lõppemist. ID-kaardiga antud pakkumise raames reisida ei ole võimalik Kindlasti tutvu tekkinud küsimustele vastuse saamiseks meie eelmise Küprose pakkumise FOORUMIGA Juuni temperatuurid on soojale maale kohased – 30 °C päeval ning sinine meri meelitab puhkajaid suplema 25 soojakraadiga 2013. aasta sügisel toimus viis otselendu Tallinnast Ercanisse, tagasiside reisijatelt oli väga hea ning tulles vastu nende soovile, on sihtkoht pärast mõningast pausi uuesti Cherry ja Wow Traveli sihtkohtade seas Kaunis Küpros, soe ja sinine Vahemeri ja luksuslik 4* hotell ootavad Sind, et võiksid põhjamaise kehva suusailma asemel tõelist suve nautida!"
    },
    price: {
      original: "",
      discount: "399 €"
    },
    parsed: "1/3/2015"
  }, {
    url: "https://cherry.ee/rehvide-taisvahetus-rattad24-tallinna-ja-parnu-esindustes?utm_source=pakkumisedee&utm_medium=Aggregators&utm_campaign=cherry_april_old_night",
    site: "www.cherry.ee",
    active: true,
    title: "Suverehvidel sügise poole! Rehvide täisvahetus Rattad24 esindustes Tallinnas ja Pärnus kuni -50%",
    pictures: [
    "https://cherrystatic.net/cherry-uploads/product_images/images/1174415962/cherry3_large/image.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1023427023/cherry3_large/1.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1023427024/cherry3_large/2.jpg",
    "https://cherrystatic.net/cherry-uploads/product_images/images/1023427025/cherry3_large/4.jpg"
  ],
    description: {
      intro: "<p> <b>Rattad24 meeskond</b> omab üle 10-aastast kogemust rehvide müügi ja autode hooldustööde valdkonnas ning üle 8-aastast kogemust autoremondiga tegelemisel. </p> <p> Ettevõttelt on võimalik osta<b>tuntud kaubamärkide rehve</b> – Vredestein, Hankook, Dunlop, Pirelli, Continental, Goodyear, Bridgestone, Michelin, Nokian jne. <b>Velgede tootevalikus</b> on sellised kaubamärgid nagu AEZ, ATS, BBS, Borbet, Nano, Brock, Momo, Breiton, Mak jne. Samuti müüakse erinevate brändide kasutatuid rehve, mille seisukord on \"nagu uus\". See tahendab, et rehvide seisukord ei erine oluliselt uute rehvide omast. Rehve ja velgi müüakse ka <b>hulgiostjatele-edasimüüjatele.</b> </p> <p> Klientidele pakutakse kiiret, mugavat, usaldusväärset ja soodsat teenindust nii ka veebilehel. Internetist on võimalik soetada kaupa ööpaevaringselt leheküljel <a href=\"http://www.rattad24.ee/\" target=\"_blank\">www.rattad24.ee</a>. Ostes rehvid või veljed internetist, tuuakse kaup <b>Tallinna piires tasuta kohale</b>. Koostöös rahvusvahelise <b>kullerfirmaga DPD</b> pakutakse kauba kohaletoimetamist Eesti piires 1-2 toopaeva jooksul peale makse laekumist (välja arvatud kaup, mille tellimisaeg on pikem). DPD kulleriga saadetakse kaupa üle terve Eesti, samuti <b>Lätti, Leetu ja Soome</b>. </p> <p> Rattad24 meeskond on Sulle abiks ka <b>nõustamisel ning õige valiku tegemisel</b>. Samuti saad häid <b>personaalseid hinnapakkumisi</b> läbi interneti kui ka ettevõtte esindustes. </p> <p> <br> </p>",
      'long': "Voucher kehtib 31.03.2015 kuni 30.04.2015 Voucherite arv antud pakkumises on piiratud Voucher sisaldab rehvide täisvahetust usaldusväärses Rattad24 esinduses Pärnus või Tallinnas Ostu sooritamisel soeta voucher vastavalt oma sõiduki rehvide suurusele: 12-17\" plekkveljed – 13 € (tavahind 25 €) 12-16\" valuveljed – 15 € (tavahind 30 €) 17-18\" valuveljed – 20€ (tavahind 40 €) 19\" valuveljed – 22,50 € (tavahind 45 €) 20-26\" valuveljed – 35 € (tavahind 55 €) Iga ventiili vahetuse eest tuleb kohapeal lisaks tasuda 1,5 €. Kui balansseerimisele kulub rohkem kui 50 grammi ratta kohta, pead iga lisagrammi eest tasuma 5 senti Kaubikutele ja maasturitele lisandub rehvitööde eest lisatasu 6 €, mille saad samuti tasuda kohapeal NB! Run Flat rehvide vahetuse hind on kahekordne. Selleks puhuks soovitame Sul soetada 2 voucherit Palume sul rehvivahetuseks aeg broneerida Männiku esinduses telefonil 5330 8725, Vesse esinduses telefonil 5699 4713 ja Pärnu esinduses telefonil 5626 6784, mainides kindlasti, et kasutad Cherry voucherit. Kui hilined rohkem kui 15 minutit sellest teenusepakkujat teavitamata, loetakse voucher kasutatuks Kuni Sinu autol rehve vahetatakse, saad Sina mugavalt ooteruumis aega veeta Kindlasti jälgi kampaaniaid ja värskemaid uudiseid ettevõtte Facebook'i kodus ja kodulehel Kevade tulekul on aeg ka oma neljarattalisel sõbral vanad papud uute vastu vahetada... Seda ikka selleks, et soojal ajal sujuvamalt randa ja suvilasse veereda!"
    },
    price: {
      original: "25 - 55 €",
      discount: "13 - 35 €"
    },
    parsed: "1/3/2015"
  }, {
    url: "https://www.minuvalik.ee/ru/deal/3092394913/",
    site: "www.minuvalik.ee",
    active: true,
    title: "Самые популярные ролы в одном наборе! Наборы суши из 48 штук в суше-баре Fuji - самое вкусное и самое любимое специально для вас!",
    pictures: [
    "https://www.minuvalik.ee/actimg/3092394913/l/001.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/002.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/003.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/004.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/007.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/008.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/009.jpg",
    "https://www.minuvalik.ee/actimg/3092394913/l/01.jpg"
  ],
    description: {
      intro: "Как настоящие фанаты своего дела, мы предлагаем вам то, что особенно любим сами: качественные и вкусные суши, первоклассные напитки и кофе! Полакомиться свежими и вкусными суши от Fuji теперь можно сразу в двух местах: в торгом центре Läänemere и новом суши-баре по адресу Pae 68!",
      'short': "<li class=\"li_compare\">В новом суши баре по адресу <strong>Pae 68</strong> вас ждет новый суши-бар с уютным интерьером и, как всегда, первоклассными суши. </li> <li class=\"li_compare\">Из дополнительных приятных моментов: мы фанаты не только японской кухни, но и отличного кофе! Поэтому мы установили в Fuji Baar в <strong>торговом центре Läänemere</strong>&nbsp;одну из лучших рожковых кофеварок, в которой — специально для вас — приготовим изумительные по вкусу и аромату напитки, используя лучшие сорта кофе! Со знанием дела и особой любовью :) </li>",
      'long': "<li class=\"li_descr\">В цену входит купон, который предост��вляет скидку до 48% при заказе набора суши в суше-баре Fuji. </li> <li class=\"li_descr\">На выбор предлагается:<br> - <strong>Комплект суши Sakura</strong> (48 шт.) – оплачиваемая цена на месте 14,90 € (обычная цена 28,50 €).<br> - <strong>Комплект суши Viktoria</strong> (48 шт.) – оплачиваемая цена на месте 16,90 € (обычная цена 30,50 €). </li> <li class=\"li_descr\"> <strong>Комплект суши Sakura</strong> включает в себя:<br> - Филадельфия маки (8 шт.)— сыр «Филадельфия», лосось, авокадо, семена кунжута.<br> - Калифорния маки (8 шт.)— снежный краб, огурец, авокадо, майонез, тобико красная.<br> - Хофу маки (8 шт.)— сыр «Филадельфия», вакаме, семена кунжута.<br> - Канадзава (8 шт.)— сыр «Филадельфия», огурец, снежный краб, семена кунжута.<br> - Классические маки с огурцом (8 шт.).<br> - Mаки со снежным крабом и крем сыром (8 шт.). </li> <li class=\"li_descr\"> <strong>Комплект суши Viktoria</strong> включает в себя:<br> - Филадельфия маки (8 шт.) — лосось, сыр «Филадельфия», авокадо, икра масаго черная.<br> - Калифорния маки (8 шт.) — снежный краб, огурец, авокадо, майонез, тобико красная.<br> - Akita маки (8 шт.) — майонез, жареная курица, помидор, огурец, семена кунжута.<br> - Корияма (8 шт.) — сыр «Филадельфия», огурец, нарезка лосося.<br> - Классические маки с огурцом (8 шт.).<br> - Mаки со снежным крабом и крем сыром (8 шт.). </li> <li class=\"li_descr\">В каждый из комплектов также входит три комплекта палочек, васаби, маринованный имбирь и соевый соус. </li> <li class=\"li_descr\">Купон можно использовать в одном из двух представительств Fuji суши:<br> - в торгом центре по адресу&nbsp;<strong>Läänemere tee 30</strong>. Вск&nbsp;- Чт&nbsp;11:00–22:00, Пт&nbsp;- Сб&nbsp;11:00–24:00.<br> - в новом суши-баре по адресу&nbsp;<strong>Pae 68</strong>. Пн&nbsp;- Вск&nbsp;11:00–22:00. </li> <li class=\"li_descr\"> <strong>NB!</strong>&nbsp;Заказ желательно делать предварительно&nbsp;<strong>за 2-3 часа</strong>&nbsp;по телефону&nbsp;<strong>+372 5628 6222</strong>! Особенно прочим учитывать длинные очереди в выходные дни и по вечерам. </li> <li class=\"li_descr\">Вы можете отведать суши на месте, взять на вынос или заказать доставку на дом. </li> <li class=\"li_descr\"> <strong>NB!</strong> Стоимость упаковки не входит в стоимость ваучера, поэтому при заказе на вынос необходимо доплатить:<br> - 0,90 € за обычную упаковку;<br> - 2,50 € за большой праздничный поднос. </li> <li class=\"li_descr\">Стоимость доставки:<br> - Lasnamäe — 3 €<br> - Pirita, Viimsi, Põhja-Tallinn, Kristiine, Peetrikula, Mustamäe — 4 €<br> - Haabersti, Nõmme, Muuga, Maardu — 6 €. </li> <li class=\"li_descr\">Купоном&nbsp;можно воспользоваться сразу после покупки и 30.04.15 </li>"
    },
    price: {
      original: "",
      discount: "1 €",
      save: "-48%"
    },
    parsed: "1/3/2015"
  }, {
    url: "https://www.minuvalik.ee/ru/deal/0423491770/",
    site: "www.minuvalik.ee",
    active: false,
    title: "Знаменитые суши в новом GreenWay Cafe в центре Таллинна!",
    pictures: [
    "https://www.minuvalik.ee/actimg/0423491770/l/002.jpg",
    "https://www.minuvalik.ee/actimg/0423491770/l/003.jpg",
    "https://www.minuvalik.ee/actimg/0423491770/l/004.jpg"
  ],
    description: {
      intro: "Поклонникам японской кухни обязательно следует посетить суши-бар \"GreenWay\" по адресу Pronksi 11. Вы по достоинству оцените вкус настоящих суши и роллов!",
      'short': "Секрет вкусовых качеств наших блюд прост: мы используем только свежие продукты!<br> В приготовлении блюд используется рыба высшего качества и один из лучших сортов риса.<br> Если к Вам неожиданно пришли гости, если Вы организуете вечеринку, корпоратив, любое другое торжество, либо желаете провести вечер в компании своих близких и любимых, милости просим к нам в гости!",
      'long': "<li class=\"li_descr\">В стоимость входит один комплект суши от GreenWay Cafe. </li> <li class=\"li_descr\">Комплект состоит из 3х разных маков (24 шт.):<br> - маки <strong>«California»</strong>: <em>огурец, снежный краб, семена кунжута</em> (8 шт.);<br> - маки <strong>«California 3»</strong>: к<em>рем-сыр, манго, снежный краб, семена кунжута</em> (8 шт.);<br> - маки <strong>«Philadelphia»</strong>: <em>крем-сыр, авокадо, лосось, семена кунжута</em> (8 шт.). </li> <li class=\"li_descr\">В комплект также входят: маринованный имбирь, васаби, соевый соус, палочки. </li> <li class=\"li_descr\">Вы можете заказать комплект суши и с собой, заплатив за коробку 0.40 евро. </li> <li class=\"li_descr\"> <strong>Бонус:</strong> скидка 10% на все меню, за исключение комплектов и напитков. </li> <li class=\"li_descr\"> Новое&nbsp;<strong>GreenWay Cafe</strong> находится по адресу Pronksi 11,&nbsp;Таллинн. </li> <li class=\"li_descr\">Часы работы кафе:&nbsp;&nbsp;Вт.-Чт. 11:00 – 21:00, Пт.-Сб. 11:00 – 23:00, Вск. 11:00 – 21:00, Пн. – закрыто. </li> <li class=\"li_descr\">Для лучшего обслуживания и экономии вашего времени просим делать заказ не позднее, чем за 1 час по телефону&nbsp;<strong>+372 5556 8686.</strong> </li> <li class=\"li_descr\">Просим учитывать, что по&nbsp;вечерам и выходным может возникнуть очередь. </li> <li class=\"li_descr\">Приобретённым ваучером можно воспользоваться до 30.04.2015. </li>"
    },
    price: {
      original: "19€",
      discount: "9.50 €",
      save: "-50%"
    },
    parsed: "1/3/2015"
  }, function () {
    console.log('finished populating offers');
  });
});

Wish.find({}).remove(function () {
  Wish.create({
    contains: 'суши',
    hasEmail: true,
    email: 'nikolai.muhhin@gmail.com',
    hasPhone: true,
    phone: '+37253003125'
  }, {
    contains: 'пицца',
    hasEmail: true,
    email: 'nikolai.muhhin@gmail.com',
    hasPhone: false,
    phone: null
  }, function () {
    console.log('finished populating wishes');
  });
});

User.find({}).remove(function () {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function () {
    console.log('finished populating users');
  });
});