
const Promotion = () => {
    return (
        <div className=" flex m-2">
            <div className="relative w-2/3 me-5 h-96 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <p className="text-3xl font-bold">Скидки</p>
                    <p className="text-4xl font-extrabold">до 50%</p>
                </div>
                <p className="text-lg mb-5 w-60">
                    Огромный выбор книг по сниженным ценам! Не упустите возможность пополнить свою коллекцию.
                </p>
            
                <p className="text-indigo-200 underline cursor-pointer mb-16">Узнать больше</p>
                <p className="text-sm text-indigo-300">Подробности можно узнать в условиях акции</p>
            
                <img
                    src="/img/shoping-cart.svg"
                    alt="shopping-cart"
                    className="absolute bottom-0 right-0 object-contain"
                />
            </div>

            <div className="w-1/3 h-96 relative bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <p className="text-2xl font-bold">Эксклюзивный бонус</p>
                    <p className="text-3xl font-extrabold">для зарегистрированных</p>
                </div>
                <p className="text-lg mb-4">Зарегистрируйтесь сегодня и получите 10% скидку на первую покупку!</p>
                <p className="text-white underline cursor-pointer mb-1">Зарегистрироваться</p>
                <p className="text-sm text-white w-56">Бонус автоматически активируется после регистрации.</p>
                <p className="text-sm text-indigo-300 mt-14">Подробности можно узнать в условиях акции</p>
            </div>

        </div>

    )

}

export default Promotion