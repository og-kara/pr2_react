import s from './Header.module.css';
export function Header() {
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <div className={s.nav}>
                        <a href="#" className={s.active}>О нас</a>
                        <a href="#">Каталог</a>
                        <a href="#">Где нас найти</a>
                    </div>
                    <img src="/avtotorgLogo.png" alt="logo" className={s.logo} />
                    <div className={s.btns}>
                        <button className={s.regBtn}>Регистрация</button>
                        <button className='btn'>Вход</button>
                    </div>
                </div>
            </div>
        </header>
    )
}