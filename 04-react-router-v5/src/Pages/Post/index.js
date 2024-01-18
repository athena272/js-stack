import { func } from "prop-types";
import React, { useMemo } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

export default function Home() {
    const params = useParams()
    const { search } = useLocation()
    const history = useHistory()

    const queryParams = useMemo(() => new URLSearchParams(search), [search])


    console.log(params)
    console.log(queryParams.get('meuTeste'))


    function handleNavigate() {
        history.push('/posts')
    }

    return (
        <>
            <button onClick={handleNavigate}>Voltar para lista de POSTS</button>
            <h1>Post page</h1>
        </>
    )
}