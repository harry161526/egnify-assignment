import { Component } from "react";
import Testimonial from './Testimonial/Testimonial';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {testimonials} from '../FeaturedProperties/data';
import './Testimonials.css';
class Testimonials extends Component {
    constructor (props) {
        super(props)
        this.state =  {
            currentCard : 0,
            prevCard : testimonials.length-1,
            nextCard : 1,
            testimonials : testimonials
        }

        this.nextCard = this.nextCard.bind(this);
        this.prevCard = this.prevCard.bind(this);
   
    }
    
    nextCard = () => {
        
        if(this.state.currentCard === this.state.testimonials.length-1)
        {
            
            this.setState({currentCard : 0,prevCard : this.state.testimonials.length-1,nextCard : 1})
        }
        else
        {
            let updatedCurrent  = this.state.currentCard + 1;
            let next = updatedCurrent+1;
            let prev = updatedCurrent-1;
            if(updatedCurrent === this.state.testimonials.length-1)
            {
                updatedCurrent = 0;
                next = 1;
                prev = this.state.testimonials.length-1
            }


            this.setState({currentCard : updatedCurrent,nextCard : next,prevCard : prev});
        }
           
    }
   
    prevCard = () =>
    {
        let updatedCurrent = this.state.prevCard;
        let next = this.state.currentCard;
        let prev = updatedCurrent-1;
        if(updatedCurrent === 0)
        {
            
            next = 1;
            prev = this.state.testimonials.length-1;
        }
        this.setState({currentCard : updatedCurrent,nextCard : next,prevCard : prev})
    }



    render() {
        console.log(this.state.currentCard,this.state.prevCard,this.state.nextCard)
        return(
            <div className="testimonials">
                <div className="testimonials-header">
                    <h1>CLIENT TESTIMONIALS</h1>
                    <h3>Suspendisse dictum enim sit amet libero malesuada feugiat.</h3>
                </div>
                
                <div className="carousel">
                    <div className="left" onClick={this.prevCard}>
                        <FontAwesomeIcon  icon={faAngleLeft} />
                    </div>
                    <div className="right" onClick={this.nextCard}>
                        <FontAwesomeIcon  icon={faAngleRight} />
                    </div>
                    <div className="testimonials-container">
                        <Testimonial slideType="slide" data={this.state.testimonials[this.state.prevCard]} />
                        <Testimonial slideType="active" data={this.state.testimonials[this.state.currentCard]} />
                        <Testimonial slideType="slide" data={this.state.testimonials[this.state.nextCard]} />
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default Testimonials;