import React from 'react';
import './footer.css';

function Footer(){
   return(
      <div className='footer'>
         <div className='footer_div'>
            <div>
               <p>
                  Absolute® is a pathbreaking plant biotech company re-imagining agriculture to radically and sustainably improve agriculture performance, around the world.<br/>
                  Developed by some of the world's finest scientists, Absolute® spent 6 yrs intersecting phytology, microbiology, omics, molecular biology, epigenetics, and AI to build India's largest microbial & Biomolecule discovery cum optimization platform. The company is also building the world’s largest precision farm network, democratizing access to agriculture innovations, inputs, advisory & markets across its network.<br/>
                  Founded in 2015, Absolute® currently operates across 10+ countries. Backed by Sequoia, Tiger Global, and Alpha Wave, Absolute also counts Nadir Godrej- MD of Godrej Industries, Kamal Aggarwal- Promoter of Haldiram, and Kunal Shah-CRED among many others as its investors.
               </p>
            </div>
            <div className='social_media'>
            <div>
                  <h3 style={{fontSize:'30px',lineHeight:'0.5rem'}}>Quick Links</h3>
                  <ul>
                     <li>Home</li>
                     <li>Hydroponic Farm</li>
                     <li>Selling Product</li>
                  </ul>
            </div>
            <div>
               <h3 style={{fontSize:'30px',lineHeight:'0.5rem'}}>Our Services</h3>
               <ul>
                  <li>Techno_Economic Feasibilty Study</li>
                  <li>Crop Selection Framework</li>
                  <li>Assistance in raising funds</li>
                  <li>Project Design and site planning</li>
                  <li>Project Development</li>
                  <li>Crop Management</li>
               </ul>
            </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;