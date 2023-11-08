

const ExtraSections = () => {
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl font-extrabold mb-6 mt-12 text-blue-600">Local Food Sources Directory</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Grocery Stores:</h2>
                            <p>Store Name: Community Fresh Market</p>
                            <p>Location: 789 Elm Street, Anytown, USA</p>
                            <p>Operating Hours: Mon-Sat, 8:00 AM - 10:00 PM</p>
                            <p>Contact: (555) 123-4567</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Call Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Food Pantries:</h2>
                            <p>Pantry Name: Helping Hands Pantry</p>
                            <p>Location: 321 Hope Avenue, Your City, State</p>
                            <p>Distribution Times: Tuesdays and Thursdays, 10:00 AM - 2:00 PM</p>
                            <p>Contact: helpinghands@email.com</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Call Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Local Farms:</h2>
                            <p>Farm Name: Green Acres Farm</p>
                            <p>Location: 456 Harvest Lane, Springfield, IL</p>
                            <p>Offerings: Fresh vegetables, eggs, and honey</p>
                            <p>Contact: greenacresfarm@email.com</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Call Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Online Farmers Market:</h2>
                            <p>Website Name: FreshHarvest Market</p>
                            <p>Delivery Service: Yes</p>
                            <p>Product Selection: Fresh produce, artisanal bread, and organic dairy</p>
                            <p>Website: www.freshharvestmarket.com</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Call Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary bg-sky-500 text-white border-0">View More</button>
                </div>
            </div>
            <div>
                <h2 className="text-center text-4xl font-extrabold mb-6 mt-12 text-blue-600">Community Recipes and Tips</h2>
                <div className="md:flex gap-6">
                    <div className="card md:w-1/2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Reducing Food Waste with Creative Recipes</h2>
                            <p>One of the best ways to support sustainability is by reducing food waste. Share your creative recipes that use ingredients that might otherwise go to waste. Whether it is a surplus of ripe bananas for banana bread or a solution for using up leftover vegetables, your innovative recipes can inspire others to make the most of what is available. Do not forget to include tips on storage and preservation techniques to extend the lifespan of food items.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-sky-500 text-white border-0">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card md:w-1/2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Cooking on a Budget</h2>
                            <p>Cooking delicious, nutritious meals does not have to break the bank. Share your favorite budget-friendly recipes and cooking hacks that help community members make the most of their food resources. From affordable staple dishes to tips on buying in bulk and minimizing food costs, your insights can be a valuable resource for individuals and families looking to stretch their food budgets while enjoying tasty and healthy meals.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary bg-sky-500 text-white border-0">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSections;