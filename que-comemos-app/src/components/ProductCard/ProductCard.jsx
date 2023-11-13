export const ProductCard=()=>{
  return(
    
<div class="flex items-center justify-center  w-full pb-16  ">
    <div class="w-full p-4 b">
        <div class="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div class="prod-title">
                <p class="text-2xl font-bold text-gray-900 uppercase">
                    ¿Qué comemos? +
                </p>
                <p class="text-sm text-gray-400 uppercase">
                    Explorá una mejor experiencia con la versión premiun 
                </p>
            </div>
            <div class="prod-img my-1">
                <img src="././pesto.webp" class="object-cover object-center w-full"/>
            </div>
            <div class="grid gap-10 prod-info">

                <div class="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                    <p class="text-xl font-bold">
                      $ 1200 
                    </p>
                    <button class="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                        Lo quiero!
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}