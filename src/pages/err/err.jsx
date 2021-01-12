import st from './err.module.scss'
import { useHistory } from 'react-router-dom'

function NotFound(){
    let history = useHistory()
    const redirectHome = () => {
        history.push('/')
    }

    return(
        <div className={st.err}>
            <div className={st.container}>
                <h1 className={st.h1}>
                    Page Not Found
                </h1>
                <button onClick={redirectHome} className="btn btn-primary mt-3 px-3">Back to Home</button>
            </div>
        </div>
    )
}

export default NotFound;