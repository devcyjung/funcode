import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {assertDefined} from './pure/assertDefined.ts'

const root = document.getElementById('root')
assertDefined<HTMLElement | null>(root)

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>
)
