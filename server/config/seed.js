/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Offer = require('../api/offer/offer.model');
var Request = require('../api/request/request.model');
var User = require('../api/user/user.model');

Offer.find({}).remove(function() {
  Offer.create({
    title: {
      short: 'Tallinna kesklinnas uus Peetri Pizza pizzeria! Suur õhuke pitsa kuni -30%.',
      long: 'Peetri Pizza kirevast menüüst leiad kindlasti just selle, mis just Sinul keele alla viib. Suussulavat juustu ja Itaalia köögi kirglikku hõngu ei saa kunagi olla liiga palju!'
    },
    description: {
      short: '<ul class="dd_descr">Rääkides <strong>Peetri Pizzast</strong>, tuleb kasutusele võtta tõeliselt suured sõnad, nagu näiteks „legendaarne“, sest 24 aastat pitsameistrina teab <strong>Peetri Pizza</strong> täpselt, mis peitub ühe imemaitsva hõrgutise saamisloo taga<br>Kindlasti hakka Peetri Pizza <a href="https://www.facebook.com/pages/Peetri-Pizza-Ahtri-tn-10/1029881167028121?fref=ts">Facebook\'is</a> sõbraks ka ja vaata, et Sa lehekülge alla ei neela, sest juba seal näed Sa kuldse juustukattega mõõdukalt krõbeda põhjaga imemaitsvaid pitsakettaid.<br>Peale vesistamise saad <a href="https://www.facebook.com/peetripizza?fref=ts">Facebooki</a> kaudu hoida silma peal ka <strong>Peetri Pizza</strong> pidevatel üllatustel, uute restoranide avamisel ja kogenud pitsagurmaanide soovitustel.</ul>',
      long: '<ul class="dd_descr"> <li class="li_descr">Voucher sisaldab vastavalt Sinu maitsele ühte suurt õhukest pitsat Tallinnas <strong>Ahtri tänaval</strong> värskelt avatud <strong>Peetri Pizza</strong> rikkalikust menüüst (v.a Pizza Ibiza, OMA pizza ja Speciale).</li> <li class="li_descr">Tallinna pitsasõprade otsatuks rõõmuks on tõepoolest oma uksed avanud <strong>Peetri Pizza uus pizzeria</strong> otse kesklinnas populaarsete meelelahutusasutuste vahetus läheduses. Seega saab Itaalia köögi tuntuimat müügiartiklit vastavatud pizzeria\'s mõnuga mugida kas või pärast pidu!</li> <li class="li_descr">Peetri Pizza uus pizzeria asub aadressil <strong>Ahtri 10.</strong></li> <li class="li_descr">Me töötame: E-N 12.00-22.00, R: 12.00 - 05.00, L: 14.00 - 05.00, P: suletud.</li> <li class="li_descr">Soovi korral saate pitsa ka ette tellida numbril <strong>+372 566 79&nbsp;433.</strong></li> <li class="li_descr"><strong>NB!</strong> Voucherit ei saa kasutada koos muude soodustustega ning voucher ei kehti pitsakulleri teenusele.</li> <li class="li_descr">Pakkumises on võimalik soetada kuni 200 voucherit.</li> <li class="li_descr">Voucher kehtib 18.03.2015 kuni 31.03.2015</li></ul>'
    },
    price: {
      original: '6.30',
      sales: '4.40',
      save: '-30%'
    },
    active: true
  }, {
    title: 'Maitsev sushikomplekt Arigato Sushilt, mis koosneb 32 osast!',
    description: {
      short: '<ul class="dd_descr">Rääkides <strong>Peetri Pizzast</strong>, tuleb kasutusele võtta tõeliselt suured sõnad, nagu näiteks „legendaarne“, sest 24 aastat pitsameistrina teab <strong>Peetri Pizza</strong> täpselt, mis peitub ühe imemaitsva hõrgutise saamisloo taga<br>Kindlasti hakka Peetri Pizza <a href="https://www.facebook.com/pages/Peetri-Pizza-Ahtri-tn-10/1029881167028121?fref=ts">Facebook\'is</a> sõbraks ka ja vaata, et Sa lehekülge alla ei neela, sest juba seal näed Sa kuldse juustukattega mõõdukalt krõbeda põhjaga imemaitsvaid pitsakettaid.<br>Peale vesistamise saad <a href="https://www.facebook.com/peetripizza?fref=ts">Facebooki</a> kaudu hoida silma peal ka <strong>Peetri Pizza</strong> pidevatel üllatustel, uute restoranide avamisel ja kogenud pitsagurmaanide soovitustel.</ul>',
      long: '<ul class="dd_descr"> <li class="li_descr">Voucher sisaldab vastavalt Sinu maitsele ühte suurt õhukest pitsat Tallinnas <strong>Ahtri tänaval</strong> värskelt avatud <strong>Peetri Pizza</strong> rikkalikust menüüst (v.a Pizza Ibiza, OMA pizza ja Speciale).</li> <li class="li_descr">Tallinna pitsasõprade otsatuks rõõmuks on tõepoolest oma uksed avanud <strong>Peetri Pizza uus pizzeria</strong> otse kesklinnas populaarsete meelelahutusasutuste vahetus läheduses. Seega saab Itaalia köögi tuntuimat müügiartiklit vastavatud pizzeria\'s mõnuga mugida kas või pärast pidu!</li> <li class="li_descr">Peetri Pizza uus pizzeria asub aadressil <strong>Ahtri 10.</strong></li> <li class="li_descr">Me töötame: E-N 12.00-22.00, R: 12.00 - 05.00, L: 14.00 - 05.00, P: suletud.</li> <li class="li_descr">Soovi korral saate pitsa ka ette tellida numbril <strong>+372 566 79&nbsp;433.</strong></li> <li class="li_descr"><strong>NB!</strong> Voucherit ei saa kasutada koos muude soodustustega ning voucher ei kehti pitsakulleri teenusele.</li> <li class="li_descr">Pakkumises on võimalik soetada kuni 200 voucherit.</li> <li class="li_descr">Voucher kehtib 18.03.2015 kuni 31.03.2015</li></ul>'
    },
    price: {
      original: '2',
      sales: '1',
      save: '-49%'
    },
    active: true
  }, function() {
      console.log('finished populating offers');
    }
  );
});

Request.find({}).remove(function() {
  Request.create({
    contains: 'sushi',
    hasEmail: true,
    email: 'nikolai.muhhin@gmail.com',
    hasPhone: true,
    phone: '+37253003125'
  }, {
    contains: 'pizza',
    hasEmail: true,
    email: 'nikolai.muhhin@swedbank.ee',
    hasPhone: false,
    phone: null
  }, function() {
      console.log('finished populating requests');
    }
  );
});

User.find({}).remove(function() {
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
  }, function() {
      console.log('finished populating users');
    }
  );
});