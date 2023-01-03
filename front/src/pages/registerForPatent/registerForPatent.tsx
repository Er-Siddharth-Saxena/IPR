import React, { useState, useEffect } from "react";
// import React from "react";
import { useLoginStore } from "../../stores/stores";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { service } from "../../core/apis/client/services/service";
import Divider from "@mui/material/Divider";
import MicNoneIcon from '@mui/icons-material/MicNone';
import MicOffIcon from '@mui/icons-material/MicOff';

const Register = () => {
  const user = useLoginStore((state) => state.user);
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
  const [possibleUses, setPossibleUses] = React.useState("");
  const [possibleEndUsers, setPossibleEndUsers] = React.useState("");
  const [potentialMarketibility, setPotentialMarketibility] =
    React.useState("");
  const [reportedAnywhere, setReportedAnywhere] = React.useState("");
  const [disclosedToAnybody, setDisclosedToAnybody] = React.useState("");
  const [commercialInterestShown, setCommercialInterestShown] =
    React.useState("");
  const [commercialInterest, setCommercialInterest] = React.useState("");
  const [developmentStage, setDevelopmentStage] = React.useState("");
  const [declarationAccepted, setDeclarationAccepted] = React.useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    location.reload()
  };

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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  name="name"
                  value={element.name}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Inventor Name"
                />
                <input
                  type="text"
                  name="designation"
                  value={element.designation}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Designation"
                />
                <input
                  type="text"
                  name="address"
                  value={element.address}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
                <input
                  type="text"
                  name="phone"
                  value={element.phone}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="email"
                  value={element.email}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            );
          })}

          <div className="flex flex-row justify-between items-center mt-4 col-span-2">
            <div>Details regarding invention</div>
          </div>
          <div className="col-span-1">
            <textarea
              id="Description"
              name="Description"
              autoComplete="Description"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Experimental Data"
              value={experimentalData}
              onChange={(e) => setExperimentalData(e.target.value)}
            />
          </div>

          <div className="flex flex-row justify-between items-center mt-4 col-span-2">
            <div> Economic potential</div>
          </div>
          <div className="col-span-1">
            <textarea
              id="possibleUses"
              name="possibleUses"
              autoComplete="possibleUses"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Possible Uses"
              value={possibleUses}
              onChange={(e) => setPossibleUses(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="possibleEndUsers"
              name="possibleEndUsers"
              autoComplete="possibleEndUsers"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Novel Features"
              value={possibleEndUsers}
              onChange={(e) => setPossibleEndUsers(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="potentialMarketibility"
              name="potentialMarketibility"
              autoComplete="potentialMarketibility"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Relation With Process Or Product"
              value={potentialMarketibility}
              onChange={(e) => setPotentialMarketibility(e.target.value)}
            />
          </div>

          <FormControl fullWidth className="col-span-2">
            <InputLabel id="hasReportedAnywhere">
              Has the work been reported / published / presented anywhere:
            </InputLabel>
            <Select
              labelId="hasReportedAnywhere"
              value={reportedAnywhere}
              label="Has the work been reported / published / presented anywhere:"
              onChange={(e) => setReportedAnywhere(e.target.value)}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="col-span-2">
            <InputLabel id="disclosedToAnybody">
              Has the invention been disclosed to industry representatives or
              third parties?{" "}
            </InputLabel>
            <Select
              labelId="disclosedToAnybody"
              value={disclosedToAnybody}
              label="Has the invention been disclosed to industry representatives or third parties? "
              onChange={(e) => setDisclosedToAnybody(e.target.value)}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="col-span-2">
            <InputLabel id="commercialInterestShown">
              Has any commercial interest been shown in it and of what nature?
            </InputLabel>
            <Select
              labelId="commercialInterestShown"
              value={commercialInterestShown}
              label="Has the invention been disclosed to industry representatives or third parties? "
              onChange={(e) => setCommercialInterestShown(e.target.value)}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>

          {commercialInterestShown === "Yes" && (
            <div className="col-span-2">
              <label id="commercialInterest"></label>
              <textarea
                id="commercialInterest"
                name="commercialInterest"
                autoComplete="commercialInterest"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Provide the details of companies and specific individuals and their titles regarding commercial interest:"
                value={commercialInterest}
                onChange={(e) => setCommercialInterest(e.target.value)}
              />
            </div>
          )}

          <FormControl fullWidth className="col-span-2">
            <InputLabel id="developmentStage">
              Current stage of development of the invention as it relates to its
              marketability
            </InputLabel>
            <Select
              labelId="developmentStage"
              value={developmentStage}
              label="Has the invention been disclosed to industry representatives or third parties? "
              onChange={(e) => setDevelopmentStage(e.target.value)}
            >
              <MenuItem
                value={"Embryonic (needs substantial work to bring market)"}
              >
                Embryonic (needs substantial work to bring market)
              </MenuItem>
              <MenuItem
                value={
                  "Partially developed (could be brought to market with significant investment)"
                }
              >
                Partially developed (could be brought to market with significant
                investment)
              </MenuItem>
              <MenuItem
                value={
                  "Off-the-shelf (could be brought to market with nominal investment)"
                }
              >
                Off-the-shelf (could be brought to market with nominal
                investment)
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="col-span-2">
            <div>
              Declaration: I/We hereby declare that all statements made herein
              of my/our own knowledge are true and I/We also undertake to abide
              by the rules and other conditions prescribed in the IPR guidelines
            </div>
            <Select
              labelId="declrationAccepted"
              value={declarationAccepted}
              label="Has the work been reported / published / presented anywhere:"
              onChange={(e) => setDeclarationAccepted(e.target.value)}
              placeholder="hello"
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl>

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

const Status = () => {
  const user = useLoginStore((state) => state.user);
  const [pendingApplications, setPendingApplications] = React.useState([]);

  React.useEffect(() => {
    service
      .fetchPendingApplications({ email: user.email })
      .then((res) => {
        setPendingApplications(res.data.pending);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);

  return (
    <div className="flex justify-center">
      <div className="xl:grid grid-cols-1 gap-4">
        <div className="flex flex-col break-words bg-white border-2 rounded shadow-md">

          <div className="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
            Pending Similarity Check
          </div>
          <div className="w-full p-6">
            <div className="text-gray-700">
              <div className="text-sm">
                You have {pendingApplications.length} pending application similarity check:
              </div>
              {pendingApplications.length > 0 ? (
                <div>
                  <div className="text-sm">
                    {pendingApplications.map((application: any, index) => {
                      return (
                        <div key={index} className = "my-2">
                          <div className="text-sm">
                            Application Id : {application.applicationId}
                          </div>
                          <div className="text-sm">Invention Name : {application.invention}</div>
                          {index !== pendingApplications.length - 1 && <Divider />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const microphone = new SpeechRecognition();

microphone.continuous = true;
microphone.interimResults = true;
microphone.lang = "en-US";


function VoiceToText() {

  const [isRecording, setisRecording] = useState(false);
  const [note, setNote] = useState<string>("");
  // eslint-disable-next-line
  const [notesStore, setnotesStore] = useState<any[string]>([]);

  const startRecordController = () => {
    if (isRecording) {
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };
  
    microphone.onresult = (event:any) => {
      const recordingResult = Array.from(event.results)
        .map((result:any) => result[0])
        .map((result:any) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event:any) => {
        console.log(event.error);
      };
    };
  };

  useEffect(() => {
    startRecordController();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);

  // const storeNote = () => {
  //   setnotesStore([...notesStore, note]);
  //   setNote("");
  //   };

  
  return (
    <div className="border-[1px]">
      <div>
        <div className="noteContainer border-[1px] border-solid border-green-50 min-h-16 m-5 p-5 rounded-lg">
          <h2>Record Voice here</h2>
          {isRecording ? <span><MicNoneIcon onClick={() => setisRecording((prevState) => !prevState)}/></span> : <span><MicOffIcon onClick={() => setisRecording((prevState) => !prevState)}/></span>}
          <p>{note}</p>
        </div>
        <div className="noteContainer">
          {notesStore.map((note:any) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </div>
  );
}



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
        <VoiceToText />
        <Register />
      </TabPanel>
      <TabPanel value="2">
        <Status />
      </TabPanel>
    </TabContext>
  );
};

export default RegisterForPatent;
