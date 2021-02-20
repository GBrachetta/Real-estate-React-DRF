import React, { useState, useEffect, Fragment } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import House from '../assets/images/house.jpg';

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);

  useEffect(() => {
    axios.defaults.headers = {
      'Content-Type': 'application/json',
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/realtors/topseller`
        );

        setTopSeller(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      'Content-Type': 'application/json',
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/realtors/`
        );

        setRealtors(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about__display">
            <img
              src={realtor.photo}
              alt="Realtor"
              className="about__display__image"
            />
          </div>
          <h3 className="about__realtor">{realtor.name}</h3>
          <p className="about__contact">{realtor.contact}</p>
          <p className="about__contact">{realtor.email}</p>
          <p className="about__about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img
              src={seller.photo}
              alt="Realtor"
              className="about__display__image"
            />
          </div>
          <h3 className="about__topseller">Top Seller:</h3>
          <p className="about__realtor">{seller.name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className="about">
      <HelmetProvider>
        <Helmet>
          <title>Realest Estate - About</title>
          <meta name="description" content="About us" />
        </Helmet>
      </HelmetProvider>
      <header className="about__header">
        <h1 className="about__heading">About Realest Estate</h1>
      </header>
      <section className="about__info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about__subheading">
              We Find The Best Home For You!
            </h2>
            <p className="about__paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              fugiat provident facilis tempore aliquam eos inventore rerum
              adipisci voluptates ex! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem repudiandae id excepturi eos, natus
              dolorem aut, temporibus pariatur vitae quod itaque quos, deleniti
              quasi nihil dolor libero velit similique quaerat sequi quia sit
              totam amet explicabo. Sint assumenda praesentium sit libero
              consequatur numquam, vel cum accusamus dignissimos consectetur
              labore eius!
            </p>
            <div className="about__display">
              <img src={House} alt="House" className="about__display__image" />
            </div>
            <p className="about__paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              fugiat provident facilis tempore aliquam eos inventore rerum
              adipisci voluptates ex! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quos quasi eaque, accusamus recusandae iure in
              voluptates inventore eligendi dolorum vel officiis quam eos hic
              earum exercitationem perspiciatis dolorem qui asperiores, sit
              nobis! Corporis ratione ipsam, dolore molestiae provident quisquam
              eos.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about__team">
        <div className="row">
          <h2 className="about__subheading">Meet out awesome team</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default About;
