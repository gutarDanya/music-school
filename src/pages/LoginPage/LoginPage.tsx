import React, { useState } from "react";
import styles from './LoginPage.module.css';
import Overlay from "../../components/Overlay/Overlay.tsx";

const LoginPage = () => {

    const [isLogin, setIsLogin] = useState(false);

    const switchLoginRegistration = () => {
        setIsLogin(!isLogin)
        console.log(isLogin)
    }

    return (
        <Overlay>
            {/* login container */}
            <div className={styles.popup}>
                <form className={styles.container}>
                    <h2 className={styles.subHeader}>Войти</h2>
                    <input type='email' placeholder="email" className={styles.input} />
                    <input type='password' placeholder="пароль" className={styles.input} />
                    <div className={styles.confirmBox}>
                        <input type='checkbox' className={styles.checkbox} />
                        <p className={styles.info}>Запомнить меня</p>
                    </div>
                        <p className={styles.switchText} style={{marginTop: 'auto'}} onClick={switchLoginRegistration}>Ещё не зарегестрированы? &#8594;</p>
                        <button type='submit' className={styles.submitButton}>Войти</button>
                </form>

                {/* registration container */}
                <form className={styles.container}>
                    <h2 className={styles.subHeader} >Зарегистрироваться</h2>
                    <input type='email' placeholder="email" className={styles.input} />
                    <input type='text' placeholder="придумайте пароль" className={styles.input} />
                    <input type='text' placeholder="повторите пароль" className={styles.input} />
                    <div className={styles.confirmBox}>
                        <input type="checkbox" className={styles.checkbox} />
                        <a target="blank" href="#" className={styles.info}>согласен с условиями</a>
                    </div>
                        <p className={styles.switchText} onClick={switchLoginRegistration}>Уже зарегестрированы? &#8592;</p>
                        <button type='submit' className={styles.submitButton}>Зарегистрироваться</button>
                </form>
                {isLogin ? <div className={styles.shirmLogin} /> : <div className={styles.shirmRegistration} />}
            </div>
        </Overlay>
    )
}

export default LoginPage