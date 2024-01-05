import {useSelector} from "react-redux";
import styles from "./UserApplications.module.css"
import {useEffect, useState} from "react";
import axiosConfiguration from "../../config/axiosConfiguration";
import {useNavigate, useParams} from "react-router-dom";
function AdminApplications(){

    const user=useSelector((state)=>state.auth.id)
    console.log(user)
    const navigate=useNavigate()

    const {appType}=useParams()
    console.log(appType)
    const [app,setApps]=useState([])

    useEffect(() => {
        const fetchData = async () => {
            let link="";
            try {
                if(appType==="health"){
                    link="/health-applications"
                }
                else if(appType==="transport"){
                    link="/transport-applications"
                }
                else if(appType==="life"){
                    link="/life-applications"
                }
                else if(appType==="agent"){
                    link="/agent-applications"
                }
                console.log("Link: "+link)
                const res = await axiosConfiguration.get(link);
                console.log(res.data);
                setApps([...app, ...res.data]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (user) {
            fetchData().then(r => {});
        }
    }, [user]);

    async function openTransport(id) {
        console.log(id)
        const link="/openTransportApp/"+id
        console.log(link)
        navigate(link)

    }

    function openHealth(_id) {
        const link="/openHealthApp/"+_id
        console.log(link)
        navigate(link)
    }

    function openLife(_id) {
        const link="/openLifeApp/"+_id
        console.log(link)
        navigate(link)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const searchType = e.target.elements.searchType.value
        const search = e.target.elements.search.value
        const b = {
            searchType: searchType,
            search: search,
            id:user
        }
        const res = await axiosConfiguration.post("/search-my-applications",b)
        setApps(res.data)
    }

    return(
        <>

            <div>

                <div className={styles.container2}>
                    <div className={styles.headingWrap}>
                        <p className={styles.heading}>Your Applications</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.bar}>
                        <select name="searchType">
                            <option>Id</option>
                            <option>Name</option>

                        </select>
                        <input name="search" type="text" className={styles.search} />
                        <button className={styles.searchSubmit} type="submit">
                            Search
                        </button>
                    </form>

                    {app.map((item, i) => (
                        <div className={styles.items2} key={i}>
                            <div className={`${styles.innerItem} ${styles.Q}`}>
                                <div className={styles.applicationId}>Application id: {item._id}</div>
                            </div>
                            {item.firstName && <div className={`${styles.innerItem} ${styles.Q}`}>
                                <div>First Name: {item.firstName}</div>
                                <div>Last Name: {item.lastName}</div>
                            </div>}
                            <br />
                            {item.appliedDate && <div className={`${styles.innerItem} ${styles.Q}`}>
                                <div>Applied on: {item.appliedDate}</div>
                                <div>Verified on: {item.verificationDate}</div>
                            </div>}
                            <br />
                            {appType!=="agent" && <div className={`${styles.innerItem} ${styles.Q}`}>
                                {item.verificationStatus === 'verified' ? (
                                    <div>Status: Verified</div>
                                ) : (
                                    <div>Status: Not Verified Yet</div>
                                )}
                                {item.policyType && <div>Type: {item.policyType}</div>}
                            </div>}
                            {
                                appType==="agent" && <div className={`${styles.innerItem} ${styles.Q}`}>
                                    {item.isActive === true ? (
                                        <div>Status: Verified</div>
                                    ) : (
                                        <div>Status: Not Verified Yet</div>
                                    )}
                                    {item.policyType && <div>Type: {item.policyType}</div>}
                                </div>
                            }


                            {item.policyType === 'Health' && (
                                <div className={`${styles.innerItem} ${styles.A}`}>
                                    <button className={styles.opener} onClick={()=>{openHealth(item._id).then(r => {})}}>Open application</button>
                                </div>
                            )}
                            {item.policyType === 'LIFE' && (
                                <div className={`${styles.innerItem} ${styles.A}`}>
                                    <button className={styles.opener} onClick={()=>{openLife(item._id)}}>Open application</button>
                                </div>
                            )}
                            {item.policyType === 'TRANSPORT' && (
                                <div className={`${styles.innerItem} ${styles.A}`}>
                                    {/*href={`/transport-applications/${item._id}`}*/}
                                    <button className={styles.opener} onClick={()=>{openTransport(item._id)}}>Open application</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            );
            };



        </>
    )
}

export default AdminApplications
