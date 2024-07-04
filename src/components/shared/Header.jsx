import React, {Fragment} from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
        <input type='text' placeholder='Search....' className='text-sm focus: outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'></input>
      </div>
      <div className='flex items-center gap-2 mr-2 '>
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-gray-100',"p-1.5 rounded-sm inline-flex items-center text-gray-700 hover-text-opacity-100 focus: outline-none active:bg-gray-100")}
            >
             <HiOutlineChatAlt fontSize={24}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                  <strong className='text-gray-700 font-medium'>Messages</strong>
                  <div className='mt-2 py-1 text-sm'>This is messages panel</div>
                </div>
              </Popover.Panel>
            </Transition>
        </>)}
        </Popover>
        
        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-gray-100',"p-1.5 rounded-sm inline-flex items-center text-gray-700 hover-text-opacity-100 focus: outline-none active:bg-gray-100")}
            >
             <HiOutlineBell fontSize={24}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                  <strong className='text-gray-700 font-medium'>Notifications</strong>
                  <div className='mt-2 py-1 text-sm'>This is notifications panel</div>
                </div>
              </Popover.Panel>
            </Transition>
        </>)}
        </Popover>

        <Menu as="div" className="relative">
        <div>
          <Menu.Button className="ml-2 inline-flex rounded focus:outline-none focus:ring-2 focus: ring-neutral-400">
              <span className='sr-only'>Open user menu</span>
              <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'   style={{ backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAgQFBgcBAAj/xAA3EAACAQMCBAQCCQQCAwAAAAABAgMABBEFIQYSMUETIlFhMnEHFCOBkaGxwdEVM0LhJFJicoL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAhEQADAQACAwADAQEAAAAAAAAAAQIRAyESMUEEIjJRE//aAAwDAQACEQMRAD8A1c9KbyAUbNCkqJoHIOw+VdpC9B8qXXAFV2uClYonHRSxSRS1ogYoUsdKb3d1BZWzz3UqQxJuzucAVmXFX0jzzM1roRMEOMGdl87fL/r+tUmW/QjZo+qa3pmkpnULyOE9lJyx+SjeqdqP0qWMMhSwsXuMf5SScgP3YJrJLu7muJDJPI8jMclnOSabNIepB9q0Twr6K9NRX6W7gSfaaVAV9FmII/KrJw/9IWj6wyxXLCyuG2CyuORj7NWFAMy82DgdMCuK7A7r1PQ01cMNC6z6heISDekJAsbZWsh4H+kK4051s9YeSez2CsTl4v5HtWwQyxzwpLC6vG6hlZTsRWDl4VD7HTTCeIFGTVQ4r19rb7OFiNqtMw8hrPOLLYMzHNZr5H5KX6FttLortxq9zJKZPEP40n+uzR4PNkj3qJuFaNjvtmmcknMK0KJZm7LWvFjyxmKRBk981TtctVlZplHmJyaIvlIJoV3cN4RUDNFRj6GTK24Ckim0q708ljJY0nwM1bcK6fUlIel0N6gahwvQfKlihr0Hyoq0ThQpYpIpaiuAdApaiuAUi6lMFpPMMZjjZ9/YZpkI2Y79IXEU2p6tLbRSf8O2Yoig7FgcFvyqmHznvmjXTl3Zyd2OTmhxDFbJyUBLQ0NhJJ2OOoNTGm8OwzS5lZjnsBXLVh4S/IVJ6fdcjjfFSrkelf8An0OU0OyhQL4IOP8Asc02m0ax3zAm/pUk1yGHXJoT5cUK5Tp4yKOgWUreUNGc5yp6VbOC7280S7/pN45lspQTbSdkbqR7ZqGEbin0Ts8HKc8y4II2O1Svl8pxgvia7RoEt7GybON6rmorFMSRhtu9Qp1Bk+JqRJq4APKd6wKG3rMj5N9kZrNii4kAAJ2IFVy4t1HTYipu/v2ufjIxntURcSg5rXOkmyOnbkqPkmyTTi9c71GlGJrSl0FI7IAd6CzAUcIQCDTdxvRa0dH0/SWrtcbpWQ2hk6CiLQk6CjJROCLRFpCiiCmFZ0UG/hM+n3MI6yQuo+8GnAFInuIbaLxbmVI4gd2dsCmQp83yRlmzjbpXY4fSpPXIUstWureJkkjSVvDdGBVkzlcEe1NF33qu6VldDiF1QYzTm3OfhxnNR6KWbAp7aPDD/dlRfmaRlvhKwB9tqfRDOAaZ217ZthUmjY+gNScSK2HXcY6ipXi9jQtEsuENKs5PtFX3pTIQctnlFRjamq3PhwQSyt6IM0iWnX6A6hPyXEqZ+Fyv4Go+SViMnYUvVyyapcZHLzt4mCMY5t6j57jlByarMHiX7YqSSm0ppHjcxNDkl261VQKhvcgH0oKqMdqTcyEnag+IQKbxwqjszgUzd96K5LnFCaPFdo2H1BSW6UquGsiNoROgoyUFOlGSicFWiihLRVp0IxYqn/SjzHQbWNc+e7XP3I+KuAqE4ztPrfD9xhcvBiZR3PL1/LNE6X+yMQu28W5MTMS67ZPekk8oFO54lQxzsMnJIbB3z0+VMpTzTlR0Bqkl6zRbTRgcvNyHuaZLJbrIc2U05zu2DipC2h8Z+QoDUwujzwhWjkC7dxQdYNmkVc2AtbeC6KIqSfCEnDlfmBUpompyqDBgkjb2r0ltcFT4sxOB/iK5pFpy3BBUjOwGKlS1djz0S+q6s1jackMPi3DDIUjYH0Jpno8uuyQiWOJUnZgfDKKqBe/m3/Snd9Y+Igfk5iO2KXaRXMI5A7IvoDvU+pWDf09ZFcYc51dJJgoka3TmC9Mj0qr3TknFWrjMfZ2d0PeFvu3H7/hVOmky1aOLM08fmjORiecgHegSTHNEYcw2oDpVUyeA3bJriANJg9KSw3rykq2RQplJHzW6iPmFM5CoNGe7DR8gpk/Wlk5+z6frh6iu1zvWY2hU6UVKEtFSicGSirQkogp9wRhBXGAZSGAIOxB71wGu0NAZzxjwbLBDPfaW6GBEeSSOc/2wBnyYG+3Y/jWZNlZZg3Wt64xv4tO4X1K5nXmTwShH/t5f3rA7twlyCeki/nVON6PLbHNpfCJxtuDVtstSjki6iqKsWVLDqKfgyrZB0OQZOVyRvjGwoXOmmH0Tl5qCvIDG2UB83L/NOrfXdNiZTHkSr15ycfOoOymUpyNKoLLkDk9adQ6HAzeIJcSg/wCWRj2NI0kUnv4XK3eKa1e4kmjjj9WOPuprd3EKTRiOVWRsKD05j7UGHQUktJbnVLkJawjn8TPKsY7mo2eC31S5jstLSY24mT/kSHHPynJIHYDB3NSzfYW8Yz+kS/WIWemooBA8eT7wQo/WqOZcmn/E99/Utfv7oZKGXljz/wBF8q/kM/fUUa0wsnDyeR+Vtj6NgVpEmMU3WQjalEkjrRdYT8RDUNnpT5oJUk11DpHObeuO9KK460JxvU/IOH1LSe9KpPepmkMlFShLRkogYVKUx5RmuJSZASvehbyehWdWQMdqMDtTOBDznINPB0qXDVUtYCg/TLqDW/ChtEHmunAJ9FUgn9qxNLz6xbKjn7WMbH1FXn6RuIpNa1mW1jAaxtgyw46Oc4Y/fj8KzO4RopPKcDOxr0OOHMgVdk7pt6pPJIcdqmbGdFJifeNxg5qkLOcgnAf8jUlZalySKsjHHahUmiORGh6TObaQpE8Y7eHMvOmP261etO1hWIkuLWLmJycIdzjHXcHpWWW8/ixqynJFT2l6vLBFyLF5ugy3l/Cs1o0JTXsu2sTS6vapYWsQhsyR4zFfjUHOB6DIqt3ckdhy6fZpm4mXzso2hj/lv3qUg1eSS18DCqX2YqOlM7GFrmWa4CZ8aQtzeoGw/ICoVWdsjz0uOckoGu6UwHPGh27AVXGjZWIZSPatzi0FLghpl2HamuscNWbwMVgXm+VGfyM6MCTRipTAzvT/AE+ASE81WhuEJp2yiYAOBUzZcKG2izyDON896auZDIo11YDwg6rimItsMNiR3q5zWJN/9X5DyZ3FTacL29za4WPDY6ijfN+qO+mfQ6JPdRFol/3UNPayRyFWQgg9K1yDTv6aqo6kKNtxVK16JH1GUx4wTml46bZyZulJJ3pVIPxVRGgOlGWgpRkopAYVKWRkUlaIvQ+tN46hGcRQKonHfF7Wyz6Zo7/bAETTD/HbdV9/X0p3xpxWtmkmnabIPHIxLMp/tew/8v0rJtQvAiNybsuSoJ9O5q3Bw72TqvhHzMt1EXjJ37elRshjuEOceKfKyHbnx3HvShIbUicczJJnxV9D3I/Gm9zkHxowJEcedPX3HvWtgQzuITHuN1zj5H3oC5U5p4wkycBmwNiPiK9vnQvBEi8y4268vb5jtU2h0SWm6w9vhX3FWTStciMgaQAe/aqGytEeYgY7MNxRIr2ZAUHLytsdqnUp9MrPI0aPdcVAQSpbj7UqRz9h71LfRnxpb6lLHoN3EEmVT4Ew6SY3wffH41kcr3Bt3KsGi6sOhpWgapLo2r21/AoeSBwyq3Q+1Svhmp8RLp17PqyAAKcDamepyKobAoXA/EVpxXo3122j8ORG5Joic8jfPuD1qSvrASbjOK898NT7OSIi3i5kVlXbrsK5fSKhUY/KpKGErHyp0G21N7rT/FwSCcUFIPFldi076zftMo6bYqxW1ukEI8u/ehWcX1aZhnrXtana3s3dD5sbV26xczsqfHmoLb2p8NsOPSqXp2mzXwaaTcmmOqajdanqximYt5sBQK0nhvS3WyDNAwyO61qvInoDTZcxST8QroO1IJ3HzrjQOloy0FaMvpTAYVewqncXcWiDnsNKk+1+GWcbhPZff3pXGnEy2cLadYS/8hvLK4P9semfU1l99dtkrGd1+Jh2/wB1o4+PeyN2ke1K98OKQjJKjJz+p989qg3JZZS2S0iMef8A7Z7/ALU61m4X6kIYlA8Rck+tNpcG3gcbeTLD17H9QfxrdKxEPbAcjSWSMnxAAqPUjt+FRrxSLGZLfJj6lO49x/FS1g4ClT1U02uYfAuMLtG5yv8A4mlrseWMobsSYST4l6MKRdgLIJ44226laLPb4PixjlJPb9Kb+LJ4cnN5gD1U4I+6pNsqhcrq9uJkOQeuOv30HwVkQsu2enof4oZkwoAJHMd8dG/3TmzjaQokQJkcgKB3btQ9nDm1P9PtJr2Tl5wGhgUgHMjKQTjvyg59M4+VQi+Ubdtqn+J7YQS29vE32VunhA9i3dvvP5YqAAwxHTfpU/ujUseGo/Qrr76dxKmnSS4s9QTlCHoJR0PzPSvoA9MV8j8MCT+s2LRuyGKdZi4/xCHmJ/KvprgviBeI9GS7KckynkmT39fkanU/QaTIgGT2Ge1eMClcUavGpuUHWRcdipvuZs8q7/OvcQWQudJuFQASKhKHHepFQBIflQ7yRUtpC3QKaRQkjn2YNwJZpqHE8zTr5o2xg+ud/wBK3aC1jjiVQNgKwLSdWXROPrhs4gkuSp9sn/dfQUDiWFHU5BGapa7R29dEOKS1dFCkflqY49iYMowd6qfGXF62PPp+myg3A2llU/B7D3qP4t4mbTU+q2chW5lB5nH+C+vzrOJrjL5HUnzepq/Fx69YlUP2uDK+FOQx8wJ3Py9aBdyrygoAEGFwvSmcEv2kiMuVIyRXmnEYxIwCk8oZh+R/mts5JlpaxvdKX8JW6YKnHzpN9IAg7BQAAKekxvHggjGxyPhP7k+lNJLZ2BeQHHVRnp/Jo+Q+DK3fkYMO/WpCVVuISp/H0pktuzISo2Bo1pIcle4rg4C5eYNHJkEbNj9ah7kMkrDpKp39/erHKmMTKpJUeYeq1Ca0gWRZ0OxFJQyAS+G5jkjUKSuWHbPerHwlZtzvqDrhYRyx+8h/jrVYtInuZ4o4lLPI2FA7k1okEUdraxWULBkhGCw/zfuf2+QqVPrC/BHlREa7ZCW1kXGHC5HzFU+7TyRzoPj2YejCtGmiDxsGGdtqpd3a4nvLHoc+JGa7NRX8ie9JHhe0xpz3jj+8/gg+ijBb8SQPkDWr/RPMV1K6iVwUkiBAHTyn/dZbwpf8+kyaS4HiRTGVFI+MYwQPcb/jWg/Rmws+IonYgR3CvH/9Yz+1TruezLvZrk1zHBjxD16V2SZfBLjsM1H3M8TXZiLD2o9xLFDbedwBis7oaU9G9rfNPO5AKjpg0LWzcPp8nhjP30ixmiFy7BgQRtRtYvIobF2kdVXGcmlXoVw3R846jZ3U2tzQhGM7SkgDrnNbXwnq+sWOkRQavaeK6DCtHuce9U3hH6vqfF17dlQRzeTPtWqWX1cIRzIT3yaty36Q8oEtNrskRnFer1SGMS1WeS4vrmaVsu5JP44/So/Pm++vV6t/H6I0HjA8dTjsaXdorJyMAVcYI9a9XqqSfsb6e7NboGPNjnXcdgdv1qQi/wAq9XqX4x37GdmOW7kUE45ulc1OFIpEmjGGbY+ler1cgnYHIZT7VCayoSaeFRhFbIHpneu16gzhfBwC3txPgF4oSUz2JIXPzwTVvgAAGOxrleqX+mn8f+hw/TPtVU177LV7V06sSDXq9Rkvz/wRGor9XvpGhZkZW5lKnBU+oq+8N3k1z9QvJGAlKo3lGADzYJA969XqSzCaH4ru5dmPNQrueV0wzk16vVkfsfSFubqeOUckrj5Maj9YvLiW2YSTOw9CxNdr1WSF+kHoTNBO7RHByd6lJNQu0PlncffXq9VaXYD/2Q==')` }} >
                <span className='sr-only'>Sam Isalanya</span>
              </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/profile')}>
                    Your Profile
                  </div>
                  
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/settings')}>
                    Settings
                  </div>
                  
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(active && 'bg-gray-100', 'text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2')} onClick={() => navigate('/logout')}>
                    Sign Out
                  </div>
                  
                )}
              </Menu.Item>
          </Menu.Items>
          </Transition>
        </Menu> 
      </div>
    </div>
  )
}
