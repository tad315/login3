import React, { useState } from 'react';
import './style.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div className="content">
            <div className="content-input">
                <div className="wrapper">
                    <h1>{isLogin ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}</h1>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" id="username" placeholder="Tên đăng nhập" required />
                            <i className="bx bxs user"></i>
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="password"
                                placeholder="Mật khẩu"
                                minLength="6"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        {!isLogin && (
                            <div className="input-field">
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Nhập lại mật khẩu"
                                    minLength="6"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                />
                                <i className="bx bxs-lock-alt"></i>
                            </div>
                        )}
                        <div className="sign-up">
                            <p>
                                {isLogin ? 'Bạn chưa có tài khoản ?' : 'Bạn đã có tài khoản ?'}
                            </p>
                            <div
                                className="btn-sign-up"
                                onClick={toggleForm}
                                role="button"
                            >
                                <h4>{isLogin ? 'Đăng ký' : 'Đăng nhập'}</h4>
                            </div>
                        </div>
                        <button type="submit" className="login">
                            <h4>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</h4>
                        </button>
                    </form>
                </div>
            </div>
            <div className="content-img">
                <div className="logomain1">
                    <p className="title1">WELCOME!</p>
                    <p className="we-text">WE ARE</p> <span className="ITIS-text">ITIS</span>
                    <p className="title2">HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</p>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/b915/8cf1/91b30470d59cbab79920628b83dc3e05?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1iqMaEEF~62jOThNZ1bTl1VxhLektekULMvNxsscqhDwUjv~YBj6lXc3V~yK3TfhxKGnBDipocdEMDm-5Mahppi2zmXGv5VR6AkvNXsyCQUUXtSwTuIWDmzbutlafRywHdj23KERujRKXobKzRfLMmrS7~~0aaUeFethQYXZqHiEEPYJpGZpmwz4O0dV3VNdhY0S0GSbQytmNo6kWvtPi8uWCeiIgOVQqxss~v6UHEtjEhEf4sFri9z2rI3hLDH7sHxbuL45rgJ-9uM8JofYyXwlbJDqeObVdpwjHc8oMnrUtnSgO-SikeBdMzlTS52bT9akIuyJ6yfBzs8uCiufA__"
                        className="hidden"
                        alt="ITIS Logo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Auth;
