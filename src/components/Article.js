function Article({isLoading = true, title, disabled}) {

    console.log()
    return <div>
        <h1>{title}</h1>
        <p>Elit incididunt dolore velit eiusmod Lorem amet fugiat cupidatat ut eiusmod duis amet.</p>
        {isLoading ? <span>Oui</span> : <span>Non</span>}
    </div>
}

export default Article