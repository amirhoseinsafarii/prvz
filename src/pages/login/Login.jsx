import { useState } from "react";
import styles from "./Login.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import bualiimg from "../../assets/images/buali.png";
import shape from "../../assets/images/shape.png";
const Login = () => {
  const [isPassType, setIsPassType] = useState("password");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className={styles.login_container}>
      {/* right */}
      <div className={styles.login_right_container}>
        <img src={shape} className={styles.login_shape} />
        <div className={styles.login_card}>
          <div className={styles.login_img_container}>
            <div className={styles.login_circle}></div>
            <img src={bualiimg} className={styles.login_img_buali} />
          </div>
          <div className={styles.login_info_section}>
            <h2 className={styles.login_right_heading}>تور های جدید</h2>
            <p className={styles.login_paragraph}>
              بازدید ار دهکده تفریحی تاریخی گنجنامه و تپه های عباس‌آباد به همراه
              شام و نهارمدت زمان ۵ روزه می‌باشد.
            </p>
            <button className={styles.login_more_info_btn}>
              اطلاعات بیشتر
            </button>
          </div>
          <div className={styles.login_tor}>
            <div className={styles.login_tor_texts}>
              <span className={styles.login_tor_text1}>هزینه تور</span>
              <span className={styles.login_tor_text2}>350.000</span>
            </div>

            <div>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill="#F4F7FE" />
                <g clipPath="url(#clip0_318_5106)">
                  <path
                    d="M20.2844 24.3142H20.5581C21.6118 24.3142 22.4739 25.1763 22.4739 26.23V35.8088C22.4739 36.8624 21.6118 37.7245 20.5581 37.7245H20.2844C19.2307 37.7245 18.3687 36.8624 18.3687 35.8088V26.23C18.3687 25.1763 19.2307 24.3142 20.2844 24.3142ZM27.9475 18.5669C29.0011 18.5669 29.8632 19.429 29.8632 20.4827V35.8088C29.8632 36.8624 29.0011 37.7245 27.9475 37.7245C26.8938 37.7245 26.0317 36.8624 26.0317 35.8088V20.4827C26.0317 19.429 26.8938 18.5669 27.9475 18.5669ZM35.6105 29.5141C36.6642 29.5141 37.5263 30.3762 37.5263 31.4299V35.8088C37.5263 36.8624 36.6642 37.7245 35.6105 37.7245C34.5569 37.7245 33.6948 36.8624 33.6948 35.8088V31.4299C33.6948 30.3762 34.5569 29.5141 35.6105 29.5141Z"
                    fill="#1C4532"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_318_5106">
                    <rect
                      width="32.8417"
                      height="32.8417"
                      fill="white"
                      transform="translate(11.5264 11.7246)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* left */}
      <div className={styles.login_left_container}>
        <div className={styles.login_left}>
          <h1 className={styles.login_heading}>ورود</h1>
          <div>
            <span className={styles.login_text1}>حساب کاربری ندارید؟</span>
            <a className={styles.login_link} href="/signup">
              حساب بسازید
            </a>
          </div>
          <div className={styles.login_input_box}>
            <label className={styles.login_label}>ایمیل</label>
            <input type="email" className={styles.login_input} value={email} />
          </div>

          <div className={styles.login_input_box}>
            <label className={styles.login_label}>رمز عبور</label>
            <div className={styles.login_input}>
              <input
                type={isPassType ? "password" : "text"}
                value={password}
                className={styles.login_pass_input}
              />
              <div
                className={styles.login_pass_icon_container}
                onClick={() => setIsPassType(!isPassType)}
              >
                {isPassType ? (
                  <AiFillEye className={styles.login_pass_icon} />
                ) : (
                  <AiFillEyeInvisible className={styles.login_pass_icon} />
                )}
              </div>
            </div>
          </div>

          <div className={styles.login_forget}>
            <a className={styles.login_forget_text}>
              رمز عبور خود را فراموش کرده اید؟
            </a>
            <div>
              <input type="checkbox" />
              <span className={styles.login_check_label}>
                مرا به یاد داشته باش
              </span>
            </div>
          </div>

          <button className={styles.login_log_btn}>ورود</button>
          <div className={styles.login_Or_Section}>
            <div className={styles.login_Or_Line}> </div>
            <span className={styles.login_Or}>OR</span>
            <div className={styles.login_Or_Line}> </div>
          </div>
          <button className={styles.login_google_btn}>
            ورود با گوگل
            <FcGoogle className={styles.login_google_icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
