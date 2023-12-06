import React, {useState} from 'react'
import { SetupCard, FundraiseResult, FundraiseProgress, FundraisingModal } from '../components'
 
const Funding = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  
  return (
    <>
    <section>
        <div className='grid lg:grid-cols-2 grid-cols-1 m-0 gap-4'>

        <div className='flex items-center justify-center'>
    <SetupCard setModalDisplay={setModalDisplay} />
  </div>
  <div className='flex items-center justify-center'>
  <FundraiseResult />
  </div>
  <div className='flex items-center justify-center'>
  <FundraiseProgress />
  </div>
       {
        modalDisplay &&
        <FundraisingModal setModalDisplay={setModalDisplay} />
       }
        </div>
        
    </section>
    </>
  )
}
export default Funding