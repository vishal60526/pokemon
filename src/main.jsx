import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Link } from 'react-router-dom'
import RoustomRoutes from './routers/RoustomRoutes.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Link to='/'><h1>back</h1></Link>
   <RoustomRoutes/>
    </BrowserRouter>
)
