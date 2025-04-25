import './header.css';
import logo from '../assets/react.svg';

export default function Header() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-900">
            <div className="flex space-x-4 items-center">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <span className="text-white">
                    Online — Global Admin Centre - User Lifecycle
                </span>
            </div>

            <div className="flex space-x-6">
                <button className="p-2 bg-gray-600 rounded-4xl">
                    <span className="text-white">Settings</span>
                </button>
                <div className="flex bg-gray-600 items-center space-x-4 p-2 rounded-2xl">
                    <span>John Smith (GAC-Admin)</span>
                    <button className="w-5 h-5 rounded-4xl bg-blue-400"></button>
                </div>
            </div>
        </div>
    );
}
