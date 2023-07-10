import React from 'react';
import AOS from 'aos';

function Contact(){
    AOS.init();
    return(
        <>
        <form action="https://192.168.210.213/PHP/contact.php" method="post">
        <div class="form-floating mt-3 mb-3" id="contact" data-aos="flip-left" data-aos-duration="1000">
            <input type="text" class="form-control" id="name_" placeholder="Enter your name" name="name" required/>
            <label for="name">Enter Your Name</label>
        </div>
        <div class="form-floating mb-3 mt-3" data-aos="flip-left" data-aos-duration="1000">
            <input type="mail" class="form-control" id="email" placeholder="Enter email" name="mail" required/ >
            <label for="email">Enter Your Email</label>
        </div>
        <div class="form-floating mb-3 mt-3" data-aos="flip-left" data-aos-duration="1000">
            <textarea class="form-control" id="cmnt" placeholder="Your Comment" name="comment" required></textarea>
            <label for="cmnt">Your Comment</label>
        </div>
        <div ><button class="btn btn-danger w-100" type="submit" name="submit">Submit</button></div>
        </form>
        </>
    )
}
export default Contact;