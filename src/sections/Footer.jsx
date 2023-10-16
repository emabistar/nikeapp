import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer  className=" max-container text-white">
      <div className="flex
      justify-between items-start gap-20
       flex-wrap max-lg:flex-col
      ">
         <div className="flex flex-col items-start">
              <a href="/">
                <img src={footerLogo} width={150} height={150}/>
              </a>
              <p className="mt-6 text-base leading-7
              font-montserrat text-white-400  sm:max-w-sm">Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Dignissimos commodi,
                quas reprehenderit minima illo sunt
                 nostrum optio repellat labore exercitationem a,
                  aut rerum aperiam ipsum
                 quidem corporis quis laudantium ut.</p>
         </div>
         <div className=" flex items-center gap-5 mt-2 mb-8">
          {socialMedia.map((item,index)=>(
               <div className=" flex justify-center   items-center rounded-full  w-12 h-12 bg-white">
                <img  key={index} src={item.src}  alt={item.alt} width={24}  height={24} />
              </div>
          ))}

         </div>
         <div className="flex felx-1 justify-between lg:gap-10 gap-20 flex-wrap">
       {footerLinks.map((section,index)=>(
          <div  key={index}>
            <h4 className="text-white">{section.title}</h4>
            <ul>
              {section.links.map((link)=>(
                <li className="text-white-400" key={link}> <a>{link.name}</a></li>
              ))}
            </ul>

          </div>
       ))}
         </div>
      </div>

    </footer>
  )
}

export default Footer