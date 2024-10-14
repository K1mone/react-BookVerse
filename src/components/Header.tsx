import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full p-6 bg-gray-900 text-white">
            <div className="flex items-center">
                <div className="flex space-x-2 text-2xl font-bold pe-10 mb-0.5">
                    <p className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">Book</p>
                    <p className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Verse</p>
                </div>

                <div className="flex space-x-2 items-center cursor-pointer hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors duration-300">
                    <p className="text-lg">Каталог</p>
                    <Menu className="w-6 h-6 text-gray-300 mt-0.5" />
                </div>
            </div>

            <div className="flex flex-grow justify-center items-center mx-4">
                <input
                    type="text"
                    placeholder="Поиск"
                    className="bg-gray-700 text-white rounded-lg px-4 py-2 w-full max-w-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 ml-2" />
            </div>

            <div className="flex space-x-10 items-center">
                <li className="flex flex-col items-center cursor-pointer hover:text-purple-500 transition-colors duration-300">
                    <Heart className='w-5 h-5' />
                    <p className="text-sm">Избранные</p>
                </li>

                <li className="flex flex-col items-center cursor-pointer hover:text-purple-500 transition-colors duration-300">
                    <ShoppingCart className='w-5 h-5' />
                    <p className="text-sm">Корзина</p>
                </li>

                <li className="flex flex-col items-center cursor-pointer hover:text-purple-500 transition-colors duration-300">
                    <LibraryBig className='w-5 h-5' />
                    <p className="text-sm">Мои книги</p>
                </li>

                <li className="flex flex-col items-center cursor-pointer hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors duration-300">
                    <CircleUserRound className='w-5 h-5' />
                    <p className="text-sm">Вход</p>
                </li>
            </div>
        </div>
    );
}

export default Header;
