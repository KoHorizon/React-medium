import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateArticleAPI, deleteToken } from '../Services/API';


export default function CreateArticlePage() {
    let navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    


    return (
        <form onSubmit={handleSubmit(async (form) => {
            // console.log(form)

            let response = await CreateArticleAPI(form)
            console.log(response)
            navigate('/articles')
        })}>
            <label htmlFor="title">Titre</label>
            <input 
                type="text" id='title'
                {...register("title", { 
                    required: true,  
                })} 
            /> <br />
            <label htmlFor="content">Contenu</label>
            <input 
                type="text" id='content'
                {...register("content", { 
                    required: true,  
                })} 
            /> <br />
            <label htmlFor="category">Categorie</label>
            <select id='category' {...register("article_category_id", { required: true })}>
                <option value="8">DEV </option>
                <option value="9"> BIZ </option>
                <option value="10"> ART</option>
            </select> <br />
            {errors.email && <span>This field is required</span>} <br />

            <input type="submit" /> <br />

        </form>
    )

}