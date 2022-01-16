import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { getArticlesById } from '../Services/API';
import './Styles/SingleArticlePage.css'


export default function SingleArticlePage() {

    const [loading, setLoading] = useState(false)
    


    const [articleData, setArticleData] = useState()
    const { id } = useParams();

    useEffect(() => {

        getArticlesById(id).then((res) => {
            setArticleData(res.data)
            // console.log(res.data);
            setLoading(true)
            
        })
    },[id])

    return (
        loading ? 
            <div className='data'>
                <p className='title'>Titre : {articleData.title}</p>
                <p>Contenu : {articleData.content}</p>
                <p>prénom : {articleData.User.firstname}</p>
            </div> 
                : 
            <p>LOADING ... </p>
        
    )

    

}