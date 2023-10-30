export const IngredientsItems = ({ingredient, cant, img}) => {
  return (
    <div className="ingredients-items flex mb-5 text-lg  items-center justify-between text-neutral-600  ">
      <img className="w-16 h-16 rounded-full " src={img} />
      <p>{ingredient} </p>
      <p className="font-normal">{cant}</p>
    </div>
  )
}