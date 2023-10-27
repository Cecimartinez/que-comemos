import { UserForm } from "../../pages/UserProfile/components/UserForm"

export const Modal = () => {
  return (
    <div className="bg-white flex justify-center w-full items-center mt-6 " >
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn bg-[#B4C170] border-[#B4C170] text-white tracking-wide" onClick={() => document.getElementById('my_modal_4').showModal()}>Editar Datos</button>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl bg-white text-neutral-600">
          <h3 className="font-semibold text-neutral-500 text-lg">Actualizar datos personales</h3>
        <UserForm/>
          <div className="modal-action ">
            <form method="dialog">
              <button className="btn bg-[#B4C170] text-white ">Actualizar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}