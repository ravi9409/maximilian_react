import './TabButton.css';

function TabButton({ children }) {
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}

export default TabButton;