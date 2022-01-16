let baseUrl = 'http://edu.project.etherial.fr'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const deleteToken = () => {
    return localStorage.removeItem('token');
}


export const RegisterAPI = async ({ firstname,lastname,email, password,password_verif }) => {

    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            password_verif: password_verif,
        })
    })

    let json = await response.json()
    return json
}



export const LoginAPI = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json
}



export const getArticles = async() => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let json = await response.json()

    return json
}



export const getArticlesById = async(id) => {
    let response = await fetch(`${baseUrl}/articles/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let json = await response.json()

    return json
}





export const CreateArticleAPI = async({title, content, article_category_id }) => {
    let dataTransormedToInt = parseInt(article_category_id)
    
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            title: title,
            content: content,
            article_category_id: dataTransormedToInt
        })
    })
    let json = await response.json()

    return json
}