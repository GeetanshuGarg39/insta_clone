
export default function Button(props) {
  return (
    <button className=" bg-blue-400 text-center py-2 w-4/5 text-white text-lg font-semibold rounded-md hover:bg-blue-600 active:bg-blue-400 m-2">{props.children}</button>
  )
}
