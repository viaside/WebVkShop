import 'bootstrap/dist/css/bootstrap.min.css'

interface ModalProps{
    children: React.ReactNode
    title: number
    onClose: () => void
}

//create modals
export function Modal({onClose, children}: ModalProps) {

    const closeHandler = (event: React.MouseEvent) => {
        event.preventDefault()
        onClose()   
    }

    return (
        <div className='Modal'>
            <div className="text-dark modals p-2">
                <button className='CloseButton' onClick={closeHandler}><b>X</b></button>
                <div className='p-5'>{children}</div>
            </div>
        </div>
    )
}