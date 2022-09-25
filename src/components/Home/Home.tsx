import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="main-title">CALENDAR</h1>
            <section className="btns">
                <Link to="/register"><button className="btn primary-btn">Register</button></Link>
                <Link to="/login"><button className="btn secondary-btn">Login</button></Link>
            </section>
        </>
    );
};

export default Home;