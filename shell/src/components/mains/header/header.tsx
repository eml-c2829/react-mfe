import './header.css';
import logo from '../../../assets/react.svg';
import { logout } from '../../../core/states/authentication-slice';
import { useDispatch } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center p-6 bg-primary-color">
            <div className="flex space-x-4 items-center">
                <img src={logo} alt="Logo" className="h-8 w-8" />
                <span className="text-white">
                    Online — Global Admin Centre - User Lifecycle
                </span>
            </div>

            <div className="flex space-x-6">
                <button className="p-3 bg-gray-600 rounded-4xl">
                    <span className="text-white">Settings</span>
                </button>
                <div className="flex bg-gray-600 items-center space-x-4 p-3 rounded-2xl">
                    <span>John Smith (GAC-Admin)</span>
                    <button className="w-10 h-6 rounded-4xl bg-blue-400"
                        onClick={() => dispatch(logout())}>Exit</button>
                </div>
            </div>
        </div>
    );
}
