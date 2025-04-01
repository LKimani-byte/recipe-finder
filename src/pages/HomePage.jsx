import { Search } from "lucide-react";  

const HomePage = () => {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className="max max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2' ">
            <Search size={"24"} />
            <input
              type="text"
              placeholder="What do you want to cook today?"
              className="text-sm md:text-md grow"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st recipe */}
          <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
            <a href="#" className="relative h-32">
              <img
                src="public/istockphoto-1200381757-1024x1024.jpg public/istockphoto-1926883237-1024x1024.jpg public/istockphoto-1993030567-1024x1024.jpg public/istockphoto-2039788884-1024x1024.jpg public/istockphoto-518957784-1024x1024.jpg public/istockphoto-1187852342-1024x1024.jpg"
                alt="Recipe img"
                className="rounded-md w-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <Soup size={16} />
                4 Servings
              </div>

            </a>

          </div>

        </div>
      </div>
    </div>
  );
};
export default HomePage;