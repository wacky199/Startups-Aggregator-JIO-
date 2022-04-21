import React, { Component } from 'react';


import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const News = () => {

    const news = [{
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'

    }, {
        "Headline": "h",
        "Timestamp": 1,
        "Source": "r",
        "Body": "kjhashkhdk",
        "ImageLink": 'https://cdn.pixabay.com/photo/2021/07/14/21/53/building-6467081_960_720.jpg'

    }]

    return (
        <div class="container">
            <div class="row">
                
                    {
                        news.map(item =>
                            <div className="col-sm-4  mr-2 mt-1 mb-2" >
                                <Card>
                                    <CardImg style={{ display: "flex", flexWrap: "wrap" }} src={item.ImageLink} alt={item.HeadLine} />
                                    <CardBody>
                                        <CardTitle> <a href='news_des'><h3>{item.Headline}</h3></a></CardTitle>
                                        {/* <CardText>{item.Body}</CardText> */}
                                        <div className="row">
                                            <div className="col-6">
                                                <CardText   >{item.Source}</CardText>
                                            </div>
                                            <div className="col-6">
                                                <CardText>{item.Timestamp}</CardText>
                                            </div>
                                        </div>
                                        {/* <div className="btn">
                                            <button>
                                                <a href='#'>
                                                    Read more
                                                </a>
                                            </button>
                                        </div> */}
                                    </CardBody>
                                </Card>

                            </div>
                                )
                    }
            </div>
        </div>

        

        
    );


}



export default News