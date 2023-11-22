import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
    } from "./ui/accordion";

const Pertanyaan = () => {
    return (

        <section className='container max-w'>
            <div>
                <div className="text-sm font-semibold mb-4 text-center xl:text-left">Pertanyaan Wawancara</div>
            </div>
            <div className="space-y-5">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                              <div>
                                <img src="/reviews/avatar-1.png" alt="" srcset="" />
                              </div>
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                 </AccordionItem>
            </Accordion>    
            </div>
        </section>
        
    );
};  

export default Pertanyaan;