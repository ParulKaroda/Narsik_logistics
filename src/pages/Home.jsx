import React from 'react'
import Layout from '../components/layout/Layout'
import '../App.css';
// import FreightMovementTab from '../components/FreightMovementTab';
// import Header from '../components/layout/Header';
import FreightMovement from '../components/FreightMovement';
import Hero from '../components/Hero';
import FreightRequirement from '../components/Freight-Requirement';
import LogisticCapabilities from '../components/LogisticCapabilities';
import RightMovement from '../components/RightMovement';
import CoreLogistics from '../components/CoreLogistics';
import WhyNarsik from '../components/WhyNarsik';
import RightFreightOption from '../components/RightFreightOption';
import TrackFreight from '../components/TrackFreight';
import IndustriesServe from '../components/IndustriesServe';
import NetworkFreightCorridors from '../components/NetworkFreightCorridors';
import SustainabilityRoad from "../components/SustainabilityRoad"
import FreightGuides from '../components/FreightGuides';
import MoveYourGoods from '../components/MoveYourGoods';
import ProofTrust from '../components/ProofTrust';
import TalkLogisticTeam from '../components/TalkLogisticTeam';

export default function Home() {
  return (
    <>
      <Layout>

        <main>

          <Hero/>
          <FreightRequirement/>
          <LogisticCapabilities/>
          <RightMovement/>
          <CoreLogistics/>
          <WhyNarsik/>
          <RightFreightOption/>
          <TrackFreight/>
          <IndustriesServe/>
          <NetworkFreightCorridors/>
          <MoveYourGoods/>
          <ProofTrust/>
          <SustainabilityRoad/>
          <FreightGuides/>
          <TalkLogisticTeam/>
          

        </main>

      </Layout>
    </>
  )
}
