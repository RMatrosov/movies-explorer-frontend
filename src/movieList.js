/*
import {useLocation, useNavigate} from "react-router-dom";
import {authorize, checkToken, register, signOut} from "./utils/AuthApi";
import {deleteMovie, getMovies, getUserInfo, patchProfileInfo, saveMovie} from "./utils/MainApi";
import {searchMovies} from "./utils/utils";
import {getAllMovies} from "./utils/MoviesApi";
import {shortDuration} from "./utils/constants";

export const movieList = [{
  "id": 1,
  "nameRU": "«Роллинг Стоунз» в изгнании",
  "nameEN": "Stones in Exile",
  "director": "Стивен Кайак ",
  "country": "США",
  "year": "2010",
  "duration": 61,
  "description": "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
  "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
  "created_at": "2020-11-23T14:12:21.376Z",
  "updated_at": "2020-11-23T14:12:21.376Z",
  "image": {
    "id": 1,
    "name": "stones-in-exile",
    "alternativeText": "",
    "caption": "",
    "width": 512,
    "height": 279,
    "formats": {
      "thumbnail": {
        "hash": "thumbnail_stones_in_exile_b2f1b8f4b7",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "width": 245,
        "height": 134,
        "size": 8.79,
        "path": null,
        "url": "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
      },
      "small": {
        "hash": "small_stones_in_exile_b2f1b8f4b7",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "width": 500,
        "height": 272,
        "size": 25.68,
        "path": null,
        "url": "/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg"
      }
    },
    "hash": "stones_in_exile_b2f1b8f4b7",
    "ext": ".jpeg",
    "mime": "image/jpeg",
    "size": 25.53,
    "url": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "created_at": "2020-11-23T14:11:57.313Z",
    "updated_at": "2020-11-23T14:11:57.313Z"
  }
},
  {
    "id": 2,
    "nameRU": "All Tomorrow's Parties",
    "nameEN": "All Tomorrow's Parties",
    "director": " Джонатан Кауэтт",
    "country": "Великобритания",
    "year": "2009",
    "duration": 82,
    "description": "Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.",
    "trailerLink": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
    "created_at": "2020-11-23T14:15:19.238Z",
    "updated_at": "2020-11-23T14:15:19.238Z",
    "image": {
      "id": 2,
      "name": "all-tommoros-parties",
      "alternativeText": "",
      "caption": "",
      "width": 699,
      "height": 266,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_all_tommoros_parties_33a125248d",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 93,
          "size": 10.33,
          "path": null,
          "url": "/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg"
        },
        "small": {
          "hash": "small_all_tommoros_parties_33a125248d",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 190,
          "size": 35.24,
          "path": null,
          "url": "/uploads/small_all_tommoros_parties_33a125248d.jpeg"
        }
      },
      "hash": "all_tommoros_parties_33a125248d",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 67.06,
      "url": "/uploads/all_tommoros_parties_33a125248d.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-11-23T14:14:08.595Z",
      "updated_at": "2020-11-23T14:14:08.595Z"
    }
  },
  {
    "id": 3,
    "nameRU": " Без обратного пути",
    "nameEN": "No Distance Left to Run",
    "director": "Уилл Лавлейс, Дилан Сотерн",
    "country": "Великобритания",
    "year": "2010",
    "duration": 104,
    "description": "Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.",
    "trailerLink": "https://www.youtube.com/watch?v=6iYxdghpJZY",
    "created_at": "2020-11-23T14:17:23.257Z",
    "updated_at": "2020-11-23T14:17:23.257Z",
    "image": {
      "id": 3,
      "name": "blur",
      "alternativeText": "",
      "caption": "",
      "width": 460,
      "height": 298,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_blur_a43fcf463d",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 241,
          "height": 156,
          "size": 8.32,
          "path": null,
          "url": "/uploads/thumbnail_blur_a43fcf463d.jpeg"
        }
      },
      "hash": "blur_a43fcf463d",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 21.07,
      "url": "/uploads/blur_a43fcf463d.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-11-23T14:17:01.702Z",
      "updated_at": "2020-11-23T14:17:01.702Z"
    }
  },
  {
    "id": 4,
    "nameRU": "Bassweight",
    "nameEN": "Bassweight",
    "director": "Сурид Хассан",
    "country": "Великобритания",
    "year": "2008",
    "duration": 61,
    "description": "Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.",
    "trailerLink": "https://www.youtube.com/watch?v=dgSyC6me-jQ",
    "created_at": "2020-12-02T16:48:01.794Z",
    "updated_at": "2020-12-02T16:48:01.794Z",
    "image": {
      "id": 4,
      "name": "загруженное",
      "alternativeText": "",
      "caption": "",
      "width": 276,
      "height": 183,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_zagruzhennoe_113f557116",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 235,
          "height": 156,
          "size": 6.59,
          "path": null,
          "url": "/uploads/thumbnail_zagruzhennoe_113f557116.jpeg"
        }
      },
      "hash": "zagruzhennoe_113f557116",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 7.01,
      "url": "/uploads/zagruzhennoe_113f557116.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T16:47:22.972Z",
      "updated_at": "2020-12-02T16:47:22.972Z"
    }
  },
  {
    "id": 5,
    "nameRU": "Taqwacore: The Birth of Punk Islam",
    "nameEN": "Taqwacore: The Birth of Punk Islam",
    "director": " Омар Маджид",
    "country": "Канада",
    "year": "2009",
    "duration": 80,
    "description": "**Don't panic, we're Islamic!**\nПакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.\n",
    "trailerLink": "https://www.youtube.com/watch?v=JMZ8DO9F4Mo",
    "created_at": "2020-12-02T20:35:14.745Z",
    "updated_at": "2020-12-02T20:35:14.745Z",
    "image": {
      "id": 5,
      "name": "taqwacore2",
      "alternativeText": "",
      "caption": "",
      "width": 730,
      "height": 411,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_taqwacore2_2f487d2e74",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 138,
          "size": 7.01,
          "path": null,
          "url": "/uploads/thumbnail_taqwacore2_2f487d2e74.jpeg"
        },
        "small": {
          "hash": "small_taqwacore2_2f487d2e74",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 282,
          "size": 16.29,
          "path": null,
          "url": "/uploads/small_taqwacore2_2f487d2e74.jpeg"
        }
      },
      "hash": "taqwacore2_2f487d2e74",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 24.89,
      "url": "/uploads/taqwacore2_2f487d2e74.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:34:50.858Z",
      "updated_at": "2020-12-02T20:34:50.858Z"
    }
  },
  {
    "id": 6,
    "nameRU": "Фавела на взрыве",
    "nameEN": "Favela on Blast",
    "director": "Уэсли Пенц",
    "country": "Бразилия",
    "year": "2008",
    "duration": 80,
    "description": "**Визионер из трущоб**\nГимн бразильским гетто (они же фавелы), породившим байле-фанк — взбалмошную смесь музыки стран третьего мира, нелегального рейва и злого фанка, на волне которого вышли в люди Майя и Сантиголд. Снял фильм не кто иной, как Дипло (он же Уэсли Пенц) — диджей, продюсер и крестный отец двух вышеупомянутых артисток. Поэтому неудивительно, что вместо истории жанра в сухом остатке у него вышла увлекательная этнографическая экспедиция в трущобы Рио-де-Жанейро, где наркотики, секс и зашкаливающий уровень преступности играют в становлении байле-фанка не меньшую роль, чем сама музыка.\n",
    "trailerLink": "https://www.youtube.com/watch?v=Cugdwa7mndA",
    "created_at": "2020-12-02T20:37:33.665Z",
    "updated_at": "2020-12-02T20:37:33.665Z",
    "image": {
      "id": 6,
      "name": "881707734_640",
      "alternativeText": "",
      "caption": "",
      "width": 640,
      "height": 360,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_881707734_640_d6a3a43358",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 138,
          "size": 6.09,
          "path": null,
          "url": "/uploads/thumbnail_881707734_640_d6a3a43358.jpeg"
        },
        "small": {
          "hash": "small_881707734_640_d6a3a43358",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 281,
          "size": 17.26,
          "path": null,
          "url": "/uploads/small_881707734_640_d6a3a43358.jpeg"
        }
      },
      "hash": "881707734_640_d6a3a43358",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 23.67,
      "url": "/uploads/881707734_640_d6a3a43358.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:37:23.499Z",
      "updated_at": "2020-12-02T20:37:23.499Z"
    }
  },
  {
    "id": 7,
    "nameRU": "Постеры, сошедшие со стен",
    "nameEN": "The Posters Came from the Walls",
    "director": "Джереми Деллер, Николас Абрахамс",
    "country": "Великобритания",
    "year": "2008",
    "duration": 72,
    "description": "**Depeche Mode как смысл жизни**\nКругосветная панорама, показывающая обычаи и традиции поклонников Depeche Mode по всему миру: от России до Ирана. Отправившись снимать парадную картину, рассказывающую о том, как любят группу Depeche Mode за пределами Британии, авторы фильма столкнулись с тем, что любовь эта подчас носит очень личный — и в то же время общенациональный — характер.\n",
    "trailerLink": "https://www.youtube.com/watch?v=VFMU3crg0sM",
    "created_at": "2020-12-02T20:40:08.342Z",
    "updated_at": "2020-12-02T20:40:08.342Z",
    "image": {
      "id": 7,
      "name": "posters-came-from-the-walls-2009-001-posters",
      "alternativeText": "",
      "caption": "",
      "width": 1000,
      "height": 750,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 208,
          "height": 156,
          "size": 10.53,
          "path": null,
          "url": "/uploads/thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
        },
        "medium": {
          "hash": "medium_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 750,
          "height": 563,
          "size": 92.16,
          "path": null,
          "url": "/uploads/medium_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
        },
        "small": {
          "hash": "small_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 375,
          "size": 46.34,
          "path": null,
          "url": "/uploads/small_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
        }
      },
      "hash": "posters_came_from_the_walls_2009_001_posters_180fe1a19f",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 153.63,
      "url": "/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:39:50.486Z",
      "updated_at": "2020-12-02T20:39:50.486Z"
    }
  },
  {
    "id": 8,
    "nameRU": "Soul Power",
    "nameEN": "Soul Power",
    "director": "Джеффри Леви-Хинте",
    "country": "США",
    "year": "2008",
    "duration": 92,
    "description": "Мухаммед Али против Джеймса Брауна\nХроника трехдневного соул-фестиваля в Заире в 1974 году, приуроченного к историческому бою Мухаммеда Али против Джорджа Формана (также известного как Rumble in the Jungle), — кровь, пот и Джеймс Браун, садящийся на шпагат на глазах у стотысячного стадиона. Скроенный из того же архивного материала, что лег в основу знаменитой боксерской ленты «When We Were Kings», этот фильм представляет собой пошаговую инструкцию «Как сделать громадный фестиваль в Африке: от первой гайки до последней песни».\n",
    "trailerLink": "https://www.youtube.com/watch?v=8OprNgiOq-I",
    "created_at": "2020-12-02T20:57:31.683Z",
    "updated_at": "2020-12-02T20:57:31.683Z",
    "image": {
      "id": 8,
      "name": "images",
      "alternativeText": "",
      "caption": "",
      "width": 266,
      "height": 189,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_images_5bfcbf36e6",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 220,
          "height": 156,
          "size": 8.89,
          "path": null,
          "url": "/uploads/thumbnail_images_5bfcbf36e6.jpeg"
        }
      },
      "hash": "images_5bfcbf36e6",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 10.06,
      "url": "/uploads/images_5bfcbf36e6.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:57:25.729Z",
      "updated_at": "2020-12-02T20:57:25.729Z"
    }
  },
  {
    "id": 9,
    "nameRU": " 196 ударов в минуту",
    "nameEN": "196 BPM",
    "director": "Ромуальд Кармакар",
    "country": "Германия",
    "year": "2003",
    "duration": 60,
    "description": "Панорамный взгляд на берлинский Лав-парад 2002-го года с трех разных точек зрения, каждая из которых образует отдельную новеллу. Первая, «Интро», показывает происходящее глазами людей, стоящих у входа в клуб Linientreu; вторая, «Габба», переносит зрителя в гущу толпы на площади Брайтшайдплац, где диджейские вертушки установлены даже в кебабной. И третья, «Хелл за работой», дает исчерпывающее представление о том, как DJ Hell сводит пластинки во время своего сета в WMF.",
    "trailerLink": "https://www.youtube.com/watch?v=GsDRVpdgNJ4",
    "created_at": "2020-12-02T20:59:53.997Z",
    "updated_at": "2020-12-02T20:59:53.997Z",
    "image": {
      "id": 9,
      "name": "загруженное (1)",
      "alternativeText": "",
      "caption": "",
      "width": 560,
      "height": 292,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_zagruzhennoe_1_fd5faff237",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 128,
          "size": 5.57,
          "path": null,
          "url": "/uploads/thumbnail_zagruzhennoe_1_fd5faff237.jpeg"
        },
        "small": {
          "hash": "small_zagruzhennoe_1_fd5faff237",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 261,
          "size": 17.87,
          "path": null,
          "url": "/uploads/small_zagruzhennoe_1_fd5faff237.jpeg"
        }
      },
      "hash": "zagruzhennoe_1_fd5faff237",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 19.39,
      "url": "/uploads/zagruzhennoe_1_fd5faff237.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:59:37.364Z",
      "updated_at": "2020-12-02T20:59:37.364Z"
    }
  },
  {
    "id": 10,
    "nameRU": " Hit So Hard: Школа жизни Патти Шемель",
    "nameEN": "Hit So Hard: The Life & Near Death Story of Patty Schemel",
    "director": "П.Дэвид Эберсол",
    "country": "США",
    "year": "2011",
    "duration": 103,
    "description": "Это история о тех, кто выжил в 90-е, рассказанная от первого лица: Патти Шемель, барабанщица «золотого» состава группы Hole, открытая лесбиянка и подруга Курта Кобейна, сняла более сорока часов видео на 8-миллиметровую пленку еще в самом начале девяностых. Кобейн, держащий на руках дочь, Кортни Лав, бренчащая что-то на гитаре, сама Патти, зачитывающая в слух итоговой номер Rolling Stone за 94-й год — все это легло в основу Hit So Hard, в котором Дэвид Эбесол реконструирует историю всего беспробудного, безнадежного и до сих пор притягательного поколения 90-х",
    "trailerLink": "https://www.youtube.com/watch?v=DMvFMeaGj_w",
    "created_at": "2020-12-02T21:02:28.791Z",
    "updated_at": "2020-12-02T21:02:28.791Z",
    "image": {
      "id": 10,
      "name": "images",
      "alternativeText": "",
      "caption": "",
      "width": 300,
      "height": 168,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_images_244e1fd56f",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 137,
          "size": 11.76,
          "path": null,
          "url": "/uploads/thumbnail_images_244e1fd56f.jpeg"
        }
      },
      "hash": "images_244e1fd56f",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 14.8,
      "url": "/uploads/images_244e1fd56f.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:01:43.016Z",
      "updated_at": "2020-12-02T21:01:43.016Z"
    }
  },
  {
    "id": 11,
    "nameRU": " Баллада о Дженезисе и Леди Джей",
    "nameEN": "The Ballad of Genesis and Lady Jaye",
    "director": "Мари Лозье",
    "country": "США, Германия, Великобритания, Нидерланды, Бельгия, Франция",
    "year": "2011",
    "duration": 65,
    "description": "Невероятная история любви Дженезиса Пи-Орриджа и его жены Леди Джей, вместе с ним игравшей в группе Psychic TV, — история, которая вряд ли сообщает что-то новое о природе индастриала, но определенно — о природе человека вообще и о природе Пи-Орриджа в частности. Нью-йоркская художница французского происхождения Мари Лозье задумала и начала снимать этот фильм семь лет тому назад — ходила в гости в их квартиру в Нью-Йорке, снимала Дженезиса, стоящего за плитой, и Джей с пучками петрушки и котом на шестнадцатимиллиметровую камеру, одевала их в дурацкие костюмы, ездила с Psychic TV в тур и следила за тем, как любовь заставляет человека отказаться от собственной личности, раствориться в другом человеке и стать одним целым с возлюбленным, используя метод сut-up Уилльяма Берроуза; когда Леди Джей умерла в 2007 году, Дженезис сделал ее татуировку почти во всю руку и до сих пор говорит «мы» вместо «я».",
    "trailerLink": "https://www.youtube.com/watch?v=d8BX2FDrogo",
    "created_at": "2020-12-02T21:06:17.722Z",
    "updated_at": "2020-12-02T21:06:17.722Z",
    "image": {
      "id": 11,
      "name": "ballad-of-genesis-and-lady-jaye",
      "alternativeText": "",
      "caption": "",
      "width": 650,
      "height": 300,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_ballad_of_genesis_and_lady_jaye_10c27afa96",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 113,
          "size": 9.42,
          "path": null,
          "url": "/uploads/thumbnail_ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg"
        },
        "small": {
          "hash": "small_ballad_of_genesis_and_lady_jaye_10c27afa96",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 231,
          "size": 29.37,
          "path": null,
          "url": "/uploads/small_ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg"
        }
      },
      "hash": "ballad_of_genesis_and_lady_jaye_10c27afa96",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 43.95,
      "url": "/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:03:33.524Z",
      "updated_at": "2020-12-02T21:03:33.524Z"
    }
  },
  {
    "id": 12,
    "nameRU": "Виллалобос",
    "nameEN": "Villalobos",
    "director": "Ромуальд Кармакар",
    "country": "Германия",
    "year": "2009",
    "duration": 110,
    "description": "Последний фильм трилогии, опус магнум Ромуальда Кармакара, премьера которого состоялась в основной программе Венецианского кинофестиваля. Рикардо Виллалобос предстает здесь не столько как один самых востребованных диджеев, сколько как визионер от мира современной музыки. Кармакар исследует не феномен популярности Виллалобоса, а то, как устроена его голова, что творится в его аппаратуре, когда он сводит один трек с другим, как рождается музыка и какое отношение тек-хаус имеет к Мусоргскому.",
    "trailerLink": "https://www.kinopoisk.ru/film/586534/video/56500/",
    "created_at": "2020-12-02T21:08:46.397Z",
    "updated_at": "2020-12-02T21:08:46.397Z",
    "image": {
      "id": 12,
      "name": "590x400",
      "alternativeText": "",
      "caption": "",
      "width": 590,
      "height": 400,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_590x400_2eccd40a93",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 230,
          "height": 156,
          "size": 5.11,
          "path": null,
          "url": "/uploads/thumbnail_590x400_2eccd40a93.jpeg"
        },
        "small": {
          "hash": "small_590x400_2eccd40a93",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 339,
          "size": 16.78,
          "path": null,
          "url": "/uploads/small_590x400_2eccd40a93.jpeg"
        }
      },
      "hash": "590x400_2eccd40a93",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 20.9,
      "url": "/uploads/590x400_2eccd40a93.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:08:31.457Z",
      "updated_at": "2020-12-02T21:08:31.457Z"
    }
  },
  {
    "id": 13,
    "nameRU": "Между дьяволом и глубоким синим морем",
    "nameEN": "Between the Devil and Wide Blue Sea",
    "director": "Ромуальд Кармакар",
    "country": "Германия",
    "year": "2005",
    "duration": 89,
    "description": "Удивительная одиссея, проливающая свет на европейскую электронную сцену нулевых.\nМузыка здесь говорит сама за себя — в фильме нет ни единого интервью, только построенные на длинных планах съемки живых выступлений на самых разных площадках, от клуба Cocoon на Ибице до тесных лондонских залов. В камеру попадают как мало-мальски известные фигуры — T.Raumschmiere, Alter Ego, Captain Comatose, так и менее очевидные люди. Впрочем, главное здесь вовсе не имена, а точно переданное ощущение сопричастности всему происходящему с этой сценой. Фильм был показан на многих международных кинофестивалях, таких как фестиваль в Локарно и фестиваль Sonar, и стал лучшим немецким документальным фильмом 2005-го года по версии канала ARTE.\n",
    "trailerLink": "https://youtu.be/qUmIgNwRCP4",
    "created_at": "2020-12-02T21:10:47.164Z",
    "updated_at": "2020-12-02T21:10:47.164Z",
    "image": {
      "id": 13,
      "name": "8647b36126befd6051c83ae66339d7f71ecbaa0d",
      "alternativeText": "",
      "caption": "",
      "width": 700,
      "height": 394,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 138,
          "size": 4.8,
          "path": null,
          "url": "/uploads/thumbnail_8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg"
        },
        "small": {
          "hash": "small_8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 281,
          "size": 13.14,
          "path": null,
          "url": "/uploads/small_8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg"
        }
      },
      "hash": "8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 21.83,
      "url": "/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:09:50.052Z",
      "updated_at": "2020-12-02T21:09:50.052Z"
    }
  },
  {
    "id": 14,
    "nameRU": "Ритмы свободы",
    "nameEN": "Beats of Freedom",
    "director": "Войцек Слота, Лешек Гноиньски",
    "country": "Польша",
    "year": "2010",
    "duration": 73,
    "description": "Формально фильм с подзаголовком «Как сломить тоталитарный режим при помощи самодельного усилителя» — экскурсия по почти неизвестной у нас польской рок-музыке периода от начала 60-х и до падения Восточного блока, на самом же деле — мощнейший, страшно увлекательный (даром что частично основан на недавно рассекреченных материалах спецслужб) портрет эпохи на фоне истории страны, когда один только концерт The Rolling Stones в Варшаве в 67-м году ставил под угрозу всю деятельность советской пропаганды. Выясняется масса интересных подробностей, например, что Дворец культуры и науки, сталинская высотка в самом центре Варшавы, «подарок Советского союза польскому народу», являлся звукозаписывающей студией для одной из самых антикоммунистических польских рок-групп. Но главное открытие — это, собственно, музыка: в большинстве своем дико современная и ничуть не уступающая каким-нибудь крайне актуальным сейчас архивным группам вроде Orchestral Manoeuvres in the Dark.",
    "trailerLink": "https://www.youtube.com/watch?v=VvKWRtF3eNY",
    "created_at": "2020-12-02T21:13:10.979Z",
    "updated_at": "2020-12-02T21:13:10.979Z",
    "image": {
      "id": 14,
      "name": "1",
      "alternativeText": "",
      "caption": "",
      "width": 790,
      "height": 445,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_1_6a9e0669ca",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 138,
          "size": 7.44,
          "path": null,
          "url": "/uploads/thumbnail_1_6a9e0669ca.jpeg"
        },
        "medium": {
          "hash": "medium_1_6a9e0669ca",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 750,
          "height": 422,
          "size": 37.25,
          "path": null,
          "url": "/uploads/medium_1_6a9e0669ca.jpeg"
        },
        "small": {
          "hash": "small_1_6a9e0669ca",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 282,
          "size": 21.67,
          "path": null,
          "url": "/uploads/small_1_6a9e0669ca.jpeg"
        }
      },
      "hash": "1_6a9e0669ca",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 30.8,
      "url": "/uploads/1_6a9e0669ca.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:13:01.450Z",
      "updated_at": "2020-12-02T21:13:01.450Z"
    }
  },
  {
    "id": 15,
    "nameRU": "Сепарадо!",
    "nameEN": "Separado!",
    "director": "Дилан Гош, Графф Рис",
    "country": "Великобритания",
    "year": "2010",
    "duration": 84,
    "description": "Графф Рис, вокалист психоделической британской группы Super Furry Animals, отправляется в Патагонию, чтобы найти своего дальнего, таинственно исчезнувшего родственника, тоже музыканта. В процессе поисков он охотно прибегает к магическим свойствам шлема Пауэр Рейнджера, путешествует на крыше своего автомобиля и устраивает концерты в чистом поле для диких лошадей. Отчасти документальный фильм, отчасти остроумная выдумка, по жанру более всего напоминающая роуд-муви, «Сепарадо!» – это, прежде всего, история о том, что собственные корни иногда следует искать в собственном же воображении. Что, конечно, не мешает Рису колесить по Южной Америке, знакомиться, кажется, со всеми примечательными местными жителями на своем пути и походя устраивать увлекательнейший ликбез не только по лоу-фай электронике, но и по местной истории.",
    "trailerLink": "https://www.youtube.com/watch?v=r2IfD-6iS3Y",
    "created_at": "2020-12-02T21:14:58.142Z",
    "updated_at": "2020-12-02T21:14:58.142Z",
    "image": {
      "id": 15,
      "name": "загруженное",
      "alternativeText": "",
      "caption": "",
      "width": 259,
      "height": 194,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_zagruzhennoe_cba9c9f900",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 208,
          "height": 156,
          "size": 11.75,
          "path": null,
          "url": "/uploads/thumbnail_zagruzhennoe_cba9c9f900.jpeg"
        }
      },
      "hash": "zagruzhennoe_cba9c9f900",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 16.4,
      "url": "/uploads/zagruzhennoe_cba9c9f900.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:14:13.176Z",
      "updated_at": "2020-12-02T21:14:13.176Z"
    }
  },
  {
    "id": 16,
    "nameRU": " С ног на голову: История Creation records",
    "nameEN": "Upside Down: The Creation Records Story",
    "director": "Дэнни О'Коннор",
    "country": "Великобритания",
    "year": "2010",
    "duration": 101,
    "description": "История Creation Records – самого влиятельного британского лейбла конца прошло века – это во многом история его бессменного отца-основателя Алана МакГи, чья бизнес-стратегия всегда выстраивалась в зависимости от того, что он употреблял наканун. Однако, именно благодаря ему мировая общественность узнала о существовании таких групп как Primal Scream, My Bloody Valentine и Oasis. Последних МакГи нашел в пабе, где группа давала второй в своей жизни концерт, по чистой случайности, попросту опоздав на поезд, Впрочем, его политика отбора всегда носила пристрастный характер, с Бобби Гилеспи он, например, познакомился еще в школе. Фильм ностальгически оглядывается на Британию 90-х, когда ее вкусами правили гении и аутсайдеры, талантливые сумасброды и жадные до приключений авантюристы всех мастей.",
    "trailerLink": "https://www.youtube.com/watch?v=b3kA_8NrinA",
    "created_at": "2020-12-02T21:17:32.028Z",
    "updated_at": "2020-12-02T21:17:32.028Z",
    "image": {
      "id": 16,
      "name": "b452eefcd7d441e79b2f5ae291b7",
      "alternativeText": "",
      "caption": "",
      "width": 1425,
      "height": 712,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 122,
          "size": 5.54,
          "path": null,
          "url": "/uploads/thumbnail_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg"
        },
        "large": {
          "hash": "large_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 1000,
          "height": 500,
          "size": 53.78,
          "path": null,
          "url": "/uploads/large_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg"
        },
        "medium": {
          "hash": "medium_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 750,
          "height": 375,
          "size": 33.78,
          "path": null,
          "url": "/uploads/medium_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg"
        },
        "small": {
          "hash": "small_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 250,
          "size": 17.5,
          "path": null,
          "url": "/uploads/small_b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg"
        }
      },
      "hash": "b452eefcd7d441e79b2f5ae291b7_2c0c62fa89",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 83.6,
      "url": "/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:16:16.072Z",
      "updated_at": "2020-12-02T21:16:16.072Z"
    }
  },
  {
    "id": 17,
    "nameRU": "Я всё ещё здесь",
    "nameEN": "I’m Still Here",
    "director": "Кейси Аффлек",
    "country": "США",
    "year": "2010",
    "duration": 108,
    "description": "Режиссерский дебют Кейси Аффлека — фильм о том, как актер Хоакин Феникс, номинированный на премию «Оскар» за роль Джонни Кэша в фильме «Переступить черту», решает бросить актерскую карьеру и начинает читать рэп, больно наступая, кажется, на все возможные грабли и в конечном счете удаляясь в неизвестном направлении по пояс в воде. Ну а то обстоятельство, что впоследствии Кейси Аффлека изобличили в том, что большая часть съемок была постановочной, если о чем и свидетельствует, то только о том, что Хоакин Феникс блистательным образом играет себя самого.",
    "trailerLink": "https://www.youtube.com/watch?v=cDwdYsOeSXw",
    "created_at": "2020-12-02T21:19:02.529Z",
    "updated_at": "2020-12-02T21:19:02.529Z",
    "image": {
      "id": 17,
      "name": "280x178_2",
      "alternativeText": "",
      "caption": "",
      "width": 560,
      "height": 356,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_280x178_2_f2eee77cae",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 156,
          "size": 4.59,
          "path": null,
          "url": "/uploads/thumbnail_280x178_2_f2eee77cae.jpeg"
        },
        "small": {
          "hash": "small_280x178_2_f2eee77cae",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 318,
          "size": 16.39,
          "path": null,
          "url": "/uploads/small_280x178_2_f2eee77cae.jpeg"
        }
      },
      "hash": "280x178_2_f2eee77cae",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 20.54,
      "url": "/uploads/280x178_2_f2eee77cae.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:18:53.210Z",
      "updated_at": "2020-12-02T21:18:53.210Z"
    }
  },
  {
    "id": 18,
    "nameRU": "Большие надежды",
    "nameEN": "High on Hope",
    "director": " Пирс Сандерсон",
    "country": "Великобритания",
    "year": "2010",
    "duration": 72,
    "description": "Хроники возникновения и становления самой значительной субкультуры 90-х — первых британских рейвов в Блэкберне, которые из локальных вечеринок для своих эволюционировали в бедствие национального масштаба: это был первый и последний случай, когда многотысячные рейвы в заброшенных ангарах на полном серьезе обсуждались в Парламенте, а ведущим вечерних новостей пришлось учиться выговаривать словосочетание «эйсид хаус». Главный приз фестиваля In-Edit в Барселоне, приз зрительских симпатий фестиваля в Лидсе.",
    "trailerLink": "https://www.youtube.com/watch?v=D2q38mu3MKs",
    "created_at": "2020-12-02T21:21:20.239Z",
    "updated_at": "2020-12-02T21:21:20.239Z",
    "image": {
      "id": 18,
      "name": "загруженное (1)",
      "alternativeText": "",
      "caption": "",
      "width": 319,
      "height": 158,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_zagruzhennoe_1_dc1a2c8f7d",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 121,
          "size": 6.73,
          "path": null,
          "url": "/uploads/thumbnail_zagruzhennoe_1_dc1a2c8f7d.jpeg"
        }
      },
      "hash": "zagruzhennoe_1_dc1a2c8f7d",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 9.23,
      "url": "/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:20:58.877Z",
      "updated_at": "2020-12-02T21:20:58.877Z"
    }
  },
  {
    "id": 19,
    "nameRU": "Задний двор",
    "nameEN": "Backyard",
    "director": "Аудни Свейнссон",
    "country": "Исландия",
    "year": "2010",
    "duration": 73,
    "description": "Человек по имени Арни Рунар, долговязый, слегка карикатурный исландец, решил устроить у себя во дворе фестиваль на базе собственной студии размером со сторожевую будку; позвал друзей (среди которых — режиссер фильма), разослал несколько писем с приглашением соседям, запасся резиновыми сапогами на случай дождя — и сделал фестиваль, как нельзя лучше характеризующий исландскую музыку что по духу, что по содержанию: для полноты картины не хватает разве что Бьорк, все остальные, включая Mum и Belfast FM, присутствуют. Эта история, лишний раз подтверждающая, что энтузиазм порой вознаграждается самым не очевидным образом, еще и довольно трогательный портрет Исландии в целом — настолько маленькой, что вторая или третья группа страны может вот так запросто выступать у кого-то на заднем дворе, прячась под зонтик.",
    "trailerLink": "https://www.youtube.com/watch?v=TShW9LAcmCg",
    "created_at": "2020-12-02T21:24:07.103Z",
    "updated_at": "2020-12-02T21:24:07.103Z",
    "image": {
      "id": 19,
      "name": "Backyard_327_3",
      "alternativeText": "",
      "caption": "",
      "width": 578,
      "height": 327,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_Backyard_327_3_2151980c5c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 139,
          "size": 12.73,
          "path": null,
          "url": "/uploads/thumbnail_Backyard_327_3_2151980c5c.jpeg"
        },
        "small": {
          "hash": "small_Backyard_327_3_2151980c5c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 283,
          "size": 40.47,
          "path": null,
          "url": "/uploads/small_Backyard_327_3_2151980c5c.jpeg"
        }
      },
      "hash": "Backyard_327_3_2151980c5c",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 52.31,
      "url": "/uploads/Backyard_327_3_2151980c5c.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:23:25.830Z",
      "updated_at": "2020-12-02T21:23:25.830Z"
    }
  },
  {
    "id": 20,
    "nameRU": "Еще одно слово на П",
    "nameEN": "The Other F Word",
    "director": "Андреа Блаугрунд",
    "country": "США",
    "year": "2011",
    "duration": 98,
    "description": "Пронзительный, смешной и неожиданно мудрый взгляд на то, как ветераны панк-сцены (в фильме появляются люди в диапазоне от Фэт Майка из NOFX до Фли из RHCP) справляются с вызовами отцовства. Разумеется, попытки матерящихся, покрытых с ног до головы татуировками музыкантов примерить на себя костюм добропорядочного папаши из раза в раз оборачивается уморительной комедией положений. Одни отцы тайком вытаскивают кукол барби из своих чемоданов в преддверии очередного тура, другие являются к директору школы в футболке fuck the police. Все это, впрочем, не делает фильм одним только сборником анекдотов, но куда глубже исследует, как и во что эволюционирует идея протеста и антиавторитаризма в тот момент, когда самому нужно становиться авторитетом и ходить на родительские собрания.",
    "trailerLink": "https://www.youtube.com/watch?v=zZkWHZ3hJtY",
    "created_at": "2020-12-02T21:25:58.848Z",
    "updated_at": "2020-12-02T21:25:58.848Z",
    "image": {
      "id": 20,
      "name": "загруженное (2)",
      "alternativeText": "",
      "caption": "",
      "width": 295,
      "height": 171,
      "formats": {
        "thumbnail": {
          "hash": "thumbnail_zagruzhennoe_2_5f87844408",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 142,
          "size": 8.59,
          "path": null,
          "url": "/uploads/thumbnail_zagruzhennoe_2_5f87844408.jpeg"
        }
      },
      "hash": "zagruzhennoe_2_5f87844408",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 10.32,
      "url": "/uploads/zagruzhennoe_2_5f87844408.jpeg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:25:42.189Z",
      "updated_at": "2020-12-02T21:25:42.189Z"
    }
  },]

const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState({});
const [savedMovies, setSavedMovies] = useState([]);
const [savedMoviesId, setSavedMoviesId] = useState([]);
const [movies, setMovies] = useState(
    localStorage.getItem("foundMovies")
        ? JSON.parse(localStorage.getItem("foundMovies"))
        : []
);
const [isSearchLoading, setSearchLoading] = useState(false);
const [isNotFound, setIsNotFound] = useState(false);
const [isSearchError, setIsSearchError] = useState(false);
const [isShortSearched, setShortSearched] = useState(false);
const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);
const [savedKeyWord, setSavedKeyWord] = useState("");
const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = useState(false);
const [foundSavedMovies, setFoundSavedMovies] = useState([]);
const [isSavedShortSearched, setSavedShortSearched] = useState(false);
const [isProfileUpdateError, setIsProfileUpdateError] = useState("");
const [isFormSent, setIsFormSent] = useState(false);
const [isRegisterError, setIsRegisterError] = useState("");
const [isLoginError, setIsLoginError] = useState("");
const navigate = useNavigate();
const location = useLocation();
const path = location.pathname;


const tokenCheck = useCallback(() => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(path);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }
}, [navigate]);

useEffect(() => {
  const jwt = localStorage.getItem("jwt");
  if (loggedIn) {
    Promise.all([getUserInfo(jwt), getMovies(jwt)])
        .then(([userData, savedMoviesRes]) => {
          setCurrentUser(userData.data);
          setSavedMovies(savedMoviesRes.data);
          setSavedMoviesId(savedMoviesRes.data.map((movie) => movie.movieId));
        })
        .catch((err) => {
          console.log(err);
        });
  }
}, [loggedIn]);

useEffect(() => {
  tokenCheck();
}, [tokenCheck]);

useEffect(() => {
  setIsUpdateSuccessful(false);
}, [path]);

useEffect(() => {
  setIsNotFound(false);
}, [loggedIn]);

useEffect(() => {
  if (localStorage.getItem("foundMovies")) {
    handleShortSearch();
  }
}, [isShortSearched]);

useEffect(() => {
  if (savedKeyWord) {
    handleSearchSavedMovies(savedKeyWord);
  }
}, [savedMovies]);

function handleSearchSavedMovies(value) {
  setIsOnlyCheckedSearch(false);
  if (!value) {
    setIsOnlyCheckedSearch(true);
  }
  setSavedKeyWord(value);

  const movies = searchMovies(savedMovies, value, isSavedShortSearched);
  setFoundSavedMovies(movies);
}

async function handleSearchMovies(value) {
  setSearchLoading(true);
  setIsNotFound(false);
  setIsSearchError(false);

  try {
    let movies = JSON.parse(localStorage.getItem("movies"));

    if (!movies) {
      const films = await getAllMovies();
      localStorage.setItem("movies", JSON.stringify(films));
      movies = JSON.parse(localStorage.getItem("movies"));
    }
    const foundMovies = searchMovies(movies, value);
    localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    handleShortSearch();
  } catch (err) {
    console.log(err);
    setIsSearchError(true);
  } finally {
    setSearchLoading(false);
  }
}

function handleShortSearch() {
  const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

  const shortMovies = foundMovies.filter((movie) => {
    if (isShortSearched) {
      if (movie.duration < shortDuration) {
        return true;
      }
    } else if (movie.duration >= shortDuration) {
      return true;
    }
  });

  setMovies(shortMovies);
  setIsNotFound(!shortMovies.length);
}

function handleSaveMovie(movie) {
  const jwt = localStorage.getItem("jwt");
  saveMovie(movie, jwt)
      .then((res) => {
        setSavedMovies([...savedMovies, res.data]);
        setSavedMoviesId([...savedMoviesId, movie.id]);
      })
      .catch((err) => {
        console.log(err);
      });
}

function handleDeleteMovie(movie) {
  const jwt = localStorage.getItem("jwt");
  console.log(movie)
  console.log(savedMovies)
  let movieId = savedMovies.filter(
      (i) => i.movieId === movie.id || i.data?.movieId === movie.id
  )[0];
  console.log(movieId)
  if (movieId) {
    movieId = movieId._id || movieId._id;
  }
  deleteMovie(movie.owner ? movie._id : movieId, jwt)
      .then((deleted) => {
        console.log(deleted)
        setSavedMovies(
            savedMovies.filter((film) => film._id !== deleted.data._id)
        );
        setSavedMoviesId(
            savedMoviesId.filter((id) => id !== deleted.data.movieId)
        );
      })
      .catch((err) => {
        console.error(err);
      });
}

function handleUpdateUser(name, email) {
  const jwt = localStorage.getItem("jwt");
  patchProfileInfo(name, email, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        setIsUpdateSuccessful(true);
      })
      .catch((err) => {
        console.log(err);
        setIsProfileUpdateError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      });
}

function handleLogin(email, password) {
  authorize(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setIsLoginError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      });
}

function handleRegister(name, email, password) {
  register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        setIsRegisterError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      });
}

function handleSignOut() {
  signOut()
      .then((res) => {
        setCurrentUser({email: "", name: ""});
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        localStorage.removeItem("foundMovies");
        localStorage.removeItem("movies");
        setMovies([]);
        navigate("/");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log(err.massage);
        }
      });
}*/
