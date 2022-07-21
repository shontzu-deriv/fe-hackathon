import "./secstyle.css";

const Review = () => {
  return (
    <section id="testimonials">
      {/* heading */}
      <div className="testimonial-heading">
        <span>Comments</span>
        <h4>Clients Says</h4>
      </div>
      {/* <!--testimonials-box-container------> */}
      <div className="testimonial-box-container">
        {/* <!--BOX-1--------------> */}
        <div className="testimonial-box">
          {/* <!--top-------------------------> */}
          <div className="box-top">
            {/* <!--profile-----> */}
            <div className="profile">
              {/* <!--img----> */}
              <div className="profile-img">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
              </div>
              {/* <!--name-and-username--> */}
              <div className="name-user">
                <strong>Liam mendes</strong>
                <span>@liammendes</span>
              </div>
            </div>
            {/* <!--reviews------> */}
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          {/* <!--Comments----------------------------------------> */}
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
              asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
              tenetur voluptates incidunt blanditiis sed atque cumque.
            </p>
          </div>
        </div>
        {/* <!--BOX-2--------------> */}
        <div className="testimonial-box">
          {/* <!--top-------------------------> */}
          <div className="box-top">
            {/* <!--profile-----> */}
            <div className="profile">
              {/* <!--img----> */}
              <div className="profile-img">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
              </div>
              {/* <!--name-and-username--> */}
              <div className="name-user">
                <strong>Noah Wood</strong>
                <span>@noahwood</span>
              </div>
            </div>
            {/* <!--reviews------> */}
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          {/* <!--Comments----------------------------------------> */}
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
              asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
              tenetur voluptates incidunt blanditiis sed atque cumque.
            </p>
          </div>
        </div>
        {/* <!--BOX-3--------------> */}
        <div className="testimonial-box">
          {/* <!--top-------------------------> */}
          <div className="box-top">
            {/* <!--profile-----> */}
            <div className="profile">
              {/* <!--img----> */}
              <div className="profile-img">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
              </div>
              {/* <!--name-and-username--> */}
              <div className="name-user">
                <strong>Oliver Queen</strong>
                <span>@oliverqueen</span>
              </div>
            </div>
            {/* <!--reviews------> */}
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          {/* <!--Comments----------------------------------------> */}
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
              asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
              tenetur voluptates incidunt blanditiis sed atque cumque.
            </p>
          </div>
        </div>
        {/* <!--BOX-4--------------> */}
        <div className="testimonial-box">
          {/* <!--top-------------------------> */}
          <div className="box-top">
            {/* <!--profile-----> */}
            <div className="profile">
              {/* <!--img----> */}
              <div className="profile-img">
                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
              </div>
              {/* <!--name-and-username--> */}
              <div className="name-user">
                <strong>Barry Allen</strong>
                <span>@barryallen</span>
              </div>
            </div>
            {/* <!--reviews------> */}
            <div className="reviews">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          {/* <!--Comments----------------------------------------> */}
          <div className="client-comment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, quaerat quis? Provident temporibus architecto
              asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
              tenetur voluptates incidunt blanditiis sed atque cumque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
