import React from 'react';
import AOS from 'aos';

function Contact() {
    AOS.init();
    return (
        <>
            <form action="https://192.168.210.213/PHP/signup.php" method="post">
                <div class="form-floating mt-3 mb-3" id="contact" data-aos="flip-left" data-aos-duration="1000">
                    <input type="text" class="form-control" id="name_" placeholder="Enter your name" name="name" required />
                    <label for="name">Enter Your Name</label>
                </div>
                <div class="form-floating mb-3 mt-3" data-aos="flip-left" data-aos-duration="1000">
                    <input type="mail" class="form-control" id="email" placeholder="Enter email" name="email" required />
                    <label for="email">Enter Your Email</label>
                </div>
                <div class="form-floating mb-3 mt-3" data-aos="flip-left" data-aos-duration="1000">
                    <input type="password" class="form-control" placeholder="enter your password" name="pswd"></input>
                    <label for="cmnt">Enter your password</label>
                </div>
                <div ><button class="btn btn-danger w-100" type="submit" name="submit">Signup</button></div>
                <p class="float-start text-primary">Already have an Accout?</p>
                <p class="float-end text-primary">login?</p>

            </form>
        </>
    )
}
export default Contact;