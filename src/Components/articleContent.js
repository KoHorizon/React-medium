import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/articleContent.css'
export default function ArticleContent({id, content, title, category, user }) {

    let navigate = useNavigate()

    return (
        <div className='articleBox'>
            <span className='id'> { id }</span>
            <p className='title'> Titre : { title }</p>
            <p className='content'> contenu : {content}</p>
            <p className='category'> Category : { category.name }</p>
            <p className='user'> Utilisateur : { user.firstname }</p>
            <button className='button' onClick={() => navigate(`/articles/${id}`)}> Go to the article </button>
            
        </div>
    )

    

}