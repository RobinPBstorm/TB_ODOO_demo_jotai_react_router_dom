import { useNavigate, useParams } from "react-router-dom"

export default function BoatDetail() {
    const { id } = useParams();

    const nav = useNavigate();

    const handleClick = () => {
        nav("/boat");
    }

    return (
        <>
            <p>Bienvenue au détail du bateau {id}</p>
            <button onClick={handleClick}>Retour à la liste</button>
        </>
    )
}