const CreateEventForm = () => {
  return (
    <div className="landingpage w-full eventheight max-w-sm max-h-sm flex flex-col justify-start p-1 rounded-md lg:w-1/2">
      <section className="">
        <form className="flex flex-col p-1 gap-8">
          <input
            type="text"
            className="p-2 border-2 outline-none rounded-md"
            required
            placeholder="Event Name"
          />
          <input
            type="text"
            className="p-2 border-2 outline-none rounded-md"
            required
            placeholder="Host Name"
          />
          <input
            type="date"
            className="p-2 border-2 outline-none rounded-md ml-1"
            required
            placeholder="Start"
          />
          <div className="flex gap-2 justify-between md:flex-col md:text-xl">
            <div className="flex justify-between items-center outline-none">
              <label htmlFor="" className="text-sm md:text-lg">
                Start time:
              </label>
              <input
                type="time"
                className="p-2 border-2 outline-none rounded-md ml-1"
                required
                placeholder="Start"
              />
            </div>
            <div className="flex justify-between items-center outline-none">
              <label htmlFor="" className="text-sm md:text-lg">
                End time:
              </label>
              <input
                type="time"
                className="p-2 border-2 outline-none rounded-md ml-1"
                required
                placeholder="Start"
              />
            </div>
          </div>
          <button className="btn md:w-2/3 md:m-auto md:py-2 mt-4 mb-4 text-xl lg:text-lg md:text-base rounded-lg p-2 px-12 md:px-2 text-white font-bold">
            Add Your Event
          </button>
        </form>
      </section>
    </div>
  );
};

export { CreateEventForm };
