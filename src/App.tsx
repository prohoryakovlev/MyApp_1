import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncControlledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrollRating/UncontrolledRating";

function sum(a: number, b: number) {
  debugger
}
// hello()
sum(23, 12)

function App(props: any) {
  console.log('App rendering')

  return (
    <div className={"App"}>

      <OnOff />


      <UncontrolledAccordion titleValue={'Menu'}  />
      <Accordion titleValue={'Menu'} collapsed={false}  />


      {/* eslint-disable-next-line react/jsx-no-undef */}
      <UncontrolledRating />

      <Rating value={3}/>


      {/*<OnOff on={true}/>*/}
      {/*<OnOff on={false}/>*/}
      {/*<PageTitle title={'This is APP component'} />*/}
      {/*<PageTitle title={'My friends'} />*/}
      {/*Article 1*/}
      {/*<UncontrolledRating value={3} />*/}

      {/*  <UncontrolledRating value={1}/>*/}
      {/*  <UncontrolledRating value={2}/>*/}
      {/*  <UncontrolledRating value={3}/>*/}
      {/*  <UncontrolledRating value={4}/>*/}
      {/*  <UncontrolledRating value={5}/>*/}

      {/*<UncontrolledRating value={0} />*/}
      {/*<UncontrolledRating value={1} />*/}
      {/*<UncontrolledRating value={2} />*/}
      {/*<UncontrolledRating value={3} />*/}
      {/*<UncontrolledRating value={4} />*/}
      {/*<UncontrolledRating value={5} />*/}
    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendering')
  return <h1>{props.title}</h1>
}

export default App
