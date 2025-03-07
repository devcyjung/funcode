import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Performance} from './pure/Performance.tsx'
import {usePrefersDark} from './dom/usePrefersDark.tsx'

function App() {
    const [count, setCount] = useState(0)
    const isPrefDark = usePrefersDark()
    return (
        <>
            <div className='bg-gray-100'>
                <a href='https://vite.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo'/>
                </a>
                <a href='https://react.dev' target='_blank'>
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </a>
            </div>
            <h1>
                Do you prefer dark mode?:{' '}
                {isPrefDark !== null ? isPrefDark.toString() : ''}
            </h1>
            <Performance/>
            <div className='card'>
                <button onClick={() => setCount((count) => count + 1)}>
                    count : {count}{' '}
                    <br/>
                    src/App.===tsx
                </button>
                <p>
                    Edit <code>src/App.===tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
