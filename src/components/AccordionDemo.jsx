import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger><strong>INTRODUCTION</strong></AccordionTrigger>
          <AccordionContent>
            <p>Hi my name is Muhammad Absar Sidiqui. I am 21 year olds. living in Karachi Pakistan</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger><strong>EDUCATION</strong></AccordionTrigger>
          <AccordionContent>
          <p>I am currently doing BS Software Engineering from SMIU. I am front end web developer having expertise in Javascript and reactjs</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger><strong>NA</strong></AccordionTrigger>
          <AccordionContent>
            <p>NA</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
