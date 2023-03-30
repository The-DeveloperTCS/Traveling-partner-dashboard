import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import { theme } from './theme'
import { store } from './redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
)
