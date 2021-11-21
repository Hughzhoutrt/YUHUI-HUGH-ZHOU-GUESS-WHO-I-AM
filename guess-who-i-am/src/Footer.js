import './App.scss';

function Footer() {

    return (
        <div className="footer">
            <div className="links">
                <p>Follow Me</p>
                <a href='https://github.com/Hughzhoutrt/' aria-label='link to the GitHub of Hugh Zhou'><i className="fab fa-github-square"></i></a>
                <a href='https://www.linkedin.com/in/hugh-yuhui-zhou-47181b170/' aria-label='link to the LinkedIn of Hugh Zhou'><i className="fab fa-linkedin"></i></a>
                <a href='https://twitter.com/Hugh_Zhou_' aria-label='link to the Twitter of Hugh Zhou'><i className="fab fa-twitter-square"></i></a>
            </div>
            <p>Created by <a href='https://hiyuhui.com/' aria-label='link to the portfolio of Hugh'>Hugh Zhou</a>. © All rights reserved.</p>
        </div>
    )
}

export default Footer;