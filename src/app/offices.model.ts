export interface Office {
  name: string;
  greeting: string;
  image: string;
  offices:
    {
    address: string,
    location: string,
    email: string,
  }[]
}

export const OFFICES =
    [
        {
          "id": 249337,
          "name": "Argentina",
          "greeting": "Hola ",
          "message": "How can we help you?",
          "image": "/49fa4a/globalassets/00-global/02-images/03-contact/argentina.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49fa4a/globalassets/00-global/02-images/03-contact/argentina.jpg",
          "countrySite": {
            "url": "/es-ar/",
            "label": "Visit Valtech local Argentina website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/Office+F,+Av.+Gaona+2612,+Ramos+Mej%C3%ADa,+Buenos+Aires,+Argentina/@-34.6382143,-58.568021,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc7f0789f7781:0xb6cff78ce1929964!8m2!3d-34.6382143!4d-58.5658323",
              "address": "Valtech Buenos Aires Ramos Mejía Office F Avenida Gaona 2612 1704 Ramos Mejía, Buenos Aires",
              "phoneNumber": "+54 11 7079 6080",
              "email": "ar.info@valtech.com"
            }
          ]
        },
        {
          "id": 249338,
          "name": "Brazil",
          "greeting": "Olá",
          "message": "How can we help you?",
          "image": "/49f845/globalassets/00-global/02-images/03-contact/brazil.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f845/globalassets/00-global/02-images/03-contact/brazil.jpg",
          "countrySite": {
            "url": "/pt-br/",
            "label": "Visit Valtech local Brazil website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/R.+Nossa+Sra.+de+Lourdes,+110+-+Agron%C3%B4mica,+Florian%C3%B3polis+-+SC,+88025-523,+Brazil/@-27.5737533,-48.531189,17z/data=!3m1!4b1!4m5!3m4!1s0x9527386ff959a945:0xc5f8b36ba4064b3e!8m2!3d-27.5737533!4d-48.5290003",
              "address": "Valtech Florianópolis\\nRua Nossa Senhora de Lourdes, 110 \\n6º Andar \\nCentro Empresarial Célia Couto Daux\\nFlorianópolis, SC",
              "phoneNumber": "+55 (48) 3223.3750\\n",
              "email": "ola@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/Valtech+S%C3%A3o+Paulo/@-23.5417508,-46.707674,13.71z/data=!4m13!1m7!3m6!1s0x94ce57ec5a454771:0x4bdc54ad81ef20a0!2sR.+Bruxelas,+188+-+Sumar%C3%A9,+S%C3%A3o+Paulo+-+SP,+01259-000,+Brazil!3b1!8m2!3d-23.5431071!4d-46.6831178!3m4!1s0x94ce57bdc076cb3d:0x7d27bf3e55e7836b!8m2!3d-23.5431071!4d-46.6831178",
              "address": "Valtech São Paulo\\nRua Bruxelas, 188, Cj 02\\nEdificio Módulo Bruxelas\\nSão Paulo, SP\\n",
              "phoneNumber": "+55 (48) 3223.3750",
              "email": "ola@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/R.+Dep.+Jos%C3%A9+Armando+Afonseca,+63+-+Higien%C3%B3polis,+S%C3%A3o+Paulo+-+SP,+01239-060,+Brazil/@-23.5482863,-46.6560635,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5836f9e3df4b:0x5cf75a6ec2819fdf!8m2!3d-23.5482912!4d-46.6538748",
              "address": "Valtech São Paulo\\nRua Deputado José Armando Afonseca, 63\\nHigienópolis\\nSão Paulo, SP\\n",
              "phoneNumber": "+55 (11) 2507-5063",
              "email": "ola@valtech.com"
            }
          ]
        },
        {
          "id": 249343,
          "name": "Canada",
          "greeting": "Hello, Bonjour",
          "message": "How can we help you?",
          "image": "/49fa8d/globalassets/00-global/02-images/03-contact/canada.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49fa8d/globalassets/00-global/02-images/03-contact/canada.jpg",
          "countrySite": {
            "url": "/fr-ca/",
            "label": "Visit Valtech local Canada website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/49+Spadina+Ave+%23201,+Toronto,+ON+M5V+2J1,+Canada/@43.6434844,-79.395779,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34d9b1b9cdc3:0xbd483989f77923bb!8m2!3d43.6434844!4d-79.3935903",
              "address": "Valtech Toronto\\n\\n49 Spadina Avenue, Suite 201\\nToronto, Ontario, M5V 2J1",
              "phoneNumber": "+1 416 203 2997",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/260+Rue+Sicard+%23300,+Sainte-Th%C3%A9r%C3%A8se,+QC+J7E+3X4,+Canada/@45.6421437,-73.8606642,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9287b28cee3ff:0xcbb0cdc3173dc9de!8m2!3d45.6421437!4d-73.8584755",
              "address": "Valtech Ste-Therese\\n260 Sicard St, Office 300\\nSte-Therese, Quebec J7E 3X4",
              "phoneNumber": "+1 450 979 7620",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/4398+St+Laurent+Blvd,+Montreal,+QC+H2W+1Z5,+Canada/@45.5193698,-73.5874218,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91bd2e7dc94cb:0xe4c12ebdee646357!8m2!3d45.5193698!4d-73.5852331",
              "address": "Valtech Montreal\\n4398 St-Laurent Blvd, Suite 204\\nMontreal, Quebec H2W 1Z5",
              "phoneNumber": "+1 514 982 6560",
              "email": "na.marketing@valtech.com"
            }
          ]
        },
        {
          "id": 249339,
          "name": "China",
          "greeting": "你好",
          "message": "How can we help you?",
          "image": "/49f845/globalassets/00-global/02-images/03-contact/china.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f845/globalassets/00-global/02-images/03-contact/china.jpg",
          "countrySite": {
            "url": "/en-cn/",
            "label": "Visit Valtech local China website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://goo.gl/maps/9AmoHNrmyaETDuHM9",
              "address": "Valtech Shanghai\\nCandor Plaza\\nUnit 02A103, 118 Rong Ke Lu\\nBuilding 3, Pudong New\\nShanghai 201203\\n",
              "phoneNumber": "",
              "email": "cn.info@valtech.com"
            },
            {
              "location": "https://goo.gl/maps/aHjmAbFJW49qf6oc9",
              "address": "WeWork Air China Century Building\\nUnit 03-151\\n40 Xiaoyun Road, Chaoyang\\nBeijing 100027\\n",
              "phoneNumber": "",
              "email": "cn.info@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/search/Unit+05-120,+Tower+B,+473+Guanshan+Avenue+East+Lake+High-tech+Development+Zone+Wuhan+China+430070/@30.4750103,114.396581,14.92z",
              "address": "Valtech Wuhan, WeWork Optics New Development\\nUnit 05-120, Tower B,\\n473 Guanshan Avenue\\nEast Lake High-tech Development Zone\\nWuhan China 430070\\n",
              "phoneNumber": "",
              "email": "cn.info@valtech.com"
            }
          ]
        },
        {
          "id": 249340,
          "name": "Denmark",
          "greeting": "Hej",
          "message": "How can we help you?",
          "image": "/49fa9c/globalassets/00-global/02-images/03-contact/denmark.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49fa9c/globalassets/00-global/02-images/03-contact/denmark.jpg",
          "countrySite": {
            "url": "/en-dk/",
            "label": "Visit Valtech local Denmark website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/V%C3%A6rkmestergade+13,+8000+Aarhus,+Denmark/@56.1499157,10.2068417,18z/data=!4m13!1m7!3m6!1s0x464c3f8e4a754087:0xd53bef3fe97d048b!2sV%C3%A6rkmestergade+13,+8000+Aarhus,+Denmark!3b1!8m2!3d56.149838!4d10.207936!3m4!1s0x464c3f8e4a754087:0xd53bef3fe97d048b!8m2!3d56.149838!4d10.207936",
              "address": "Valtech Aarhus\\nÅboulevarden 22, 4. sal\\n8000 Aarhus C\\n",
              "phoneNumber": "+45 32 88 20 00\\n",
              "email": "info@valtech.dk"
            },
            {
              "location": "https://www.google.nl/maps/place/Kanonb%C3%A5dsvej+2,+1437+K%C3%B8benhavn,+Denmark/@55.6793565,12.6042318,17z/data=!3m1!4b1!4m5!3m4!1s0x4652532fe9f2cc19:0x9242c4dff390ea94!8m2!3d55.6793565!4d12.6064205",
              "address": "Valtech Copenhagen\\nKanonbådsvej 2\\n1437 København k\\n",
              "phoneNumber": "+45 32 88 20 00\\n",
              "email": "info@valtech.dk"
            },
            {
              "location": "https://www.google.com/maps/place/Bernstorffsgade+21,+1577+K%C3%B8benhavn,+Danmark/@55.670556,12.5671624,17z/data=!3m1!4b1!4m5!3m4!1s0x4652536d33df5c2d:0x4ba735d2d95e2b26!8m2!3d55.670553!4d12.569351",
              "address": "Valtech eCapacity\\nBernstorffsgade 21\\n1577 København\\n",
              "phoneNumber": "+45 32 88 20 00\\n",
              "email": "info@valtech.dk"
            }
          ]
        },
        {
          "id": 249342,
          "name": "France",
          "greeting": "Bonjour",
          "message": "How can we help you?",
          "image": "/49f2c4/globalassets/00-global/02-images/03-contact/valtechfr_newoffice-1.jpeg?width=1360&height=198&center=0.48,0.75&mode=crop&format=jpg",
          "originalImage": "/49f2c4/globalassets/00-global/02-images/03-contact/valtechfr_newoffice-1.jpeg",
          "countrySite": {
            "url": "/fr-fr/",
            "label": "Visit Valtech local France website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://goo.gl/maps/yEtxhXYruXKM1DKi8",
              "address": "Valtech Paris\\n38 rue des Jeuneurs\\n75002 \\nParis",
              "phoneNumber": "+33 1 76 21 15 00",
              "email": "info@valtech.fr"
            }
          ]
        },
        {
          "id": 249344,
          "name": "Germany",
          "greeting": "Hallo",
          "message": "How can we help you?",
          "image": "/49f865/globalassets/00-global/02-images/03-contact/germany.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f865/globalassets/00-global/02-images/03-contact/germany.jpg",
          "countrySite": {
            "url": "/de-de/",
            "label": "Visit Valtech local Germany website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/Anna-Schneider-Steig+10,+50678+K%C3%B6ln,+Germany/@50.92404,6.9647313,17z/data=!3m1!4b1!4m5!3m4!1s0x47bf24361ce0657b:0x598f196b030e62d6!8m2!3d50.92404!4d6.96692",
              "address": "Valtech Cologne \\nAnna-Schneider-Steig 10\\n50678 Köln\\n",
              "phoneNumber": "+49 221 569 773-0",
              "email": "info@valtech.de"
            },
            {
              "location": "https://goo.gl/maps/dBkZLFH2BfKYre7SA",
              "address": "Valtech Düsseldorf \\n\\nToulouser Allee 23a\\n40211 Düsseldorf",
              "phoneNumber": "+49 211 179 2370",
              "email": "info@valtech.de"
            },
            {
              "location": "https://www.google.nl/maps/place/Friedenheimer+Br%C3%BCcke+29,+80639+M%C3%BCnchen,+Germany/@48.1462956,11.5178458,17z/data=!3m1!4b1!4m5!3m4!1s0x479e7623ee742e5b:0xe633ec0e6b512b99!8m2!3d48.1462956!4d11.5200345",
              "address": "Valtech Munich\\nForum am Hirschgarten\\nFriedenheimer Brücke 29\\n80639 München",
              "phoneNumber": "+49 89 7007 4410",
              "email": "info.de@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/Valtech+Hamburg/@53.5603512,9.937082,17z/data=!3m1!4b1!4m5!3m4!1s0x47b185589f6cda57:0x43601a26f79da7fe!8m2!3d53.560348!4d9.9392707",
              "address": "Valtech Hamburg @ Office.One\\nHarkortstraße 95\\n22765 Hamburg",
              "phoneNumber": "+49 211 179 2370",
              "email": "info.de@valtech.com"
            },
            {
              "location": "https://goo.gl/maps/8QpWwEJG7r9eduPd6",
              "address": "Valtech Stuttgart \\nKönigstrasse 27\\n70173 Stuttgart\\n",
              "phoneNumber": "+49 711 490 50 309\\n",
              "email": "info.de@valtech.com"
            },
            {
              "location": "https://goo.gl/maps/jDJ4Fnos3hzfohqY7",
              "address": "Valtech Mobility\\nBirketweg 21\\n80639 München\\n",
              "phoneNumber": "+49 (0)89 700744-631\\n",
              "email": "\\ninfo@valtech-mobility.com"
            },
            {
              "location": "https://goo.gl/maps/JuMJhxdJx2ao8wPA8",
              "address": "Valtech Mobility\\nTriforum\\nFrankfurter Straße 233\\nEingang C\\n63263 Neu-Isenburg\\n",
              "phoneNumber": "",
              "email": "info@valtech-mobility.com"
            },
            {
              "location": "https://goo.gl/maps/nmH3Lka5Wds1wLzA9",
              "address": "Valtech Mobility\\nFrankfurter Straße 3c\\n38122 Braunschweig\\n",
              "phoneNumber": "",
              "email": "info@valtech-mobility.com"
            },
            {
              "location": "https://goo.gl/maps/ohcYQRTwHed41NtE8",
              "address": "Valtech Mobility\\nBreitscheidstraße 36\\n01237 Dresden\\n",
              "phoneNumber": "+49 211 179 237-0\\n\\n",
              "email": "info@valtech-mobility.com"
            },
            {
              "location": "https://goo.gl/maps/PbW6veBRdJPWtYZX8",
              "address": "Valtech Mobility\\nGaimersheimer Str. 44\\n85057 Ingolstadt",
              "phoneNumber": "+49 89 700 7441-0\\n\\n",
              "email": "info@valtech-mobility.com\\n\\n"
            }
          ]
        },
        {
          "id": 249336,
          "name": "India",
          "greeting": "हेलो",
          "message": "How can we help you?",
          "image": "/49f865/globalassets/00-global/02-images/03-contact/india.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f865/globalassets/00-global/02-images/03-contact/india.jpg",
          "countrySite": {
            "url": "/en-in/",
            "label": "Visit Valtech local India website",
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/Valtech/@12.9164944,77.5966809,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae150e413b549d:0x24ddb1c1c2c81592!8m2!3d12.9164944!4d77.5988696",
              "address": "Maas Unique 30/A\\n1st Main Road\\nIndustrial Suburb\\n3rd Phase J.P. Nagar\\nBengaluru - 560078",
              "phoneNumber": "+91 8068853100 /1 /2 /3 /4 /5",
              "email": "info@valtech.co.in"
            },
            {
              "location": "https://goo.gl/maps/oYZ22qiiZ7T2",
              "address": "Valtech Gurugram\\nUnit NO: 802 & 803\\n8th Floor Tower B\\nUnitech Cyber Park\\nSector 39\\nGurugram -122003",
              "phoneNumber": "+91 124-4835400\\n",
              "email": "info@valtech.co.in"
            }
          ]
        },
        {
          "id": 249341,
          "name": "Mexico",
          "greeting": "Hola",
          "message": "What can we help?",
          "image": "/4afd46/globalassets/00-global/02-images/01-about/mexico-city-birds-eye2x.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/4afd46/globalassets/00-global/02-images/01-about/mexico-city-birds-eye2x.jpg",
          "countrySite": {
            "url": "/es-mx/",
            "label": "Visit Valtech local Mexico website",
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/Piso+11,+Calle+Baj%C3%ADo+360,+código+2,+Hipódromo+Condesa,+Cuauhtémoc,+06760+Ciudad+de+México,+CDMX,+Mexico/@19.402363,-99.1721557,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff6b7cf265fb:0x536a917cfb9ff3c3!8m2!3d19.402363!4d-99.169967",
              "address": "Bajío 360, Piso 11, Col. Hipódromo-Condesa, Ciudad de México.",
              "phoneNumber": "+34241241412424",
              "email": "some@email.com"
            },
            {
              "location": "https://www.google.com/maps/place/Av+Nuevo+Le%C3%B3n+95-piso+2,+Hip%C3%B3dromo,+Cuauht%C3%A9moc,+06100+Ciudad+de+M%C3%A9xico,+CDMX,+Mexico/@19.4116684,-99.1746821,17z/data=!4m5!3m4!1s0x85d1ff416fa2c325:0x860f4e5be9b888b4!8m2!3d19.4116634!4d-99.1724934",
              "address": "Av. Nuevo León 95, Piso 2, Col. Hipódromo-Condesa, c.p. 06170, Ciudad de México.",
              "phoneNumber": "+3523632621361361",
              "email": "some1@rmqods.com"
            }
          ]
        },
        {
          "id": 249345,
          "name": "Netherlands",
          "greeting": "Hallo",
          "message": "How can we help you?",
          "image": "/49f865/globalassets/00-global/02-images/03-contact/netherlands.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f865/globalassets/00-global/02-images/03-contact/netherlands.jpg",
          "countrySite": {
            "url": "/nl-nl/",
            "label": "Visit Valtech local Netherlands website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/Amsterdamseweg+43,+3812+RP+Amersfoort/@52.1640779,5.3669426,19z/data=!4m5!3m4!1s0x47c646adebac8733:0x7c4b024f9614209d!8m2!3d52.1639839!4d5.3675411",
              "address": "Valtech Amersfoort\\nAmsterdamseweg 43\\n3812 RP Amersfoort\\n",
              "phoneNumber": "+31 88 648 00 00\\n\\n\\n",
              "email": "info@valtech.nl"
            },
            {
              "location": "https://www.google.com/maps/place/Valtech+Amsterdam/@52.3344894,4.9208538,18z/data=!4m5!3m4!1s0x47c609d7f65a5419:0x8fa760f1c051b2d2!8m2!3d52.3338814!4d4.9212401",
              "address": "Valtech Amsterdam\\nPaul van Vlissingenstraat 10F\\n1096 BK Amsterdam\\n",
              "phoneNumber": "+31 88 648 00 00\\n\\n\\n",
              "email": "info@valtech.nl"
            },
            {
              "location": "https://www.google.nl/maps/place/Essenstraat+1,+5616+LG+Eindhoven/@51.4433735,5.4592043,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6d913024df76b:0xb972234f17a5c312!8m2!3d51.4433735!4d5.461393",
              "address": "Valtech Eindhoven\\nEssenstraat 1\\n5616 LG Eindhoven\\n\\n(For parking: Philips Stadion Parking,\\nexit tickets available at entrance desk Valtech)",
              "phoneNumber": "+31 88 648 00 00\\n\\n",
              "email": "info@valtech.nl"
            },
            {
              "location": "https://www.google.com/maps/place/Valtech+Utrecht/@52.0709296,5.1081749,17z/data=!3m1!4b1!4m5!3m4!1s0x47c665f26eea0b99:0x11d4dd3f4e2079bc!8m2!3d52.0709296!4d5.1103636",
              "address": "Valtech Utrecht\\nKanaalweg 29\\n3526 KM Utrecht\\n\\n",
              "phoneNumber": "+31 88 648 00 00\\n",
              "email": "info@valtech.nl"
            },
            {
              "location": "https://www.google.nl/maps/place/Valtech/@52.1031823,5.0794343,15z/data=!4m5!3m4!1s0x0:0x251e695acd04332c!8m2!3d52.1031823!4d5.0794343?hl=nl",
              "address": "Valtech Utrecht\\nNijverheidsweg 16 G\\n3534 AM Utrecht\\n\\n",
              "phoneNumber": "+31 30 298 5050\\n\\n",
              "email": "info@valtech.nl"
            }
          ]
        },
        {
          "id": 249346,
          "name": "North Macedonia",
          "greeting": "Здраво",
          "message": "How can we help you?",
          "image": "/496666/globalassets/00-global/02-images/03-contact/north-macedonia.png?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/496666/globalassets/00-global/02-images/03-contact/north-macedonia.png",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/codeflair+DOOEL+Skopje/@41.9953741,21.4289081,21z/data=!4m13!1m7!3m6!1s0x135415b4c250b75d:0x2c22f98f6a0d379d!2zOCDQo9C00LDRgNC90LAg0JHRgNC40LPQsNC00LAgMzksINCh0LrQvtC_0ZjQtSAxMDAwLCDQnNCw0LrQtdC00L7QvdC40Y8gKNCR0K7QoNCcKQ!3b1!8m2!3d41.995279!4d21.4289348!3m4!1s0x0:0x491bedd4e61351c3!8m2!3d41.99535!4d21.4288997",
              "address": "Valtech Skopje\\nul 1732 br.4, A-left\\nEntrance 1, br.2\\n1000 Skopje, North Macedonia\\n",
              "phoneNumber": "+38970221227\\n",
              "email": "mk.contact@valtech.com\\n"
            }
          ]
        },
        {
          "id": 253186,
          "name": "Poland ",
          "greeting": "Gratulacje!",
          "message": "How we can help you? ",
          "image": "/49f613/globalassets/poland-3.png?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f613/globalassets/poland-3.png",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.com.ua/maps/place/Emilii+Plater+10,+00-669+Warszawa,+%D0%9F%D0%BE%D0%BB%D1%8C%D1%88%D0%B0/@52.2252254,21.0079389,16.79z/data=!4m5!3m4!1s0x471eccec528fa4b5:0xd30bd8c3fa90f2c!8m2!3d52.2240651!4d21.0086222?hl=ru",
              "address": "Poland Warsaw\\nEmilii Plater 10/47, 00-669",
              "phoneNumber": "",
              "email": ""
            }
          ]
        },
        {
          "id": 249347,
          "name": "Portugal",
          "greeting": "Olá",
          "message": "How can we help you?",
          "image": "/49ec92/globalassets/portugal.png?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49ec92/globalassets/portugal.png",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/Campo+Pequeno+48,+1000-081+Lisboa,+Portugal/@38.742349,-9.144175,19z/data=!3m1!4b1!4m5!3m4!1s0xd1933a7a552a673:0xd9d9bc44745159b4!8m2!3d38.742349!4d-9.1436278?hl=nl",
              "address": "Valtech Lisbon\\nCampo Pequeno Nº 48 - 7º\\n1000-081 Lisbon\\nPortugal\\n",
              "phoneNumber": "+351 215 855 153",
              "email": ""
            }
          ]
        },
        {
          "id": 249348,
          "name": "Singapore",
          "greeting": "Hello",
          "message": "How can we help you?",
          "image": "/49f233/globalassets/00-global/02-images/03-contact/singapore-skyline.png?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f233/globalassets/00-global/02-images/03-contact/singapore-skyline.png",
          "countrySite": {
            "url": "/en-sg/",
            "label": "Visit Valtech local Singapore website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/Valtech+Singapore/@1.2794163,103.8414615,15z/data=!4m5!3m4!1s0x0:0x4f1c235f37462627!8m2!3d1.2794163!4d103.8414615",
              "address": "Valtech Singapore\\n9A Keong Saik Rd\\nSingapore 089117\\n",
              "phoneNumber": "+65 6718 0460\\n",
              "email": "sg.info@valtech.com"
            }
          ]
        },
        {
          "id": 249349,
          "name": "Sweden",
          "greeting": "Hej",
          "message": "How can we help you?",
          "image": "/49f150/globalassets/00-global/02-images/03-contact/stockholm-office.jpg?width=1360&height=198&center=0.75,0.22&mode=crop&format=jpg",
          "originalImage": "/49f150/globalassets/00-global/02-images/03-contact/stockholm-office.jpg",
          "countrySite": {
            "url": "/",
            "label": "Visit Valtech local Sweden website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/search/Kungliga+Myntet+Hantverkargatan+5+112+21+Stockholm/@59.3279422,18.0484071,17z/data=!3m1!4b1",
              "address": "Valtech Stockholm\\nKungliga Myntet\\nHantverkargatan 5\\n112 21 Stockholm\\n",
              "phoneNumber": "+46 8 562 233 00\\n",
              "email": "hej@valtech.com"
            },
            {
              "location": "https://www.google.se/maps/place/Kyrkogatan+17,+411+15+G%C3%B6teborg/@57.7049495,11.9645089,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff365c3831bc7:0xcae715bbae134b3!8m2!3d57.7049467!4d11.9666976",
              "address": "Valtech Gothenburg\\nKyrkogatan 17\\n411 15 Gothenburg\\n",
              "phoneNumber": "+46 8 562 233 00\\n",
              "email": "hej@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/Regeringsgatan+109,+111+39+Stockholm/@59.3402391,18.0630478,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d42dbee5b0b:0x418cb54ca73ba8f3!8m2!3d59.3402364!4d18.0652364",
              "address": "Valtech Radon\\nRegeringsgatan 109\\n111 39 Stockholm\\n",
              "phoneNumber": "+468-410 441 10\\n",
              "email": "hello@houseofradon.com"
            }
          ]
        },
        {
          "id": 249350,
          "name": "Switzerland",
          "greeting": "Grüezi, Bonjour, Ciao, Tgau",
          "message": "How can we help you?",
          "image": "/49facd/globalassets/00-global/02-images/03-contact/switserland.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49facd/globalassets/00-global/02-images/03-contact/switserland.jpg",
          "countrySite": {
            "url": "/en-ch/",
            "label": "Visit Valtech local Switzerland website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/Stadtturmstrasse+10,+5400+Baden,+Switzerland/@47.475786,8.303922,17z/data=!3m1!4b1!4m5!3m4!1s0x47906cc77a92845d:0xbe587bdfd48b1073!8m2!3d47.475786!4d8.3061107",
              "address": "Valtech Baden\\nStadtturmstrasse 10\\nCH - 5400 Baden\\n",
              "phoneNumber": "+41 56 210 01 20",
              "email": "contact.ch@valtech.com"
            },
            {
              "location": "https://goo.gl/maps/pM2LfDqVQ2FtFGjc7",
              "address": "Valtech Bern\\nChristoffelgasse 7\\nCH - 3011 Bern\\n",
              "phoneNumber": "+41 31 334 01 20",
              "email": "contact.ch@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/Valtech+Switzerland+AG/@46.1775138,6.1327478,17z/data=!4m9!1m2!2m1!1sValtech+Geneva+7+Route+de+Saint-Julien+CH+%E2%80%93+1227+Carouge+%2B41+22+301+38+20!3m5!1s0x478c64d82638c4ef:0xedf0cfd50c1ea2c6!8m2!3d46.1775138!4d6.1349365!15sCktWYWx0ZWNoIEdlbmV2YSA3IFJvdXRlIGRlIFNhaW50LUp1bGllbiBDSCDigJMgMTIyNyBDYXJvdWdlICs0MSAyMiAzMDEgMzggMjAiA4gBAZIBEG1hcmtldGluZ19hZ2VuY3k",
              "address": "Valtech Geneva\\n7 Route de Saint-Julien\\nCH – 1227 Carouge\\n",
              "phoneNumber": "+41 22 301 38 20",
              "email": "contact.ch@valtech.com"
            }
          ]
        },
        {
          "id": 249351,
          "name": "Ukraine",
          "greeting": "Вітаємо",
          "message": "How can we help you?",
          "image": "/49f858/globalassets/00-global/02-images/03-contact/ukraine.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49f858/globalassets/00-global/02-images/03-contact/ukraine.jpg",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/Peremohy+Ave,+119,+Chernihiv,+Chernihivs'ka+oblast,+Ukraine,+14000/@51.4993768,31.3028379,17z/data=!3m1!4b1!4m5!3m4!1s0x46d548f4f553a143:0xf66884bc71c4d7a!8m2!3d51.4993768!4d31.3050266",
              "address": "Valtech Chernihiv\\n\\n119a Peremohy Avenu\\nChernihiv, 14013\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://goo.gl/maps/xWS9tJNUaYioSvTX9",
              "address": "Valtech Chernivtsi\\nVynnychenka St, 20\\nChernivtsi, 58018\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://goo.gl/maps/Jp8HkRcdEWnWh8jPA",
              "address": "Valtech Dnipro\\nBarykadna St, 7\\nDnipro, 49000\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://www.google.nl/maps/search/9+Poltavskiy+Shlyah+Str.,+Kharkiv/@49.994507,36.1457417,11z",
              "address": "Valtech Kharkiv\\n9a Poltavskiy Shlyah Street\\nKharkiv, 61052\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://www.google.nl/maps/place/Verkhnii+Val+St,+10,+Kyiv,+Ukraine,+04071/@50.4637582,30.5071673,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce6bd1adab7d:0xa444d7727957e500!8m2!3d50.4637582!4d30.509356",
              "address": "Valtech Kyiv\\n10 Verkhniy Val Street\\nKyiv, 04071\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://goo.gl/maps/reUudgbbFtKHLg8r9",
              "address": "Valtech Lviv\\n200a Kulparkivska\\nLviv, 79071\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            },
            {
              "location": "https://www.google.com.ua/maps/place/Keletska+St,+57,+Vinnytsia,+Vinnyts'ka+oblast,+21000/@49.2244204,28.4170777,17z/data=!3m1!4b1!4m5!3m4!1s0x472d5c68b3a6da6b:0x64fb224d91b6b45a!8m2!3d49.2244204!4d28.4192663?hl=en-GB",
              "address": "Valtech Vinnytsia\\n57 Keletska Street\\nVinnytsia, 21000\\n",
              "phoneNumber": "+38 044 5995 065",
              "email": ""
            }
          ]
        },
        {
          "id": 249352,
          "name": "United Arab Emirates",
          "greeting": "أهلا",
          "message": "How can we help you?",
          "image": "/4adbce/globalassets/00-global/02-images/03-contact/uae_contact_office.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/4adbce/globalassets/00-global/02-images/03-contact/uae_contact_office.jpg",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.com/maps/place/Valtech_+MENA/@25.0798667,55.0909465,11.79z/data=!4m5!3m4!1s0x3e5f6bc02f741831:0x3fd4128e657a3681!8m2!3d25.100449!4d55.169492",
              "address": "Valtech MENA\\nBusiness Central Towers - 46th Floor, \\nTower B - Dubai - \\nUnited Arab Emirates\\n",
              "phoneNumber": "+971 4 225 0572\\n",
              "email": "info.mena@valtech.com"
            }
          ]
        },
        {
          "id": 249353,
          "name": "United Kingdom ",
          "greeting": "Hello",
          "message": "How can we help you?",
          "image": "/498d4d/globalassets/00-global/02-images/03-contact/uk2.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/498d4d/globalassets/00-global/02-images/03-contact/uk2.jpg",
          "countrySite": {
            "url": "/en-gb/",
            "label": "Visit Valtech local United Kingdom website",
            "target": "_blank"
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/18+Keynsham+Rd,+Keynsham,+Bristol+BS31+2DE,+UK/@51.4201993,-2.4910664,17z/data=!3m1!4b1!4m5!3m4!1s0x487185f403733a23:0x1bf447d8f97d3e24!8m2!3d51.4201993!4d-2.4888777",
              "address": "Valtech Bristol Unit 18, Keynsham Rd, Willsbridge Bristol BS30 6EL ",
              "phoneNumber": "+44 (0) 20 7014 0800",
              "email": " info@valtech.co.uk"
            },
            {
              "location": "https://www.google.nl/maps/place/46+Colebrooke+Row,+London+N1+8AF,+UK/@51.5349967,-0.1038956,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b5d9401a91f:0x76f9f2aa9aa55fd3!8m2!3d51.5349967!4d-0.1017069",
              "address": "Valtech London\\n46 Colebrooke Row\\nLondon N1 8AF\\n",
              "phoneNumber": "+44 (0) 20 7014 0800\\n",
              "email": "info@valtech.co.uk"
            },
            {
              "location": "https://www.google.nl/maps/search/Basil+Chambers+65+High+Street+Manchester+M4+1FS/@53.4842787,-2.2406007,17z/data=!3m1!4b1",
              "address": "Valtech Manchester Basil Chambers 65 High Street Manchester M4 1FS",
              "phoneNumber": " +44 (0) 20 7014 0800",
              "email": " info@valtech.co.uk"
            }
          ]
        },
        {
          "id": 249354,
          "name": "United States",
          "greeting": "Hello",
          "message": "How can we help You?",
          "image": "/49fb90/globalassets/00-global/02-images/03-contact/usa.jpg?width=1360&height=198&mode=crop&format=jpg",
          "originalImage": "/49fb90/globalassets/00-global/02-images/03-contact/usa.jpg",
          "countrySite": {
            "url": null,
            "label": null,
            "target": null
          },
          "offices": [
            {
              "location": "https://www.google.nl/maps/place/416+W+13th+St+%23309,+New+York,+NY+10014,+USA/@40.7404075,-74.0090148,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259c07202b201:0x7843e238dc1f7d69!8m2!3d40.7404075!4d-74.0068261",
              "address": "Valtech New York\\n416 West 13th Street, Suite 309\\nNew York, NY 10014\\n",
              "phoneNumber": "+1 877 567 7440\\n",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/7700+Windrose+Ave.+g300,+Plano,+TX+75024,+USA/@33.0819566,-96.8279105,17z/data=!3m1!4b1!4m5!3m4!1s0x864c3cafbfff8bc7:0x757229d3d3fdbe9f!8m2!3d33.0819566!4d-96.8257218",
              "address": "Valtech Dallas\\n7700 Windrose #G300,\\nPlano, TX 75024, USA.\\n\\n",
              "phoneNumber": "+1 877 567 7440\\n",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/15+S+Aberdeen+St,+Chicago,+IL+60607,+%D0%A1%D0%A8%D0%90/@41.8811003,-87.6565113,17z/data=!4m5!3m4!1s0x880e2cd94a40b40d:0xd426b3675065990a!8m2!3d41.8811005!4d-87.654317",
              "address": "Valtech Chicago\\n112 S Sangamon St\\nChicago, Il 60607\\n+1 877 567 7440\\n\\n",
              "phoneNumber": "+1 877 567 7440\\n",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/place/1828+Walnut+St,+Kansas+City,+MO+64108,+USA/@39.0907143,-94.5849223,17z/data=!3m1!4b1!4m5!3m4!1s0x87c0f069ff1e43fd:0x7934a92f77615b76!8m2!3d39.0907102!4d-94.5827336",
              "address": "Valtech Kansas City\\n1828 Walnut St,\\nKansas City, Missouri 64108\\n",
              "phoneNumber": "+1 816 787 1311\\n\\n",
              "email": "na.marketing@valtech.com"
            },
            {
              "location": "https://www.google.com/maps/dir//3618+Falls+Rd,+Baltimore,+MD+21211,+USA/@39.331269,-76.6375167,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c80529ffac5303:0xf4ac3b026cbcd628!2m2!1d-76.635328!2d39.331269",
              "address": "Valtech Baltimore\\n3618 Falls Road, Suite 300\\nBaltimore, MD 21211\\n",
              "phoneNumber": "+1 410 889 5854\\n",
              "email": "na.marketing@valtech.com"
            }
          ]
        }
      ]
