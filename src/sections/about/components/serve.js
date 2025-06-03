/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CONFIG_SERVER } from '@/constants/config-server'

const locationsMobile = [
  {
    name: '花蓮服務處',
    img: '/images/hualien-mobile.png',
    address: CONFIG_SERVER.Hualien.address,
    phone: CONFIG_SERVER.Hualien.phone || '-',
  },
  {
    name: '新北服務處',
    img: '/images/taipei-mobile.png',
    address: CONFIG_SERVER.Xinbei.address,
    phone: CONFIG_SERVER.Xinbei.phone || '-',
  },
  {
    name: '台中服務處',
    img: '/images/taichung-mobile.png',
    address: CONFIG_SERVER.Taichung.address,
    phone: CONFIG_SERVER.Taichung.phone || '-',
  },
  {
    name: '屏東服務處',
    img: '/images/pingtung-mobile.png',
    address: CONFIG_SERVER.Pingtung.address,
    phone: CONFIG_SERVER.Pingtung.phone || '-',
  },
]

const locationsDesktop = [
  {
    name: '花蓮服務處',
    img: '/images/hualien.png',
    address: CONFIG_SERVER.Hualien.address,
    phone: CONFIG_SERVER.Hualien.phone || '-',
  },
  {
    name: '新北服務處',
    img: '/images/taipei.png',
    address: CONFIG_SERVER.Xinbei.address,
    phone: CONFIG_SERVER.Xinbei.phone || '-',
  },
  {
    name: '台中服務處',
    img: '/images/taichung.png',
    address: CONFIG_SERVER.Taichung.address,
    phone: CONFIG_SERVER.Taichung.phone || '-',
  },
  {
    name: '屏東服務處',
    img: '/images/pingtung.png',
    address: CONFIG_SERVER.Pingtung.address,
    phone: CONFIG_SERVER.Pingtung.phone || '-',
  },
]

export function ServeView() {
  const [selectedLocationMobile, setSelectedLocationMobile] = useState(locationsMobile[0])
  const [selectedLocationDesktop, setSelectedLocationDesktop] = useState(locationsDesktop[0])
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="bg-dark-800 flex flex-col  items-center text-white p-8 ">
      <h1 id="serve" className="mobile-bold-h1 mb-4 text-center lg:hidden">
        服務據點
      </h1>

      {/* Mobile */}
      <div className="block lg:hidden w-full">
        <div className="relative rounded-lg shadow-lg">
          <button
            className="w-full p-4 rounded-2xl flex justify-between items-center mobile-regular-h3 text-primary-500 border border-gray-500"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            style={{
              boxShadow: 'inset 0 0 8px 5px rgba(255, 255, 255, 0.3)',
              background: 'linear-gradient(#4a4f57, #50555c)',
              borderRadius: '1rem',
              opacity: 0.9,
            }}
          >
            {selectedLocationMobile.name}
            <span>{isDropdownOpen ? '︿' : '﹀'}</span>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute top-full mt-2 w-full rounded-lg shadow-lg z-10"
              style={{
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                background: 'linear-gradient(#4a4f57, #50555c)',
                borderRadius: '1rem',
                opacity: 0.9,
              }}
            >
              {locationsMobile.map((location, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedLocationMobile(location)
                    setDropdownOpen(false)
                  }}
                  className="block w-full text-left rounded-lg px-4 py-3 mobile-regular-h4 text-primary-500 border-b border-gray-400 last:border-none"
                  style={{
                    background: 'linear-gradient(#4a4f57, #50555c)',
                    opacity: 0.9,
                  }}
                >
                  {location.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-10">
          <img
            src={selectedLocationMobile.img}
            alt={selectedLocationMobile.name}
            className="object-contain w-full rounded-lg"
          />
        </div>

        <div
          className="relative p-4 rounded-2xl shadow-lg space-y-2 -mt-24"
          style={{
            boxShadow: 'inset 0 0 8px 5px rgba(255, 255, 255, 0.3)',
            background: 'linear-gradient(#4a4f57, #50555c)',
            borderRadius: '1rem',
            padding: '1rem',
            opacity: 0.8,
          }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-lg h-4 w-4 bg-green-500"></span>
            </span>
          </div>
          <div>
            <h2 className="mobile-regular-h3 text-primary-500 -mt-3 mb-2">
              {selectedLocationMobile.name}
            </h2>
            <p className="desktop-light-p flex items-center">
              <Image
                src="/images/icon/location.svg"
                alt="地址圖示"
                width={16}
                height={16}
                className="mr-2 mb-2"
              />
              {selectedLocationMobile.address}
            </p>
            <p className="desktop-light-p flex items-center">
              <Image
                src="/images/icon/phone.svg"
                alt="電話"
                width={16}
                height={16}
                className="mr-2"
              />
              {selectedLocationMobile.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex lg:items-start lg:space-x-8">
        <div className="flex flex-col items-center space-y-4 ml-10">
          <h1 className="desktop-bold-h1 text-center mb-4 ml-[40%]">服務據點</h1>

          <div className="flex flex-col space-y-3 w-80 ">
            {locationsDesktop.map((location, index) => (
              <button
                key={index}
                onClick={() => setSelectedLocationDesktop(location)}
                className={`w-full text-left lg:desktop-regular-h4 text-primary-500 relative ${
                  selectedLocationDesktop.name === location.name
                    ? 'border border-[#ECBB0F]'
                    : 'hover:border-2 border-[#ECBB0F]'
                }`}
                style={{
                  boxShadow: 'inset 0 0 8px 5px rgba(255, 255, 255, 0.3)',
                  background: 'linear-gradient(#4a4f57, #50555c)',
                  borderRadius: '1rem',
                  opacity: selectedLocationDesktop.name === location.name ? 1 : 0.8,
                  width: '130%',
                  padding: '1rem 1rem',
                  marginLeft: '30px',
                }}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center  ">
          <img
            src={selectedLocationDesktop.img}
            alt={selectedLocationDesktop.name}
            className="object-contain ml-24"
          />
        </div>

        <div className="relative top-52 left-0 transform -translate-x-5 -translate-y-1/2 z-10">
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
          </span>
        </div>
        <div
          style={{
            boxShadow: 'inset 0 0 8px 5px rgba(255, 255, 255, 0.3)',
            background: 'linear-gradient(#4a4f57, #50555c)',
            borderRadius: '1rem',
            opacity: 0.8,
            padding: '1rem',
            width: '35%',
            marginLeft: '-30px',
            marginTop: '130px',
          }}
        >
          <h2 className="lg:desktop-regular-h3 text-primary-500 mb-2">
            {selectedLocationDesktop.name}
          </h2>
          <p className="lg:desktop-light-h5 flex items-center">
            <Image
              src="/images/icon/location.svg"
              alt="地址圖示"
              width={16}
              height={16}
              className="mr-2 mb-2"
            />
            {selectedLocationDesktop.address}
          </p>
          <p className="lg:desktop-light-h5 flex items-center mt-2">
            <Image
              src="/images/icon/phone.svg"
              alt="電話"
              width={16}
              height={16}
              className="mr-2"
            />
            {selectedLocationDesktop.phone}
          </p>
        </div>
      </div>
    </div>
  )
}
