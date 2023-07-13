import { Col, Row } from 'reactstrap';
//import DisplayCard from './DisplayCard'; she said we could delete or comment out, i'm keeping it
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return(
        <Row>
            {items.map((item, idx) =>{
                return (
                    item && (
                        <Col md className = 'm-1' key={idx}>
                            <AnimatedDisplayCard item={item}/>
                        </Col>
                    )
                );
            })}
        </Row>
    )
};

export default DisplayList;