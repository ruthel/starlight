"use client"
const Footer = () => {
  return (
    <div className='text-white py-8' style={{background: '#222222'}}>
      <div className="max-w-screen-lg mx-auto md:px-0 px-3">
        <ul className="grid md:grid-cols-3 grid-cols-1 list-none p-0 m-0 gap-6">
          <li id="contactus">
            <p className="text-lg font-semibold">Contact Us</p>
            <ul className='gap-3 flex p-0 mt-2 list-none'>
              <li className="icons phone">Call Us: +1 (332) 900 6321</li>
            </ul>
          </li>
          <li id="reviews">
            <p className="text-lg font-semibold">Quality &amp; Customer Support</p>
            <ul className='gap-3 flex p-0 mt-2 list-none'>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/trustpilot.svg"
                  width="80"
                  height="30" alt="trustpilot"/>
              </li>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/google-rate.svg"
                  width="65"
                  height="30"
                  alt="google review"/>
              </li>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/facebook-rate.svg"
                  width="70"
                  height="30"
                  alt="facebook review"/>
              </li>
            </ul>
            <div className='mt-2 flex gap-3'><span>Check our customers</span>
              <a
                target="_blank"
                rel="nofollow noopener"
                href="https://www.trustpilot.com/review/belowthestars.com" className='underline text-blue-700'>Reviews</a></div>
          </li>
          <li id="follow">
            <div className="footer-medalki"></div>
            <div className="footer-follow-follow">
              <p className="text-lg font-semibold">Follow Us on Social Media</p>
              <div className="flex flex-row w-full my-2 flex-nowrap gap-3">
                <a
                  rel="nofollow noopener"
                  target="_blank"
                  href="https://www.facebook.com/customstarmaps"
                  className="facebook">
                  <img
                    loading="lazy"
                    src="https://cdn.cosmonova.org/bts/images/icons/facebook-share.svg"
                    width="25"
                    height="25" alt="Facebook page"/>
                </a>
                <a
                  rel="nofollow noopener"
                  target="_blank"
                  href="https://www.instagram.com/belowthestars_maps/?hl=en"
                  className="instagram">
                  <img
                    loading="lazy"
                    src="https://cdn.cosmonova.org/bts/images/icons/instagram-share.svg"
                    width="25" height="25"
                    alt="Instagram page"/>
                </a>
              </div>
              <div>Share your experience <a href="/contact/" className='underline text-blue-700'>Get Discount</a></div>
            </div>
          </li>
        </ul>
        <ul className="mt-4 grid md:grid-cols-3 grid-cols-1 list-none p-0 gap-6">
          <li id="secured">
            <p className="text-lg font-semibold">Secured &amp; Verified payment</p>
            <ul className='gap-3 flex p-0 mt-2 list-none'>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/paypal.svg" width="40" height="12"
                       alt="PayPal"/></li>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/visa.svg" width="35" height="12"
                       alt="Visa"/></li>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/mastercard.svg" width="20"
                       height="12" alt="MasterCard"/></li>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/amex.svg" width="30" height="12"
                       alt="American Express"/></li>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/jcb.svg" width="18" height="12"
                       alt="JCB"/></li>
              <li><img loading="lazy" src="https://cdn.cosmonova.org/bts/images/icons/alipay.svg" width="50" height="12"
                       alt="Alipay"/></li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Worldwide shipping</p>
            <ul className='gap-3 flex p-0 mt-2 list-none'>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/fedex.svg"
                  width="45"
                  height="12"
                  alt="FedEx"/>
              </li>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/dhl.svg"
                  width="60"
                  height="12"
                  alt="DHL"/>
              </li>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/ems.svg"
                  width="60"
                  height="12"
                  alt="EMS"/>
              </li>
              <li>
                <img
                  loading="lazy"
                  src="https://cdn.cosmonova.org/bts/images/icons/sf-express.svg"
                  width="35"
                  height="12"
                  alt="SF Express"
                />
              </li>
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold">Track Your Order</p>
            <p>To Track a Lost Package <a href="/contact" className='underline text-blue-700'>Contact Us</a></p>
          </li>
        </ul>
        <div className="footer-bottom center">
          <div className="flex items-center w-full justify-center gap-6 my-5 text-lg font-semibold">
            <a href="/">Home</a>
            <a className="active" href="/editor">Create Star Map</a>
            <a href="/contact">Contact</a>
            <a href="/faq">Faq</a>
          </div>
          <div className="md:flex flex-nowrap items-center gap-6">
            <div className='text-white text-[10px] text-opacity-50 flex-1'>
              <p>On the 22nd of July 2022 SIA “OCR” has signed
                an agreement Nr. SKV-L-2022/322 with Investment and Development Agency of Latvia (LIAA) for the project
                “International competitiveness promotion”, which is co-financed by the European Regional Development
                Fund.</p>
            </div>
            <div className="flex items-center flex-nowrap flex-1 mt-3 md:mt-0">
              <a href="http://www.liaa.gov.lv/en" target="_blank" rel="nofollow">
                <img
                  src="https://cdn.cosmonova.org/bts/images/liaa_2x.png"
                  loading="lazy"
                  width="200"
                  height="78"
                  alt="LIAA"
                />
              </a>
              <a
                href="http://www.liaa.gov.lv/en"
                target="_blank"
                rel="nofollow">
                <img
                  src="https://cdn.cosmonova.org/bts/images/ndp_2x.png"
                  loading="lazy"
                  width="295"
                  height="78"
                  alt="NDP"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer