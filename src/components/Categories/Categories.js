import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div className='category-background'>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Categories</h2>
                        <p className='my-4'>There are different types of course. If you want to access multiple copurse it will be more discountable for you to learn easily.</p>
                        <button className='button2 mb-5'>Learn More</button>
                    </div>
                    <div className="col-md-8">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card card-background h-100">
                                    <div className="card-body">
                                            <i style={{color:'white'}} className="fa-brands icon-design-1 fa-hive"></i>
                                            <h4 className="card-title">Blockchain</h4>
                                            <small className="card-text">Blockchain Institutional Markets is a full-stack crypto services platform</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card card-background h-100">
                                    <div className="card-body">
                                        <i style={{ color: 'white' }} className="fa-solid fa-palette icon-design-2"></i>
                                            <h4 className="card-title">Graphic Design</h4>
                                            <small className="card-text">Graphic design is a craft where professionals create visual content</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card card-background h-100">
                                    <div className="card-body">
                                        <i style={{ color: 'white' }} className="fa-solid fa-coins icon-design-3"></i>
                                            <h4 className="card-title">Finance</h4>
                                            <small className="card-text">Finance is a broad term that describes activities associated with banking</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card card-background h-100">
                                    <div className="card-body">
                                        <i style={{ color: 'white' }} className="fa-solid fa-bullhorn icon-design-4"></i>
                                            <h4 className="card-title">Marketing</h4>
                                            <small className="card-text">Marketing refers to activities a company undertakes to promote</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card card-background h-100">
                                    <div className="card-body">
                                        <i style={{ color: 'white' }} className="fa-solid fa-music icon-design-3"></i>
                                            <h4 className="card-title">Music</h4>
                                            <small className="card-text"> A new music service with official albums, singles, videos, remixes</small>
                                        </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="card card-background h-100">
                                    <div className="card-body">
                                        <i style={{ color: 'white' }} className="fa-solid fa-user-tie icon-design-1"></i>
                                            <h4 className="card-title">Business</h4>
                                            <small className="card-text">Business is the activity of making one's living or making money</small>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;