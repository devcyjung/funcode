import {useState} from 'react'
import closeButton from '/close.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import {Performance} from './pure/Performance.tsx'
import {usePrefersDark} from './dom/usePrefersDark.tsx'
import {NBSP} from './constants/domConstants.ts'

function App() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')
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

            <form className="">
                <input
                    type="text"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    value={message}
                    className=" border-3 border-gray-600 h-[1.5lh] w-[30ch] bg-gray-200 text-gray-600 p-[0.5ch]"
                />
                <img
                    src={closeButton}
                    alt="Reset input"
                    className="bg-gray-500 rounded-full w-[1em]"
                />
            </form>

            <p>
                {message.replaceAll(' ', NBSP)}
            </p>

            <Performance>
                <Performance>
                    <button>Click</button>
                </Performance>
            </Performance>
            <div>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="rounded-lg border-1 border-transparent px-[1.2em] py-[0.6em] text-base font-medium font-[inherit] bg-gray-50 dark:bg-zinc-900 cursor-pointer transition-[border-color] duration-250 hover:border-indigo-400"
                >
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
