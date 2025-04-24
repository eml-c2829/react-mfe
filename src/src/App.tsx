import { memo, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type FooterProps = {
  author: AuthorDetail
}

type AuthorDetail = {
  name: string
  age: number,
  favoriteLanguages: string[]
}

const Footer = memo(function Footer(props: FooterProps) {
  const textColor = 'blue';

  //const [status, setStatues] = useState('active');
  const reducer = (state: boolean, action: string) => {
    switch (action) {
      case 'active':
        return true;
      case 'inactive':
        return false;
      default:
        throw new Error();
    }
  };
  const [status, setStatues] = useReducer(reducer, true);

  console.log('Footer component is re-rendered');

  return (
    <>
      <p>
        This is footer component. Status is {status ? 'active' : 'inactive'}
      </p>
      <p>
        <button onClick={() => setStatues('inactive')}>Set Inactive</button>
        <button onClick={() => setStatues('active')}>Set Active</button>
      </p>
      <p className="read-the-docs">
      Click on the Vite and React logos to learn more
      </p>
      <p style={{ color: textColor }}>
        Author: {props.author.name},
        Age: {props.author.age},
      </p>
      Favorite Languages: 
      <ul>
        {props.author.favoriteLanguages.map((language, index) => (
          <li key={index}>{index}. {language}</li>
        ))}
      </ul>
    </>
  )
});

const Logo = memo(function Logo() {
  console.log('Logo component is re-rendered');

  return (
    <div className="flex items-center justify-center bg-blue-900">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
});

function Counter() {
  const [count, setCount] = useState(0);

  console.log('Counter component is re-rendered');

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

function App() {
  const [status, setStatues] = useState('active');


  const authorDetail: AuthorDetail = {
    name: 'Thai Van',
    age: 20,
    favoriteLanguages: ['JavaScript', 'TypeScript', 'Python'],
  };

  console.log('App component is re-rendered');


  return (
    <>
      <Logo />
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Tailwind CSS!</h1>
      <p>
        App status is {status}
        <button onClick={() => setStatues('inactive')}>Set Inactive</button>
        <button onClick={() => setStatues('active')}>Set Active</button>
      </p>
      <Counter />
      <Footer 
        author={authorDetail} 
      />
    </>
  )
}

export default App
