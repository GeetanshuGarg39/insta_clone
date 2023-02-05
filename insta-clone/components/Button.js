
export default function Button(props) {
  return (
    <button className=" bg-blue-400 text-center py-2 w-full text-white text-lg font-semibold rounded-md hover:bg-blue-600 active:bg-blue-400 m-2" type={props.type}>{props.children}</button>
  )
}
