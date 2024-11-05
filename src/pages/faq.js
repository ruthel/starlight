"use client"
import {useState} from "react";
import {Minus, Plus} from "react-feather";

const Faq = () => {
  const FaqItem = ({title, children}) => {
    const [open, setOpen] = useState(false)
    return (
      <div className='min-h-[64px] text-black'>
        <div className='relative md:block item-center flex gap-3 ' onClick={() => setOpen(!open)}>
          <button className='md:absolute md:-left-12 top-0 -mt-2 md:mt-0 bg-blue-400 rounded-sm p-1'>{open ?
            <Minus color='#fff' strokeWidth={4}/> : <Plus color='#fff' strokeWidth={4}/>}</button>
          <div>{title}</div>
        </div>
        <div className={`${open ? 'h-auto py-6' : 'h-0'} duration-300 transforms overflow-hidden`}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-screen-lg mx-auto md:py-16 py-8 px-3 md:px-0'>
      <FaqItem title='How much does our custom Star Map cost?'>
        <div id="demo" aria-expanded="true">
          <div>
            <div>PDF version is just $35. If you would like to order a hard print, it depends on the size:</div>
            <div>12×16 in (30×40 cm) – $49</div>
            <div>18×24 in (40×60 cm) – $59</div>
            <div>24×36 in (60×90 cm) – $69</div>
          </div>
          <div> You can also order a white or black frame from $45</div>
        </div>
      </FaqItem>
      <FaqItem title='How can I order?'>
        <div> Go to the map constructor and start designing – select a date and time that matters to
          you, add a short title and choose your design, pick a digital delivery or physical copy.
        </div>
      </FaqItem>
      <FaqItem title='What is the size of the starmap ?'>
        <div> Digital copy: 11.7×16.5 in (29.7×42 cm) A3 Printed copy: 12×16 in (30×40 cm) 18×24 in
          (40×60 cm) 24×36 in (60×90 cm) If you would like to receive an even bigger copy, feel free to shoot us an
          email to contact@belowthestars.com
        </div>
      </FaqItem>
      <FaqItem title='Is the frame included?'>
        <div> It’s an additional option and costs from $45 extra. You can pick a black or white
          frame.
        </div>
      </FaqItem>
      <FaqItem title='Is the Star Map scientifically accurate?'>
        <div> Yes, it is. We are using only up-to-date coordinate libraries to generate the star
          maps. If you need more details on how are we doing it, feel free to contact customer support.
        </div>
      </FaqItem>
      <FaqItem title='Do you ship to my country?'>
        <div> Yes, we will get your package delivered to any place in the galaxy.</div>
      </FaqItem>
      <FaqItem title='How much does the shipping cost?'>
        <div>The shipping cost depends on your delivery address. Posters are delivered for FREE
          worldwide. Framed posters are delivered from 25 $.
        </div>
      </FaqItem>
      <FaqItem title='How long does the shipping take?'>
        <div id="shippingtime" aria-expanded="true">Posters are delivered 12-15 days
          with a standard delivery. DHL express: 4-6 days. Framed posters are delivered just with DHL express from
          25$. You can always contact our customer support if you have any questions.
        </div>
      </FaqItem>
      <FaqItem title='Can I track my package?'>
        <div>You will receive a tracking number after your order is processed.</div>
      </FaqItem>
      <FaqItem title='What payment methods can i use?'>
        <div> We accept Mastercard, Visa, American Express, Paypal, JCB, Discover, Diners Club
          International, AliPay. It is also possible to acquire your Star Map with a direct bank transfer. For that,
          just reach out to us via email.
        </div>
      </FaqItem>
    </div>
  )
}

export default Faq