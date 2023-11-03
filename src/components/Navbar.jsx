import logo from '/public/images/squid-game-logo.jpg';
import Button from '../components/Button';

function Navbar() {
    return (
        <nav style={{ height: "100px", backgroundColor: "black", display: 'flex', justifyContent: 'space-between' }}>
            <img src={logo} alt="not found" style={{ height: "100px"}} />
            <Button />
        </nav>
    )
}

export default Navbar;
