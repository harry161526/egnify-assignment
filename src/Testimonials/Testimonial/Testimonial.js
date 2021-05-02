import './Testimonial.css';

function Testimonial(props) {
    const comment = props.data;
    const classes = ['testimonial']
    if(props.slideType === 'active')
    {
        classes.push('active')
    }
    else
        classes.push('slide')
    return(
        <div className={classes.join(' ')}>
            <h2>{comment.title}</h2>
            <p>{comment.comment}</p>
            <div className="author">
                <div className="testimonial-imgbox">
                    <img src={comment.image} alt="image" />
                </div>
                <div className="testimonial-imginfo">
                    <span>{comment.name+", "}</span>{comment.role}
                </div>
            </div>
           
        </div>
    )
}

export default Testimonial;