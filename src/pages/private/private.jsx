import st from './private.module.scss'


function Private(){
    return(
        <div className={st.private}>
            <div className={st.container}>
                <h1 className={st.h1}>
                    Private Page
                </h1>
            </div>
        </div>
    )
}

export default Private