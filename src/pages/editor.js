"use client"
import {useEffect, useRef, useState} from "react";
import CelestialChart from "@/app/component/celestialChart";
import {useQRCode} from 'next-qrcode';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GInput from "@/app/component/gInput";
import {Link2} from "react-feather";
import colors_theme from "@/app/data/colors_themes.json";
import months from "@/app/data/months.json";
import AutocompleteInput from "@/app/component/AutocompleteInput";
import * as htmlToImage from 'html-to-image';
import {useAppContext} from "@/context/state";
import Loader_work from "@/app/component/loder_work";
import {useRouter} from 'next/navigation';
import axios from "axios";

const Editor = () => {

  const {Canvas} = useQRCode();
  const node = useRef(null)
  const myRef = useRef(null)
  const [monthObj, setMonthObj] = useState();
  const [index, setIndex] = useState(0);
  const [file, setFile] = useState();
  const [theme, setTheme] = useState(0);
  const [title, setTitle] = useState();
  const [link, setLink] = useState('');
  const [place, setPlace] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  const [hour, setHour] = useState(0);
  const [semiTheme, setSemiTheme] = useState(false);
  const [hasCompass, setHasCompass] = useState(true);
  const [hasGrid, setHasGrid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter()

  const {setState, setSnackOpt} = useAppContext();

  const handlePlaceSelected = (address) => {
    try {
      setLng(address.geometry.location.lng())
      setLat(address.geometry.location.lat())
      setPlace(address.formatted_address)
    } catch (e) {
    }
  };

  const handleMap = (data) => {
    return axios.post('/api/editor/create_map', {title, place, link, date: new Date(), data})
  }

  function handleContextMenu(event) {
    // Prevent the default context menu from appearing
    event.preventDefault();

    // Perform your custom actions here, such as showing a custom menu or performing other tasks
    console.log("Context menu prevented");
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.disable-context-menu');
    elements.forEach((element) => {
      element.addEventListener('contextmenu', handleContextMenu);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('contextmenu', handleContextMenu);
      });
    };
  }, [])

  return (
    <>
      <div className='flex md:flex-row flex-col w-full h-screen disable-context-menu'>
        <div
          className='md:flex-1 items-center justify-center md:h-full py-3 md:py-0 bg-gradient-to-b from-[#e6e6e6] to-black flex'>
          <div className='max-w-[360px] h-[500px] relative'>
            <div
              ref={node}
              style={{background: semiTheme ? colors_theme[theme]?.name_semi : colors_theme[theme]?.name || 'white'}}
              className='flex flex-col border-4 border-black items-center shadow-2xl rounded-sm px-3 h-full w-full py-2'>
              <div className='relative w-[300px] h-[300px] flex justify-center items-center'>
                <CelestialChart
                  hasCompass={hasCompass}
                  color={colors_theme[theme].name}
                  color_semi={colors_theme[theme].name_semi}
                  hasGrid={hasGrid}
                  year={year}
                  month={month}
                  date={date}
                  hour={hour}
                  lat={lat}
                  lng={lng}
                />
                {hasCompass &&
                  <img src={semiTheme ? colors_theme[theme].image_semi : colors_theme[theme].image} alt="#"
                       ref={myRef}
                       className='absolute left-0 top-0 right-0 bottom-0 scale-[1]'/>}
              </div>
              <div className='flex-1 text-center flex flex-col items-center'
                   style={{color: semiTheme ? colors_theme[theme].text_semi : colors_theme[theme].text}}>
                <div className='font-medium text-[12px]'>{title || 'Title'}</div>
                <div className='text-[10px]'>{place || 'Place location'}</div>
                <div className='text-[10px]'>{new Date(year, month, date).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}</div>
                {file && <div className='flex-1'>
                  <img src={file} alt="#" className='h-full rounded' style={{maxHeight: link ? 70 : 100}}/>
                </div>}
              </div>
              {link && <div>
                <Canvas
                  text={link}
                  options={{
                    errorCorrectionLevel: 'M',
                    width: 42,
                    height: 42,
                    margin: 3,
                    scale: 10,
                    color: {
                      dark: semiTheme ? colors_theme[theme].name : colors_theme[theme].text || '#000000',
                      light: semiTheme ? colors_theme[theme].name_semi : colors_theme[theme].name || '#ffffff',
                    },
                  }}
                />
              </div>}
              <div className='text-[9px]'
                   style={{color: semiTheme ? colors_theme[theme].text_semi : colors_theme[theme].text}}>{(lng || 0).toPrecision(5)} N {(lat || 0).toPrecision(5)} E
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[425px] p-3'>
          <Tabs selectedIndex={index} onSelect={() => {
          }}>
            <TabList>
              <Tab onClick={() => setIndex(0)}>Moment</Tab>
              <Tab onClick={() => setIndex(1)}>Text</Tab>
              <Tab onClick={() => setIndex(2)}>Customize</Tab>
            </TabList>

            <TabPanel>
              <div className='p-3'>
                <div className='font-semibold text-lg'>Please, give us the details of your special moment</div>
                <div className='font-semibold mt-3'>Where were you looking at the sky ?</div>
                <AutocompleteInput onPlaceSelected={handlePlaceSelected} value={place} lat={lat} lng={lng}/>
                <div className='flex gap-2 mt-5'>
                  <div>
                    <div className='font-semibold'>Date</div>
                    <select
                      name="date"
                      id="date"
                      className='p-2 border rounded'
                      value={date}
                      onChange={e => setDate(e.target.value)}
                    >
                      {Array.from({length: monthObj?.days || 30}).map((_, date) => <option
                        key={date}
                        value={date + 1}>{date + 1 < 10 ? '0' + (date + 1) : (date + 1)}</option>)}
                    </select>
                  </div>
                  <div>
                    <div className='font-semibold'>Month</div>
                    <select
                      name="month" id="month"
                      className='py-2 px-3 border rounded'
                      value={month}
                      onChange={e => {
                        setMonth(e.target.value)
                        setMonthObj(months[e.target.value])
                      }}>
                      {months.map((el, i) => <option key={i} value={i}>{el.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <div className='font-semibold'>Year</div>
                    <select
                      className='py-2 px-3 border rounded'
                      name="year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      id="year">
                      {Array.from({length: 50}).map((_, i) => <option
                        key={i}
                        value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>)}
                    </select>
                  </div>
                  <div>
                    <div className='font-semibold'>Hour</div>
                    <select
                      name="hour" id="hour"
                      value={hour}
                      onChange={(e) => setHour(e.target.value)}
                      className='py-2 px-3 border rounded'>
                      {Array.from({length: 24}).map((_, i) => <option key={i}
                                                                      value={i}>{i < 10 ? '0' + i : i}:00</option>)}
                    </select>
                  </div>
                </div>
                <button
                  className='py-1.5 px-4 bg-green-400 text-white text-sm rounded shadow-lg mt-3 uppercase font-semibold'
                  onClick={() => setIndex(index + 1)}>Next
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='p-3'>
                <GInput label='Title' value={title} onChange={e => setTitle(e.target.value)}/>
                <div className='mt-5'>
                  <div className='font-semibold'>Link</div>
                  <div className='flex items-center mt-3 w-full'>
                    <div
                      className='shadow-lg font-semibold h-[48px] flex items-center px-3 justify-center rounded-l-lg bg-gray-300'>
                      <Link2/></div>
                    <input
                      type="text"
                      className='border rounded-r-lg self-stretch py-0 flex-1 px-3'
                      value={link}
                      onChange={e => setLink(e.target.value)}/>
                  </div>
                </div>
                <div className='bg-gray-200 rounded-lg py-1 px-2 mt-2 shadow text-xs'>Enter any external link
                  (instagram post, youtube video, etc)
                </div>
                <div className='mt-5'>
                  <div className='font-semibold'>Image to upload</div>
                  <div className='bg-gray-200 py-2 px-2 rounded-lg flex items-center'>
                    <input type="file" accept='image/*' onChange={(e) => {
                      const fil = e.target.files[0];
                      if (fil) {
                        const reader = new FileReader();
                        reader.onloadend = () => setFile(reader.result);
                        reader.readAsDataURL(fil);
                      } else setFile(null)
                    }}/>
                  </div>
                </div>
                <div className='flex gap-3 items-center'>
                  <button
                    className='py-1.5 px-4 bg-blue-400 text-white text-sm rounded shadow-lg mt-3 uppercase font-semibold'
                    onClick={() => setIndex(index - 1)}>Previous
                  </button>
                  <button
                    className='py-1.5 px-4 bg-green-400 text-white text-sm rounded shadow-lg mt-3 uppercase font-semibold'
                    onClick={() => setIndex(index + 1)}>Next
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='p-3'>
                <div>Customize your design by selecting a template, size, frame and additional features of your star
                  map
                </div>
                <div className='font-semibold mt-5'>Select the template color of your star map</div>
                <div className='grid grid-cols-4 gap-3 mt-3'>
                  {colors_theme.map((c, i) => {
                    return <div
                      key={i}
                      onClick={() => {
                        setTheme(i)
                      }}
                      className={`w-full h-20 border rounded duration-150 cursor-pointer ${i === theme ? 'outline-4 outline-blue-400 outline' : ''}`}
                      style={{background: c.name}}></div>
                  })}
                </div>
                <div className='font-semibold mt-5 mb-2'>Activate the Semi Theme ?</div>
                <div className='flex gap-3'>
                  <label htmlFor="yes"><input type="radio" value={true} checked={semiTheme} name='semitheme' id='yes'
                                              onClick={() => setSemiTheme(true)}/> YES</label>
                  <label htmlFor="no"><input type="radio" value={false} checked={!semiTheme} name='semitheme' id='no'
                                             onClick={() => setSemiTheme(false)}/> NO</label>
                </div>

                <div className='font-semibold mt-5 mb-2'>Select frame of your star map</div>
                <div className='flex gap-3'>
                  <label htmlFor="compass">
                    <input
                      type="checkbox"
                      checked={hasCompass}
                      name='frametype'
                      id='compass'
                      onClick={() => setHasCompass(!hasCompass)}
                    />&nbsp;
                    <span>Compass</span>
                  </label>
                  <label htmlFor="grid">
                    <input
                      type="checkbox"
                      checked={hasGrid}
                      name='frametype'
                      id='grid'
                      onClick={() => setHasGrid(!hasGrid)}
                    />&nbsp;
                    <span>Grid</span>
                  </label>
                </div>
                <div className='flex gap-3 items-center'>
                  <button
                    className='py-1.5 px-4 bg-blue-400 text-white text-sm rounded shadow-lg mt-3 uppercase font-semibold'
                    onClick={() => setIndex(index - 1)}>Previous
                  </button>
                  <button
                    disabled={submitted}
                    onClick={() => {
                      if ([null, '', undefined].includes(title)) {
                        setSnackOpt({open: true, message: "Make sure to fill the title", severity: 'error'})
                        return
                      }
                      if ([null, '', undefined].includes(place)) {
                        setSnackOpt({open: true, message: "Make sure to fill the place", severity: 'error'})
                        return
                      }
                      setSubmitted(true)
                      setTimeout(() => {
                        if (!submitted)
                          htmlToImage.toPng(node.current, {pixelRatio: 10})
                            .then(file => {
                              handleMap(file).then(res => {
                                setState({mapObj: res.data, file, title})
                                setSubmitted(false)
                                router.push('/checkout')
                              })
                            })
                            .catch(function (error) {
                              console.error('oops, something went wrong!', error);
                            });
                      }, 1000)
                    }}
                    className='py-1.5 px-4 bg-green-400 text-white text-sm rounded shadow-lg mt-3 disabled:bg-gray-500 uppercase font-semibold'>Submit
                  </button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {submitted && <Loader_work/>}
    </>
  )
}

export default Editor