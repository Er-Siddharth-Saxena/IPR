import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const Tradesecrets = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel_1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const faqTradesecrets = [
    {
      question: "What is a trade secret?",

      answer:
        "Trade secrets are intellectual property (IP) rights on confidential information which may be sold or licensed. In general, to qualify as a trade secret, the information must be: •	commercially valuable because it is secret, •	be known only to a limited group of persons, and •	be subject to reasonable steps taken by the rightful holder of the information to keep it secret, including the use of confidentiality agreements for business partners and employees. The unauthorized acquisition, use or disclosure of such secret information in a manner contrary to honest commercial practices by others is regarded as an unfair practice and a violation of the trade secret protection.",
    },

    {
      question: "What kind of information is protected by trade secrets?",

      answer:
        "In general, any confidential business information which provides an enterprise a competitive edge and is unknown to others may be protected as a trade secret. Trade secrets encompass both technical information, such as information concerning manufacturing processes, experimental research data, software algorithms and commercial information such as distribution methods, list of suppliers and clients, and advertising strategies. A trade secret may be also made up of a combination of elements, each of which by itself is in the public domain, but where the combination, which is kept secret, provides a competitive advantage. Other examples of information that may be protected by trade secrets include financial information, formulas and recipes and source codes.",
    },

    {
      question: "What kind of protection does a trade secret offer?",

      answer:
        "Depending on the legal system, the legal protection of trade secrets forms part of the general concept of protection against unfair competition or is based on specific provisions or case law on the protection of confidential information. While a final determination of whether trade secret protection is violated or not depends on the circumstances of each individual case, in general, unfair practices in respect of secret information include breach of contract breach of confidence and industrial or commercial espionage. A trade secret owner, however, cannot stop others from using the same technical or commercial information, if they acquired or developed such information independently by themselves through their own R&D, reverse engineering or marketing analysis, etc. Since trade secrets are not made public, unlike patents, they do not provide “defensive” protection, as being prior art. For example, if a specific process of producing Compound X has been protected by a trade secret, someone else can obtain a patent or a utility model on the same invention, if the inventor arrived at that invention independently. Contrary to patents, trade secrets are protected without registration, that is, trade secrets require no procedural formalities for their protection. A trade secret can be protected for an unlimited period of time, unless it is discovered or legally acquired by others and disclosed to the public. For these reasons, the protection of trade secrets may appear to be particularly attractive for certain companies. There are, however, some conditions for the information to be considered a trade secret. Compliance with such conditions may turn out to be more difficult and costly than it would appear at a first glance.",
    },

    {
      question:
        "What are the advantages and disadvantages of trade secrets compared to patenting?",

      answer:
        "There are essentially two kinds of trade secrets. On the one hand, trade secrets may concern valuable information that do not meet the patentability criteria, and therefore can only be protected as trade secrets. This would be the case for commercial information or manufacturing processes that are not sufficiently inventive to obtain a patent (though the latter may qualify utility model protection). On the other hand, trade secrets may concern inventions that would fulfill the patentability criteria, and therefore, could be protected by patents. In that case, the company will face a choice: to patent the invention or to keep it as a trade secret. Some advantages of trade secrets include: •	trade secret protection is not limited in time (patents last in general for up to 20 years). It may continue indefinitely as long as the secret is not revealed to the public; •	trade secrets involve no registration costs (though keeping the information confidential may entail high costs in certain cases); •	trade secrets have immediate effect; and •	trade secret protection does not require compliance with formalities or public disclosure. There are, however, some concrete disadvantages of protecting confidential business information as a trade secret, especially when the information meets the criteria for patentability: •	If the secret is embodied in an innovative product, others may be able to inspect it, dissect it and analyze it (i.e. “reverse engineer” it) and discover the secret and be thereafter entitled to use it. Trade secret protection does not provide the exclusive right to exclude third parties from making commercial use of it. Only patents and utility models can provide this type of protection. •	A trade secret may be patented by someone else who developed the relevant information by legitimate means, for example, inventions developed independently by others. •	Once the secret is made public, anyone may have access to it and use it at will. The more people know about the trade secret, the more difficult it will be to keep it secret. Trade secret protection is effective only against illicit acquisition, use or disclosure of the confidential information. •	A trade secret is more difficult to enforce than a patent. Often, it is quite difficult to prove the violation of trade secrets. The level of protection granted to trade secrets varies significantly from country to country, but is generally considered weak, particularly when compared with the protection granted by a patent. •	Due to their secret nature, selling or licensing trade secrets is more difficult than patents. While patents and trade secrets may be perceived as alternative means of protecting inventions, they are often complementary to each other. Often trade secret law complements patent law in earlier stages of the innovation process by allowing inventors to work on their ideas until they become a patentable invention. Moreover, valuable know-how on how to exploit a patented invention in the most commercially successful manner is often kept as a trade secret.",
    },

    {
      question: "In which cases trade secret protection may be beneficial?",

      answer:
        "While a decision will have to be taken on a case-by-case basis, in the following circumstances, it would be advisable to consider trade secret protection: •	When the subject matter which has been kept secret is not patentable. •	When the likelihood is high that the information can be kept secret for a considerable period of time. If the secret information consists of a patentable invention, trade secret protection could be attractive if the secret can be kept confidential for over 20 years (duration of patent protection) and if others are not likely to come up with the same invention in a legitimate way. •	When the trade secret is not considered to be of such great value to be deemed worth a patent (though a utility model may be a good alternative in countries where utility model protection exists). •	When the secret relates to a manufacturing process rather than to a product, as products would be more likely to be reverse engineered. •	Before filing a patent and during the patent prosecution process until the patent application is published by the patent office (generally after 18 months from the filing date or the priority date). It is important to bear in mind, however, that trade secret protection may be more difficult to enforce in most countries, that the conditions for, and scope of, its protection may vary significantly from country to country and that significant and possibly costly efforts to preserve secrecy may be required. Further, it has to be kept in mind that, once the secret is made public, the protection ends.",
    },

    {
      question: "What are the requirements for trade secret protection?",

      answer:
        "In order for information to be protected as trade secret, it shall meet the following criteria. The information must be secret (i.e., it is not generally known among, or readily accessible, to circles that normally deal with the kind of information in question). Absolute secrecy is not required. For example, trade secrets can be kept by several parties, as long as it is not known to other persons working in the field. It must have actual or potential commercial value because it is secret. It must have been subject to reasonable steps by the rightful holder of the information to keep it secret (e.g., through confidentiality agreements). While the “reasonable” steps may depend on the circumstances of each case, marking confidential documents, placing physical and electronic restrictions to access trade secret information, introducing a systematic monitoring system and raising awareness of employees are the measures taken to safeguard trade secrets.",
    },

    {
      question: "What are the rights conferred by trade secrets?",

      answer:
        "In general, trade secret protection confers owners the right to prevent the information lawfully within their control from being disclosed, acquired or used by others without their consent in a manner contrary to honest commercial practice. While the determination of such practices depends ultimately on the circumstances of each individual case, in general, unfair practices in respect of secret information include industrial or commercial espionage, breach of contract, breach of confidence and inducement to breach. It further includes the use or disclosure of a trade secret by a third party who knew, or was grossly negligent in failing to know, that such practices were involved in the acquisition of the confidential information. In consequence, the use of a trade secret by a person who acquired that information in a legitimate business transaction without negligence is not deemed illegal. For example, a competitor may purchase a product, examine the construction or composition of the product and extract the secret knowledge embedded in the product (so-called reverse engineering). Such act is not violation of trade secret protection.",
    },

    {
      question: "Is it possible to sell and license trade secrets?",

      answer:
        "Trade secrets are property rights and can be assigned or licensed to other persons. The holder of trade secret has the right to authorize a third party to access and use the trade secret information. However, due to the secret nature of trade secret information, it is not always easy for others to determine whether the information concerned meets the conditions for trade secret protection. Therefore, compared with a patent, it is more difficult to transfer and license confidential information and to resolve disputes which may arise. Since a potential licensee needs to access the trade secret information in order to assess its value or utility, a non-disclosure or confidentiality agreement needs to be signed between the potential licensor and licensee. Further, in order to maintain the secrecy of trade secret information, a trade secret licensor should require a licensee to take reasonable steps to keep that information secret.",
    },

    {
      question: "What are the remedies provided to the holder of secret information?",

      answer:
        "Most countries provide for remedies in criminal, administrative, commercial and/or civil law, in particular, tort law, contractual law and specific legislation on unfair competition. In general, a trade secret owner can collect damages from the person who violated the trade secret for the economic injury suffered. The trade secret laws of some countries might also permit the use of injunctions, which requires the cessation of the use of any products that have been created through the use of trade secret information contrary to honest commercial practices. In some countries, for particular cases of trade secret violation, criminal penalties are available",
    },

    {
      question: "Which precautionary measures should be taken by business?",
      answer:
        "Trade secrets are widely used by business. In fact, many companies rely heavily on trade secrets for the protection of their intellectual property (although in many cases, they may not even be aware that trade secrets are legally protected). Known examples are the Coca Cola formula and sources codes for software. It is important, therefore, to make sure that enterprises take all necessary measures to protect their trade secrets effectively. This includes: •	Firstly, considering whether the secret is patentable and, if so, whether it would not be better protected by a patent. •	Secondly, making sure that a limited number of persons know the secret and that all those who do are well aware that it is confidential information. For example, such steps can include restricting access to buildings, marking confidential documents and establishing IT security. •	Thirdly, including confidentiality agreements within employees’ contracts. Under the law of many countries, however, employees owe confidentiality to their employer even without such agreements. The duty to maintain confidentiality on the employer’s secrets generally remains, at least for a certain period of time, even after the employee has left the employment. •	Fourthly, signing confidentiality agreements with business partners whenever disclosing confidential information.",
    },
  ];

  return (
    <div className="">
      {faqTradesecrets.map((item: any, index) => {
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

export default Tradesecrets;
