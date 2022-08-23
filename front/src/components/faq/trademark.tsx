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
        question: "What is a Copyright?",
  
        answer:
          "Copyright (or author’s right) is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.",
      },
  
      {
        question: "What can be protected using copyright?",
  
        answer:
          "Exhaustive lists of works covered by copyright are usually not to be found in legislation. Nonetheless, broadly speaking, works commonly protected by copyright throughout the world include: 1. literary works such as novels, poems, plays, reference works, newspaper articles; 2. computer programs, databases; 3. films, musical compositions, and choreography; 4. artistic works such as paintings, drawings, photographs, and sculpture; 5. architecture; and 6. advertisements, maps, and technical drawings. Copyright protection extends only to expressions, and not to ideas, procedures, methods of operation or mathematical concepts as such. Copyright may or may not be available for a number of objects such as titles, slogans, or logos, depending on whether they contain sufficient authorship",
      },
  
      {
        question: "What rights does copyright give me? What are my rights as author of a work?",
  
        answer:
          "There are two types of rights under copyright: 1. economic rights, which allow the rights owner to derive financial reward from the use of his works by others; and 2. moral rights, which protect the non-economic interests of the author.",
      },
  
      {
        question: "Can I register copyright?",
  
        answer:
          "In the majority of countries, and according to the Berne Convention, copyright protection is obtained automatically without the need for registration or other formalities. Most countries nonetheless have a system in place to allow for the voluntary registration of works. Such voluntary registration systems can help solve disputes over ownership or creation, as well as facilitate financial transactions, sales, and the assignment and/or transfer of rights.",
      },
  
      {
        question: "What is a 'work'?",
  
        answer:
          "The term “work” is used in the copyright context to refer to a wide range of intellectual creations, from novels to architecture, computer programs, and more.",
      },
  
      {
        question: "What is the © symbol? Do I need to include it on my work?",
  
        answer:
          "In the past, some countries had legislation in place that required the copyright holder to comply with certain formalities in order to receive copyright protection. One of those formalities was to include an indication that copyright had been claimed, such as by using the symbol ©. Currently, very few countries still impose formalities on copyright, therefore the use of such symbols is no longer a legal requirement. Nonetheless, many right owners still include the symbol © as a highly visible way to emphasize that that work is protected by copyright and that all rights are reserved, as opposed to a less restrictive license.",
      },
  
      {
        question: "How long does copyright protection last?",
  
        answer:
          "Economic rights have a time limit, which can vary according to national law. In those countries which are members of the Berne Convention, the time limit should be equal to or longer than 50 years after the creator’s death. Longer periods of protection may however be provided at the national level. Contact your national IP office to find out more",
      },
  
      {
        question:
          "Can I protect my works internationally using copyright?",
  
        answer:
          "Firstly, copyright protection is automatic in all states party to the Berne Convention (refer to the question “Can I register copyright?”). Whilst there may be nuances to the particular national laws applicable in these states, in general there is a high degree of harmony. When we consider states that are not party to the Berne Convention, you must remember that copyright laws are territorial. In other words, they apply within the country in which they were passed. As such, if you wish to protect your work internationally, you must research and make sure that you comply with the relevant legal requirements in the country(ies) in which you wish your work to be protected.",
      },
  
      {
        question:
          "Can I copyright my software or mobile app?",
  
        answer:
          "Computer programs and other types of software are considered as literary works for copyright purposes. Therefore they receive automatic protection without the need for registration. In some countries, the process of voluntary registration for software may differ from that for other types of work.",
      },
  
      {
        question:
          "What is “fair use”?",
        answer:
          "Differing legal systems mean that under some systems, a clear list of limitations and exceptions to copyright is provided, whilst in others you may only find a general clause. Such general clauses are frequently known as “fair use” or “fair dealing” clauses.",
      },
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
  export default Trademark