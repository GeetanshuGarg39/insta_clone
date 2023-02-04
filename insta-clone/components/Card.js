const Card = (props) => {
  return (
    <div className = " border-box w-1/4  border bg-white border-slate-300 flex flex-col items-center justify-center px-11 py-7 my-3">
      {props.children}
    </div>
  )
}

export default Card
