<template xmlns="http://www.w3.org/1999/html">
  <main>
    <div class="container">
      <div class="header">
        <div class="search">
          <input
              type="text"
              placeholder="Поиск"
              v-model="search"
          />
        </div>
      </div>
      <div v-if="filteredGames && filteredGames.length" class='dialogs'>
        <div class="forD" v-for="(one, index) in filteredGames"
             :key="index"

             v-bind="one.id = index"
        >
          <div>
            <div class='dialog'>
              <div class='title'>
                <h3>{{ one.country }}</h3>
                <img :src="`${one.flag}`" alt="flag" class="time" width="40px"/>
              </div>
              <div class="last-message">
                <p>Столица: {{ one.capital }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="net" v-else>
        <span>Ничего нет</span>
      </div>

      <div class="footer">
        <div class="form">
          <router-link
              :to='`/game`'
              class="new-dialog">
            <button>
              Перейти к игре
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {

  data() {
    return {
      AsiaL: this.Asia,
      Asia: [{
        country: 'ОАЭ',
        capital: 'Абу-Даби',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/85px-Flag_of_the_United_Arab_Emirates.svg.png',
        about: 'https://ru.wikipedia.org/wiki/Объединённые_Арабские_Эмираты',
        img: '',
        id: 1
      },
        {
          country: 'Иордания',
          capital: 'Амман',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/85px-Flag_of_Jordan.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Иордания',
          img: '',
          id: 2
        },
        {
          country: 'Турция',
          capital: 'Анкара',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/22px-Flag_of_Turkey.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Турция',
          img: '',
          id: 3
        },
        {
          country: 'Казахстан',
          capital: 'Астана',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/22px-Flag_of_Kazakhstan.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Туркменистан',
          img: '',
          id: 4
        },
        {
          country: 'Туркменистан',
          capital: 'Ашхабад',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/22px-Flag_of_Turkmenistan.svg.png',
          about: '',
          img: '',
          id: 5
        },
        {
          country: 'Ирак',
          capital: 'Багдад',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/85px-Flag_of_Iraq.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Ирак',
          img: '',
          id: 6
        },
        {
          country: 'Азейрбаджан',
          capital: 'Баку',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/85px-Flag_of_Azerbaijan.svg.png',
          about: '',
          img: '',
          id: 7
        },
        {
          country: 'Тайланд',
          capital: 'Бангкок',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/22px-Flag_of_Thailand.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Таиланд',
          img: '',
          id: 8
        },
        {
          country: 'Бруней',
          capital: 'Бандар-Сери-Бегаван',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/85px-Flag_of_Brunei.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Бруней',
          img: '',
          id: 9
        },
        {
          country: 'Ливан',
          capital: 'Бейрут',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/85px-Flag_of_Lebanon.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Ливан',
          img: '',
          id: 10
        },
        {
          country: 'Киргизия',
          capital: 'Бишкек',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/22px-Flag_of_Kyrgyzstan.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Киргизия',
          img: '',
          id: 11
        },
        {
          country: 'Лаос',
          capital: 'Вьентьян',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/22px-Flag_of_Laos.svg.png',
          about: 'https://ru.wikipedia.org/wiki/Лаос',
          img: '',
          id: 12
        },
        {
          country: 'Бангладеш',
          capital: 'Дакка',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/85px-Flag_of_Bangladesh.svg.png',
          about: '',
          img: '',
          id: 13
        },
        {
          country: 'Сирия',
          capital: 'Дамаск',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/85px-Flag_of_Syria.svg.png',
          about: '',
          img: '',
          id: 14
        },
        {
          country: 'Индия',
          capital: 'Нью-Дели',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/85px-Flag_of_India.svg.png',
          about: '',
          img: '',
          id: 15
        },
        {
          country: 'Индонезия',
          capital: 'Джакарта',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/85px-Flag_of_Indonesia.svg.png',
          about: '',
          img: '',
          id: 16
        },
        {
          country: 'Восточный Тимор',
          capital: 'Дили',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/85px-Flag_of_East_Timor.svg.png',
          about: '',
          img: '',
          id: 17
        },
        {
          country: 'Катар',
          capital: 'Доха',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/85px-Flag_of_Qatar.svg.png',
          about: '',
          img: '',
          id: 18
        },
        {
          country: 'Таджикистан',
          capital: 'Душанбе',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/85px-Flag_of_Tajikistan.svg.png',
          about: '',
          img: '',
          id: 19
        },
        {
          country: 'Армения',
          capital: 'Ереван',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/85px-Flag_of_Armenia.svg.png',
          about: '',
          img: '',
          id: 20
        },
        {
          country: 'Израиль',
          capital: 'Иерусалим',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/85px-Flag_of_Israel.svg.png',
          about: '',
          img: '',
          id: 21
        },
        {
          country: 'Пакистан',
          capital: 'Исламабад',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/85px-Flag_of_Pakistan.svg.png',
          about: '',
          img: '',
          id: 22
        },
        {
          country: 'Афганистан',
          capital: 'Кабул',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/85px-Flag_of_the_Taliban.svg.png',
          about: '',
          img: '',
          id: 23
        },
        {
          country: 'Непал',
          capital: 'Катманду',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/60px-Flag_of_Nepal.svg.png',
          about: '',
          img: '',
          id: 24
        },
        {
          country: 'Малайзия',
          capital: 'Куала-Лумпур',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/85px-Flag_of_Laos.svg.png',
          about: '',
          img: '',
          id: 25
        },
        {
          country: 'Мальдивы',
          capital: 'Мале',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/85px-Flag_of_Maldives.svg.png',
          about: '',
          img: '',
          id: 26
        },
        {
          country: 'Бахрейн',
          capital: 'Манама',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/85px-Flag_of_Bahrain.svg.png',
          about: '',
          img: '',
          id: 27
        },
        {
          country: 'Филиппины',
          capital: 'Манила',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/85px-Flag_of_the_Philippines.svg.png',
          about: '',
          img: '',
          id: 28
        },
        {
          country: 'Оман',
          capital: 'Маскат',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/85px-Flag_of_Oman.svg.png',
          about: '',
          img: '',
          id: 29
        },
        {
          country: 'Мьянма',
          capital: 'Нейпьидо',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/85px-Flag_of_Laos.svg.png',
          about: '',
          img: '',
          id: 30
        },
        {
          country: 'Кипр',
          capital: 'Никосия',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/85px-Flag_of_Cyprus.svg.png',
          about: '',
          img: '',
          id: 31
        },
        {
          country: 'Китай',
          capital: 'Пекин',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/85px-Flag_of_the_People%27s_Republic_of_China.svg.png',
          about: '',
          img: '',
          id: 32
        },
        {
          country: 'Камбоджа',
          capital: 'Пномпень',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/85px-Flag_of_Cambodia.svg.png',
          about: '',
          img: '',
          id: 33
        },
        {
          country: 'КНДР',
          capital: 'Пхеньян',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/85px-Flag_of_North_Korea.svg.png',
          about: '',
          img: '',
          id: 34
        },
        {
          country: 'Йемен',
          capital: 'Сана',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/85px-Flag_of_Yemen.svg.png',
          about: '',
          img: '',
          id: 35
        },
        {
          country: 'Республика Корея',
          capital: 'Сеул',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/85px-Flag_of_South_Korea.svg.png',
          about: '',
          img: '',
          id: 36
        },
        {
          country: 'Сингапур',
          capital: 'Сингапур',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/85px-Flag_of_Singapore.svg.png',
          about: '',
          img: '',
          id: 37
        },
        {
          country: 'Узбекистан',
          capital: 'Ташкент',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/85px-Flag_of_Uzbekistan.svg.png',
          about: '',
          img: '',
          id: 38
        },
        {
          country: 'Грузия',
          capital: 'Тбилиси',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/85px-Flag_of_Georgia.svg.png',
          about: '',
          img: '',
          id: 39
        },
        {
          country: 'Иран',
          capital: 'Тегеран',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/85px-Flag_of_Iran.svg.png',
          about: '',
          img: '',
          id: 40
        },
        {
          country: 'Япония',
          capital: 'Токио',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/85px-Flag_of_Japan.svg.png',
          about: '',
          img: '',
          id: 41
        },
        {
          country: 'Бутан',
          capital: 'Тхимпху',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/85px-Flag_of_Bhutan.svg.png',
          about: '',
          img: '',
          id: 42
        },
        {
          country: 'Монголия',
          capital: 'Улан-Батор',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/85px-Flag_of_Mongolia.svg.png',
          about: '',
          img: '',
          id: 43
        },
        {
          country: 'Вьетнам',
          capital: 'Ханой',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/85px-Flag_of_Vietnam.svg.png',
          about: '',
          img: '',
          id: 44
        },
        {
          country: 'Шри-Ланка',
          capital: 'Шри-Джаяварденепура-Котте',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/85px-Flag_of_Sri_Lanka.svg.png',
          about: '',
          img: '',
          id: 45
        },
        {
          country: 'Кувейт',
          capital: 'Эль-Кувейт',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/85px-Flag_of_Kuwait.svg.png',
          about: '',
          img: '',
          id: 46
        },
        {
          country: 'Саудовская Аравия',
          capital: 'Эр-Рияд',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/85px-Flag_of_Saudi_Arabia.svg.png',
          about: '',
          img: '',
          id: 47
        },
      ],
      one: {},
      search: '',
    }
  },

  computed: {
    filteredGames() {
      return this.Asia.filter(one => {
        return one.country.indexOf(this.search) !== -1
      })
    }
  }
}


</script>

<style scoped lang="scss">
.forD {
  Display: inline;

}

.btnD {
  Margin-left: 80%;
  Width: 20%;
  Padding: 10px;
  Border: 0;
  Border-radius: 5px;
  Font-size: 16px;
  Color: #fff;
  Background: #2c2c2c;
  Outline: none;
  Cursor: pointer;

}

.net {
  Margin-top: 10px;
  Text-align: center;
  Height: 89%;
}

.dialogs {
  Margin-top: 10px;
  Height: 100%;
  Overflow-y: auto;
}

.dialog {
  Margin-top: 5px;
  Border-radius: 5px;
  Padding: 10px 15px;
}

.title {
  Display: flex;
  Justify-content: space-between;
  Align-items: end;
}

H3 {
  Text-overflow: ellipsis;
  Overflow: hidden;
  White-space: nowrap;
}

.time {
  Font-size: 12px;
  Color: #999;
  display: flex;
  position: relative;
  top: 12px;
}

.last-message {
  Margin-top: 5px;
}

P {
  Color: #717579;
  Text-overflow: ellipsis;
  Overflow: hidden;
  White-space: nowrap;
}

form:hover {
  Background: #2c2c2c;
}

.footer {
  Height: 100px;
}

.form {
}

.new-dialog {
  Width: 100%;
}

Button {
  Width: 100%;
  Padding: 10px;
  Border: 0;
  Border-radius: 5px;
  Font-size: 16px;
  Color: #fff;
  Background: #2c2c2c;
  Outline: none;
  Cursor: pointer;
  Margin-top: 10px;
}
</style>
