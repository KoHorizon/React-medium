import React, { useContext, useEffect, useState } from 'react';
import ArticleContent from '../Components/articleContent';
import { GarbageContext } from '../Providers/GarbageProvider';


export default function ArticlePage() {


    const { aritcles } = useContext(GarbageContext)


    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
            
        }}>

            <div style={{
                display: 'grid',
                width: '95%',
                gridTemplateColumns: 'repeat(auto-fill,370px)',   
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginTop: '30px',
            }}>
                {
                    aritcles ? aritcles.map(({id , content, title , ArticleCategory, User})=> {
                        return <ArticleContent key={id} id={id} content={content} title={title} category={ArticleCategory} user={User}/> 
                    }) : <p >LOADING</p>
                }
            </div>

        </div>
    )

}