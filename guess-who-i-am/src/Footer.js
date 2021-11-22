import './App.scss';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickLinkSound from './audios/linkSound.mp3';

function Footer() {
    const [playHoverSound] = useSound(HoverSound);
    const [playClickLinkSound] = useSound(ClickLinkSound);

    return (
        <footer className="footer">
            <div className="links">
                <p>Follow Me</p>
                <a onMouseEnter={playHoverSound} onClick={playClickLinkSound} href='https://github.com/Hughzhoutrt/' aria-label='link to the GitHub of Hugh Zhou'><i className="fab fa-github-square"></i></a>
                <a onMouseEnter={playHoverSound} onClick={playClickLinkSound} href='https://www.linkedin.com/in/hugh-yuhui-zhou-47181b170/' aria-label='link to the LinkedIn of Hugh Zhou'><i className="fab fa-linkedin"></i></a>
                <a onMouseEnter={playHoverSound} onClick={playClickLinkSound} href='https://twitter.com/Hugh_Zhou_' aria-label='link to the Twitter of Hugh Zhou'><i className="fab fa-twitter-square"></i></a>
            </div>
            <p>Created by <a onMouseEnter={playHoverSound} onClick={playClickLinkSound} href='https://hiyuhui.com/' aria-label='link to the portfolio of Hugh'>Hugh Zhou</a>. © All rights reserved.</p>
        </footer>
    )
}

export default Footer;