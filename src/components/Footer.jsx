import navList from "../data/navbarData"
export default function Footer() {
    return (
        <footer className="bg-zinc-500 text-center dark:bg-neutral-700 lg:text-left w-full">
            <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
                © 2023 Copyright:
                <a href="https://tw-elements.com/">TW Elements</a>
                <div>
                    <ul>
                        {navList.map((list, id) => (<li key={id}><a href={list.link}>{list.title}</a></li>))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}