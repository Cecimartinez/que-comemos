import { UserForm } from "../../pages/UserProfile/components/UserForm"

export const Modal = () => {
  return (
    <div className="bg-white flex justify-center w-full items-center mt-6  " >
      <button className="btn bg-[#B4C170] border-[#B4C170] text-white tracking-wide hover:bg-[#9ba75f] hover:border-[#9ba75f] " onClick={() => document.getElementById('my_modal_4').showModal()}>Editar Datos</button>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl bg-white text-neutral-800">
          <h3 className="font-medium text-lg">Actualizar datos personales</h3>
        <UserForm/>
          <div className="modal-action w-full">
            <form method="dialog w-full">
              <button className="btn border-0 shadow-lg bg-[#B4C170] text-white hover:bg-[#9ba75f] hover:border-[#9ba75f]">Actualizar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}