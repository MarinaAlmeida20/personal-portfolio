import React from 'react'
import "../styles/Interests.css";

export const Interests = () => {
    return (
        <div className='interests'>
            <h1>Interests</h1>
            <div className='allInterests'>
                <div className='each-interest'>
                    <img className='img-interests' src='https://img.icons8.com/color/512/story-book.png' />
                    <h3>Reading</h3>
                </div>
                <div className='each-interest'>
                    <img className='img-interests' src='https://img.icons8.com/bubbles/512/women-walking.png' />
                    <h3>Walking</h3>
                </div>
                <div className='each-interest'>
                    <img className='img-interests' src='https://img.icons8.com/external-wanicon-flat-wanicon/512/external-watch-movie-free-time-wanicon-flat-wanicon.png' />
                    <h3>Watch Movies</h3>
                </div>
                <div className='each-interest'>
                    <img className='img-interests' src='https://img.icons8.com/external-prettycons-flat-prettycons/512/external-coding-education-prettycons-flat-prettycons.png' />
                    <h3>Coding</h3>
                </div>
            </div>
        </div>
    )
}
