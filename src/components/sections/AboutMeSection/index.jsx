import styles from "./style.module.css"

export function AboutMeSection() {
    return (
        <section>
            <div className={`${styles.aboutMeSection} container`}>
                <h2 className="title2">Sobre mim</h2>
                <p className={`${styles.aboutParagraph} paragraph`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
            </div>
        </section>
    )
}