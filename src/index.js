// import from node_modules
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


import { AuthProvider } from './context'


// import from folder src
import App from './App'

const application = (
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
)

ReactDOM.render(application, document.getElementById("root"))

