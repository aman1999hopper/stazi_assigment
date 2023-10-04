import HotelCard from "./hotel";
import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Tabcontainer(props) {
    console.log(props)
    const mdata = props.mumbaidata;
    console.log(mdata)
    const pdata = props.parisdata;
    console.log(pdata)
    const newdata = props.newyork;
    console.log(newdata)
    const londondata = props.london;

    const initialItemsToShow = 6; // Initial number of items to show
    const itemsIncrement = 3; // Number of items to show on each "Show More" click

    const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

    const handleShowMore = () => {
        setItemsToShow(prev => prev + itemsIncrement);
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <div>
            <div className="p-3 d-flex justify-content-between align-items-center">
            <div className="">
                <button
                    className={activeTab === 0 ? 'bg-primary rounded-5 border-0 px-3 py-2 mx-2 text-white' : 'bg-white border-0 px-3 py-2 mx-2'}
                    onClick={() => handleTabClick(0)}
                >
                    Mumbai
                </button>

                <button
                    className={activeTab === 1 ? 'bg-primary rounded-5 border-0 px-3 py-2 mx-2 text-white' : 'bg-white border-0 px-3 py-2 mx-2'}
                    onClick={() => handleTabClick(1)}
                >
                    Paris
                </button>
                <button
                    className={activeTab === 2 ? 'bg-primary rounded-5 border-0 px-3 py-2 mx-2 text-white' : 'bg-white border-0 px-3 py-2 mx-2'}
                    onClick={() => handleTabClick(2)}
                >
                    New York
                </button>
                <button
                    className={activeTab === 3 ? 'bg-primary rounded-5 border-0 px-3 py-2 mx-2 text-white' : 'bg-white border-0 px-3 py-2 mx-2'}
                    onClick={() => handleTabClick(3)}
                >
                    london
                </button>
            </div>
            <div className="py-2 px-3 border border-primary text-primary rounded-5">view all</div>
            </div>
            <div className="tab-content">
                {activeTab === 0 && (
                    <div className="tabcontent">
                        <div className="contentbox">
                            {mdata.slice(0, itemsToShow).map(item => {
                                return (
                                    <HotelCard name={item.name} key={item.id} url={item.url} price={item.price} address={item.add}/>
                                );
                            })}
                        </div>
                        <div className="text-center">
                        <button className="btn btn-primary text-white px-3 py-2 rounded-5" onClick={handleShowMore}>Show More</button>
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="tabcontent">
                        <div className="contentbox">
                            {pdata.slice(0, itemsToShow).map(item => {
                                return (
                                    <HotelCard name={item.name} key={item.id} url={item.url} price={item.price} address={item.add}/>
                                );
                            })}
                        </div>
                        <div className="text-center">
                        <button className="btn btn-primary text-white px-3 py-2 rounded-5" onClick={handleShowMore}>Show More</button>
                        </div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="tabcontent">
                        <div className="contentbox">
                            {newdata.slice(0, itemsToShow).map(item => {
                                return (
                                    <HotelCard name={item.name} key={item.id} url={item.url} price={item.price} address={item.add} />
                                );
                            })}
                        </div>
                        <div className="text-center">
                        <button className="btn btn-primary text-white px-3 py-2 rounded-5" onClick={handleShowMore}>Show More</button>
                        </div>
                    </div>
                )}
                {activeTab === 3 && (
                    <div className="tabcontent">
                        <div className="contentbox">
                            {londondata.slice(0, itemsToShow).map(item => {
                                return (
                                    <HotelCard name={item.name} key={item.id} url={item.url} price={item.price} address={item.add}/>
                                );
                            })}
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary text-white px-3 py-2 rounded-5" onClick={handleShowMore}>Show More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}