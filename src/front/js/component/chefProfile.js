import React,{useEffect, useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

export const ChefProfile = ()=>{
    const { store, actions } = useContext(Context);
    const id = useParams().id;

    useEffect (()=>{
		actions.loadChefs(id);
	},[])

    return(
        <>
            <h1>Chef Profile</h1>
            <div className="container">
                {
                    <div>
                        <h4>{store.chef.full_name}</h4>
                        <p>{store.chef.email}</p>
                        <p>{store.chef.description}</p>
                        <p>{store.chef.bank_info}</p>
                        <p>{store.chef.address}</p>
                                                
                    </div>
                }


            </div>
        </>
    )
}