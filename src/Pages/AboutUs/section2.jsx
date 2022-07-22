import "./secstyle.css";

const Review = () => {
  return (
    <section className="service__faq">
      <div className="column">
        <div className="row justify-content-center">
          <div className="service__faq__wrapper">
            <span className="service__faq__wrapper__circle">?</span>
            <h3 className="service__faq__wrapper__title">
              FAQ: Harry Potter Almanac
            </h3>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="row">
          <div className="col-md-4 faq__wrapper__inner">
            <p>
              <h4 className="service__faq__q">
                <span className="faq__first-letter">Q:&nbsp;</span>What should
                we do if we are thinking to uninstall the app?
              </h4>
            </p>
            <p className="service__faq__a">
              <span className="faq__first-letter">A:&nbsp;</span>If you're
              serious about admiring the greatness of Harry Potter then you
              definitely shouldnt uninstall this app because this app gives you
              the spirit to learn about harry potter characters more.
            </p>
          </div>

          <div className="col-md-4 faq__wrapper__inner">
            <h4 className="service__faq__q">
              <span className="faq__first-letter">Q:&nbsp;</span>When is the
              best time to use this app?
            </h4>
            <p className="service__faq__a">
              <span className="faq__first-letter">A:&nbsp;</span>You basically
              can use this app whenever you want and theres always a time for
              you to choose whether to spend your free time on this app to
              explore more about Harry Potter and the houses.
            </p>
          </div>

          <div className="col-md-4 faq__wrapper__inner">
            <h4 className="service__faq__q">
              <span className="faq__first-letter">Q:&nbsp;</span>How long will
              it take to build my desire team?
            </h4>
            <p className="service__faq__a">
              <span className="faq__first-letter">A:&nbsp;</span>
              It depends on the circumstances. How fast or slow you use this
              app, this app is not slow, who knows it will end up slow one day
              but it functions well so far.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
