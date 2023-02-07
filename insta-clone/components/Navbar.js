import { useState } from "react"

const Navbar = () => {
  const[showMenubar,setShowMenubar] = useState(false);
  return (
    <>
    <div className=" p-5 w-1/6 shadow h-screen fixed">
      <img src = "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png " className=' h-16 w-28 ' ></img>
      <div className="flex flex-col">
      <a href="" className=" my-4 h-6 flex items-center"><img src = "https://cdn-icons-png.flaticon.com/512/60/60817.png" className="h-full w-6 mr-1"></img> Home </a>
      <a href="" className=" my-4 h-6 flex items-center"><img src="https://static.thenounproject.com/png/1020835-200.png" className="h-full w-6 mr-1"></img> Search</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src = "https://icons.veryicon.com/png/o/miscellaneous/ios9/explore-icon.png" className="h-full w-6 mr-1"></img> Explore</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src="https://cdn5.vectorstock.com/i/1000x1000/50/04/instagramm-reels-icon-line-vector-33125004.jpg" className="h-full w-6 mr-1"></img> Reels</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7X04am9pLYHPmWfSTbygrzd9o47oMranig&usqp=CAU"className="h-full w-6 mr-1"></img> Messages</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src = "https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png"className="h-full w-6 mr-1"></img> Notifications</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMTX2DkvETv8Beb3YSthNA_5zuByuYOI_Cg&usqp=CAU"className="h-full w-6 mr-1"></img> Create</a>
      <a href="" className=" my-4 h-6 flex items-center"><img src=""className="h-full"></img>Profile</a>
      </div>
    <div className={showMenubar ? "drop-shadow-xl bottom-20 bg-white absolute w-64" : "hidden"} >
      <a href="" className=" m-4 h-7 flex items-center justify-between">Settings<img src = "" className="h-full w-6 mr-1 "></img></a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Saved<img src= "" className="h-full w-6 mr-1"></img> </a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Switch appearance<img src="" className="h-full w-6 mr-1"></img></a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Your activity<img src= "" className="h-full w-6 mr-1"></img></a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Report a Problem<img src="" className="h-full w-6 mr-1"></img> </a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Switch Accounts<img src ="" className="h-full w-6 mr-1"></img> </a>
      <a href="" className=" m-4 h-7 flex items-center justify-between">Logout<img src ="" className="h-full w-6 mr-1"></img></a>
    </div>

    <div className= "absolute bottom-7" >
      <a className=" flex items-center" onClick={() => setShowMenubar(!showMenubar)}><img src="https://cdn-icons-png.flaticon.com/512/2311/2311531.png" className="h-full w-8 mr-1  "></img>More</a>
    </div>
    </div>
    </>
  )
  
}

export default Navbar