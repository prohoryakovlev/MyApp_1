import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import { Rating } from './components/Rating/Rating'
import OnOff from "./components/OnOff/OnOff";

function sum(a: number, b: number) {
  debugger
}
// hello()
sum(23, 12)

function App(props: any) {
  console.log('App rendering')

  return (
    <div>

      <OnOff on={true}/>
      {/*<PageTitle title={'This is APP component'} />*/}
      {/*<PageTitle title={'My friends'} />*/}
      {/*Article 1*/}
      {/*<Rating value={3} />*/}
      {/*<Accordion titleValue={'Menu'} collapsed={true} />*/}
      {/*<Accordion titleValue={'Users'} collapsed={false} />*/}

      {/*  <Rating value={1}/>*/}
      {/*  <Rating value={2}/>*/}
      {/*  <Rating value={3}/>*/}
      {/*  <Rating value={4}/>*/}
      {/*  <Rating value={5}/>*/}

      {/*<Rating value={0} />*/}
      {/*<Rating value={1} />*/}
      {/*<Rating value={2} />*/}
      {/*<Rating value={3} />*/}
      {/*<Rating value={4} />*/}
      {/*<Rating value={5} />*/}
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
