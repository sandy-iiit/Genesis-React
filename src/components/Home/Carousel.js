import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import classes from './Carousel.module.css'
function Carousel(props){
    return(<>
        <CCarousel controls indicators className={classes.customCarousel}>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img1} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>HAPPY LIFE</h5>
                    <p>Insurance is not just a product, it's a promise. A promise that in your time of need, you won't have to
                        face it alone.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img2} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>HAPPY LIFE</h5>
                    <p>Insurance is not just a product, it's a promise. A promise that in your time of need, you won't have to
                        face it alone.</p>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 customCarouselImage" src={props.img3} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                    <h5>HAPPY LIFE</h5>
                    <p>Insurance is not just a product, it's a promise. A promise that in your time of need, you won't have to
                        face it alone.</p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    </>)
}

export default Carousel

