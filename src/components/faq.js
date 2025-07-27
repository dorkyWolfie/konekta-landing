import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { faqItems } from "@/components/listItems"

export default function Faq() {
  return (
    <Accordion collapsible className="w-[80%] md:w-[60%] max-sm:w-full mx-auto">
      {faqItems.map((item) => (
        <AccordionItem value={item} key={item.question}>
        <AccordionTrigger className="font-[800] hover:text-[#3b82f6] hover:no-underline">
          {item.question}
        </AccordionTrigger>
        <AccordionContent>
          <p className="font-[800] pb-1">{item.answer1}</p>
          <p>{item.answer2}</p>
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
  )
}