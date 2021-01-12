import st from './dashboard.module.scss'

function Dashboard(){
    
    return(
        <div className={st.dash}>
            <div className={st.container}>
                <h1 className={st.h1}>
                    Dashboard
                </h1>
            </div>
        </div>
    )
}

export default Dashboard;