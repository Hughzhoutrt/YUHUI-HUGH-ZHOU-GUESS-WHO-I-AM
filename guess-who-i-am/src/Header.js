import './App.scss';
import TittleImg from './imgs/title.png';

function Header(props) {
    const { headerDisplay } = props;

    return (
        <>
            <div className={headerDisplay ? "header pokemonStyleBorder" : "header pokemonStyleBorder headerDisappear"}>
                <div className="headerSubContainer">
                    <img src={TittleImg} alt="The title image of this website" />
                </div>
            </div>
        </>
    )
}

export default Header;