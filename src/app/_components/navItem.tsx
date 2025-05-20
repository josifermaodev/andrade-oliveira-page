import Link from "next/link";

export interface NavItemsInterface {
    label: string;
    url: string;
}

export default function NavItem(props: NavItemsInterface) {
    return(
        <li className="text-white text-lg font-semibold mr-8 hover:text-[#E6B902]">
            <Link href={props.url}>
                {props.label}
            </Link>
        </li>
    )
}
