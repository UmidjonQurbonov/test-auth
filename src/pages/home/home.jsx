import st from './home.module.scss'

function Home(){
    
    return(
        <div className={st.home}>
            <div className={st.container}>
                <h1 className={st.h1}>
                    Home
                </h1>
            </div>
        </div>
    )
}

export default Home;