import {useState} from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import {Performance} from './pure/Performance.tsx'
import {usePrefersDark} from './dom/usePrefersDark.tsx'

function App() {
    const [count, setCount] = useState(0)
    const doesPreferDark = usePrefersDark()
    return (
        <>
            <div className="space-x-10">
                <a href="https://vite.dev" target="_blank">
                    <img
                        src={viteLogo}
                        alt="Vite logo"
                        className="h-24 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
                    />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        alt="React logo"
                        className="h-24 transition-[filter] duration-300 motion-safe:animate-spin-logo hover:drop-shadow-[0_0_2em_#61dafbaa]"
                    />
                </a>
            </div>
            <h1 className="text-5xl">
                Do you prefer dark mode?:{' '}
                {doesPreferDark !== null ? doesPreferDark.toString() : ''}
            </h1>
            <Performance />
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count : {count}
                </button>
                <p>
                    Edit <code>src/App.===tsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-[#888]">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
