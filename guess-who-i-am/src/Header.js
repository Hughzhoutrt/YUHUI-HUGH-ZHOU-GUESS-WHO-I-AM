import './App.scss';
import TitleScreen from './audios/titleScreen.mp3';
import TittleImg from './imgs/title.png';

function Header(props) {
    const { headerDisplay } = props;

    return (
        <>
            <div className={headerDisplay ? "header pokemonStyleBorder" : "header pokemonStyleBorder headerDisappear"}>
                <div className="headerSubContainer">
                    <img src={TittleImg} alt="The title image of this website" />
                    <audio src={TitleScreen} type="audio/mpeg" controls loop></audio>
                </div>
            </div>
        </>
    )
}

export default Header;