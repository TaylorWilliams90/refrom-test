'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Card from '../components/Card';
import { cardData } from '../data/cardData';

export default function Home() {

  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    
    
    if (!track || !viewport) return;

    const cardElements = gsap.utils.toArray<HTMLElement>('.card', track);
    if (cardElements.length < 2 || !track) return;

    const firstCard = cardElements[0] as HTMLElement; 
    const cardWidth = firstCard.offsetWidth;
    const cardHeight = firstCard.offsetHeight;


    gsap.set(track, { height: cardHeight });

    const gap = 60; 
    const spacing = cardWidth + gap; 
    const totalWidth = spacing * cardElements.length;
    const wrapX = gsap.utils.wrap(-spacing, totalWidth - spacing);

    gsap.killTweensOf(cardElements); 
    gsap.set(cardElements, { 
      x: (i) => i * spacing,
      scale: 1,
      zIndex: 1,
      position: 'absolute',
      left: 0,
      top: 0
    });

    const animationDuration = 1; 
    const pauseDuration = 1.5;

    gsap.set(cardElements[0] as HTMLElement, { scale: 1.2, zIndex: 10 });

    const masterTimeline = gsap.timeline({
      repeat: -1, 
      delay: pauseDuration
    });
    for (let i = 0; i < cardElements.length; i++) {
      
      const currentCard = cardElements[i];
      const nextIndex = (i + 1) % cardElements.length;
      const nextCard = cardElements[nextIndex];

      
      masterTimeline.to(currentCard, { 
        scale: 1, 
        zIndex: 1,
        duration: animationDuration, 
        ease: "power2.inOut" 
      }, `transition-${i}`);
      
      
      masterTimeline.to(cardElements, {
        x: `-=${spacing}`, 
        duration: animationDuration,
        ease: "power2.inOut",
        modifiers: {
          x: (x) => {
            const wrappedVal = wrapX(parseFloat(x));
            return `${wrappedVal}px`;
          }
        }
      }, `transition-${i}`);

      
      masterTimeline.to(nextCard, { 
        scale: 1.2, 
        zIndex: 10, 
        duration: animationDuration, 
        ease: "power2.inOut" 
      }, `transition-${i}`);

      masterTimeline.to({}, { duration: pauseDuration }); 
    }

  }, { 
    scope: trackRef, 
    dependencies: [cardData, windowWidth] 
  });


  useGSAP(() => {
    gsap.to(".marquee-wrapper", {
      x: 100,
      duration: 1.5,
      ease: "power2.inOut",
    }
    );
    gsap.to(".box-grid", {
      duration: 3.5,
      width: '0%',
      height: '0%',
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(".box-grid", { display: "none" });
        gsap.to(".gsap-text", { color: "#00B684" });
        gsap.to("#gsap-text h1", { color: "#00B684" });
      }
    }
    );

  }, []);

  const marquee = [
    'lack of transparency',
    'claim denials',
    'unpredictable rate increases',
    'lack of transparency',
    'implementation headaches',
    'frustrated users'
  ]

  return (
    <main className=''>
      <div className="hero-section">
        <div className="top-text">
          <h1>Health insurance that <span className='gsap-text'>doesn’t</span></h1>
        </div>
        <div className="bottom-text">
          <span className='gsap-text' id='gsap-text'>
            <h1>get in</h1>
            <div className="box-grid">
              <div className="marquee-wrapper">
                {marquee.map((item, index) => (
                  <div className='item-group' key={index}>
                    <div className="text"><p>{item}</p></div>
                    <div className="icon">
                      <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="0.25" width="16" height="9" rx="1.5" stroke="#D87906" strokeOpacity="0.5" strokeWidth="0.5" />
                        <rect x="1.25" y="1.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="1.25" y="3.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="3.25" y="3.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="6.25" y="7.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="1.25" y="7.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="12.25" y="3.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="8.25" y="7.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="14.25" y="3.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="10.25" y="7.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="14.25" y="7.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="1.25" y="5.25" width="10" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="3.25" y="1.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="12.25" y="5.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="5.25" y="1.25" width="10" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                        <rect x="14.25" y="5.25" width="1" height="1" rx="0.5" fill="#D87906" fillOpacity="0.5" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <h1>the way</h1>
          </span>
        </div>

      </div>
      <div className="card-section">
        <div className="text-button">
          <p>Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.</p>
          <a href="#">
            <div className="btn">Get a Custom Quote Today</div>
            <div className="moving-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                <path d="M10.7977 5.0625C14.9013 2.11237 19.9353 0.375 25.375 0.375C39.1821 0.375 50.375 11.5679 50.375 25.375C50.375 39.1821 39.1821 50.375 25.375 50.375C11.5679 50.375 0.375 39.1821 0.375 25.375C0.375 23.2169 0.648456 21.1226 1.16261 19.125" stroke="#30715D" strokeWidth="0.75" strokeLinecap="round"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow"> {/* <<< FIX: ADDED ID="arrow" */}
                <g id='arrow-right' clipPath="url(#clip0_13060_437)">
                  <path d="M7.24857 13.25L13.4986 7M13.4986 7L7.24857 0.75M13.4986 7H1" stroke="#30715D" strokeWidth="0.75" strokeLinecap="round" />
                </g>
                <g id='arrow-left' clipPath="url(#clip0_13060_437)">
                  <path d="M7.24857 13.25L13.4986 7M13.4986 7L7.24857 0.75M13.4986 7H1" stroke="#30715D" strokeWidth="0.75" strokeLinecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_13060_437">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
        </div>
        <div className="cards-viewport" ref={viewportRef}>
          <div className="cards-track" ref={trackRef}>
            <div className="cards-group">
              {cardData.map((person) => (
                <Card key={person.id + '-1'} info={person} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
