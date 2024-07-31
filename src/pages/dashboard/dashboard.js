import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const Dashboard = () => {

    const [userFirstName, setUserFirstName] = useState("");

    useEffect(() => {
        let token = localStorage.getItem("authToken");

        axios
            .get("http://localhost:8080/pitangTesteTecnico/api/me", {
                headers: {
                    'Authorization': token
                }
            })
            .then((response) => {
                console.log(response.data);
                setUserFirstName(response.data.firstName);
            })
            .catch((error) => {
                console.error(error)
            });

    }, [])
    const navigate = useNavigate()

    const onButtonClick = () => {
        localStorage.removeItem("authToken");
        navigate('/');
    }

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>Welcome! {userFirstName}</div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>
                        <td>Austria</td>
                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>
                        <td>UK</td>
                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>
                        <td>Canada</td>
                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>
                        <td>Italy</td>
                    </tr>
                </table>
            </div>
            <div className={'buttonContainer'}>
                <button
                    onClick={onButtonClick}
                >Sair
                </button>
            </div>
        </div>
    )
}

export default Dashboard