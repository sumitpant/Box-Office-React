import React from 'react'
import IMG_PLACEHOLDER from '../../images/not-found.png'
import { Star } from '../../styled'
import '../../styles/ShowMainData.css'
const ShowMainData = ({name,rating,summary,tags,image}) => {
    return (
        <div className="MainData__outer">
            <img src={image?image.original:IMG_PLACEHOLDER} alt="shpw-cover"/>
            <div>
                <h1 style={{margin:"10px"}}>{name}</h1>
            </div>
            <div>
                <Star/>
                <span>{rating.average||'N/A'}</span>
            </div>
            {/* to insert html as it is dangerouslySetInnerHTML withou this simply as text*/}
            <div dangerouslySetInnerHTML={{__html:summary}} style={{margin:"10px"}} />
            <div style={{margin:"10px"}}>
                Tags:{' '}
                <div>
                    { tags.map((tag,i)=>{
                        <span key={i}>{tag}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShowMainData
