import './App.scss';
import TitleScreen from './audios/titleScreen.mp3';
import TittleImg from './imgs/title.png';

function Header () {

    return (
    <>
    <div className="header pokemonStyleBorder">
        <div  className="headerSubContainer">
            <div>
                <img src={TittleImg} alt="The title image of this website" />
                <audio src={TitleScreen} type="audio/mpeg" controls loop></audio>
            </div>
        </div>
    </div>
    <div className="links">
        <a href='https://hiyuhui.com/' aria-label='link to the portfolio of Hugh'><i class="fas fa-user-ninja"></i></a>
        <a href='https://github.com/Hughzhoutrt' aria-label='link to the GitHub of Hugh'><i class="fab fa-github-square"></i></a>
        <a href='https://www.linkedin.com/in/hugh-yuhui-zhou-47181b170/' aria-label='link to the LinkedIn of Hugh'><i class="fab fa-linkedin"></i></a>
        <a href='https://twitter.com/Hugh_Zhou_' aria-label='link to the Twitter of Hugh'><i class="fab fa-twitter-square"></i></a>
    </div>
    </>
    )
}

export default Header;