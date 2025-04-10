    import p1 from "../images/p1.png";
    import p2 from "../images/p2.png";
    import p3 from "../images/p3.png";

    const Products = () => {
    return (
        <div className="px-12 py-8">
        <h1 className="bg-neutral-600 text-white text-5xl text-center rounded-full p-4 mb-10">
            Best-Selling Products
        </h1>

        <div className="flex flex-wrap justify-center gap-10 text-orange-950">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 w-72 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={p1} alt="2-seater Leather Sofa" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4 ">2-seater Leather Sofa</h2>
            <p className="text-orange-800 text-lg mt-2">$2500 (12% off)</p>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 w-72 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={p2} alt="Wooden Chair" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">Wooden Chair</h2>
            <p className="text-orange-800 text-lg mt-2">$1200 (15% off)</p>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-5 w-72 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={p3} alt="Ceiling Hanging Lights" className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-4">Ceiling Hanging Lights</h2>
            <p className="text-orange-800 text-lg mt-2">$800 (10% off)</p>
            </div>
        </div>
        </div>
    );
    };

    export default Products;
