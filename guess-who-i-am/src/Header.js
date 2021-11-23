import './App.scss';
import TittleImg from './imgs/title.png';

function Header(props) {
    const { headerDisplay } = props;

    return (
        <>
            <header className={headerDisplay ? "header pokemonStyleBorder" : "header pokemonStyleBorder headerDisappear"}>
                <div className="headerSubContainer">
                    <img src={TittleImg} alt="The title of this website" />
                </div>
            </header>
        </>
    )
}

export default Header;