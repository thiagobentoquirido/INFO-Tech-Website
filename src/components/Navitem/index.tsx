import Link from "next/link";
import './index.css';

export interface Naviteminterface{
    label: string;
    url: string;
    isActive?: boolean;
}

export default function Navitem(props: Naviteminterface){
    return(
        <ul>
            <li className="nav-item">
                <Link href={props.url} className={`nav-link ${props.isActive ? 'active' : ''}`}>
                {props.label}
                </Link>
            </li>
          
        </ul>
    );
}