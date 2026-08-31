import { NavLink } from "react-router-dom";

export default function BoatListPage() {

    const boatList = [
        {
            id:"1",
            name:"titanic"
        },
        {
            id:"2",
            name:"Olympic"
        }
    ];

    return (
        <>
            <ul>
                {
                    boatList.map(boat => 
                        <li>
                            <NavLink to={`/boat/${boat.id}`}>{boat.name}</NavLink>
                        </li> 
                    )
                }
            </ul>
        </>
    )
}