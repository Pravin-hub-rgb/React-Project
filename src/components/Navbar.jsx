import { Link } from "react-router-dom";
import navList from "../data/navbarData";
export default function Navbar() {
    return (
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
            data-twe-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <img src="./vite.svg" alt="" />
                <div className="ms-2">
                    <a className="text-xl text-black dark:text-white" href="#">React Project</a>
                </div>
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent2"
                    aria-controls="navbarSupportedContent2"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                    </span>
                </button>

                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent2"
                    data-twe-collapse-item>
                    <ul
                        className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                        data-twe-navbar-nav-ref>
                        {
                            navList.map((list, _id) => {
                                return <li key={_id} className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                                    {/*<a className="text-black dark:text-white lg:px-2"
                                    aria-current="page"
                                    href={list.link}
                                    data-twe-nav-link-ref>{list.title}</a> */}
                                    <Link className="text-black dark:text-white lg:px-2" to={list.link}>{list.title}</Link>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav >
    )
}