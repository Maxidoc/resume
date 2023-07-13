// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Sigizmund',
    lastname: 'Iudavsch',
  },
  position: 'Junior Fullstack JS Developer',
  salary: ' 600 $ в місяц',
  address: ' 02000, м.Київ,площа  Вокзальна  1',
}

var footer = {
  social: {
    email: {
      text: 'SigizmundPOST',
      href: 'mailto:Sigizmund@mail.com',
    },
    phone: {
      text: '+3806661488',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedInBijat',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/Summary',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start 
    work on a new project I learn the domain and try to understand the idea of the project. Good team
    player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume/Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Нobbyhorse',
          isMain: false,
        },
        {
          name: 'Quartzization of the room',
          isMain: false,
        },
        {
          name: 'Torchlight procession',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume /Education',
    },
    header,
    main: {
      education: [
        {
          name: 'Scool of fighting heel',
          isEnd: true,
        },
        {
          name: 'Academy of hellish programming',
          isEnd: true,
        },
        {
          name: 'Street',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'certificates of conformity',
          id: 111,
        },
        {
          name: 'certificates of appreciation',
          id: 222,
        },
        {
          name: 'certificates of analysis',
          id: 333,
        },
      ],
    },
    footer,
  })
})

// ==================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume /work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.1995',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-shawarma.com.ua/',
              about:
                'Systematization and optimization of shawarma production',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Slept for two days without a break.',
                },
                {
                  name: 'Ate 20 pieces of shawarma without choking.',
                },
              ],
              stackAmount: 2,
              awardsAmount: 1,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
