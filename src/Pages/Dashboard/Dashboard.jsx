import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfoiloSection from './Compoenets/PortfoiloSection'
import PriceSection from './Compoenets/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transaction from './Compoenets/Transaction'
import Info from './Compoenets/Info'
import visual1 from "../../assets/Visual1.png"
import visual from "../../assets/Visual.png"

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Dashboard">
        <Grid gridTemplateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)" }} gap={6}>

          <GridItem colSpan={{
            base:"1",
            xl:"2"
          }}  ><PortfoiloSection /></GridItem>
          <GridItem colSpan={1}  ><PriceSection /></GridItem>
          <GridItem colSpan={1}  ><Transaction/></GridItem>
          <GridItem colSpan={1}  ><Info imgUrl={visual} inverted={"false"} tagText={"Loans"}  text={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"}/></GridItem>
          <GridItem colSpan={1}  ><Info imgUrl={visual1} inverted={"true"} tagText={"Contact"}  text={"Learn more about our real estate, mortgage, and  corporate account services"}/></GridItem>
        </Grid>

      </DashboardLayout>
    </div>
  )
}

export default Dashboard;
