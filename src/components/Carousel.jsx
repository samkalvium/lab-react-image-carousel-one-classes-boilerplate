import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor() {
        super()
        this.state = {
            indx: 0
        }
    }

    increaseIndex = () => {
        this.setState(() => {
            return {
                indx: (this.state.indx != images.length - 1) ? (this.state.indx + 1) : (0)
            }
        })
    }

    decreaseIndex = () => {
        this.setState(() => {
            return {
                indx: (this.state.indx != 0) ? (this.state.indx - 1) : (images.length - 1)
            }
        })
    }

    render() {
        return (
            <>
                <div className="body">
                    <ArrowBackIosIcon onClick={this.decreaseIndex} />
                    <div className="title">
                        <h1 className="title1">{images[this.state.indx].title}</h1>
                        <img src={images[this.state.indx].img} alt="Face" />
                        <h1 className="title2">{images[this.state.indx].subtitle}</h1>
                    </div>
                    <ArrowForwardIosIcon onClick={this.increaseIndex} />
                </div>
            </>
        )
    }

}

export default Carousel;