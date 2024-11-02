type IToggleButton = {
    isActive: boolean;
    onClick: () => void;
    label: string;
};

function ToggleButton({isActive, onClick, label}: IToggleButton) {
    return (
        <span
            onClick={onClick}
            className={`px-2 py-1 rounded cursor-pointer ${isActive ? 'bg-blue-500 text-white' : ''}`}
        >
        {label}
    </span>
    );
}

export default ToggleButton;