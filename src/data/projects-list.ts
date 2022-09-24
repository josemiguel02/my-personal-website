import { v4 as uuid } from 'uuid'

type Tag =
  | 'HTML'
  | 'CSS'
  | 'SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React.JS'
  | 'React Native'
  | 'Vue.JS'
  | 'Vuex'
  | 'Node.JS'
  | 'PHP'
  | 'Bootstrap'
  | 'TailwindCSS'
  | 'Expo'
  | 'JQuery'
  | 'MySQL'
  | 'Firebase'

interface IProject {
  id: string
  title: string
  image: string
  description: string
  previewLink: string
  repoLink: string
  tags: Array<Tag>
}

export const projectsList: Array<IProject> = [
  {
    id: uuid(),
    title: 'Daily App',
    image: '/static/images/projects/daily-app.webp',
    description:
      'This is a complete Mobile App project I made with Vue Native, React Native and Firebase.',
    previewLink: '',
    repoLink: 'https://github.com/josemiguel02/Daily-App-Vue-Native',
    tags: ['React Native', 'Expo', 'Firebase']
  },
  {
    id: uuid(),
    title: 'Quiz App',
    image: '/static/images/projects/quiz-app.gif',
    description:
      'This is a simple project I made to practice manipulating the DOM with Typescript and OOP.',
    previewLink: 'https://josemiguel02.github.io/quiz-app-typescript',
    repoLink: 'https://github.com/josemiguel02/quiz-app-typescript',
    tags: ['HTML', 'CSS', 'TypeScript']
  },
  {
    id: uuid(),
    title: 'Todo List',
    image: '/static/images/projects/todo-list-app.webp',
    description:
      'This project is from a task application that I made to practice manipulating the DOM with OOP and Javascript, also persisting the tasks in the browser LocalStorage',
    previewLink: 'https://josemiguel02.github.io/JS-Vanilla-TodoList',
    repoLink: 'https://github.com/josemiguel02/JS-Vanilla-TodoList',
    tags: ['HTML', 'Bootstrap', 'JavaScript', 'JQuery']
  },
  {
    id: uuid(),
    title: 'Top 10 Songs API',
    image: '/static/images/projects/top-10-songs-app.webp',
    description:
      'This project is about a search for the Top 10 Songs of an artist made with VueJS that consumes a Genius API.',
    previewLink: 'https://vue-api-search-music.pages.dev',
    repoLink: 'https://github.com/josemiguel02/vue-top-10-songs-api',
    tags: ['Vue.JS', 'Vuex']
  },
  {
    id: uuid(),
    title: 'Tip Calculator App',
    image: '/static/images/projects/tip-calculator-app.webp',
    description: 'This project is a Frontend Mentor Challenge.',
    previewLink: 'https://tip-calculator-app-josemiguel02.netlify.app',
    repoLink: 'https://github.com/josemiguel02/tip-calculator-challenge',
    tags: ['HTML', 'SCSS', 'JavaScript']
  },
  {
    id: uuid(),
    title: 'Dropdown navigation challenge',
    image: '/static/images/projects/dropdown-navigation-challenge.webp',
    description: 'This project is a Frontend Mentor Challenge.',
    previewLink: 'https://frontend-challenge-josemidev24.netlify.app',
    repoLink: 'https://github.com/josemiguel02/frontend-challenge-ui',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: uuid(),
    title: 'Cellphone Store App',
    image: '/static/images/projects/cellphone-store-app.webp',
    description:
      'This project is for a cell phone store made with PHP and MySQL.',
    previewLink: '',
    repoLink: 'https://github.com/josemiguel02/crud-php-mysql',
    tags: ['HTML', 'Bootstrap', 'PHP', 'MySQL']
  },
  {
    id: uuid(),
    title: 'Marvel App',
    image: '/static/images/projects/marvel-app.webp',
    description:
      'This is a simple project that show a list of Superheroes and a short description.',
    previewLink: 'https://react-marvel-ts.pages.dev',
    repoLink: 'https://github.com/josemiguel02/react-marvel-ts',
    tags: ['React.JS', 'TypeScript', 'TailwindCSS']
  }
]
