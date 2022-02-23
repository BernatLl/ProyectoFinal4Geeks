import React, { Component } from "react";
import Bernat from "../../img/Bernat.jpg"
import Leo from "../../img/leoPerfil.jpg"
import "../../styles/meetTheCrew.css"


export const MeetTheCrew = ()=>{
    return (
        <>
        <h1 className="crew mb-5" >Meet the crew</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            <div className="col">
                <div className="card p-5" >
                    <img src={Leo} className="card-img-top" alt="Photo Leo"/>
                    <div className="card-body">
                        <h5 className="card-title">Leonardo Tranquillini</h5>
                        <p className="card-text">
                        I am a professional Cook with more than 14 years of experiencie in 9 cities of 4 countries. 
                        In my experieence most of people have big curiosity about the professional cooking world. So today i Bring you my idea,  to share knowledge and connect cultures from all around the world in your screen.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card p-5" >
                    <img src={Bernat} className="card-img-top" alt="Photo Leo"/>
                    <div className="card-body">
                        <h5 className="card-title">Bernat Lloret</h5>
                        <p className="card-text">
                        I am a professional Cook with more than 14 years of experiencie in 9 cities of 4 countries. 
                        In my experieence most of people have big curiosity about the professional cooking world. So today i Bring you my idea,  to share knowledge and connect cultures from all around the world in your screen.
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    );

}