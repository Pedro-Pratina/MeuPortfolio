import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { TbPlugConnectedX } from "react-icons/tb"

export function ToastForm({ t, erro, sucess, connect, mensagem}) {
  return (
      <div className={`w-85 min-w-85 h-23 p-3 px-4 flex relative overflow-hidden items-center gap-3 rounded-3xl bg-linear-to-br from-white ${sucess ? "to-emerald-100" : "to-red-100"} shadow-lg animate-fade-in`}>
        <div className={`min-w-9 min-h-9 z-1 flex items-center justify-center rounded-4xl ${sucess ? "bg-green-400/30" : "bg-red-500/30"}`}>
            { sucess ? <FaCheck className="text-emerald-600" size={18}/> : connect ? <TbPlugConnectedX className="text-red-600" size={18}/> : erro ? <FaX className="text-red-600" size={18}/> : null }
        </div>
        <div className="z-1 flex flex-col">
          <p className={sucess ? "font-bold text-emerald-600 text-base" : "font-bold text-red-600 text-base"} >Sucesso</p>
          <p className="text-gray-600">{mensagem}</p>
        </div>
      </div>
  );
}