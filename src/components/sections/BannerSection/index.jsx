import banner from "../../../assets/banner-img.png"

export function BannerSection() {
    return (
        <section>
            <div>
                <h3>JOSEDASILVA</h3>
                <h1>Bem vindo ao meu portfólio</h1>
                <p>Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <div>
                <img src={banner} alt="banner" />
            </div>
        </section>
    )
}