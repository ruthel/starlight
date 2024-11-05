"use client"
import Menu from "@/app/layout/menu";
import Link from "next/link";
import Footer from "@/app/layout/footer";
import MyCarousel from "@/app/component/myCarousel";

export default function Home() {

  const PerOcc = ({title, image, desc}) => (
    <Link className='bg-white md:w-[201px] w-full text-center rounded overflow-hidden shadow-lg' href='/editor'>
      <img
        src={image}
        className='md:w-[201px] w-full md:h-[148px]' loading="lazy" alt=''/>
      <h3 className='mx-0 font-semibold mt-3'>{title}</h3>
      <div className='px-4 py-2 text-xs'>{desc}</div>
    </Link>
  )

  return (
    <main className="min-h-screen w-full bg-[#e6e6e6]">
      <div className='bg-black min-h-screen bg-cover flex flex-col'
           style={{backgroundImage: "url('https://res.cloudinary.com/dyhgx4nro/image/upload/v1707903700/bg-home.webp')"}}>
        <Menu/>
        <div className='md:flex flex-1 gap-6 max-w-screen-lg w-full mx-auto items-center md:mt-16 mt-6 px-3 md:px-0'>
          <div className='text-white flex-1'>
            <div className='md:text-5xl text-2xl text-center md:text-left'>Personalized Star Map</div>
            <div className='md:text-3xl md:mt-8 mt-3 text-lg text-center md:text-left'>Seize the special moment forever</div>
            <div className='mt-6 md:mt-12 text-center md:text-left'>
              <Link href='/editor' className='bg-purple-700 py-5 shadow-xl text-sm px-6 rounded-full'>Create a custom
                Star Map</Link>
            </div>
          </div>
          <img src='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707904826/star_map.webp'
               className='shadow-2xl mt-8 md:mt-0 md:w-auto w-full'/>
        </div>
        <div>
          <div
            className='md:flex items-center gap-6 w-full max-w-screen-lg mx-auto justify-between text-xs text-white pb-6 px-3 md:px-0'>
            <div className='flex items-center gap-6'>
              <img src="/ico/verified_by_real.png" alt="#"/>
              <div className='flex flex-col justify-center mt-2'>
                <div>Verified by real</div>
                <div>astronomers</div>
              </div>
            </div>
            <div className='flex items-center gap-6 my-3 md:my-0'>
              <img src="/ico/instant_online.png" alt="#"/>
              <div className='flex flex-col justify-center mt-2'>
                <div>Instant Online Delivery by email</div>
                <div>Express 3-4 days</div>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <img src="/ico/customer_support.png" alt="#"/>
              <div className='flex flex-col justify-center mt-2'>
                <div>Customer Support</div>
                <div>+1 (332) 900 09876</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-cover text-white bg-galaxy px-3 md:px-0'>
          <div className='max-w-screen-lg mx-auto md:py-16 py-8 text-center'>
            <div className='text-2xl mb-6'>Our Personal Star Map Designs</div>
            <div>Pick your favourite design. Add a personal note to the</div>
            <div>recipient and even add a special QR code to surprise your beloved ones</div>
            <div className='max-w-screen-lg mx-auto'>
              <MyCarousel/>
            </div>
          </div>
        </div>
        <div id="looking_for_gift" className="animated-1 text-center md:py-16 py-8 px-3 md:px-0">
          <div className='text-center flex justify-center'>
            <img src="/ico/looking_for_per_gift.png" alt="" width="39" height="43"/></div>
          <div className="text-2xl mb-6 mt-3">Looking For a Perfect Gift ?</div>
          <div>Our personalized star maps can help capture your happiest</div>
          <div>memories forever.You can design and print a custom map</div>
          <div>that shows the way stars looked on your special day.You can</div>
          <div>choose any place and time!</div>
        </div>
        <div className="bg-galaxy bg-cover text-white md:py-16 py-8 px-3 md:px-0">
          <div className='max-w-screen-lg mx-auto md:flex justify-between items-center'>
            <div className='text-center'>
              <div className='text-2xl'>$395.00</div>
              <div className='text-red-500 text-2xl my-2'>$32.90</div>
              <div>"Express shipping included"</div>
            </div>
            <div className='flex flex-col self-stretch text-center my-6 md:my-0'>
              <div>
                <h1 className="title-sub text-2xl">Create LED Star Map</h1>
                <div>Let stars light up the sacred path of your life</div>
              </div>
              <div className='flex-1 flex items-center justify-center'>
                <span className='px-6 py-5 bg-gray-200 rounded-full text-sm mt-4 md:mt-0 select-none cursor-pointer'>Out of stock</span>
              </div>
            </div>
            <div className='md:w-auto mx-3 md:mx-0'>
              <img src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707911985/banner_img.webp"
                   className='md:w-[210px] w-full' alt="#" width={210}/>
            </div>
          </div>
        </div>
        <div className="md:py-16 py-8 px-3 md:px-0 mx-auto max-w-screen-lg text-center">
          <div className='text-2xl'>Some Of The Happy Star Map Owners</div>
          <div className='grid gap-4 md:grid-cols-4 grid-cols-2 mt-6 md:px-16 px-2'>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912532/landing_block4_img1_yqna07.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912617/landing_block4_img2_litvpg.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912661/landing_block4_img3_folc0w.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912806/landing_block4_img4_vyxago.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912941/landing_block4_img5_odvvwr.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707912996/landing_block4_img6_zyrsk5.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707913075/landing_block4_img7_hgbxa1.webp"
                 alt=""/>
            <img className='shadow-lg rounded-lg'
                 src="https://res.cloudinary.com/dyhgx4nro/image/upload/v1707913118/landing_block4_img8_xcpvdq.webp"
                 alt=""/>
          </div>
        </div>
        <div className="bg-galaxy bg-cover text-white">
          <div className="md:py-16 py-8 px-3 md:px-0 mx-auto max-w-screen-lg">
            <div className='text-2xl text-center'>Reasons To Choose Us</div>
            <div className='grid gap-4 md:grid-cols-2 grid-cols-1 mt-6 md:px-16 px-2'>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12'
                     src="/reason/best_star.png"
                     alt=""/>
                <div className='text-xl my-2'>The Best Star Map Designs</div>
                <div> We genuinely believe that we’ve created the best Star Map designs. You can choose from a dozen of
                  beautiful templates. Each of them was created by world-class artists that we constantly collaborate
                  with.
                </div>
              </div>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12' src="/reason/simple_generator.png" alt=""/>
                <div className='text-xl my-2'>Simple Generator</div>
                <div> Our generator allows you to personalize your star map in 3 simple steps. Pick a place and date,
                  add a personal message or an interactive QR code, choose your design, and your accurate star map is
                  ready to go.
                </div>
              </div>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12' src="/reason/trust_over.png" alt=""/>
                <div className='text-xl my-2'>Trusted by over 10,000 <br/>Happy Customers</div>
                <div>Since 2018, we have helped over 10,000 people to commemorate more than 10,000 happy moments in
                  their life. Our customer service will make sure that you are 100% satisfied.
                </div>
              </div>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12' src="/reason/instant_delivery.png" alt=""/>
                <div className='text-xl my-2'>Instant delivery via email</div>
                <div> You'll be happy to hear we send all our Star Maps via email as a printable PDF with detailed
                  printing and framing instructions right after each purchase
                </div>
              </div>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12' src="/reason/verify_by_astronomer.png" alt=""/>
                <div className='text-xl my-2'>Verified by Astronomers</div>
                <div>We use an algorithm that is verified by international astronomers and the scientific society to
                  generate each Star Map. We assure that you won’t get any fake products.
                </div>
              </div>
              <div>
                <img className='shadow-lg rounded-lg w-12 h-12' src="/reason/top_notch_quality.png" alt=""/>
                <div className='text-xl my-2'>The Best Star Map Designs</div>
                <div> We genuinely believe that we’ve created the best Star Map designs. You can choose from a dozen of
                  beautiful templates. Each of them was created by world-class artists that we constantly collaborate
                  with.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animated-2 flex items-center flex-col justify-center md:py-16 py-8 px-3 md:px-0 text-center">
          <img src="/ico/attach_photo.png" alt="" height="84" width="93"/>
          <div className="text-2xl">Attach photos, videos or any other link <br/> with the help of QR Code feature</div>
          <div>
            <div>Make your Star Map even more personal by adding a unique</div>
            <div>QR Code to extend your private message. The QR Code can</div>
            <div>contain any link: one with a picture of a special moment that</div>
            <div>you’ve uploaded to Instagram, the song that was playing on</div>
            <div>that memorable night, or even a YouTube video.</div>
          </div>
          <button className="btn-create-map" onClick="window.location.href = './editor'">See how it works here</button>
        </div>
        <div className="bg-galaxy bg-cover text-white">
          <div className="md:py-16 py-8 px-3 md:px-0 mx-auto max-w-screen-md">
            <div className='text-2xl text-center'>Check out the live reactions of some of our customers</div>
            <div className='grid gap-4 md:grid-cols-3 grid-cols-1 mt-6 md:px-16 px-2 justify-center'>
              <div>
                <video className='shadow-lg rounded-lg w-full' src="/live_reaction/react1.mp4" controls/>
              </div>
              <div>
                <video className='shadow-lg rounded-lg w-full' src="/live_reaction/react2.mp4" controls/>
              </div>
              <div>
                <video className='shadow-lg rounded-lg w-full' src="/live_reaction/react3.mp4" controls/>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#242424]">
          <div className="md:py-16 py-8 px-3 md:px-0 mx-auto max-w-screen-lg">
            <div className='text-2xl text-center text-white'>Looking for a perfect occasion?</div>
            <div
              className='grid gap-y-8 gap-x-16 md:grid-cols-3 max-w-screen-md mx-auto grid-cols-1 mt-6 md:px-16 px-2 w-auto'>
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914178/landing_block8_img1_aum8ef.webp'
                title='Birthday Gift'
                desc='Birthday Gift Star Maps of the special night sky when a loved one was born makes a great gift. '
              />
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914248/landing_block8_img2_oriimo.webp'
                title='Anniversary Gift'
                desc='Surprise your better half with a reminder of the way stars looked when she said “Yes.” '
              />
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914264/landing_block8_img3_sk1c2d.webp'
                title='Housewarming Gift'
                desc='Make your home cozy with a beautiful print of the night sky. Great addition that fits any interior. '
              />
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914277/landing_block8_img4_fhmnty.webp'
                title="Valentine's Day Gift"
                desc='Romantic Star Map is a great choice for St. Valentine’s Day present. '
              />
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914281/landing_block8_img5_uwqwll.webp'
                title='Christmas Gift'
                desc='Simple, elegant, beautiful Star Map will bring only good vibes to your holiday season. '
              />
              <PerOcc
                image='https://res.cloudinary.com/dyhgx4nro/image/upload/v1707914373/landing_block8_img6_fuhjfj.webp'
                title='Mother’s Day Gift'
                desc='Show your mother how much you care about her Get her a personalized Star Map. '
              />
            </div>
          </div>
        </div>
        <div className="md:py-16 py-8 px-3 md:px-0 mx-auto max-w-screen-lg">
          <div className='text-2xl text-center'>The Print Quality</div>
          <div className='grid gap-4 md:grid-cols-3 grid-cols-1 mx-auto max-w-screen-md mt-6 md:px-16 px-2 justify-center'>
            <div>
              <video className='shadow-lg rounded-lg w-full' src="/quality/quality.mp4" controls/>
            </div>
            <div>
              <video className='shadow-lg rounded-lg w-full' src="/quality/quality2.mp4" controls/>
            </div>
            <div>
              <video className='shadow-lg rounded-lg w-full' src="/quality/quality3.mp4" controls/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
