import { useRef } from "react";

const inputFieldArr = [
  {
    title: "Image URL",
    placeholder: "Enter Image URL",
    name: "image",
  },
  {
    title: "Tourist Spot Name",
    placeholder: "Enter Tourist Spot Name",
    name: "tourists_spot_name",
  },
  {
    title: "Country Name",
    placeholder: "Enter Country Name",
    name: "country_name",
  },
  {
    title: "Short Description",
    placeholder: "Enter Short Description",
    name: "short_description",
  },
  {
    title: "Average Cost ($)",
    placeholder: "Enter Average Cost (e.g., 1000)",
    name: "average_cost",
  },
  {
    title: "Seasonality",
    placeholder: "Enter Seasonality (e.g., Summer, Winter)",
    name: "seasonality",
  },
  {
    title: "Travel Time (days)",
    placeholder: "Enter Travel Time (e.g., 7 days)",
    name: "travel_time",
  },
  {
    title: "Total Visitors Per Year",
    placeholder: "Enter Total Visitors Per Year (e.g., 10000)",
    name: "totalVisitorsPerYear",
  },
  {
    title: "User Name",
    placeholder: "Enter User Name",
    name: "user_name",
  },
  {
    title: "User Email",
    placeholder: "Enter User Email",
    name: "user_email",
  },
];

function AddTouristPage() {
  const formRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    if (
      isNaN(data.average_cost) ||
      isNaN(data.totalVisitorsPerYear) ||
      isNaN(data.travel_time)
    ) {
      alert("Please enter valid numbers");
      return;
    }
  }

  return (
    <main className="min-h-[calc(100svh-72px)] max-w-screen-lg mx-auto font-nunito">
      <h1 className="text-5xl font-bold text-center mb-10 border-b-4 border-title-underline w-fit mx-auto font-playfair pt-10">
        Add Tourist Spot
      </h1>

      <form
        className="md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-primary px-4"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {inputFieldArr.map((inputField, index) => (
          <div className="w-full space-y-2" key={index}>
            <label className="text-xl">{inputField.title}</label>
            <input
              type="text"
              className="w-full py-2 px-3 rounded-md outline-none text-lg border-2"
              placeholder={inputField.placeholder}
              name={inputField.name}
              required
            />
          </div>
        ))}

        <button className="px-4 py-2 mt-3 bg-detail-btn hover:bg-detail-btn-hover text-black text-xl font-semibold md:col-span-2 border-secondary border-2 duration-150 transition rounded-sm">
          Add Coffee
        </button>
      </form>
    </main>
  );
}

export default AddTouristPage;
