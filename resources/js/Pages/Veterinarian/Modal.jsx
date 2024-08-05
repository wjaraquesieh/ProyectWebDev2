export default function VeterinarianModal ({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
                <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
                onClick={onClose}
                >
                &times;
                </button>
                {children}
                {/* <div className="mb-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 float-right"
                    onClick={onClose}
                >
                    Cerrar
                </button>
                </div> */}
            </div>
        </div>      
    );
}