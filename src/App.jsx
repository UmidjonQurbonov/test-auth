// import from node_modules
import { Route, Switch } from "react-router-dom"
import { AuthContext } from './context'
import { useContext } from 'react'

//import from folder src
import './app.scss'
import { Hoc } from "./hoc"
import { Home, Login, Register, Private, Dashboard, NotFound } from "./pages"





function App(){
    const { auth :{authenticate, role} } = useContext(AuthContext)
    
    return(
        <Hoc>
            
                {
                    authenticate ? (
                        role === "Admin" ? (
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route  path="/dashboard" component={Dashboard} />
                                <Route  path="*" component={NotFound} />
                            </Switch>
                        ) : (
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route  path="/private" component={Private} />
                                <Route  path="*" component={NotFound} />
                            </Switch>
                    )) : (
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route  path="/register" component={Register} />
                                <Route  path="/login" component={Login} />
                                <Route   path="*" component={NotFound} />
                            </Switch>
                    )
                }
                
            
        </Hoc>
    )
}


export default App;

