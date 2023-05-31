import React, { useState } from 'react'
import "./UserDetails.scss"
import { useNavigate, useLocation, Link } from 'react-router-dom'
import queryString from "query-string";
import ProfileImage from "../Images/ProfileImage.svg"
import Tier1 from "../Images/Tier1.svg"
import Tier2 from "../Images/Tier2.svg"
import Tier3 from "../Images/Tier3.svg"
import ArrowUsers from "../Images/ArrowUser.svg"


// TbCurrencyNaira

const UserDetails = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const encodedItem = queryParams.itemId;

    let item;

    if (typeof encodedItem === 'string') {
        item = JSON.parse(decodeURIComponent(encodedItem));
    }
    else {

        item = null;
        console.error('Encoded item is null');
    }

    const [activePage, setActivePage] = useState('');

    const handleLinkClick = (pageName: string) => {
        // setActivePage(pageName)
        setActivePage(activePage === pageName ? '' : pageName);

    };



    return (
        <div className='p-5 General'>
            <div>
                <div className='Arrow-Users'>
                    <img src={ArrowUsers} alt="/" />
                    <p>Back to Users</p>
                </div>

                
            </div>

            <div className='UserDetails-Grand'>
                <div className='UserDetails-Parent'>

                    <div className='UserDetails-flex1'>


                        {item.profile && item.profile.avatar ? (
                            <img src={item.profile.avatar} alt="User Avatar" />
                        ) : (
                            <p>No avatar found</p>
                        )}

                        <div>

                            {item.userName ? (
                                <p className='UserParagraph'>{item.userName}</p>
                            ) : (
                                <p>none</p>
                            )}

                            {item.accountNumber ? (
                                <p className='UserPara2'>{item.accountNumber}</p>
                            ) : (
                                <p>none</p>
                            )}
                        </div>

                    </div>

                    <div className='UserDetails-Tier'>
                        <p className='TierParagraph'> User’s Tier </p>
                        <div className='TierImage'>
                            <img src={Tier1} alt="/" />
                            <img src={Tier2} alt="/" />
                            <img src={Tier3} alt="/" />
                        </div>
                    </div>

                    <div className='UserDetails-balance'>
                        {item.accountBalance ? (
                            <p className='BalanceParagraph'>{item.accountBalance}</p>
                        ) : (
                            <p>none</p>
                        )}

                        {item.profile?.bvn ? (
                            <p className='BalanParag'>{item.profile?.bvn}/Providus Bank</p>
                        ) : (
                            <p>none</p>
                        )}
                    </div>
                </div>


                <div className='UsernavLinks'>
                    <button onClick={() => handleLinkClick('general-details')}>General Details </button>

                    <button onClick={() => handleLinkClick('documents')}>Documents</button>

                    <button onClick={() => handleLinkClick('bank-details')}>Bank Details</button>

                    <button onClick={() => handleLinkClick('loans')}>Loans</button>

                    <button onClick={() => handleLinkClick('savings')}>Savings</button>

                    <button onClick={() => handleLinkClick('app-system')}>App and System</button>


                </div>
            </div>
            {activePage === 'general-details' && (
                <div>
                    <h2 className='Personal-General'>Personal Information</h2>
                    <div className='Personal-Information'>
                        <div className='Personal-Info'>
                            <h6> full Name</h6>

                            {item.userName ? (
                                <p>{item.userName}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6>Phone Number </h6>

                            {item.phoneNumber ? (
                                <p>{item.phoneNumber}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6>Email Address </h6>

                            {item.email ? (
                                <p>{item.email}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6>Bvn </h6>


                            {item.profile?.bvn ? (
                                <p>{item.profile?.bvn}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6>Gender </h6>


                            {item.profile?.gender ? (
                                <p>{item.profile?.gender}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6> Marital status</h6>
                            {item.profile?.married ? (
                                <p>{item.profile.married}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6> Children</h6>
                            {item.profile?.children ? (
                                <p>{item.profile.children}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>
                        <div className='Personal-Info'>
                            <h6>Type of residence </h6>
                            {item.profile?.residence ? (
                                <p>{item.profile.residence}</p>
                            ) : (
                                <p>none</p>
                            )}

                        </div>

                    </div>



                    <div className='Educational-Main'>
                        <h2 className='Educational-General'>Educational Information</h2>
                        <div className='Educational-Information'>
                            <div className='Educational-Info'>
                                <h6> level of education</h6>

                                {item.education?.level ? (
                                    <p>{item.education?.level}</p>
                                ) : (
                                    <p>none</p>
                                )}


                            </div>
                            <div className='Educational-Info'>
                                <h6>employment status </h6>


                                {item.education?.employmentStatus ? (
                                    <p>{item.education?.employmentStatus}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Educational-Info'>
                                <h6>sector of employment</h6>
                                {item.education?.sector ? (
                                    <p>{item.education?.sector}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Educational-Info'>
                                <h6>Duration of employment </h6>

                                {item.education?.duration ? (
                                    <p>{item.education?.duration}</p>
                                ) : (
                                    <p>none</p>
                                )}


                            </div>
                            <div className='Educational-Info'>
                                <h6>office email</h6>

                                {item.education?.officeEmail ? (
                                    <p>{item.education?.officeEmail}</p>
                                ) : (
                                    <p>none</p>
                                )}


                            </div>
                            <div className='Educational-Info'>
                                <h6> Monthly income</h6>

                                {item.education?.monthlyIncome ? (
                                    <div className="Educational-Income-Container">
                                        {item.education.monthlyIncome.map((income: number, index: number) => (
                                            <div key={index} className="Educational-Income">
                                                {/* {index > 0 && <div className="Income-Item Centered-Hyphen"><p>-</p></div>} */}
                                                <div className="Income-Item">
                                                    <p>₦{income}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>none</p>
                                )}
                            </div>
                            <div className='Educational-Info'>
                                <h6>loan repayment</h6>

                                {item.education?.loanRepayment ? (
                                    <p>{item.education?.loanRepayment}</p>
                                ) : (
                                    <p>none</p>
                                )}


                            </div>

                        </div>
                    </div>


                    <div className='Socials-Main'>
                        <h2 className='Socials-General'>Socials</h2>
                        <div className='Socials-Information'>
                            <div className='Socials-Info'>
                                <h6> Twitter</h6>

                                {item.socials?.twitter ? (
                                    <p>{item.socials?.twitter}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Socials-Info'>
                                <h6>Facebook </h6>

                                {item.socials?.facebook ? (
                                    <p>{item.socials?.facebook}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Socials-Info'>
                                <h6>Instagram</h6>


                                {item.socials?.instagram ? (
                                    <p>{item.socials?.instagram}</p>
                                ) : (
                                    <p>none</p>
                                )}
                            </div>


                        </div>
                    </div>


                    <div className='Guarantor-Main'>
                        <h2 className='Guarantor-General'>Guarantor</h2>
                        <div className='Guarantor-Information'>
                            <div className='Guarantor-Info'>
                                <h6> full Name</h6>
                                <p>{item.guarantor?.firstName}  {item.guarantor?.lastName} </p>




                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Phone Number </h6>


                                {item.guarantor?.phoneNumber ? (
                                    <p>{item.guarantor?.phoneNumber}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Email Address</h6>

                                {item.guarantor?.email ? (
                                    <p>{item.profile.email}</p>
                                ) : (
                                    <p>none</p>
                                )}


                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Relationship</h6>

                                {item.guarantor?.relationship ? (
                                    <p>{item.profile.relationship}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>


                        </div>
                    </div>

                    <div className='Guarantor-Main'>
                        <h2 className='Guarantor-General'></h2>
                        <div className='Guarantor-Information2'>
                            <div className='Guarantor-Info'>
                                <h6> full Name</h6>
                                <p>{item.guarantor?.firstName}  {item.guarantor?.lastName} </p>

                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Phone Number </h6>


                                {item.guarantor?.phoneNumber ? (
                                    <p>{item.guarantor?.phoneNumber}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Email Address</h6>

                                {item.guarantor?.email ? (
                                    <p>{item.profile.email}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                            <div className='Guarantor-Info'>
                                <h6>Relationship</h6>
                                {item.guarantor?.relationship ? (
                                    <p>{item.profile.relationship}</p>
                                ) : (
                                    <p>none</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDetails
