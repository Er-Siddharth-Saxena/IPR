import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const Trademark = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel_1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const faqTrademark = [
    {
      question: "What is a trademark?",

      answer:
        "A trademark (popularly known as brand name) in layman’s language is a visual symbol which may be a word signature, name, device, label, numerals or combination of colours used by one undertaking on goods or services or other articles of commerce to distinguish it from other similar goods or services originating from a different undertaking. The legal requirements to register a trademark under the Act are: •		The selected mark should be capable of being represented graphically (that is in the paper form). •		It should be capable of distinguishing the goods or services of one undertaking from those of others. •		It should be used or proposed to be used mark in relation to goods or services for the purpose of indicating or so as to indicate a connection in the course of trade between the goods or services and some person have the right to use the mark with or without identity of that person.",
    },

    {
      question: "How to select a good trademark?",

      answer:
        "If it is a word it should be easy to speak, spell and remember. The best trademarks are invented words or coined words or unique geometrical designs. Please avoid selection of a geographical name, common personal name or surname. No one can have monopoly right on it. Avoid adopting laudatory word or words that describe the quality of goods (such as best, perfect, super etc.) It is advisable to conduct a market survey to ascertain if same/similar mark is used in market.",
    },

    {
      question: "What is the function of a trademark?",

      answer:
        "Under modern business condition a trademark performs four functions •		It identifies the goods / or services and its origin. •		It guarantees its unchanged quality •		It advertises the goods/services •		It creates an image for the goods/ services. ",
    },

    {
      question: "Who can apply for a trademark and how?",

      answer:
        "Any person, claiming to be the proprietor of a trademark used or proposed to be used by him, may apply in writing in prescribed manner for registration. The application should contain the trademark, the goods/services, name and address of applicant and agent (if any) with power of attorney, the period of use of the mark. The application should be in English or Hindi. It should be filed at the appropriate office. The applications can be submitted personally at the Front Office Counter of the respective office or can be sent by post. These can also be filed on line through the e-filing gateway available at the official website.",
    },

    {
      question: "What are different types of trademarks that may be registered in India?",

      answer:
        "•		Any name (including personal or surname of the applicant or predecessor in business or the signature of the person), which is not unusual for trade to adopt as a mark. •		An invented word or any arbitrary dictionary word or words, not being directly descriptive of the character or quality of the goods/service. •		Letters or numerals or any combination thereof. •		The right to proprietorship of a trademark may be acquired by either registration under the Act or by use in relation to particular goods or service. •		Devices, including fancy devices or symbols •		Monograms •		Combination of colors or even a single color in combination with a word or device •		Shape of goods or their packaging •		Marks constituting a 3- dimensional sign. •		Sound marks when represented in conventional notation or described in words by being graphically represented",
    },

    {
      question: "Who benefits from a trademark?",

      answer:
        "The Registered Proprietor of a trademark can create establish and protect the goodwill of his products or services, he can stop other traders from unlawfully using his trademark, sue for damages and secure destruction of infringing goods and or labels. The Government earns revenue as a fee for registration and protection of registration of trademarks The Legal professionals render services to the entrepreneurs regarding selection registration and protection of trademarks and get remunerations for the same The Purchaser and ultimately Consumers of goods and services get options to choose the best.",
    },

    {
      question: "What are the benefits of registering a trademark?",

      answer:
        "The registration of a trademark confers upon the owner the exclusive right to the use the trademark in relation to the goods or services in respect of which the mark is registered and to indicate so by using the symbol (R), and seek the relief of infringement in appropriate courts in the country. The exclusive right is however subject to any conditions entered on the register such as limitation of area of use etc. Also, where two or more persons have registered identical or nearly similar marks due to special circumstances, such exclusive right does not operate against each other.",
    },

    {
      question: "What are the formalities and government fees for major trademark transactions ?",

      answer:
        "For filing new applications there are prescribed forms depending on the nature of application such as Form TM-1, TM-2, TM-3, TM-8, TM-51 etc. Fees: Rs.4000/. To file a Notice of Opposition to oppose an application published in the Trade Marks Journal (FormTM-5). Fees: Rs. 2,500/- for each class covered •		For Renewal of a Regd. trademark (Form TM-12 ). Fees: Rs.5,000/- •		Surcharge for belated renewal (Form TM-10).Fees: Rs. 3,000/- •		Restoration of removed mark (Form TM-13) Fees: 5,000/- •		Application for rectification of a registered trademark (Form TM-26) Fees: Rs. 3,000/- •		Legal Certificate (Form TM-46) (Providing details of entries in the Register) Fees: Rs.500/- •		Copyright search request and issuance of certificate (Form TM-60) Fees: Rs, 5,000/-.",
    },

    {
      question: "What are the sources of trademark laws?",

      answer:
        "•	The national statues i.e., the Trade Marks Act, 1999 and rules made thereunder . •	International multilateral convention. •	National bilateral treaty. •	Regional treaty. •	Decision of the courts. •	Office practice reduced in Manuals and guidelines and rulings of the Courts •	Decision of Intellectual Property Appellate Board. •	Text books written by academician and professional experts.",
    },

    {
      question: "What does the Register of trademark contain?",
      answer:
        "The register of trademark currently maintained in electronic form contains inter alia the trademark the class and goods/ services in respect of which it is registered including particulars affecting the scope of registration of rights conferred; the address of the proprietors; particulars of trade or other description of the proprietor; the convention application date (if applicable); where a trademark has been registered with the consent of proprietor of an earlier mark or earlier rights, that fact.",
    },
    {
      question: "Can any correction be made in the application or register?",
      answer: "But the basic principle is that the trademark applied for should not be substantially altered affecting its identity. Subject to this changes are permissible according to rules detailed in the subordinate legislation."
    },
    {
      question: "Can a registered trademark be removed from the register?",
      answer: "It can be removed on application to the Registrar on prescribed form on the ground that the mark is wrongly remaining on the register. The Registrar also can suo moto issue Notice for removal of a registered trademark?"
    }
  ];

  return (
    <div className="">
      {faqTrademark.map((item: any, index) => {
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
export default Trademark;
