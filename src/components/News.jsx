    import React from 'react';
    import q1 from "../images/q1.png";

    const News = () => {
    return (
        <div className=" bg-slate-50 px-8 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">Latest Updates</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>

        {/* Flex container: Image + News Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
            
            {/* Image Section */}
            <div className="flex-1">
            <img src={q1} alt="Latest Updates" className="rounded-xl shadow-lg w-full" />
            </div>

            {/* News Items Section */}
            <div className="flex-1 flex flex-col gap-6">

            {/* News Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-2">Mega Summer Sale Coming Soon!</h2>
                <p className="text-gray-600">
                Don’t miss out on our massive summer sale with discounts up to 50% across all categories.
                </p>
            </div>

            {/* News Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-2">New Furniture Collection Launch</h2>
                <p className="text-gray-600">
                We are excited to announce our brand-new luxury furniture collection, available from next month!
                </p>
            </div>

            
            
            {/* News Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h2 className="text-2xl font-semibold mb-2">Mega Summer Sale Coming Soon!</h2>
                <p className="text-gray-600">
                Don’t miss out on our massive summer sale with discounts up to 50% across all categories.
                </p>
            </div>

            </div>
        </div>
        </div>
    );
    };

    export default News;
