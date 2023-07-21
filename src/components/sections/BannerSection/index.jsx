import banner from "../../../assets/banner-img.png"
import styles from "./style.module.css"

export function BannerSection() {
    return (
        <section className={`${styles.bannerSection} container`}>
            <div >
                <h3 className={styles.userName}>JOSEDASILVA</h3>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <div>
                <img src={banner} alt="banner" />
            </div>
        </section>
    )
}