import React from 'react'
import FreightMovement from './FreightMovement'

export default function FreightMovementTab() {
  let styles = {
        display : "grid",
        gridTemplateColumns : "repeat(4,1fr)",
        justifyItems : "center",
        gaps : "15px",
    };
    
    return (
    <div style = {styles}>
      <FreightMovement 
              heading="Industrial & Machinery" 
              para = "Equipment, machinery, components and industrial cargo requiring planned movement."
              link = "#" />
      <FreightMovement
            heading="General Business Freight"
            para = "Regular commercial shipments, cartons, pallets and business-to-business cargo."
            link = "#"/>
      <FreightMovement
            heading="eCommerce & Parcels"
            para = "Business shipments and distribution requirements for growing commerce operations."
            link = "#"/>
      <FreightMovement
            heading="Temperature-Sensitive"
            para = "Cargo requiring controlled handling and temperature-conscious transportation."
            link = "#"/>
      <FreightMovement
            heading="Pharma & Healthcare"
            para = "Healthcare-related shipments where handling, timing and transport conditions matter."
            link = "#"/>
      <FreightMovement
            heading="Agriculture & Food"
            para = "Agricultural and food-related cargo requiring dependable movement across routes."
            link = "#"/>
      <FreightMovement
            heading="Construction & Infrastructure"
            para = "Materials, equipment project cargo supporting construction and infrastructure."
            link = "#"/>
      <FreightMovement
            heading="Other Specialized Cargo"
            para = "Have a different requirement? Tell us what you need to move and we'll assess it."
            link = "#"/>
    </div>
  )

}
