import React from "react";
import { useLoginStore } from "../../stores/stores";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  const user = useLoginStore((state) => state.user);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("fafklj");
  };

  const [name, setName] = React.useState(`${user.firstName} ${user.lastName}`);
  const [email, setEmail] = React.useState(user.email);
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [invention, setInvention] = React.useState("");
  const [inventors, setInventors] = React.useState([
    { name: "", designation: "", address: "", phone: "", email: "" },
  ]);
  const [description, setDescription] = React.useState("");
  const [novelFeatures, setNovelFeatures] = React.useState("");
  const [relationWithProcessOrProduct, setRelationWithProcessOrProduct] =
    React.useState("");
  const [advantages, setAdvantages] = React.useState("");
  const [experimentalData, setExperimentalData] = React.useState("");

  const addInventors = () => {
    setInventors([
      ...inventors,
      { name: "", designation: "", address: "", phone: "", email: "" },
    ]);
  };

  const removeInventors = (i: number) => {
    let newField: any = [...inventors];
    newField.splice(i, 1);
    setInventors(newField);
  };

  const handleChange = (i: number, e: any) => {
    let newField: any = [...inventors];
    newField[i][e.target.name] = e.target.value;
    setInventors(newField);
  };

  return (
    <div className="min-h-full flex  items-center justify-center">
      <div className="max-w-2xl w-full space-y-8 border-[1px] p-2 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            IPR Application Form
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:grid grid-flow-row grid-cols-2 gap-4"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              id="dob"
              name="dob"
              type="text"
              autoComplete="dob"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="DD/MM/YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              id="gender"
              name="gender"
              type="text"
              autoComplete="gender"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Male/Female/Prefer not to say"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone No</label>
            <input
              id="phone"
              name="phone"
              type="text"
              autoComplete="phone"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="000-000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              autoComplete="address"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="invention">Title of the invention</label>
            <input
              id="invention"
              name="invention"
              type="text"
              autoComplete="invention"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Title of the invention"
              value={invention}
              onChange={(e) => setInvention(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between items-center mt-4 col-span-2">
            <div>Inventors</div>
            <div onClick={addInventors} className="cursor-pointer">
              Add an inventor
              <AddIcon className="text-green-500" />
            </div>
          </div>
          {inventors.map((element, index) => {
            return (
              <div
                className="p-2 my-2 border-2 border-green-300 rounded-md"
                key={index}
              >
                <div className="flex flex-row justify-between">
                  <label>{`Inventor ${index + 1}`}</label>
                  <div>
                    {index ? (
                      <button
                        type="button"
                        className="flex flex-row cursor-pointer"
                        onClick={() => removeInventors(index)}
                      >
                        Remove
                        <CloseIcon className="text-red-600" />
                      </button>
                    ) : null}
                  </div>
                </div>
                <input
                  type="text"
                  name={`Inventor ${index + 1} Name`}
                  value={element.name}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Inventor Name"
                />
                <input
                  type="text"
                  name={`Designation ${index + 1} Name`}
                  value={element.email}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Designation"
                />
                <input
                  type="text"
                  name={`Address ${index + 1} Name`}
                  value={element.email}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                />
                <input
                  type="text"
                  name={`Phone ${index + 1} Name`}
                  value={element.phone}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name={`Email ${index + 1} Name`}
                  value={element.email}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            );
          })}
          {/* (a) Description of Invention:
 (b) Novel Features:
 (c) Whether the invention relates to a process/product/both?
 (d)What are the advantages of the present invention over the comparable inventions?
 (e) Has the invention been tested experimentally? Are experimental data available? */}

          <div className="flex flex-row justify-between items-center mt-4 col-span-2">
            <div>Details regarding invention</div>
          </div>
          <div className="col-span-1">
            <textarea
              id="Description"
              name="Description"
              autoComplete="Description"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="novelFeatures"
              name="novelFeatures"
              autoComplete="novelFeatures"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Novel Features"
              value={novelFeatures}
              onChange={(e) => setNovelFeatures(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="relationWithProcessOrProduct"
              name="relationWithProcessOrProduct"
              autoComplete="relationWithProcessOrProduct"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Relation With Process Or Product"
              value={relationWithProcessOrProduct}
              onChange={(e) => setRelationWithProcessOrProduct(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="advantages"
              name="advantages"
              autoComplete="advantages"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Advantages"
              value={advantages}
              onChange={(e) => setAdvantages(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="experimentalData"
              name="experimentalData"
              autoComplete="experimentalData"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Experimental Data"
              value={experimentalData}
              onChange={(e) => setExperimentalData(e.target.value)}
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="group mt-4 relative w-full flex justify-center py-2 px-4 border-transparent text-s font-medium rounded-md text-white border-[#B8B8B8] border-[1px] bg-[#00D100] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterForPatent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Register" value="1" />
          <Tab label="Check Staus of the application" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Register />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
    </TabContext>
  );
};

export default RegisterForPatent;
