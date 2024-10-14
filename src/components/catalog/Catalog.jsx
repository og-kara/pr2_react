import s from './Catalog.module.css';
export function Catalog() {
    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/card.jpg" alt="tovar" />
                    <h3>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h3>
                    <div className={s.card__inner}>
                        <p className={s.price}>335 ₽</p>
                        <button className='btn'>Добавить в корзину</button>
                    </div>
                </div>
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}