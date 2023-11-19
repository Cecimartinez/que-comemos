export const IngredientsItems = ({ingredient, cant, img}) => {
  return (
    <div className="flex mb-2 text-lg  items-center justify-between text-neutral-600  ">
      <img className="w-10 h-10 rounded-full " src={img} />
      <p className="text-gray-500">{ingredient} </p>
      <p className="font-normal">{cant}</p>
    </div>
  )
}