import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// const FAQ = () => {
//   const questions = [
//     {
//       q: "What is Ventivo?",
//       a: "It is a software that helps you create real-time charts from your Firebase data, enabling you to visualize and analyze your data dynamically.",
//     },
//     {
//       q: "Can I use this software with multiple Firebase projects?",
//       a: "Yes, you can connect and manage multiple Firebase projects within our software, allowing you to create charts from different data sources.",
//     },
//     {
//       q: "What types of charts can I create?",
//       a: "You can create various types of charts, including bar, line, and pie charts.",
//     },
//     {
//       q: "Is my data secure?",
//       a: "Absolutely. You only grant us read access and we never store your data.",
//     },
//     {
//       q: "How do I contact support if I need help?",
//       a: "You can reach us via email at support@ventivo.co. We'll be sure to get back to you as soon as possible.",
//     },
//   ];

//   return (
//     <section className="w-full py-16">
//       <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
//         <h1 className="text-4xl font-extrabold text-center text-gray-900">
//           <span className="text-firebase-orange">Frequently</span> Asked
//           Questions
//         </h1>

//         <Accordion
//           type="single"
//           collapsible
//           className="w-full flex flex-col gap-4"
//         >
//           {questions.map((a, i) => (
//             <AccordionItem
//               className="bg-white shadow-sm py-4 px-6 rounded-lg border border-gray-200"
//               value={i.toString()}
//               key={i}
//             >
//               <AccordionTrigger className="text-lg font-medium text-gray-900">
//                 {a.q}
//               </AccordionTrigger>
//               <AccordionContent className="text-gray-700 mt-2">
//                 {a.a}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// };

const FAQ = () => {
  const questions = [
    {
      q: "What is Ventivo?",
      a: "It is a software that helps you create real-time charts from your Firebase data, enabling you to visualize and analyze your data dynamically.",
    },
    {
      q: "Can I use this software with multiple Firebase projects?",
      a: "Yes, you can connect and manage multiple Firebase projects within our software, allowing you to create charts from different data sources.",
    },
    {
      q: "What types of charts can I create?",
      a: "You can create various types of charts, including bar, line and pie charts.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. You only grant us read access and we never store your data.",
    },
    {
      q: "How do I contact support if I need help?",
      a: "You can reach us via email at support@ventivo.co. We'll be sure to get back to you as soon as possible.",
    },
  ];

  return (
    <section className="w-full max-w-5xl flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl xl:text-4xl text-center">
        <span className="text-firebase-orange">Frequently</span> Asked Questions
      </h1>

      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        {questions.map((a, i) => (
          <AccordionItem
            className="bg-white py-2 px-6 rounded-xl border"
            value={i.toString()}
            key={i}
          >
            <AccordionTrigger className="text-left">{a.q}</AccordionTrigger>
            <AccordionContent>{a.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
