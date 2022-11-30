import { util } from "../util/util"

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container">
                    <h1 className="text"> {util.multi(5, 11)} </h1>
                </div>
            </div>
        </>
    )
}

export default Home