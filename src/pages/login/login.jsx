import { useState, useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import api from '../../api'
import { DataContext } from '../../context'




function Login(){
    let history = useHistory()
    const {setUserData} = useContext(DataContext)
    const [loading, setLoading] = useState(false)
    const [errMessage, setErrMessage] = useState('')
    const [dataHand, setDataHand] = useState({
        email: '',
        password: ''
    })

    
    useEffect(() => {
        return () => {
            setErrMessage('')
            setLoading(false)
            
        }
    }, [])

    function handleEvent(event){
        setDataHand({...dataHand, [event.target.name]: event.target.value})
    }




    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        
        api.post('login', dataHand)
            .then((res) => {
                if(res.status === 200){
                    localStorage.setItem('email', dataHand.email)
                    localStorage.setItem('password', dataHand.password)
                    setUserData(dataHand)
                    history.push('/')    
                    setLoading(false)
                }
            })
            .catch( err => {
                setLoading(false)
                if(err.response){
                    setErrMessage(err.response.data.message)
                }
            })
    }

    


    return(
        <div className="container  d-flex align-items-center justify-content-center mt-5">
            {!loading ? (
                <div className="box">
                    <h3 className="text-center text-dark py-3">Login</h3>
                    <hr />
                    <p className="text-danger text-center">{errMessage}</p>
                    <form className="px-3 py-2" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="#email" className="font-weight-bold">Email</label>
                            <input autoComplete="" value={dataHand.email} onChange={handleEvent} type="email" id="email" placeholder="Email" className="form-control" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="#password" className="font-weight-bold">Password</label>
                            <input autoComplete=""  value={dataHand.password} onChange={handleEvent} type="password" className="form-control" placeholder="Password" id="password" name="password" required/>
                        </div>
                        
                        <button className="btn btn-primary btn-block" onClick={handleSubmit}>Login</button>
                    </form>
                </div>) : <h1>Loading...</h1>
            }
        </div>
    )
}

export default Login