import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router-dom";
import api from '../../api'
import { DataContext } from '../../context'


function Register(){
    let history = useHistory()
    const { setUserData } = useContext(DataContext)
    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [dataHand, setDataHand] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {

        return () => {
            setDataHand({email:'', password:''})
            setLoading(false)
            setErrMessage('')
        }
        
    }, [])

    function handleEvent(event){
        setDataHand({...dataHand, [event.target.name]: event.target.value})
    }

    function handleLogin(){
        api.post('/login', dataHand)
            .then(res => {
                if(res.status === 200){
                    localStorage.setItem('email', dataHand.email)
                    localStorage.setItem('password', dataHand.password)
                    setUserData(dataHand)
                    history.push('/')
                    setLoading(false)
                }
            })
            .catch(err => {
                setErrMessage(err.response.data.message)
                setLoading(false)
            })
    }
    
    
    function handleSubmit(e){
        e.preventDefault()

        setLoading(true)

        api.post('register', dataHand)
            .then((res) => {
                if(res){
                    handleLogin()
                }
            })
            .catch(err => {
                setLoading(false)
                if(err.response){
                    setErrMessage(err.response.data.message)
                }
            
            })

        
        
    }
    return(
        <div className="container  d-flex align-items-center justify-content-center mt-5">
            {!loading ? 
            (<div className="box border">
                <h3 className="text-center py-3">Sign Up</h3>
                <hr />
                <p className="text-center tet-danger">{errMessage}</p>
                <form className="px-3 py-2" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="#email" className="font-weight-bold">Email</label>
                        <input autoComplete="on" value={dataHand.email} onChange={handleEvent} type="email" id="email" placeholder="Email" className="form-control" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="#password" className="font-weight-bold">Password</label>
                        <input autoComplete="on"  value={dataHand.password} onChange={handleEvent} type="password" className="form-control" placeholder="Password" id="password" name="password" required/>
                    </div>
                    
                    <input type="submit" value="Sign Up" className="btn btn-primary btn-block" onClick={handleSubmit}/>
                </form>
            </div>) : <h1>Loading...</h1>
        }
        </div>
    )
}

export default Register