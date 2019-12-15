import Nav from './Nav';
const Header = () => {
    return(
        <div>
            <div clasName="bar">
                <a href="">Sick Fits</a>
                <Nav/>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </div>
    );
}

export default Header;