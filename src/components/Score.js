import './Home.css'

const Score = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <h1 className='Title'>Quiz finished</h1>
            <h2 className='Points' >You have scored {pts} out of 10!</h2>
            <button onClick={refreshPage}>Retry</button>
        </>
    )
}

export default Score
