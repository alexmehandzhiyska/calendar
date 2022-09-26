import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page-wrapper-centered">
            <h1 className="main-title">CALENDAR</h1>
            <section className="btns">
                <Link to="/register"><button className="btn-big primary-btn">Register</button></Link>
                <Link to="/login"><button className="btn-big primary-btn">Login</button></Link>
            </section>
        </div>
    );
};

export default Home;