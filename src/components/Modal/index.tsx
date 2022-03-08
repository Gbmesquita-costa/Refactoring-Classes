import { ReactNode, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface childrenWithProps {
  isOpen: boolean
  setIsOpen: () => void
  children: ReactNode
}

export function Modal({ isOpen, setIsOpen, children }: childrenWithProps) {

  const [modalstatus, setmodalstatus] = useState(isOpen)

  useEffect(() => {
    setmodalstatus(isOpen)
  }, [isOpen])

  return(
    <ReactModal
        shouldCloseOnOverlayClick={!false}
        isOpen={modalstatus}
        onRequestClose={setIsOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
  )
}
