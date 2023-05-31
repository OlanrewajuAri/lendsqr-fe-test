import React, { useEffect, useState } from 'react';
import axios from 'axios';

import 'react-phone-number-input/style.css';
import ReactPaginate from 'react-paginate';
import "./Users.scss"
import Filter from "../Images/Filter.svg"
import UsersNo from "../Images/Users.svg"
import ActiveUsers from "../Images/ActiveUsers.svg"
import UsersLoan from "../Images/UsersLoans.svg"
import UsersSavings from "../Images/UsersSavings.svg"
import ArrowRight from "../Images/ArrowRight.svg"
import ArrowLeft from "../Images/ArrowLeft.svg"
import ThreeEyes from "../Images/ThreeEyes.svg"
import Filters from './Filters';
import { useNavigate } from 'react-router-dom';
import queryString from "query-string";

interface TableData {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}



type FiltersProps = {
  onClose: () => void;
  selectedItem: TableData;
};
const Users: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [filterOrg, setFilterOrg] = useState("");
  const [filterUsername, setFilterUsername] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPhoneNumber, setfilterPhoneNumber] = useState("");

  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const [usersCount, setUsersCount] = useState(0);
  const [selectedDataCount, setSelectedDataCount] = useState(10);


  const navigate = useNavigate();


  const handleViewDetailsClick = (item: TableData, index: number) => {

    const query = queryString.stringify({
      itemId: encodeURIComponent(JSON.stringify(item)),
      index: index,
    });
    navigate(`/user-details?${query}`);
    return
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
        setData(response.data);
        setUsersCount(response.data.length);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const formatCreatedAt = (dateString: string | undefined) => {
    if (dateString) {
      const createdAt = new Date(dateString);

      const formattedDate = createdAt.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });

      const formattedTime = createdAt.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });
      return `${formattedDate} ${formattedTime}`;
    }
    return '';
  };

  const handleFilterClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setIsFilterApplied(true);
    }
  };
  const handleResetClick = () => {
    setFilterOrg("");
    setFilterUsername("");
    setFilterEmail("");
    setFilterDate("");
    setFilterStatus("");
    setfilterPhoneNumber("");
    setIsDropdownOpen(false);
  };


  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${filterUsername}`
      );
      setData([response.data]);
      setCurrentPage(0);
      setIsDropdownOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = data.filter((item) => {
    const orgName = item.orgName ? item.orgName.toLowerCase() : '';
    const userName = item.userName ? item.userName.toLowerCase() : '';
    const email = item.email ? item.email.toLowerCase() : '';
    const phoneNumber = item.phoneNumber ? item.phoneNumber.toLowerCase() : '';
    const createdAt = item.createdAt ? formatCreatedAt(item.createdAt).toLowerCase() : '';
    const status = item.status ? item.status.toLowerCase() : '';

    const orgFilterApplied = filterOrg !== '' && item.orgName === filterOrg;

    return (
      (!orgFilterApplied || orgName.includes(filterOrg.toLowerCase())) &&
      userName.includes(filterUsername.toLowerCase()) &&
      email.includes(filterEmail.toLowerCase()) &&
      phoneNumber.includes(filterPhoneNumber.toLowerCase()) &&
      createdAt.includes(filterDate.toLowerCase()) &&
      status.includes(filterStatus.toLowerCase())
    );
  });

  const renderedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleDataCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCount = Number(e.target.value);
    setSelectedDataCount(selectedCount);
  };
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        const response = await axios.get(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?limit=${selectedDataCount}&orgName=${filterOrg}&userName=${filterUsername}&email=${filterEmail}&phoneNumber=${filterPhoneNumber}&createdAt=${filterDate}&status=${filterStatus}`
        );
        setData(response.data);
        setUsersCount(response.data.length);
        setCurrentPage(0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilteredData();
  }, [selectedDataCount, filterOrg, filterUsername, filterEmail, filterPhoneNumber, filterDate, filterStatus]);

  const getStatusStyle = (status: string) => {
    let color = '';
    let backgroundColor = '';
    let opacity = 1;
    let fontWeight = '';

    switch (status) {
      case 'Inactive':
        color = '#545F7D';
        backgroundColor = 'rgba(84, 95, 125, 0.1)';

        fontWeight = '400';
        break;
      case 'Pending':
        color = '#E9B200';
        backgroundColor = 'rgba(233, 178, 0, 0.1)';

        fontWeight = '400';
        break;
      case 'Active':
        color = '#39CD62';
        backgroundColor = 'rgba(57, 205, 98, 0.1)';

        fontWeight = '400';
        break;
      case 'Blacklisted':
        color = '#E4033B';
        backgroundColor = 'rgba(228, 3, 59, 0.1)';

        fontWeight = '400';
        break;
      default:
        color = 'black';
        backgroundColor = 'lightgrey';
        break;
    }

    return { color, backgroundColor, opacity, fontWeight };
  };

  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (value: string) => {
    setFilterValue(value);
    setIsOpen(false);
    setFilterOrg(value);
  };

  const [orgOptions, setOrgOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const fetchOrgOptions = async () => {
      try {
        const response = await axios.get(
          'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
        );
        const orgNames = response.data.map((item: TableData) => item.orgName);
        const options = orgNames.map((orgName: string) => ({
          value: orgName,
          label: orgName,
        }));
        setOrgOptions(options);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrgOptions();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);



  const handleImageClick = (index: number) => {
    setSelectedRowIndex(index);
    setShowModal(!showModal);

  };



  return (
    <div className="users">
    <div>
      <div >
        <p className='card-usersMain'>Users</p>
      </div>

      <div className='card-parent'>
        <div className='card-container'>
          <img src={UsersNo} alt="haha" />
          <p className='card-chid'>Users</p>
          <p className='card-child2'>2,453</p>
          {/* <p className='card-child2'>{usersCount}</p> */}
        </div>
        <div className='card-container'>
          <img src={ActiveUsers} alt="haha" />
          <p className='card-chid'>Active Users</p>
          <p className='card-child2'>2,453</p>
        </div>
        <div className='card-container'>
          <img src={UsersLoan} alt="haha" />
          <p className='card-chid'>Users with Loans</p>
          <p className='card-child2'>12,453</p>
        </div>
        <div className='card-container'>
          <img src={UsersSavings} alt="haha" />
          <p className='card-chid'>Users with Savings</p>
          <p className='card-child2'>102,453</p>
        </div>
      </div>

      <div className="table-container">
        <div className="custom-list">
          <table className="custom-table">
            <thead>
              <tr className="custom-header">

                <th className="custom-column">
                  <span className="header-content">
                    Organization
                    <img src={Filter} alt="Filter" className="filter-icon" onClick={handleFilterClick} />
                  </span>
                </th>

                <th className="custom-th">  <span className="header-content">
                  UserName
                  <img src={Filter} alt="Filter" className="filter-icon" />
                </span></th>
                <th className="custom-th">  <span className="header-content">
                  Email
                  <img src={Filter} alt="Filter" className="filter-icon" />
                </span></th>
                <th className="custom-th">  <span className="header-content">
                  Phone Number
                  <img src={Filter} alt="Filter" className="filter-icon" />
                </span></th>
                <th className="custom-th">  <span className="header-content">
                  Date Joined
                  <img src={Filter} alt="Filter" className="filter-icon" />
                </span></th>
                <th className="custom-th">  <span className="header-content">
                  Status
                  <img src={Filter} alt="Filter" className="filter-icon" />
                </span></th>


                <th className="custom-th">  <span className="header-content">
                </span></th>


              </tr>
            </thead>
            <tbody>


              {renderedData.map((item, index) => {
                const randomStatus = ['Inactive', 'Pending', 'Active', 'Blacklisted'][Math.floor(Math.random() * 4)];
                const statusStyle = getStatusStyle(randomStatus);

                return (
                  <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td className="custom-td">{item.orgName}</td>
                    <td className="custom-td">{item.userName}</td>
                    <td className="custom-td">{item.email}</td>
                    <td className="custom-td">{item.phoneNumber}</td>
                    <td className="custom-td">{formatCreatedAt(item.createdAt)}</td>
                    <td className="custom-td">
                      <span
                        className="status-text"
                        style={{
                          color: statusStyle.color,
                          backgroundColor: statusStyle.backgroundColor,
                          borderRadius: '100px',
                          padding: '4px 8px',
                          fontWeight: statusStyle.fontWeight
                        }}
                      >  
                        {randomStatus}
                      </span>
                    </td>

                    <td className="custom-td other-td" >
                      
                      
                      <img src={ThreeEyes} alt="Three Eyes" onClick={() => handleImageClick(index)} />


                    {showModal && selectedRowIndex === index && (
                      <div className='show-display'>
                        <Filters onClose={() => setShowModal(false)} selectedItem={renderedData[selectedRowIndex]} />
                        <div className="dropdown">
    
        
         
      </div>
                      </div>
                    )}    


                    </td>



                  </tr> 
                );
              })}
            </tbody>
          </table>
         




          {isDropdownOpen && (
            <div className="dropdown-form">
              <form onSubmit={handleFormSubmit} className="form-container">

                <div>
                  <label htmlFor="filterInput" className='label-filter'>Organization</label>
                  <div className="dropdown-wrapper">
                    <input
                      type="text"
                      id="filterInput"
                      name="filterInput"
                      value={filterValue}
                      placeholder="User"
                      onChange={(e) => setFilterValue(e.target.value)}
                      onClick={toggleDropdown}
                      className="input-with-border-radius"
                    />

                    {isOpen && (
                      <ul className="dropdown">
                        {orgOptions.map((option) => (
                          <li
                            key={option.value}
                            className={option.value === filterValue ? 'selected' : ''}
                            onClick={() => handleOptionSelect(option.value)}
                          >
                            {option.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="username" className='label-filter'>Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={filterUsername}
                    placeholder='User'
                    onChange={(e) => setFilterUsername(e.target.value)}
                    className="input-with-border-radius"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email" className='label-filter'>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={filterEmail}
                    onChange={(e) => setFilterEmail(e.target.value)}
                    className="input-with-border-radius"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="date" className='label-filter'>Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder='Date'
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="input-with-border-radius"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="status" className='label-filter'>Phone Number</label>
                  <input
                    type="number"
                    id="status"
                    name="number"
                    placeholder='Phone Number'
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="input-with-border-radius"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="status" className='label-filter'>Status</label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    placeholder='Status'
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="input-with-border-radius"
                  />
                </div>
                <div className="form-buttons">
                  <button type="reset" className='reset-button' onClick={handleResetClick}>Reset</button>
                  <button type="submit" className='submit-button' onClick={handleFilterClick}>Filter</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className='paginate-flex'>

          <div className='paginate-child'>
            <p className="pagination-text">Showing</p>
            <select className="pagination-select" value={selectedDataCount} onChange={handleDataCountChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <p className="pagination-text">out of {usersCount}</p>
          </div>


          <ReactPaginate
            previousLabel={
              <img src={ArrowLeft} alt="Previous" className="pagination-image" />
            }
            nextLabel={
              <img src={ArrowRight} alt="Next" className="pagination-image" />
            }
            pageCount={pageCount}

            onPageChange={handlePageClick}
            nextLinkClassName="nextBttn"
            previousLinkClassName="previousBttn"
            disabledClassName="paginationDisabled"
            containerClassName="pagination"
            activeClassName="active"
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            breakLabel={<span className="pagination-break">...</span>}
            pageClassName="pagination-item"
          />
        </div>


      </div>
    </div>
    </div>
  );
};

export default Users;

