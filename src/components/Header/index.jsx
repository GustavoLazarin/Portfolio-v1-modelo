import logo from "../../assets/portfolio.png"

export function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <div>
                <a href="#">Stack</a>
                <a href="#">Projetos</a>
                <a href="#">Sobre</a>
            </div>
            <button>Contato</button>
        </header>
    )
}