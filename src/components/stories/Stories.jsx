import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import './stories.scss';
import storyImg1 from './story1.jpg';
import storyImg2 from './story2.jpg';
// import storyImg3 from './story3.jpg';
// import storyImg4 from './story4.jpg';

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [{
        id: 1,
        name: "Jimin Simon",
        img: {storyImg2}
    },
    {
        id: 2,
        name: "Jimin Peter",
        img: {storyImg2}
    },
    {
        id: 3,
        name: "Jimin Paul",
        img: {storyImg2}
    },
    {
        id: 4,
        name: "Simon Peter",
        img: {storyImg2}
    }
]
  return (
    <div className='stories'>
         <div className='story'>
                <img src={storyImg1} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story => (
            <div className='story'>
                <img src={story.img.storyImg2} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories