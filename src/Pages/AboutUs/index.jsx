const AboutUs = () => {
  return (
    <section className="main_wrapper_faq">
      <ul className="wrapper_faq">
        <li className="box_faq">
          <div className="wrapper_question" data-status="close">
            <h3 className="question_faq">How do I create a team?</h3>
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
          </div>
          <p className="answer_faq">
            You must click the create team button and then navigate yourself in
            the section of that page where it have multiple of character that
            you can choose.
          </p>
        </li>
        <li className="box_faq">
          <div className="wrapper_question" data-status="close">
            <h3 className="question_faq">Can I create a character?</h3>
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
          </div>
          <p className="answer_faq">
            No you cant create a character in this app because it does not have
            a functionality of creating a character for harry potter.
          </p>
        </li>
        <li className="box_faq">
          <div className="wrapper_question " data-status="close">
            <h3 className="question_faq">DOes this cause any fee?</h3>
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
          </div>
          <p className="answer_faq">
            No it doesnt cost a cent. It is completely free. User just need to
            install the app and then your good to go.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
