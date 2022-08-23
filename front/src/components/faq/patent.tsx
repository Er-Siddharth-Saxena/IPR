import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
  } from "@mui/material";

const Patent = () => {
    const [expanded, setExpanded] = React.useState<string | false>("panel_1");
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    const faqPatent = [
      {
        question: "What is a Patent?",
  
        answer:
          "Patent is a statutory right for an invention granted for a limited period of time to the patentee by the Government, in exchange of full disclosure of his invention for excluding others, from making, using, selling, importing the patented product or process for producing that product for those purposes without his consent.",
      },
  
      {
        question: "What is the term of a patent in the Indian system?",
  
        answer:
          "The term of every patent granted is 20 years from the date of filing of application. However, for application filed under national phase under Patent Cooperation Treaty (PCT), the term of patent will be 20 years from the international filing date accorded under PCT.",
      },
  
      {
        question: "Which Act governs the patent system in India?",
  
        answer:
          "The patent system in India is governed by the Patents Act, 1970 (No.39 of 1970) as amended by the Patents (Amendment) Act, 2005 and the Patents Rules, 2003. The Patent Rules are regularly amended in consonance with the changing environment, most recent being in 2016.",
      },
  
      {
        question: "Does Indian Patent give protection worldwide?",
  
        answer:
          "No. Patent protection is a territorial right and therefore it is effective only within the territory of India. There is no concept of global patent. However, filing an application in India enables the applicant to file a corresponding application for same invention in convention countries or under PCT, within or before expiry of twelve months from the filing date in India. Patents should be obtained in each country where the applicant requires protection of his invention.",
      },
  
      {
        question: "What can be patented?",
  
        answer:
          "An invention relating either to a product or process that is new, involving inventive step and capable of industrial application can be patented. However, it must not fall into the categories of inventions that are non- patentable under sections 3 and 4 of the Act.",
      },
  
      {
        question: "What are the criteria of patentability?",
  
        answer:
          "An invention is patentable subject matter if it meets the following criteria i) It should be novel. ii) It should have inventive step or it must be non-obvious iii) It should be capable of Industrial application. iv) It should not attract the provisions of section 3 and 4 of the Patents Act 1970.",
      },
  
      {
        question: "When should an application for a patent be filed?",
  
        answer:
          "An application for a patent can be filed at the earliest possible date and should not be delayed. An application filed with provisional specification, disclosing the essence of the nature of the invention helps to register the priority of the invention. Delay in filing an application may entail some risks such as (i) some other inventor might file a patent application on the said invention and (ii) there may be either an inadvertent publication of the invention by the inventor himself/herself or by others independently of him/her.",
      },
  
      {
        question:
          "Can any invention be patented after publication or display in the public exhibition?",
  
        answer:
          "Generally, an invention which has been either published or publicly displayed cannot be patented as such publication or public display leads to lack of novelty. However, under certain circumstances, the Patents Act provides a grace period of 12 months for filing of patent application from the date of its publication in a journal or its public display in an exhibition organised by the Government or disclosure before any learned society or published by applicant. The detailed conditions are provided under Chapter VI of the Act (Section 29-34).",
      },
  
      {
        question:
          "Does the Patent Office keep information of the invention secret?",
  
        answer:
          "Yes. All the patent applications are kept secret upto 18 months from the date of filing or priority date whichever is earlier and thereafter they are published in the Official Journal of the Patent Office which is published every week and also available on the IPO website. After its publication, public can inspect the documents and also may take the photocopy thereof on payment of the fee as prescribed.",
      },
  
      {
        question:
          "Where can one find the information relating to published/ granted patent application?",
        answer:
          "The information relating to the patent application is published in the Patent office Journal issued on every Friday. This is also available in electronic form on the website of the Patent Office, www.ipindia.gov.in",
      },
    ];
  
    return (
      <div className="">
        {faqPatent.map((item: any, index) => {
          return (
            <Accordion
              key={index + 1}
              expanded={expanded === `panel_${index + 1}`}
              onChange={handleChange(`panel_${index + 1}`)}
            >
              <AccordionSummary
                aria-controls={`panel_${index + 1}d-content`}
                id={`panel_${index + 1}d-header`}
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  };

export default Patent