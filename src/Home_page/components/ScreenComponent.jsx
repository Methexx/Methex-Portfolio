import React from 'react';
import './ScreenComponent.css'; // Create this CSS file for the styles

const ScreenComponent = () => {
  return (
    <div className="mhn-switch">
      <label htmlFor="switch" className="label">My Screen</label>
      <input id="switch" type="checkbox" className="toggle" />
      <label htmlFor="switch" className="switch">&nbsp;</label>

      <div className="social-media-wrap">
        <div className="social-media">
          <div className="social-dot-wrap">
            <span className="social-dot"></span>
            <span className="social-dot"></span>
            <span className="social-dot"></span>
            <span className="social-dot"></span>
          </div>
          <div className="social-media-lnk-wrap">
            <a href="https://pinterest.com/khadkamhn/" target="_blank" rel="noopener noreferrer" className="social-media-lnk">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="https://facebook.com/khadkamhn/" target="_blank" rel="noopener noreferrer" className="social-media-lnk">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/khadkamhn/" target="_blank" rel="noopener noreferrer" className="social-media-lnk">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="social-media-lnk">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="lamp">
          <div className="lamp-top">
            <div className="back"></div>
            <div className="light"></div>
          </div>
          <div className="lamp-stand"></div>
          <div className="lamp-bottom"></div>
        </div>
        <div className="designer">
          <div className="head">
            <div className="hair"><div className="hair-dtl"></div></div>
            <div className="face">
              <div className="face-dtl">
                <div className="eye lt"></div>
                <div className="eye rt"></div>
              </div>
            </div>
            <div className="ears"></div>
            <div className="neck"></div>
          </div>
          <div className="head-phone"></div>
          <div className="laptop">
            <a href="https://codepen.io/khadkamhn/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
            <div className="fingers">
              <div className="figers-dtl"></div>
              <div className="figers-dtl"></div>
              <div className="figers-dtl"></div>
              <div className="figers-dtl"></div>
            </div>
            <div className="screen">
              <div className="browser">
                <div className="browser-head clearfix">
                  <div className="pull-left">
                    <span className="win-btn win-red"></span>
                    <span className="win-btn win-yel"></span>
                    <span className="win-btn win-gre"></span>
                  </div>
                </div>
                <div className="browser-body">
                  <div className="codepen-head clearfix">
                    <div className="codepen-logo pull-left">C <i className="fa fa-codepen"></i> DEPEN</div>
                    <div className="pull-right">
                      <form className="codepen-btn" action="https://codepen.io/pen/define" method="POST" target="_blank" onClick={(e) => e.currentTarget.submit()}>
                        <i className="fa fa-cloud"></i> Save
                        <input type="hidden" name="data" value='{"title":"Mohan Khadka","html":"<img src=\"http://s.gravatar.com/avatar/d20a97c43d5b71cae939da56a5cc8c59?s=128\">\n Hi, It&#39;s me Mohan from Kapilvastu. I&#39;m a web and graphics designer. Designing is my passion and I am still learning and developing my skills on graphics designing and coding. I have been working on various designing projects.","css":"body{\n margin:0;\n padding:50px;\n text-align:center;\n color:#eee;\n background:teal;\n font:300 18px/24px Roboto, sans-serif;\n}\n img{\n margin:auto;\n display:block;\n border-radius:50%;\n border:1px solid #eee;\n padding:10px;\n }","js":" "}' />
                      </form>
                      <span className="codepen-btn"><i className="fa fa-cog"></i> Setting</span>
                    </div>
                  </div>
                  <div className="codepen-new-pen clearfix">
                    <div className="col">
                      <div className="sec">
                        <div className="title clearfix">
                          <div className="pull-left"><span className="codepen-btn"><i className="fa fa-cog"></i></span> HTML</div>
                          <div className="pull-right"><span className="codepen-btn">Tidy</span> <span className="codepen-btn"><i className="fa fa-times"></i></span></div>
                        </div>
                      </div>
                      <div className="sec">
                        <div className="title clearfix">
                          <div className="pull-left"><span className="codepen-btn"><i className="fa fa-cog"></i></span> CSS</div>
                          <div className="pull-right"><span className="codepen-btn">Tidy</span> <span className="codepen-btn"><i className="fa fa-times"></i></span></div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <span className="text">This is my new pen :D</span>
                      <img src="http://s.gravatar.com/avatar/d20a97c43d5b71cae939da56a5cc8c59?s=50" alt="@khadkamhn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coffee">
          <div className="vapour">
            <div className="vapour-dtl">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="vapour-dtl">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="vapour-dtl">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="cup"></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenComponent;