import React from 'react';
import ImageContent from './ImageContent';
import './style.css';

// Setting up hydroponic farm infrastructure to customers

let data = [
   {
      "id":1,
      "heading":"",
      "image_1":'https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501893656-REDHEVXP3HL2L9BIAGPK/Photo+2.jpg?format=1000w',
      "image_2":'https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501946877-SCPH8PKNZFBYQJ4C12PL/Photo+1.jpg?format=750w',
      "content":'“Vertical farming practiced on a large scale in urban centers has great potential to: 1. supply enough food in a sustainable fashion to comfortably feed all of humankind for the foreseeable future; 2. allow large tracts of land to revert to the natural landscape restoring ecosystem functions and services; 3. safely and efficiently use the organic portion of human and agricultural waste to produce energy through methane generation, and at the same time significantly reduce populations of vermin (e.g., rats, cockroaches); 4. remediate black water creating a much needed new strategy for the conservation of drinking water; 5. take advantage of abandoned and unused urban spaces; 6. break the transmission cycle of agents of disease associated with a fecally-contaminated environment; 7. allow year-round food production without loss of yields due to climate change or weather-related events; 8. eliminate the need for large-scale use of pesticides and herbicides; 9. provide a major new role for agrochemical industries (i.e., designing and producing safe, chemically-defined diets for a wide variety of commercially viable plant species; 10. create an environment that encourages sustainable urban life, promoting a state of good health for all those who choose to live in cities.”'
   },
   {
      "id":2,
      "heading":"Why is hydrophonic farming?",
      "image_1":'https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501978160-KBK6N3KPY4NWQKDN0490/Photo+5+What+is+hydro_+.jpeg?format=1000w',
      "image_2":'https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501995606-87AJR8VKHWXD403KB6Q0/Photo+6+What+is+hydro_.jpg?format=750w',
      "content":'Controlled environment agriculture (also known as weather and climate-proof farming, or more commonly indoor vertical farming), is the production of plants in an indoor environment. While indoor farming is not a new phenomenon (greenhouses have been used for centuries), the more recent innovation of hydroponic farming breaks down the growing process even further by eliminating all unnecessary components of traditional farming. Thinking back to the process of photosynthesis learned in middle-school biology class, we can recall the core elements to plant growth as energy, nutrients, water and CO2. Controlled environment agriculture (CEA) follows this basic formula and does away with all unnecessary inputs that have become essential to our current agriculture system, such soil and pesticides. In the CEA process, conventional elements of traditional farming are substituted with artificial ones. Rather than from the sun, plants receive energy from LED lighting that is tailored specifically to the energy needs of the plants. Instead of using soil, seeds are planted in soil-free growth mediums such as coconut husk to provide the seedlings with a surface to attach its roots to. This soilless process minimizes the risk of invasion by bugs and weeds into the growth environment, ensuring a much more clean and simple process. These seedlings are sometimes placed into growth trays which are stacked upwards, instead of outwards, in a vertical racking system. The vertical integration of plants allows for farmers to optimize the total space usage of their growth area, making it possible for farmers to reduce their land use by up to 90-99% while also increasing productivity. Plants growing in vertical farms are fed essential nutrients either hydroponically, in which nutrient-infused water is fed to the plant roots which sit in a growth medium, or aeroponically, in which the plant roots dangle freely and are misted with the nutrient-infused water. '

   }
]

function HydroponicFarm(){
   console.log(data)
   return(
      <div>
         <br/>
         <br/>
         <br/>
         <div className='heading_1'>
            <h1>The future of farming: hydroponics</h1>
         </div>
         <div>
            <div className='empty'></div>
         </div>
         {data.map((item)=>
            <ImageContent item={item} key={item.id} />
         )}
         <div>
            <h1 style={{textAlign:'center'}}>Cost and Chanllenges</h1>
            <div className='vertical_farming'>
            The many benefits of hydroponic farming do not come without challenges. For small, start-up farmers, entering into the hydroponic farming world can come with high costs associated with renting the space, mortgage payments, the renovation of a building or space to accommodate the hydroponic structures, initial costs for materials (such as LED lights, watering and feed systems, plant racks, seeds, controlled environment technology, etc), and costs of the labor and electricity to keep the farm up and running. While these entry costs are high, hydroponic farms have the potential to turn underutilized buildings into farmland to serve the community and create jobs. 
            <br/>
            <br/>
            Once these initial costs are overcome, more challenges must be faced in order to ensure a productive and secure hydroponic farm. Stacked rack systems (as opposed to vertical growth towers) can face challenges with air flow, heat and humidity. With horizontal modeling, there needs to be much more space between each plane to reduce the risks associated with poor airflow, such as high humidity, increased vulnerability to pests and disease, and a reduced growing capacity from lower CO2 levels. Additionally, the energy costs associated with hydroponic farming and maintaining optimal growing conditions for the plants are quite high. The combination of high intensity LED lighting plus climate monitoring and control systems results in a large electricity usage at hydroponic farms. It is important that hydroponic farms look to source their energy from renewable resources by investing in solar panels or wind energy. Farms such as Jones Food Company source all of their energy from the solar panels installed on the roofs of their facilities.
            </div>
         </div>
         <div>
            <h1 style={{textAlign:'center'}}>Conclusion</h1>
            <div className='vertical_farming'>
            Hydroponic farms offer a pathway towards a more sustainable food ethic that prioritizes the health of our food, bodies and environment without the heavy use of chemicals. Far from being a pipe-dream, hydroponic farming is already being rapidly integrated into current food networks. Ocado, a leading British online supermarket, recently announced its partnership with Priva and 80-Acres, both leading participants in the vertical farm industry. This joint venture will allow Ocado to supply fresh, local and hydroponically-grown ingredients to its customers. Furthermore, as the industry becomes more competitive, more partnerships like this will help drive down the prices of hydroponically-grown produce and make hydroponic farms more competitive with conventional farms. While our global climate issue is multi-dimensional and a result of many different practices, reducing the impact from the agricultural industry will be a huge step forward. At the beginning of the 21st century, hydroponic farming had not yet been invented. Now, only 20 years later, the industry has gained solid ground and is already dramatically shifting our agricultural practices and the future of our food system.
            </div>
         </div>
         <div>
            <div className='farming_example'>
               <img src='https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501931091-WT4QVKLS56BR5YYGW441/Photo+7.jpg?format=2500w' alt='plants' />
            </div>
         </div>
      </div>
   )
}

export default HydroponicFarm;