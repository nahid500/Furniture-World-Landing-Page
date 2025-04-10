import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"


const Categories = () => {
return (

    <div className="bg-gray-200 px-12">
        <h1 className=" bg-neutral-600 text-white text-5xl text-center rounded-b-full py-5"> Categories</h1>
        
        <div className=" flex text-center justify-evenly gap-5 py-5 text-3xl text-orange-900">

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={c1} alt="c1" />
                <p>Sofas</p>
            </div>
            
            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={c2} alt="c1" />
                <p>Beds</p>
            </div>
                
            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={c3} alt="c1" />
                <p>Dining Tables</p>
            </div>

            <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={c4} alt="c1" />
                <p>Lights</p>
            </div>
        
        </div>
        
        
        
    </div>
)
}

export default Categories