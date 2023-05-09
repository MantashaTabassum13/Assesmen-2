import React from 'react';
import WeekInfoCardComponents from './WeekCard';
import ChooseStateComponents from './State';
import HumidityComponents from './Humid';
import LeftComponents from './Corner';
const HomeComponents = () => {
    return (
        <>
            <div className='container-fluid bb'>
                <div className='row'>
                    <div className='col-lg-12 justify-content-center'>
                        <div className='homeWrap'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12 justify-content-center'>
                                        <div className='weatherSection'>
                                            <LeftComponents />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='rightSide'>
                                            <ChooseStateComponents />
                                            <HumidityComponents />
                                            <WeekInfoCardComponents />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;