import React from 'react'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

const News_des = () => {
    return (
        <Card>
            <CardImg style={{ display: "flex", flexWrap: "wrap" }} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=" tis is image" />
            <CardBody>
                <CardTitle> <h3>this is title</h3></CardTitle>
                <CardText>lorem 30fbdhjnkdmbgfnhdsfbdjhgnbgkfddfn vgfjb b fnb nfbfjgn       fjdkn      fvjdfbnkdfg djfg      vn fd,v dfnv          nd </CardText>
                <div className="row">
                    <div className="col-6">
                        <CardText   >this is item source</CardText>
                    </div>
                    <div className="col-6">
                        <CardText>"22/3/2022/22:00"</CardText>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default News_des