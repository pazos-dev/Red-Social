import { Icon } from "@iconify/react";

export default function PublicInput() {
   return (
      <section className="overflow-y-auto border-b p-2 border-amber-100/50">
         <input type="text" placeholder="Escribe tu publicaicon..."
            value=""
            className="w-full p-2 rounded-2xl focus:outline-none placeholder-amber-200/50"
         />  
         <div className="flex gap-3 text-2xl">

         <Icon icon="mdi:images-outline" />
         <Icon icon="proicons:bullet-list" />
         <Icon icon="stash:gif" />
         <Icon icon="si:text-duotone" />
         
         </div>
    </section>
  )
}
