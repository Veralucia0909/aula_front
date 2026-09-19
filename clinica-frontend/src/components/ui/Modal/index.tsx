import  {Children, type ReactNode} from "react"


interface ModalProps{
    isOpen:boolean
    onClose:()=>Void
    children:ReactNode

}

const Modal = ({isOpen,onClose,Children}:ModalProps)=>{
if(!isOpen){
    return null
}
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blak/50">
    <div className="bg-white rounder-xl shadow-lg e-full max-w-md p-6 relative">
     {/* botão de fechar */}
     <button
     type="button"
     onClick={onClose}
     className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
     >
        x
     </button>

     {/* conteudo do Modal */}
     {Children}
    </div> 


    </div> 

)


}





export default Modal