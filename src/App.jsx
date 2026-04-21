import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function TopicList({ topics }) {
  return (
    <ul>
      {topics.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const topics = [
  'JSX похож на HTML',
  'Компонент возвращает разметку',
  'Состояние меняется через setCount',
  'Массив можно превратить в список через map',

]


  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Мой React-дневник</h1>
          <p>
            Сегодня я начинаю свое путешествие в мир React. Я буду делиться своими успехами, открытиями и вызовами на этом пути. Следите за моими шагами и поддерживайте меня в этом увлекательном приключении!
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Пройдено шагов: {count}
        </button>
        <p>
          {count === 0
            ? 'Нажмите на кнопку, чтобы начать отслеживать свои шаги в изучении React!'
            : `Отлично! Вы уже прошли ${count} шагов в изучении React! Продолжайте в том же духе!`}
        </p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Сегодня изучаю</h2>
          <p>Первый компонент, jSX и состояние</p>
          <TopicList topics={topics} />
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Что уже получилось </h2>
          <p>Я изменил текст, сохранил файл и увидел HMR в работе</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
