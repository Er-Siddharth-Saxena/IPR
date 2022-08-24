import React from "react";
import { useLoginStore } from "../../stores/stores";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Register = ()=>{
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
  const [noOfInventors, setNoOfInventors] = React.useState(1);
  // const [inventors, setInventors] = React.useState<{name:string, designation:string, address:string, email:string, phone:string}[]>([{name:"", designation:"", address:"", email:"", phone:""}, {name:"", designation:"", address:"", email:"", phone:""}, {name:"", designation:"", address:"", email:"", phone:""}, {name:"", designation:"", address:"", email:"", phone:""}, {name:"", designation:"", address:"", email:"", phone:""}]);

  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
            Register for Patent
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
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
            <textarea
              id="address"
              name="address"
              autoComplete="address"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="000-000-0000"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="noOfInventors">Number of inventors</label>
            <input

              id="noOfInventors"
              name="noOfInventors"
              type="number"
              autoComplete="noOfInventors"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Number of inventors"
              value={noOfInventors}
              onChange={(e) => setNoOfInventors(parseInt(e.target.value))}
              max={5}
              min={1}
              />
          </div>
          
          
          <div>
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
  )
}

const RegisterForPatent = () => {
  const [value, setValue] = React.useState('1');

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
      <TabPanel value="1"><Register/></TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
    </TabContext>
  );
};

export default RegisterForPatent;
