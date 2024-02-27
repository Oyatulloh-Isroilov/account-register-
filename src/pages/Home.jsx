import './Home.css';

function Home() {
    return (
        <>
            <div className="section over-hide">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section text-center py-5 py-md-0">
                                <input className="pricing" type="checkbox" id="pricing" name="pricing" />
                                <label htmlFor="pricing"><span className="block-diff">kayaking<span className="float-right">camping</span></span></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">Kayaking</h4>
                                                <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">Drina, Serbia</p>
                                                <a href="#0" className="link">Choose Date</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/sea.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-1">
                                                    <img src="https://assets.codepen.io/1462889/kayak.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-3">
                                                    <img src="https://assets.codepen.io/1462889/water.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-6">
                                                    <img src="https://assets.codepen.io/1462889/Stone.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">Camping</h4>
                                                <h2 className="mb-2"><sup>$</sup>29 / 8<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">Tara, Serbia</p>
                                                <a href="#0" className="link">Choose Date</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/grass.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-4">
                                                    <img src="https://assets.codepen.io/1462889/camp.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-5">
                                                    <img src="https://assets.codepen.io/1462889/Ivy.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-7">
                                                    <img src="https://assets.codepen.io/1462889/IvyRock.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
