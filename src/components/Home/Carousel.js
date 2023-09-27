import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import classes from './Carousel.module.css'
function Carousel(props){
    return(<>
        <CCarousel controls indicators className={classes.customCarousel}>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img1} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img1} alt="slide 2" style={{ height: '50%' }}/>
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img1} alt="slide 3" style={{ height: '50%' }}/>
                <CCarouselCaption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    </>)
}

export default Carousel

