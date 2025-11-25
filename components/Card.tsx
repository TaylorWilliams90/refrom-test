import React from 'react';

const Card = ({ info }) => {
  return (
    <div className="card" id={info.id}>
            <div className="top-card">
              <div className="profile-img">
                <img src={info.image} alt={`${info.name}'s profile picture`} />
              </div>
              <div className="profile-info">
                <div className="profile-name">
                  {info.name}
                </div>
                <div className="profile-title">
                  {info.title}
                </div>
                <div className="profile-number">
                  {info.number}
                </div>
              </div>
            </div>
              <div className="bottom-card">
                <div className="company-info">
                  <div className="company-name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11" fill="none">
                      <path d="M6.50711 4.57522C6.8975 4.91188 6.8975 5.48775 6.50711 5.82441L1.92884 9.77243C1.34545 10.2755 0.399902 9.88924 0.399902 9.14783L0.399903 1.2518C0.399903 0.510393 1.34545 0.124125 1.92884 0.627207L6.50711 4.57522Z" fill="#CCDDC7" stroke="#6E9E8F" strokeWidth="0.8"/>
                    </svg>
                      {info.company}
                    </div>
                    <div className="company-details">
                      <svg width="307" height="16" viewBox="0 0 307 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.15">
                        <rect y="10" width="62" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="64" y="10" width="130" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect width="209" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="211" width="37" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="250" width="6" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="258" width="6" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="196" y="10" width="63" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        <g opacity="0.15">
                        <rect x="266" width="41" height="6" rx="3" fill="#6E9E8F"/>
                        </g>
                        </svg>
                    </div>
                  </div>
                  
                <div className="barcode">
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.15">
                    <rect width="2" height="20" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(26)" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(3)" fill="#6E9E8F"/>
                    <rect width="1" height="20" transform="translate(29)" fill="#6E9E8F"/>
                    <rect width="1" height="20" transform="translate(49)" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(18)" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(39)" fill="#6E9E8F"/>
                    <rect width="1" height="20" transform="translate(47)" fill="#6E9E8F"/>
                    <rect width="1" height="20" transform="translate(59)" fill="#6E9E8F"/>
                    <rect width="6" height="20" transform="translate(6)" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(31)" fill="#6E9E8F"/>
                    <rect width="2" height="20" transform="translate(51)" fill="#6E9E8F"/>
                    <rect width="4" height="20" transform="translate(13)" fill="#6E9E8F"/>
                    <rect width="4" height="20" transform="translate(34)" fill="#6E9E8F"/>
                    <rect width="4" height="20" transform="translate(21)" fill="#6E9E8F"/>
                    <rect width="4" height="20" transform="translate(42)" fill="#6E9E8F"/>
                    <rect width="4" height="20" transform="translate(54)" fill="#6E9E8F"/>
                    </g>
                  </svg>
                </div>
              </div>
            
          </div>
  );
};

export default Card;